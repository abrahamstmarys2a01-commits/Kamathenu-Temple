import React from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">GET IN TOUCH</span>
            <h1 className="section-title">Contact Us</h1>
          </div>
          
          <div className="contact-grid">
            <div className="contact-details contact-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Temple Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin color="var(--color-primary)" />
                  <div>
                    <strong>Address:</strong><br/>
                    123 Divine Street, Spiritual City, SC 456789
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone color="var(--color-primary)" />
                  <div>
                    <strong>Phone:</strong> +91 98765 43210
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Mail color="var(--color-primary)" />
                  <div>
                    <strong>Email:</strong> info@kamadhenutemple.com
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Clock color="var(--color-primary)" />
                  <div>
                    <strong>Timings:</strong> 6:00 AM – 8:00 PM (All Days)
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-wrapper contact-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Send a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                <Button variant="primary" style={{ marginTop: '1rem' }}>SEND MESSAGE</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
