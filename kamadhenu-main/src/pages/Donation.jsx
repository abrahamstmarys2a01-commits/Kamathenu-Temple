import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import imgAnnadhanam from '../assets/images/annadhanam.png';
import imgGoSeva from '../assets/images/real_kamadhenu_cow.png';
import imgTempleDev from '../assets/images/temple_dev.png';
import imgPooja from '../assets/images/pooja_donate.png';
import imgGeneral from '../assets/images/general_donate.png';

const Donation = () => {
  const { language } = useLanguage();

  const donations = [
    {
      image: imgAnnadhanam,
      titleTa: "அன்னதானம்",
      titleEn: "Annadhanam",
      descTa: "பக்தர்களுக்கும், தேவையுள்ளவர்களுக்கும் உணவு வழங்கும் புனித சேவை.",
      descEn: "Sacred service of providing food to devotees and the needy."
    },
    {
      image: imgGoSeva,
      titleTa: "கோ சேவை",
      titleEn: "Go Seva",
      descTa: "பசுக்களின் பராமரிப்பு, உணவு மற்றும் பாதுகாப்பிற்காக செய்யப்படும் சேவை.",
      descEn: "Service dedicated to the care, feeding, and protection of cows."
    },
    {
      image: imgTempleDev,
      titleTa: "திருக்கோவில் வளர்ச்சி",
      titleEn: "Temple Development",
      descTa: "கோவில் கட்டுமானம், பராமரிப்பு மற்றும் ஆன்மிகப் பணிகளுக்கு உங்கள் பங்களிப்பு.",
      descEn: "Your contribution towards temple construction, maintenance, and spiritual activities."
    },
    {
      image: imgPooja,
      titleTa: "பூஜை மற்றும் வழிபாட்டு நன்கொடை",
      titleEn: "Pooja & Worship Donation",
      descTa: "சிறப்பு பூஜைகள், அபிஷேகம் மற்றும் திருவிழா வழிபாடுகளுக்கு ஆதரவு.",
      descEn: "Support for special poojas, abhishekams, and festival worships."
    },
    {
      image: imgGeneral,
      titleTa: "பொது நன்கொடை",
      titleEn: "General Donation",
      descTa: "கோவிலின் அன்றாட நிர்வாகம் மற்றும் பல்வேறு ஆன்மிக சேவைகளுக்கு உங்கள் விருப்பமான பங்களிப்பு.",
      descEn: "Your voluntary contribution towards the daily administration and various spiritual services of the temple."
    }
  ];

  return (
    <div id="donation" className="section" style={{ minHeight: '80vh', backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center animate-fade-up" style={{ marginBottom: '4rem' }}>
          <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {language === 'ta' ? 'நன்கொடை மற்றும் சேவை' : 'Donation and Service'}
          </h1>
          <blockquote style={{
            fontSize: '1.25rem',
            color: 'var(--color-primary)',
            fontStyle: 'italic',
            fontWeight: '600',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {language === 'ta' 
              ? '“ஒரு சேவை… ஒரு அருள்… ஒரு தலைமுறையின் நன்மை.”' 
              : '"One Service... One Blessing... The Benefit of a Generation."'}
          </blockquote>
        </div>

        {/* Donation Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {donations.map((item, index) => (
            <div 
              key={index} 
              className="animate-fade-up"
              style={{
                backgroundColor: '#fff',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(200, 155, 60, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg), var(--shadow-glow)';
                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'rgba(200, 155, 60, 0.15)';
              }}
            >
              <div style={{
                marginBottom: '1.5rem',
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                border: '3px solid var(--color-surface)'
              }}>
                <img src={item.image} alt={item.titleEn} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{
                color: 'var(--color-secondary)',
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {language === 'ta' ? item.titleTa : item.titleEn}
              </h3>
              <p style={{
                color: 'var(--color-text-body)',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                {language === 'ta' ? item.descTa : item.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Donation;
