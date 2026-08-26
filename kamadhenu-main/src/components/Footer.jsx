import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <div className="logo footer-logo">
              <h2 className="logo-title">{language === 'ta' ? 'காமதேனு திருக்கோவில்' : 'KAMADHENU TEMPLE'}</h2>
            </div>
            <p className="footer-desc">
              {language === 'ta' ? 'தெய்வீக இருப்பை உணருங்கள். உங்கள் அமைதி, செழிப்பு மற்றும் ஆன்மீக வளர்ச்சிக்காக உண்மையான வேத சடங்குகளை நாங்கள் செய்கிறோம்.' : 'Experience the divine presence. We perform authentic Vedic rituals for your peace, prosperity, and spiritual growth.'}
            </p>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">YT</a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-title">{language === 'ta' ? 'விரைவு இணைப்புகள்' : 'Quick Links'}</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">{language === 'ta' ? 'முகப்பு' : 'Home'}</a>
              <a href="#pooja-services" className="footer-link">{language === 'ta' ? 'பூஜைகள்' : 'Pooja Services'}</a>
              <a href="#donation" className="footer-link">{language === 'ta' ? 'நன்கொடை' : 'Donation'}</a>
              <a href="#contact" className="footer-link">{language === 'ta' ? 'தொடர்பு' : 'Contact Us'}</a>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-title">{language === 'ta' ? 'தொடர்பு கொள்க' : 'Contact Us'}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@kamadhenutemple.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>{language === 'ta' ? '123 ஆன்மீக வீதி, ஆன்மீக நகரம்' : '123 Divine Street, Spiritual City, SC 456789'}</span>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <span>{language === 'ta' ? 'கோவில் நேரம்: காலை 6:00 – இரவு 8:00' : 'Temple Timing: 6:00 AM – 8:00 PM'}</span>
              </div>
            </div>
          </div>
          
          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-title">{language === 'ta' ? 'செய்திமடல்' : 'Newsletter'}</h3>
            <p className="footer-desc" style={{ marginTop: 0 }}>
              {language === 'ta' ? 'சிறப்பு பூஜைகள் மற்றும் கோவில் நிகழ்வுகள் பற்றிய புதுப்பிப்புகளுக்கு எங்கள் செய்திமடலுக்கு குழுசேரவும்.' : 'Subscribe to our newsletter for updates on special poojas and temple events.'}
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={language === 'ta' ? 'உங்கள் மின்னஞ்சல்' : 'Your Email Address'} className="newsletter-input" required />
              <Button variant="primary">{language === 'ta' ? 'குழுசேர' : 'Subscribe Now'}</Button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 {language === 'ta' ? 'காமதேனு திருக்கோவில். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'Kamadhenu Temple. All Rights Reserved.'}</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">{language === 'ta' ? 'தனியுரிமை கொள்கை' : 'Privacy Policy'}</a>
            <a href="#" className="footer-link">{language === 'ta' ? 'விதிமுறைகள்' : 'Terms & Conditions'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
