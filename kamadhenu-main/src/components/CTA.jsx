import React from 'react';
import Button from './Button';
import { Landmark } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

import lotusImage from '../assets/images/lotus_flower.png';
import vilakkuImage from '../assets/images/kuthuvilakku.png';

const CTA = () => {
  const { openBooking } = useBooking();
  const { language } = useLanguage();

  return (
    <section className="cta-section">
      <div className="cta-bg-pattern-left">
        <img src={lotusImage} alt="Golden Lotus" className="cta-real-image-left" />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-content animate-fade-up">
          <div className="cta-text">
            <h2 className="cta-title">
              {language === 'ta' ? 'கோவிலுக்கு நேரில் வர முடியவில்லையா?' : "Can't Visit the Temple?"}
            </h2>
            <p className="cta-desc">
              {language === 'ta' ? (
                <>நாங்கள் ஈ-பூஜை (இ-பூஜை) சேவைகளை வழங்குகிறோம். தொலைதூரத்திலிருந்து பங்கேற்று<br/>உங்கள் வீட்டிற்கே பிரசாதம் மற்றும் ஆசிகளைப் பெறுங்கள்.</>
              ) : (
                <>We offer E-Pooja services. Participate remotely and receive prasadam<br/>and blessings at your doorstep.</>
              )}
            </p>
          </div>
          <div className="cta-action">
            <Button className="btn-cta" onClick={openBooking}>
              <Landmark size={18} /> {language === 'ta' ? 'ஈ-பூஜை முன்பதிவு' : 'BOOK E-POOJA'}
            </Button>
          </div>
        </div>
      </div>
      <div className="cta-bg-pattern-right">
        <img src={vilakkuImage} alt="Kuthuvilakku" className="cta-real-image-right" />
      </div>
    </section>
  );
};

export default CTA;
