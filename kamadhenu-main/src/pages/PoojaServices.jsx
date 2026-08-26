import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Services from '../components/Services';
import ScrollReveal from '../components/ScrollReveal';
import kamadhenuImg from '../assets/images/kamadhenu-pooja.jpg';
import benefitImg from '../assets/images/kuthuvilakku.png';
import processImg from '../assets/images/real_kamadhenu_cow.png';
import templeDetailsImg from '../assets/images/hero_temple.png';
import prasadamImg from '../assets/images/lotus_flower.png';
import faqImg from '../assets/images/ritual_temple.png';

const PoojaServices = ({ isHome = false }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('about-pooja');

  const tabs = [
    { id: 'about-pooja', labelTa: 'பூஜை பற்றி', labelEn: 'About Pooja' },
    { id: 'pooja-benefits', labelTa: 'பூஜையின் பயன்கள்', labelEn: 'Benefits of Pooja' },
    { id: 'pooja-process', labelTa: 'பூஜை செயல்முறை', labelEn: 'Pooja Process' },
    { id: 'temple-details', labelTa: 'கோவில் விவரங்கள்', labelEn: 'Temple Details' },
    { id: 'what-you-get', labelTa: 'உங்களுக்கு கிடைப்பவை', labelEn: 'What You Will Get' },
    { id: 'faq', labelTa: 'அடிக்கடி கேட்கப்படும் கேள்விகள்', labelEn: 'FAQ' },
  ];

  useEffect(() => {
    if (isHome) return;
    
    const handleScroll = () => {
      // Offset for navbar and sticky menu
      const scrollPosition = window.scrollY + 250; 
      
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, tabs]);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 85;
      const subNavHeight = 70; // Height of the sticky sub-navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - subNavHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={isHome ? "" : "page-wrapper"}>
      
      {!isHome && (
        <div style={{ marginTop: '2rem' }}>
          <Services hideHeader={true} />
        </div>
      )}

      {/* Sticky Navigation Menu */}
      {!isHome && (
        <div 
          className="pooja-sticky-nav"
          style={{
            position: 'sticky',
            top: '74px', // Assuming main navbar height is ~74-85px
            zIndex: 900,
            backgroundColor: 'var(--color-surface)',
            borderBottom: '1px solid rgba(200, 155, 60, 0.2)',
            borderTop: '1px solid rgba(200, 155, 60, 0.2)',
            padding: '0 1rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            scrollbarWidth: 'none',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div className="container" style={{ display: 'flex', gap: '2.5rem', margin: '0 auto', maxWidth: '1400px', width: 'max-content' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '1.2rem 0.5rem',
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: activeTab === tab.id ? '700' : '600',
                  color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-body)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderBottom: activeTab === tab.id ? '3px solid var(--color-primary)' : '3px solid transparent'
                }}
              >
                {language === 'ta' ? tab.labelTa : tab.labelEn}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="container" style={{ marginTop: '3rem', marginBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingTop: '2rem' }}>

          {/* Section 1: About Pooja */}
          <div id="about-pooja" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', scrollMarginTop: '160px' }}>
            {/* Left Image */}
            <ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>
              <img
                src={kamadhenuImg}
                alt="Kamadhenu Pooja"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(200, 155, 60, 0.2)',
                  objectFit: 'cover'
                }}
              />
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal direction="right" delay="0.2s" style={{
              flex: '2 1 600px',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-body)'
            }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', borderBottom: '2px solid rgba(200, 155, 60, 0.2)', paddingBottom: '0.5rem' }}>
                {language === 'ta' ? 'பூஜை பற்றி' : 'About Pooja'}
              </h3>
              <strong style={{ display: 'block', color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                 {language === 'ta' ? 'சிசுபால கர்ப்பவிருத்தி வாராஹி ஹோமம்' : 'Sisubala Garbhaviruthi Varahi Homam'}
              </strong>
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
            </ScrollReveal>
          </div>

          {/* Section 2: Benefits (Content Left, Image Right) */}
          <div id="pooja-benefits" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', scrollMarginTop: '160px' }}>
            
            {/* Left Content */}
            <ScrollReveal direction="left" delay="0.1s" style={{ 
              flex: '2 1 600px',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-body)'
            }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', borderBottom: '2px solid rgba(200, 155, 60, 0.2)', paddingBottom: '0.5rem' }}>
                {language === 'ta' ? 'பூஜையின் பயன்கள்' : 'Benefits of Pooja'}
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>{language === 'ta' ? 'மன அமைதி மற்றும் நிம்மதி பெற உதவும்' : 'Helps to attain peace of mind and tranquility'}</li>
                <li>{language === 'ta' ? 'இறை அருளை நாடுவதற்கான ஆன்மிக வழிபாடு' : 'A spiritual worship to seek divine grace'}</li>
                <li>{language === 'ta' ? 'குடும்பத்தில் நேர்மறையான சூழலை உருவாக்க உதவும்' : 'Helps create a positive environment in the family'}</li>
                <li>{language === 'ta' ? 'தம்பதிகளின் நம்பிக்கையையும் மன உறுதியையும் அதிகரிக்க உதவும்' : 'Helps increase the confidence and mental strength of couples'}</li>
                <li>{language === 'ta' ? 'பாரம்பரிய ஆன்மிக முறைகளை பின்பற்றும் வாய்ப்பு' : 'An opportunity to follow traditional spiritual practices'}</li>
                <li>{language === 'ta' ? 'நல்ல எண்ணங்களுடன் புதிய வாழ்க்கைப் பயணத்தை தொடங்க உதவும்' : 'Helps start a new life journey with good intentions'}</li>
              </ul>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>
              <img
                src={benefitImg}
                alt="Pooja Benefits"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(200, 155, 60, 0.2)',
                  objectFit: 'cover'
                }}
              />
            </ScrollReveal>
          </div>

          {/* Section 3: Process */}
          <div id="pooja-process" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', scrollMarginTop: '160px' }}>
            {/* Left Image */}
            <ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>
              <img
                src={processImg}
                alt="Pooja Process"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(200, 155, 60, 0.2)',
                  objectFit: 'cover'
                }}
              />
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal direction="right" delay="0.2s" style={{
              flex: '2 1 600px',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-body)'
            }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', borderBottom: '2px solid rgba(200, 155, 60, 0.2)', paddingBottom: '0.5rem' }}>
                {language === 'ta' ? 'பூஜை செயல்முறை' : 'Pooja Process'}
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
            </ScrollReveal>
          </div>

          {/* Section 4: Temple Details (Content Left, Image Right) */}
          <div id="temple-details" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', scrollMarginTop: '160px' }}>
            
            {/* Left Content */}
            <ScrollReveal direction="left" delay="0.1s" style={{ 
              flex: '2 1 600px',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-body)'
            }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', borderBottom: '2px solid rgba(200, 155, 60, 0.2)', paddingBottom: '0.5rem' }}>
                {language === 'ta' ? 'கோவில் விவரங்கள்' : 'Temple Details'}
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                {language === 'ta'
                  ? 'புதுக்கோட்டை ஈசானம்மா யாக சாலையில் அமைந்துள்ள காமதேனு திருக்கோவில், அமைதியும் ஆன்மிகமும் நிறைந்த ஓர் அற்புத தலமாகும்.'
                  : 'Kamadhenu Temple, located at Isanamma Yaga Solai in Pudukkottai, is a wonderful divine place filled with peace and spirituality.'}
              </p>
              <p>
                {language === 'ta'
                  ? 'இங்கு செய்யப்படும் அனைத்து பூஜைகளும் ஆகம விதிகளின்படி, தகுதி வாய்ந்த வேத விற்பன்னர்களால் மிகச் சிறப்பாகவும் பயபக்தியுடனும் நடத்தப்படுகின்றன.'
                  : 'All poojas here are performed excellently and devoutly by qualified Vedic scholars according to Agama rules.'}
              </p>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>
              <img
                src={templeDetailsImg}
                alt="Temple Details"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(200, 155, 60, 0.2)',
                  objectFit: 'cover'
                }}
              />
            </ScrollReveal>
          </div>

          {/* Section 5: What you will get (Left Image, Right Content) */}
          <div id="what-you-get" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', scrollMarginTop: '160px' }}>
            {/* Left Image */}
            <ScrollReveal direction="left" delay="0.1s" style={{ flex: '1 1 350px' }}>
              <img
                src={prasadamImg}
                alt="What you will get"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(200, 155, 60, 0.2)',
                  objectFit: 'cover'
                }}
              />
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal direction="right" delay="0.2s" style={{
              flex: '2 1 600px',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-body)'
            }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', borderBottom: '2px solid rgba(200, 155, 60, 0.2)', paddingBottom: '0.5rem' }}>
                {language === 'ta' ? 'உங்களுக்கு கிடைப்பவை' : 'What You Will Get'}
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>{language === 'ta' ? 'பூஜை செய்யப்பட்ட குங்குமம் மற்றும் விபூதி' : 'Energized Kumkum and Vibhuti'}</li>
                <li>{language === 'ta' ? 'யந்திரம் அல்லது ரட்சை (தேவைப்பட்டால்)' : 'Yantra or Raksha (if applicable to the specific pooja)'}</li>
                <li>{language === 'ta' ? 'பூஜை காணொளி பதிவு (நேரலையில் பங்கேற்காதவர்களுக்கு)' : 'Pooja Video Recording (for non-attendees)'}</li>
                <li>{language === 'ta' ? 'இறை ஆசீர்வாதம் நிறைந்த பிரசாதம் உங்கள் வீட்டிற்கே பாதுகாப்பாக அனுப்பி வைக்கப்படும்' : 'Divine Prasadam packaged carefully and delivered directly to your home'}</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Section 6: FAQ (Content Left, Image Right) */}
          <div id="faq" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', scrollMarginTop: '160px' }}>
            
            {/* Left Content */}
            <ScrollReveal direction="left" delay="0.1s" style={{ 
              flex: '2 1 600px',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text-body)'
            }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', borderBottom: '2px solid rgba(200, 155, 60, 0.2)', paddingBottom: '0.5rem' }}>
                {language === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.3rem' }}>
                    {language === 'ta' ? 'கே: நாங்கள் நேரில் கலந்து கொள்ள வேண்டுமா?' : 'Q: Do we need to attend in person?'}
                  </strong>
                  <p style={{ margin: 0 }}>
                    {language === 'ta' 
                      ? 'ப: நேரில் வருவது சிறப்பு. இயலாதவர்கள் ஆன்லைனில் பதிவு செய்து வீட்டிலிருந்தபடியே சங்கல்பம் செய்து கொள்ளலாம்.' 
                      : 'A: Attending in person is special. If unable, you can register online and take the Sankalpam from your home.'}
                  </p>
                </div>
                
                <div>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.3rem' }}>
                    {language === 'ta' ? 'கே: பிரசாதம் எத்தனை நாட்களில் கிடைக்கும்?' : 'Q: How many days will it take to receive the Prasadam?'}
                  </strong>
                  <p style={{ margin: 0 }}>
                    {language === 'ta' 
                      ? 'ப: பூஜை முடிந்த 3 முதல் 5 வேலை நாட்களுக்குள் பிரசாதம் கூரியர் மூலம் பாதுகாப்பாக அனுப்பி வைக்கப்படும்.' 
                      : 'A: Prasadam will be sent securely via courier within 3 to 5 working days after the pooja.'}
                  </p>
                </div>
                
                <div>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.3rem' }}>
                    {language === 'ta' ? 'கே: பூஜைக்கான நேரம் என்ன?' : 'Q: What is the timing for the pooja?'}
                  </strong>
                  <p style={{ margin: 0 }}>
                    {language === 'ta' 
                      ? 'ப: திங்கள், புதன் மற்றும் வெள்ளிக்கிழமைகளில் குறிப்பிட்ட சிறப்பு முஹூர்த்தத்தில் பூஜை நடைபெறும்.' 
                      : 'A: The pooja will be performed on Mondays, Wednesdays, and Fridays during a specific auspicious muhurat.'}
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal direction="right" delay="0.2s" style={{ flex: '1 1 350px' }}>
              <img
                src={faqImg}
                alt="Frequently Asked Questions"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid rgba(200, 155, 60, 0.2)',
                  objectFit: 'cover'
                }}
              />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PoojaServices;
