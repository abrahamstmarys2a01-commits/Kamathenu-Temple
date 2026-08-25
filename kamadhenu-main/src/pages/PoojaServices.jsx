import React, { useState } from 'react';
import Services from '../components/Services';
import { useLanguage } from '../context/LanguageContext';

const PoojaServices = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { language } = useLanguage();

  return (
    <div className="page-wrapper animate-fade-up">
      <Services hideHeader={true} />
      
      <div className="container" style={{ marginTop: '2rem', marginBottom: '6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Tabs Navigation */}
          <div className="tabs-nav">
            <button 
               onClick={() => setActiveTab('about')}
               style={{ 
                 background: 'none', 
                 border: 'none', 
                 borderBottom: activeTab === 'about' ? '3px solid var(--color-primary)' : '3px solid transparent', 
                 padding: '1rem', 
                 fontSize: '1.2rem', 
                 fontWeight: '700', 
                 color: activeTab === 'about' ? 'var(--color-secondary)' : 'var(--color-text-body)', 
                 cursor: 'pointer',
                 fontFamily: 'var(--font-heading)',
                 transition: 'all 0.3s ease'
               }}
            >
               {language === 'ta' ? 'பூஜை பற்றி' : 'About Pooja'}
            </button>
            <button 
               onClick={() => setActiveTab('benefits')}
               style={{ 
                 background: 'none', 
                 border: 'none', 
                 borderBottom: activeTab === 'benefits' ? '3px solid var(--color-primary)' : '3px solid transparent', 
                 padding: '1rem', 
                 fontSize: '1.2rem', 
                 fontWeight: '700', 
                 color: activeTab === 'benefits' ? 'var(--color-secondary)' : 'var(--color-text-body)', 
                 cursor: 'pointer',
                 fontFamily: 'var(--font-heading)',
                 transition: 'all 0.3s ease'
               }}
            >
               {language === 'ta' ? 'பூஜையின் பயன்கள்' : 'Benefits of Pooja'}
            </button>
            <button 
               onClick={() => setActiveTab('process')}
               style={{ 
                 background: 'none', 
                 border: 'none', 
                 borderBottom: activeTab === 'process' ? '3px solid var(--color-primary)' : '3px solid transparent', 
                 padding: '1rem', 
                 fontSize: '1.2rem', 
                 fontWeight: '700', 
                 color: activeTab === 'process' ? 'var(--color-secondary)' : 'var(--color-text-body)', 
                 cursor: 'pointer',
                 fontFamily: 'var(--font-heading)',
                 transition: 'all 0.3s ease'
               }}
            >
               {language === 'ta' ? 'பூஜை செயல்முறை' : 'Pooja Process'}
            </button>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-up" style={{ 
            padding: '1.5rem 2rem', 
            backgroundColor: '#fff', 
            borderRadius: 'var(--radius-lg)', 
            boxShadow: 'var(--shadow-md)', 
            border: '1px solid rgba(200, 155, 60, 0.15)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'var(--color-text-body)'
          }}>
            {activeTab === 'about' && (
              <div>
                 <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                   {language === 'ta' ? 'கர்ப்ப விருத்தி பூஜை என்றால் என்ன?' : 'What is Garbha Vriddhi Pooja?'}
                 </h3>
                 <p style={{ marginBottom: '1rem' }}>
                    {language === 'ta' 
                      ? 'கர்ப்பம் தரிக்க விரும்பும் தம்பதிகளுக்காக, இறை நம்பிக்கை மற்றும் பாரம்பரிய ஆன்மிக முறைகளை அடிப்படையாகக் கொண்டு செய்யப்படும் சிறப்பு பூஜை ஆகும்.'
                      : 'It is a special pooja performed based on faith and traditional spiritual practices for couples who wish to conceive.'}
                 </p>
                 <p style={{ marginBottom: '1.5rem' }}>
                    {language === 'ta' 
                      ? 'இந்த பூஜையின் மூலம் மன அமைதி, நேர்மறையான எண்ணங்கள் மற்றும் இறை அருளை நாடுவது முக்கிய நோக்கமாகும்.'
                      : 'The main objective of this pooja is to attain peace of mind, positive thoughts, and seek divine grace.'}
                 </p>
                 <div style={{ padding: '1rem', backgroundColor: 'rgba(211, 84, 0, 0.05)', borderLeft: '4px solid var(--color-primary)', borderRadius: '4px' }}>
                   <strong>{language === 'ta' ? 'குறிப்பு: ' : 'Note: '}</strong>
                   {language === 'ta'
                     ? 'பூஜை ஆன்மிக நம்பிக்கையின் அடிப்படையிலானது. கர்ப்பம் தொடர்பான மருத்துவ பிரச்சனைகளுக்கு தகுதியான மருத்துவரின் ஆலோசனையும் அவசியம்.'
                     : 'This pooja is based on spiritual beliefs. For pregnancy-related medical issues, consulting a qualified doctor is also essential.'}
                 </div>
              </div>
            )}
            {activeTab === 'benefits' && (
              <div>
                 <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                   {language === 'ta' ? 'கர்ப்ப விருத்தி பூஜையின் சிறப்புகள்' : 'Specialties of Garbha Vriddhi Pooja'}
                 </h3>
                 <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                   <li>{language === 'ta' ? 'மன அமைதி மற்றும் நிம்மதி பெற உதவும்' : 'Helps to attain peace of mind and tranquility'}</li>
                   <li>{language === 'ta' ? 'இறை அருளை நாடுவதற்கான ஆன்மிக வழிபாடு' : 'A spiritual worship to seek divine grace'}</li>
                   <li>{language === 'ta' ? 'குடும்பத்தில் நேர்மறையான சூழலை உருவாக்க உதவும்' : 'Helps create a positive environment in the family'}</li>
                   <li>{language === 'ta' ? 'தம்பதிகளின் நம்பிக்கையையும் மன உறுதியையும் அதிகரிக்க உதவும்' : 'Helps increase the confidence and mental strength of couples'}</li>
                   <li>{language === 'ta' ? 'பாரம்பரிய ஆன்மிக முறைகளை பின்பற்றும் வாய்ப்பு' : 'An opportunity to follow traditional spiritual practices'}</li>
                   <li>{language === 'ta' ? 'நல்ல எண்ணங்களுடன் புதிய வாழ்க்கைப் பயணத்தை தொடங்க உதவும்' : 'Helps start a new life journey with good intentions'}</li>
                 </ul>
              </div>
            )}
            {activeTab === 'process' && (
              <div>
                 <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                   {language === 'ta' ? 'பூஜை எவ்வாறு நடைபெறும்?' : 'How will the Pooja be performed?'}
                 </h3>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   <div>
                     <strong style={{ color: '#d35400', display: 'block', marginBottom: '0.2rem', fontSize: '1.2rem' }}>1. {language === 'ta' ? 'சங்கல்பம்' : 'Sankalpam'}</strong>
                     <p style={{ margin: 0 }}>{language === 'ta' ? 'தம்பதிகளின் வேண்டுதல் மற்றும் நோக்கத்துடன் பூஜை தொடங்கப்படுகிறது.' : 'The pooja begins with the prayers and specific intentions of the couple.'}</p>
                   </div>
                   <div>
                     <strong style={{ color: '#d35400', display: 'block', marginBottom: '0.2rem', fontSize: '1.2rem' }}>2. {language === 'ta' ? 'விநாயகர் வழிபாடு' : 'Lord Ganesha Worship'}</strong>
                     <p style={{ margin: 0 }}>{language === 'ta' ? 'தடைகள் நீங்கி பூஜை சிறப்பாக நடைபெற விநாயகர் வழிபாடு செய்யப்படுகிறது.' : 'Worship of Lord Ganesha is performed first to remove all obstacles and ensure a successful pooja.'}</p>
                   </div>
                   <div>
                     <strong style={{ color: '#d35400', display: 'block', marginBottom: '0.2rem', fontSize: '1.2rem' }}>3. {language === 'ta' ? 'சிறப்பு தெய்வ வழிபாடு' : 'Special Deity Worship'}</strong>
                     <p style={{ margin: 0 }}>{language === 'ta' ? 'கர்ப்ப விருத்தி மற்றும் குடும்ப நலனை வேண்டி உரிய தெய்வங்களுக்கு சிறப்பு பூஜைகள் செய்யப்படுகின்றன.' : 'Special poojas are performed to respective deities praying for fertility (Garbha Vriddhi) and family welfare.'}</p>
                   </div>
                   <div>
                     <strong style={{ color: '#d35400', display: 'block', marginBottom: '0.2rem', fontSize: '1.2rem' }}>4. {language === 'ta' ? 'மந்திரம் & அர்ச்சனை' : 'Mantras & Archana'}</strong>
                     <p style={{ margin: 0 }}>{language === 'ta' ? 'பாரம்பரிய மந்திரங்கள் மற்றும் அர்ச்சனை முறைகள் மூலம் வழிபாடு நடைபெறும்.' : 'Worship is performed powerfully through traditional Vedic mantras and archana methods.'}</p>
                   </div>
                   <div>
                     <strong style={{ color: '#d35400', display: 'block', marginBottom: '0.2rem', fontSize: '1.2rem' }}>5. {language === 'ta' ? 'ஹோமம் / தீப வழிபாடு' : 'Homam / Deepa Worship'}</strong>
                     <p style={{ margin: 0 }}>{language === 'ta' ? 'பூஜையின் ஒரு பகுதியாக தேவையான ஹோமம் மற்றும் தீப வழிபாடு செய்யப்படுகிறது.' : 'As an essential part of the pooja, the sacred fire ritual (homam) and lamp worship (deepa aradhana) are performed.'}</p>
                   </div>
                   <div>
                     <strong style={{ color: '#d35400', display: 'block', marginBottom: '0.2rem', fontSize: '1.2rem' }}>6. {language === 'ta' ? 'பிரசாதம் & ஆசீர்வாதம்' : 'Prasadam & Blessings'}</strong>
                     <p style={{ margin: 0 }}>{language === 'ta' ? 'பூஜை நிறைவில் பிரசாதம் வழங்கப்பட்டு, தம்பதிகளுக்காக சிறப்பு பிரார்த்தனை செய்யப்படுகிறது.' : 'At the conclusion of the pooja, divine prasadam is distributed and special prayers are offered for the couple.'}</p>
                   </div>
                 </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PoojaServices;
