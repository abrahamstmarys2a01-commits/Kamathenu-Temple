import React, { useState, useEffect, useCallback } from 'react';
import {
  Users, Calendar, Search, Filter, RefreshCw, Trash2,
  CheckCircle, XCircle, Clock, Download, LogIn, LogOut,
  ChevronLeft, ChevronRight, Phone, MapPin, Tag
} from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

const SLOT_LABELS = {
  slot1: '14 July – Ashada Ekadashi',
  slot2: '29 July – Aadi Amavasai',
};

const STATUS_CONFIG = {
  pending:   { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  icon: Clock },
  confirmed: { color: '#22c55e', bg: 'rgba(34,197,94,0.12)',   icon: CheckCircle },
  cancelled: { color: '#ef4444', bg: 'rgba(239,68,68,0.12)',   icon: XCircle },
};

/* ── tiny helpers ── */
const fmt = (iso) => new Date(iso).toLocaleString('en-IN', {
  day: '2-digit', month: 'short', year: 'numeric',
  hour: '2-digit', minute: '2-digit',
});

export default function Admin() {
  /* auth */
  const [pwd, setPwd]         = useState('');
  const [authed, setAuthed]   = useState(false);
  const [authErr, setAuthErr] = useState('');

  /* data */
  const [bookings, setBookings] = useState([]);
  const [total, setTotal]       = useState(0);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  /* filters */
  const [search, setSearch]   = useState('');
  const [status, setStatus]   = useState('all');
  const [slot,   setSlot]     = useState('all');
  const [page,   setPage]     = useState(1);
  const LIMIT = 20;

  /* stats */
  const [stats, setStats] = useState({ total: 0, pending: 0, confirmed: 0, cancelled: 0, slot1: 0, slot2: 0 });

  const fetchBookings = useCallback(async (p = page) => {
    if (!authed) return;
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({
        pwd: pwd, page: p, limit: LIMIT,
        ...(status !== 'all' && { status }),
        ...(slot   !== 'all' && { slot }),
        ...(search             && { search }),
      });
      const res  = await fetch(`${API_BASE}/bookings?${params}`);
      if (!res.ok) throw new Error((await res.json()).message);
      const data = await res.json();
      setBookings(data.bookings);
      setTotal(data.total);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [authed, pwd, page, status, slot, search]);

  const fetchStats = useCallback(async () => {
    if (!authed) return;
    try {
      // fetch all without filters to count
      const res  = await fetch(`${API_BASE}/bookings?pwd=${pwd}&limit=9999`);
      const data = await res.json();
      const all  = data.bookings || [];
      setStats({
        total:     all.length,
        pending:   all.filter(b => b.status === 'pending').length,
        confirmed: all.filter(b => b.status === 'confirmed').length,
        cancelled: all.filter(b => b.status === 'cancelled').length,
        slot1:     all.filter(b => b.dateSlot === 'slot1').length,
        slot2:     all.filter(b => b.dateSlot === 'slot2').length,
      });
    } catch (_) {}
  }, [authed, pwd]);

  useEffect(() => { fetchBookings(page); }, [authed, page, status, slot]);
  useEffect(() => { fetchStats(); },       [authed]);

  /* debounce search */
  useEffect(() => {
    const t = setTimeout(() => { setPage(1); fetchBookings(1); }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const login = (e) => {
    e.preventDefault();
    if (!pwd.trim()) { setAuthErr('Enter password'); return; }
    setAuthed(true); setAuthErr('');
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch(`${API_BASE}/bookings/${id}?pwd=${pwd}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      setBookings(bs => bs.map(b => b._id === id ? { ...b, status: newStatus } : b));
      fetchStats();
    } catch (_) {}
  };

  const deleteBooking = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      await fetch(`${API_BASE}/bookings/${id}?pwd=${pwd}`, { method: 'DELETE' });
      setBookings(bs => bs.filter(b => b._id !== id));
      setTotal(t => t - 1);
      fetchStats();
    } catch (_) {}
  };

  const exportCSV = () => {
    const header = ['Name','Mobile','Country','State','City','Date Slot','Slot Date','Status','Submitted At'];
    const rows   = bookings.map(b => [
      b.name, b.mobile, b.country, b.state, b.city,
      b.dateSlot, b.slotDate, b.status,
      new Date(b.createdAt).toLocaleString('en-IN'),
    ]);
    const csv    = [header, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob   = new Blob([csv], { type: 'text/csv' });
    const url    = URL.createObjectURL(blob);
    const a      = document.createElement('a');
    a.href = url; a.download = 'bookings.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  /* ── Login Screen ── */
  if (!authed) {
    return (
      <div className="adm-login-wrap">
        <div className="adm-login-card">
          <div className="adm-login-logo">🪔</div>
          <h1 className="adm-login-title">Admin Panel</h1>
          <p className="adm-login-sub">Kamadhenu Temple Bookings</p>
          <form onSubmit={login} className="adm-login-form">
            <input
              type="password"
              className="adm-login-input"
              placeholder="Enter admin password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              autoFocus
            />
            {authErr && <span className="adm-login-err">{authErr}</span>}
            <button type="submit" className="adm-login-btn">
              <LogIn size={16} /> Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Admin Dashboard ── */
  const totalPages = Math.max(1, Math.ceil(total / LIMIT));

  return (
    <div className="adm-wrap">
      {/* Sidebar */}
      <aside className="adm-sidebar">
        <div className="adm-sidebar-brand">
          <span className="adm-brand-icon">🪔</span>
          <div>
            <div className="adm-brand-name">Kamadhenu</div>
            <div className="adm-brand-sub">Admin Panel</div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="adm-stat-group">
          <div className="adm-stat-card adm-stat-total">
            <Users size={18} />
            <div>
              <div className="adm-stat-val">{stats.total}</div>
              <div className="adm-stat-label">Total</div>
            </div>
          </div>
          <div className="adm-stat-card adm-stat-pending">
            <Clock size={18} />
            <div>
              <div className="adm-stat-val">{stats.pending}</div>
              <div className="adm-stat-label">Pending</div>
            </div>
          </div>
          <div className="adm-stat-card adm-stat-confirmed">
            <CheckCircle size={18} />
            <div>
              <div className="adm-stat-val">{stats.confirmed}</div>
              <div className="adm-stat-label">Confirmed</div>
            </div>
          </div>
          <div className="adm-stat-card adm-stat-cancelled">
            <XCircle size={18} />
            <div>
              <div className="adm-stat-val">{stats.cancelled}</div>
              <div className="adm-stat-label">Cancelled</div>
            </div>
          </div>
        </div>

        {/* Slot Breakdown */}
        <div className="adm-slot-break">
          <div className="adm-slot-break-title"><Calendar size={13} /> Slot Breakdown</div>
          <div className="adm-slot-bar-wrap">
            <div className="adm-slot-bar-label">Ashada Ekadashi (Jul 14)</div>
            <div className="adm-slot-bar-track">
              <div className="adm-slot-bar-fill" style={{ width: stats.total ? `${(stats.slot1/stats.total)*100}%` : '0%' }} />
            </div>
            <span className="adm-slot-bar-count">{stats.slot1}</span>
          </div>
          <div className="adm-slot-bar-wrap">
            <div className="adm-slot-bar-label">Aadi Amavasai (Jul 29)</div>
            <div className="adm-slot-bar-track">
              <div className="adm-slot-bar-fill adm-slot-bar-fill2" style={{ width: stats.total ? `${(stats.slot2/stats.total)*100}%` : '0%' }} />
            </div>
            <span className="adm-slot-bar-count">{stats.slot2}</span>
          </div>
        </div>

        <button className="adm-logout-btn" onClick={() => { setAuthed(false); setPwd(''); setBookings([]); }}>
          <LogOut size={15} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="adm-main">
        {/* Toolbar */}
        <div className="adm-toolbar">
          <div className="adm-toolbar-left">
            <div className="adm-search-box">
              <Search size={15} className="adm-search-icon" />
              <input
                className="adm-search-input"
                placeholder="Search name, mobile, city…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <div className="adm-filter-group">
              <Filter size={14} />
              <select className="adm-select" value={status} onChange={e => { setStatus(e.target.value); setPage(1); }}>
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select className="adm-select" value={slot} onChange={e => { setSlot(e.target.value); setPage(1); }}>
                <option value="all">All Slots</option>
                <option value="slot1">Jul 14</option>
                <option value="slot2">Jul 29</option>
              </select>
            </div>
          </div>

          <div className="adm-toolbar-right">
            <button className="adm-btn adm-btn-ghost" onClick={() => fetchBookings(page)} title="Refresh">
              <RefreshCw size={15} className={loading ? 'adm-spin' : ''} />
            </button>
            <button className="adm-btn adm-btn-primary" onClick={exportCSV}>
              <Download size={15} /> Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        {error && <div className="adm-error-banner">{error}</div>}

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>#</th>
                <th><User size={13} /> Name</th>
                <th><Phone size={13} /> Mobile</th>
                <th><MapPin size={13} /> Location</th>
                <th><Calendar size={13} /> Slot</th>
                <th><Tag size={13} /> Status</th>
                <th>Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={8} className="adm-table-loading">Loading…</td></tr>
              )}
              {!loading && bookings.length === 0 && (
                <tr><td colSpan={8} className="adm-table-empty">No bookings found.</td></tr>
              )}
              {!loading && bookings.map((b, i) => {
                const sc = STATUS_CONFIG[b.status] || STATUS_CONFIG.pending;
                const StatusIcon = sc.icon;
                return (
                  <tr key={b._id} className="adm-table-row">
                    <td className="adm-td-num">{(page - 1) * LIMIT + i + 1}</td>
                    <td className="adm-td-name">{b.name}</td>
                    <td className="adm-td-mobile">+91 {b.mobile}</td>
                    <td className="adm-td-loc">{[b.city, b.state, b.country].filter(Boolean).join(', ')}</td>
                    <td>
                      <span className="adm-slot-badge">
                        {SLOT_LABELS[b.dateSlot] || b.slotDate || b.dateSlot}
                      </span>
                    </td>
                    <td>
                      <span className="adm-status-badge" style={{ color: sc.color, background: sc.bg }}>
                        <StatusIcon size={12} /> {b.status}
                      </span>
                    </td>
                    <td className="adm-td-date">{fmt(b.createdAt)}</td>
                    <td>
                      <div className="adm-actions">
                        {b.status !== 'confirmed' && (
                          <button
                            className="adm-action-btn adm-action-confirm"
                            title="Confirm"
                            onClick={() => updateStatus(b._id, 'confirmed')}
                          ><CheckCircle size={14} /></button>
                        )}
                        {b.status !== 'cancelled' && (
                          <button
                            className="adm-action-btn adm-action-cancel"
                            title="Cancel"
                            onClick={() => updateStatus(b._id, 'cancelled')}
                          ><XCircle size={14} /></button>
                        )}
                        <button
                          className="adm-action-btn adm-action-delete"
                          title="Delete"
                          onClick={() => deleteBooking(b._id)}
                        ><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="adm-pagination">
          <span className="adm-pag-info">
            Showing {bookings.length} of {total} booking{total !== 1 ? 's' : ''}
          </span>
          <div className="adm-pag-btns">
            <button
              className="adm-pag-btn"
              disabled={page <= 1}
              onClick={() => setPage(p => p - 1)}
            ><ChevronLeft size={16} /></button>
            <span className="adm-pag-current">{page} / {totalPages}</span>
            <button
              className="adm-pag-btn"
              disabled={page >= totalPages}
              onClick={() => setPage(p => p + 1)}
            ><ChevronRight size={16} /></button>
          </div>
        </div>
      </main>
    </div>
  );
}
