import React from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    ta: {
      subtitle: "தொடர்பு கொள்க",
      title: "தொடர்பு கொள்ள",
      templeInfo: "கோவில் தகவல்",
      addressLabel: "முகவரி:",
      addressValue: "123 தெய்வீக வீதி, ஆன்மீக நகரம், SC 456789",
      phoneLabel: "தொலைபேசி:",
      emailLabel: "மின்னஞ்சல்:",
      timingsLabel: "நேரங்கள்:",
      timingsValue: "காலை 6:00 – இரவு 8:00 (அனைத்து நாட்களும்)",
      sendMessage: "செய்தி அனுப்பவும்",
      namePlaceholder: "உங்கள் பெயர்",
      emailPlaceholder: "உங்கள் மின்னஞ்சல்",
      messagePlaceholder: "உங்கள் செய்தி",
      sendButton: "செய்தியை அனுப்பு"
    },
    en: {
      subtitle: "GET IN TOUCH",
      title: "Contact Us",
      templeInfo: "Temple Information",
      addressLabel: "Address:",
      addressValue: "123 Divine Street, Spiritual City, SC 456789",
      phoneLabel: "Phone:",
      emailLabel: "Email:",
      timingsLabel: "Timings:",
      timingsValue: "6:00 AM – 8:00 PM (All Days)",
      sendMessage: "Send a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "SEND MESSAGE"
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <span className="section-subtitle">{currentContent.subtitle}</span>
            <h1 className="section-title">{currentContent.title}</h1>
          </div>
          
          <div className="contact-grid">
            <div className="contact-details contact-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>{currentContent.templeInfo}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin color="var(--color-primary)" />
                  <div>
                    <strong>{currentContent.addressLabel}</strong><br/>
                    {currentContent.addressValue}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone color="var(--color-primary)" />
                  <div>
                    <strong>{currentContent.phoneLabel}</strong> +91 98765 43210
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Mail color="var(--color-primary)" />
                  <div>
                    <strong>{currentContent.emailLabel}</strong> info@kamadhenutemple.com
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Clock color="var(--color-primary)" />
                  <div>
                    <strong>{currentContent.timingsLabel}</strong> {currentContent.timingsValue}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper contact-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>{currentContent.sendMessage}</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={currentContent.namePlaceholder} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                <input type="email" placeholder={currentContent.emailPlaceholder} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                <textarea placeholder={currentContent.messagePlaceholder} rows="5" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                <Button variant="primary" style={{ marginTop: '1rem' }}>{currentContent.sendButton}</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
