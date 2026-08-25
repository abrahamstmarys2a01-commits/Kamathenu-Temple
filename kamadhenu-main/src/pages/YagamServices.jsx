import React from 'react';
import Services from '../components/Services';
import CTA from '../components/CTA';
import BookingSteps from '../components/BookingSteps';

const YagamServices = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="section text-center pb-0">
        <div className="container">
          <h1 className="section-title">Sacred Yagam Services</h1>
          <p className="hero-desc" style={{ margin: '1.5rem auto 0' }}>
            Powerful fire rituals to bring immense positive energy and prosperity.
          </p>
        </div>
      </div>
      <Services />
       <BookingSteps />
      <CTA />
    </div>
  );
};

export default YagamServices;
