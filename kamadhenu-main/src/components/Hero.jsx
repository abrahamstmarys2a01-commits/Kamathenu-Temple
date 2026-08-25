import React from 'react';
import { Calendar, ArrowRight, Flame, Droplet, Star } from 'lucide-react';
import Button from './Button';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../assets/images/real_kamadhenu_cow.png';

const Hero = () => {
  const { openBooking } = useBooking();
  const { language } = useLanguage();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-slide-left">
          <div className="hero-subtitle-wrapper">
            <span className="hero-subtitle">
              {language === 'ta' 
                ? '“தர்மம் இருக்கும் இடத்தில் அருள் இருக்கும்… அருள் இருக்கும் இடத்தில் வளம் பெருகும்.”'
                : 'DIVINE BLESSINGS. POSITIVE ENERGY. PROSPEROUS LIFE.'}
            </span>
            <div className="hero-subtitle-line"></div>
          </div>
          <h1 className="hero-title" style={{ fontSize: language === 'ta' ? '2.8rem' : '3.5rem', lineHeight: '1.2', marginBottom: '1rem' }}>
            {language === 'ta' ? (
              <>ஸ்ரீ காமதேனு <span className="hero-highlight">திருக்கோவில்</span></>
            ) : (
              <>Kamadhenu <span className="hero-highlight">Temple</span></>
            )}
          </h1>
          <p className="hero-desc" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-dark)' }}>
            {language === 'ta' 
              ? 'The Divine Mother of Abundance & Grace (செழிப்பு மற்றும் அருளின் தெய்வீக அன்னை)'
              : 'At Kamadhenu Temple, we perform powerful Vedic Yagams and Poojas to bring peace, prosperity, health and happiness into your life.'}
          </p>

          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon-wrapper"><Flame size={18} /></div>
              <span>{language === 'ta' ? 'சிறந்த பண்டிதர்களால்' : 'Vedic Rituals'} <br/>{language === 'ta' ? 'வேத சடங்குகள்' : 'by Expert Priests'}</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon-wrapper"><Droplet size={18} /></div>
              <span>{language === 'ta' ? 'தூய்மையான கோவில்' : 'Pure & Authentic'} <br/>{language === 'ta' ? 'சூழல்' : 'Temple Environment'}</span>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon-wrapper"><Star size={18} /></div>
              <span>{language === 'ta' ? 'உங்களுக்கும் உங்கள்' : 'Blessings for You'} <br/>{language === 'ta' ? 'குடும்பத்திற்கும் ஆசிகள்' : '& Your Family'}</span>
            </div>
          </div>

          <div className="hero-actions">
            <Button variant="primary" onClick={openBooking}>
              <Calendar size={16} /> {language === 'ta' ? 'பூஜை / யாகம் முன்பதிவு' : 'BOOK POOJA / YAGAM'}
            </Button>
          </div>
        </div>

        <div className="hero-image-wrapper animate-slide-right">
          <div className="hero-image-bg"></div>
          <img src={heroImage} alt="Sacred Yagam and Pooja" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
