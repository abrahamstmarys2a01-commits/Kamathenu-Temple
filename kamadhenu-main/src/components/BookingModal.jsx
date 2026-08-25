import React, { useState, useEffect, useMemo } from 'react';
import { X, Calendar, User, Phone, MapPin, CheckCircle, ChevronDown, Loader2 } from 'lucide-react';
import { Country, State, City } from 'country-state-city';

const API_BASE = 'http://localhost:5000/api';

const DATE_SLOTS = [
  { id: 'slot1', date: '14 July 2026', day: 'Tuesday',   label: 'Ashada Ekadashi Special Pooja' },
  { id: 'slot2', date: '29 July 2026', day: 'Wednesday', label: 'Aadi Amavasai Yagam' },
];

/* ---------- Custom Searchable Select ---------- */
const SearchSelect = ({ id, value, onChange, options, placeholder, disabled }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () => options.filter(o => o.label.toLowerCase().includes(search.toLowerCase())),
    [options, search]
  );

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest(`#${id}-wrap`)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, id]);

  const choose = (val) => { onChange(val); setOpen(false); setSearch(''); };

  return (
    <div id={`${id}-wrap`} className={`ss-wrap ${disabled ? 'ss-disabled' : ''}`}>
      <button
        type="button"
        className="ss-trigger"
        onClick={() => !disabled && setOpen(o => !o)}
        id={id}
        aria-expanded={open}
      >
        <span className={selected ? 'ss-value' : 'ss-placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown size={14} className={`ss-chevron ${open ? 'ss-chevron-up' : ''}`} />
      </button>

      {open && (
        <div className="ss-dropdown">
          <input
            className="ss-search"
            type="text"
            placeholder="Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
          />
          <ul className="ss-list">
            {filtered.length === 0
              ? <li className="ss-no-result">No results</li>
              : filtered.map(o => (
                <li
                  key={o.value}
                  className={`ss-item ${o.value === value ? 'ss-item-active' : ''}`}
                  onMouseDown={() => choose(o.value)}
                >
                  {o.label}
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
};
/* ---------------------------------------------- */

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', mobile: '',
    countryCode: 'IN', stateCode: '', city: '',
    dateSlot: '',
  });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // Derived option lists
  const countryOptions = useMemo(
    () => Country.getAllCountries().map(c => ({ value: c.isoCode, label: c.name })),
    []
  );
  const stateOptions = useMemo(
    () => State.getStatesOfCountry(form.countryCode).map(s => ({ value: s.isoCode, label: s.name })),
    [form.countryCode]
  );
  const cityOptions = useMemo(
    () => City.getCitiesOfState(form.countryCode, form.stateCode).map(c => ({ value: c.name, label: c.name })),
    [form.countryCode, form.stateCode]
  );

  const setCountry = (code) => setForm(f => ({ ...f, countryCode: code, stateCode: '', city: '' }));
  const setState  = (code) => setForm(f => ({ ...f, stateCode: code, city: '' }));
  const setCity   = (val)  => setForm(f => ({ ...f, city: val }));

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) setTimeout(() => {
      setStep(1);
      setForm({ name: '', mobile: '', countryCode: 'IN', stateCode: '', city: '', dateSlot: '' });
      setErrors({});
      setApiError('');
    }, 300);
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim())                     errs.name      = 'Full name is required';
    if (!/^[6-9]\d{9}$/.test(form.mobile))    errs.mobile    = 'Enter a valid 10-digit mobile number';
    if (!form.stateCode)                        errs.stateCode = 'Please select a state';
    if (!form.city)                             errs.city      = 'Please select a city';
    if (!form.dateSlot)                         errs.dateSlot  = 'Please select a date slot';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(f => ({ ...f, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setApiError('');

    try {
      const slot = DATE_SLOTS.find(s => s.id === form.dateSlot);
      const countryLabel = countryOptions.find(c => c.value === form.countryCode)?.label || form.countryCode;
      const stateLabel   = stateOptions.find(s => s.value === form.stateCode)?.label   || form.stateCode;

      const payload = {
        name:      form.name.trim(),
        mobile:    form.mobile,
        country:   countryLabel,
        state:     stateLabel,
        city:      form.city,
        dateSlot:  form.dateSlot,
        slotLabel: slot?.label || '',
        slotDate:  slot?.date  || '',
      };

      const res = await fetch(`${API_BASE}/bookings`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Submission failed');
      }

      setStep(2);
    } catch (err) {
      setApiError(err.message || 'Could not submit booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bm-modal">

        {/* Header */}
        <div className="bm-header">
          <div className="bm-header-text">
            <span className="bm-header-sub">Kamadhenu Temple</span>
            <h2 className="bm-title">Book Pooja / Yagam</h2>
          </div>
          <button className="bm-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        </div>

        {step === 1 ? (
          <form className="bm-form" onSubmit={handleSubmit} noValidate>

            {apiError && (
              <div className="bm-api-error">{apiError}</div>
            )}

            {/* Personal */}
            <div className="bm-section-label">Personal Details</div>

            <div className="bm-field">
              <label className="bm-label" htmlFor="bm-name"><User size={14} /> Full Name</label>
              <input
                id="bm-name" className={`bm-input ${errors.name ? 'bm-input-error' : ''}`}
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Enter your full name" autoComplete="name"
              />
              {errors.name && <span className="bm-error">{errors.name}</span>}
            </div>

            <div className="bm-field">
              <label className="bm-label" htmlFor="bm-mobile"><Phone size={14} /> Mobile Number</label>
              <div className={`bm-phone-wrapper ${errors.mobile ? 'bm-input-error' : ''}`}>
                <span className="bm-phone-prefix">+91</span>
                <input
                  id="bm-mobile" className="bm-input bm-input-phone"
                  type="tel" name="mobile" value={form.mobile} onChange={handleChange}
                  placeholder="10-digit mobile number" maxLength={10} autoComplete="tel"
                />
              </div>
              {errors.mobile && <span className="bm-error">{errors.mobile}</span>}
            </div>

            {/* Location */}
            <div className="bm-section-label"><MapPin size={13} /> Location</div>

            {/* Country */}
            <div className="bm-field">
              <label className="bm-label" htmlFor="country-wrap">Country</label>
              <SearchSelect
                id="country"
                value={form.countryCode}
                onChange={(v) => { setCountry(v); setErrors(f => ({ ...f, stateCode: '', city: '' })); }}
                options={countryOptions}
                placeholder="Select country"
              />
            </div>

            {/* State + City */}
            <div className="bm-row">
              <div className="bm-field">
                <label className="bm-label" htmlFor="state-wrap">State / Province</label>
                <SearchSelect
                  id="state"
                  value={form.stateCode}
                  onChange={(v) => { setState(v); setErrors(f => ({ ...f, stateCode: '', city: '' })); }}
                  options={stateOptions}
                  placeholder={stateOptions.length ? 'Select state' : 'No states'}
                  disabled={stateOptions.length === 0}
                />
                {errors.stateCode && <span className="bm-error">{errors.stateCode}</span>}
              </div>

              <div className="bm-field">
                <label className="bm-label" htmlFor="city-wrap">City</label>
                <SearchSelect
                  id="city"
                  value={form.city}
                  onChange={(v) => { setCity(v); setErrors(f => ({ ...f, city: '' })); }}
                  options={cityOptions}
                  placeholder={cityOptions.length ? 'Select city' : 'No cities'}
                  disabled={!form.stateCode || cityOptions.length === 0}
                />
                {errors.city && <span className="bm-error">{errors.city}</span>}
              </div>
            </div>

            {/* Date Slots */}
            <div className="bm-section-label"><Calendar size={13} /> Select Date Slot</div>
            {errors.dateSlot && <span className="bm-error" style={{ marginTop: '-0.5rem', display: 'block' }}>{errors.dateSlot}</span>}

            <div className="bm-slots">
              {DATE_SLOTS.map((slot) => (
                <label
                  key={slot.id}
                  className={`bm-slot ${form.dateSlot === slot.id ? 'bm-slot-selected' : ''}`}
                  htmlFor={`slot-${slot.id}`}
                >
                  <input
                    type="radio" id={`slot-${slot.id}`} name="dateSlot"
                    value={slot.id} checked={form.dateSlot === slot.id}
                    onChange={handleChange} className="bm-slot-radio"
                  />
                  <div className="bm-slot-date-badge">
                    <span className="bm-slot-day">{slot.date.split(' ')[0]}</span>
                    <span className="bm-slot-month">{slot.date.split(' ')[1]}</span>
                  </div>
                  <div className="bm-slot-info">
                    <span className="bm-slot-weekday">{slot.day}</span>
                    <span className="bm-slot-label">{slot.label}</span>
                  </div>
                  <div className={`bm-slot-check ${form.dateSlot === slot.id ? 'bm-slot-check-visible' : ''}`}>
                    <CheckCircle size={18} />
                  </div>
                </label>
              ))}
            </div>

            <button type="submit" className="bm-submit" disabled={loading}>
              {loading
                ? <><Loader2 size={16} className="bm-spinner" /> Submitting…</>
                : <><Calendar size={16} /> Confirm Booking</>
              }
            </button>
          </form>
        ) : (
          <div className="bm-success">
            <div className="bm-success-icon"><CheckCircle size={48} /></div>
            <h3 className="bm-success-title">Booking Confirmed!</h3>
            <p className="bm-success-msg">
              Thank you, <strong>{form.name}</strong>!<br />
              Your booking for <strong>{DATE_SLOTS.find(s => s.id === form.dateSlot)?.date}</strong> has been received.<br />
              We will contact you on <strong>+91 {form.mobile}</strong> to confirm the details.
            </p>
            <p className="bm-success-note">Om Namah Shivaya 🙏</p>
            <button className="bm-submit" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
