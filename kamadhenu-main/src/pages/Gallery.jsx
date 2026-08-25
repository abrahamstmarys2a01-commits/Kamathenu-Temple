import React from 'react';
import heroImage from '../assets/images/hero_temple.png';
import ritualImage from '../assets/images/ritual_temple.png';

const Gallery = () => {
  const images = [
    heroImage,
    ritualImage,
    heroImage,
    ritualImage,
  ];

  return (
    <div className="page-wrapper animate-fade-up">
      <div className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">GALLERY</span>
            <h1 className="section-title">Divine Glimpses</h1>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {images.map((img, i) => (
              <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <img src={img} alt="Temple Gallery" style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'var(--transition-smooth)' }} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .gallery-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Gallery;
