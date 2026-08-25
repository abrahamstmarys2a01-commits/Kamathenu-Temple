import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, CalendarDays, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import varahiImg from '../assets/images/vrahi.png';

const Services = ({ hideHeader = false }) => {
  const { openBooking } = useBooking();
  const { language } = useLanguage();

  return (
    <section className="section services" id="services" style={{ paddingTop: hideHeader ? '2rem' : '' }}>
      <div className="container">
        {!hideHeader && (
          <div className="services-header text-center animate-fade-up">
            <img className='w-20 h-20 mb-10' src="./assets/fire-ritual-19875818.jpg"  loading='lazy'  alt="" />
            
            <span className="section-subtitle">{language === 'ta' ? 'காமதேனு திருக்கோவில்' : 'Kamadhenu Temple'}</span>
            <h2 className="section-title">{language === 'ta' ? 'பூஜைகள் & யாகங்கள்' : 'Poojas & Yagams'}</h2>
          </div>
        )}
        
        <div className="services-grid">
           <div className="featured-card animate-fade-up">
              <Link to="/pooja-services" className="fc-image" style={{ display: 'block', textDecoration: 'none' }}>
                 <img src={varahiImg} alt="Varahi Homam" style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </Link>
              <div className="fc-content">
                 <div className="fc-pretitle">
                    <span style={{color: '#d35400'}}>🌸</span> 
                    {language === 'ta' 
                      ? 'கர்ம வினைகளை அகற்றி வாழ்வை மலரச் செய்யும் சிறப்பு ஹோமம்' 
                      : 'Special Homam to Remove Karma & Bring Prosperity'} 
                    <span style={{color: '#d35400'}}>🌸</span>
                 </div>
                 <h2 className="fc-title">
                   {language === 'ta' ? (
                     <>சிசுபால கர்மவினை அகற்றும்<br/>வாராஹி ஹோமம்</>
                   ) : (
                     <>Sisubala Karmavirchi<br/>Varahi Homam</>
                   )}
                 </h2>
                 
                 <div className="fc-details-box">
                    <div className="fc-detail-row">
                       <Landmark className="fc-icon" size={24} />
                       <p>
                         {language === 'ta' ? (
                           <>ஈசானம்மா யாக சாலை,<br/><span>புதுக்கோட்டை</span></>
                         ) : (
                           <>Isanamma Yaga Solai,<br/><span>Pudukkottai</span></>
                         )}
                       </p>
                    </div>
                    <div className="fc-divider"></div>
                    <div className="fc-detail-row">
                       <CalendarDays className="fc-icon" size={24} />
                       <p>
                         {language === 'ta' 
                           ? <>திங்கள், புதன், வெள்ளி <span>சிறப்பு முஹூர்த்தம்</span></> 
                           : <>Monday, Wednesday, Friday <span>Auspicious Muhurat</span></>}
                       </p>
                    </div>
                 </div>

                 <button className="fc-book-btn" onClick={openBooking}>
                    {language === 'ta' ? 'இப்போதே பதிவு செய்' : 'BOOK NOW'} <ArrowRight size={18} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
