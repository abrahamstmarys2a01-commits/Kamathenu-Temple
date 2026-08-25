import React from 'react';
import { Award, Leaf, Settings, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import ritualImage from '../assets/images/ritual_temple.png';

const WhyChoose = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Award size={24} />,
      title: language === 'ta' ? "செழிப்பு மற்றும் வளம்" : "Prosperity and abundance",
      desc: language === 'ta' ? "எங்கள் அர்ச்சகர்கள் வேதங்கள் மற்றும் ஆகமங்களில் சிறந்தவர்கள்." : "Our priests are highly learned in Vedas and Agamas."
    },
    {
      icon: <Leaf size={24} />,
      title: language === 'ta' ? "குடும்ப வாழ்க்கையில் உள்ள தடைகளை நீக்குதல்" : "Removal of obstacles in family life",
      desc: language === 'ta' ? "உங்கள் சடங்குகளுக்கு உண்மையான கோவில் சூழல்." : "Authentic temple atmosphere for your rituals."
    },
    {
      icon: <Settings size={24} />,
      title: language === 'ta' ? "எதிர்மறை சக்திகளிலிருந்து பாதுகாப்பு" : "Protection from negative forces",
      desc: language === 'ta' ? "உங்கள் ஜோதிட தேவைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பூஜைகள்." : "Personalized poojas based on your astrological needs."
    },
    {
      icon: <Globe size={24} />,
      title: language === 'ta' ? "ஆன்மீக தூய்மை மற்றும் நேர்மறை கர்மா" : "Spiritual purification and positive karma",
      desc: language === 'ta' ? "எளிதான முன்பதிவு மற்றும் தொலைதூர பங்கேற்பு கிடைக்கிறது." : "Easy scheduling and remote participation available."
    }
  ];

  return (
    <section className="section why-choose">
      <div className="container">
        <div className="why-choose-left animate-slide-left">
          <img src={ritualImage} alt="Vedic Ritual" className="why-choose-image" />
        </div>
        
        <div className="why-choose-right animate-slide-right">
          {/* <span className="section-subtitle">WHY CHOOSE US</span> */}
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {language === 'ta' ? (
              <>தெய்வீகத்தை அனுபவியுங்கள்.<br/>வித்தியாசத்தை உணருங்கள்.</>
            ) : (
              <>Experience Divine.<br/>Feel the Difference.</>
            )}
          </h2>
          
          <div className="why-choose-features">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                {/* <div className="feature-icon-wrapper">
                  {feature.icon}
                </div> */}
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

