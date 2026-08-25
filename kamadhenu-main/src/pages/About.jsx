import React from 'react';
import WhyChoose from '../components/WhyChoose';

const About = () => {
  return (
    <div className="page-wrapper animate-fade-up">
      <div className="section text-center">
        <div className="container">
          <span className="section-subtitle">ABOUT US</span>
          <h1 className="section-title">The Sacred Kamadhenu Temple</h1>
          <p className="hero-desc" style={{ margin: '2rem auto' }}>
            Rooted in ancient Vedic traditions, our temple stands as a beacon of spirituality and peace. 
            We are dedicated to preserving and practicing the authentic rituals that have been passed down through generations.
          </p>
        </div>
      </div>
      <WhyChoose />
    </div>
  );
};

export default About;
