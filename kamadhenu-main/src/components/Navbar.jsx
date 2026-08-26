import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { openBooking } = useBooking();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // If we are on a specific page, set that as active immediately
    if (location.pathname === '/pooja-services' || location.pathname === '/yagam-services') {
      setActiveSection('pooja-services');
      return;
    } else if (location.pathname === '/donation') {
      setActiveSection('donation');
      return;
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
      return;
    }

    // Otherwise, we are likely on Home, track scroll
    const handleScroll = () => {
      const sections = ['home', 'pooja-services', 'donation', 'contact'];
      let currentSection = 'home'; // default

      // We add a top offset to trigger earlier when scrolling down
      const scrollPosition = window.scrollY + 150; 

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
    openBooking();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className="logo-title">{language === 'ta' ? 'காமதேனு திருக்கோவில்' : 'KAMADHENU TEMPLE'}</h1>
            <span className="logo-subtitle">{language === 'ta' ? 'யாகம் & பூஜை சேவை' : 'YAGAM & POOJA SEVA'}</span>
          </Link>
        </div>
        
        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'முகப்பு' : 'Home'}</Link></li>
            <li><Link to="/#pooja-services" className={`nav-link ${activeSection === 'pooja-services' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'பூஜைகள்' : 'Pooja Services'}</Link></li>
            <li><Link to="/#donation" className={`nav-link ${activeSection === 'donation' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'நன்கொடை' : 'Donation'}</Link></li>
            <li><Link to="/#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{language === 'ta' ? 'தொடர்பு' : 'Contact Us'}</Link></li>
          </ul>
          
          <div className="nav-action" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={toggleLanguage} 
              style={{
                background: 'none', 
                border: '1px solid currentColor', 
                borderRadius: '20px', 
                padding: '4px 10px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 'bold',
                color: 'inherit'
              }}
            >
              <Globe size={16} /> {language === 'ta' ? 'English' : 'தமிழ்'}
            </button>
            <Button variant="primary" className="btn-book" onClick={handleBookClick}>{language === 'ta' ? 'பூஜை முன்பதிவு' : 'BOOK POOJA'}</Button>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
