import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = ({ children, direction = 'up', delay = '0ms', style = {}, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const location = useLocation();

  // ONLY animate on specific pages as per user strict requirements
  const isAllowedPage = 
    location.pathname.includes('/pooja-services') || 
    location.pathname.includes('/services') || 
    location.pathname.includes('/yagam-services');

  useEffect(() => {
    if (!isAllowedPage) {
      setIsVisible(true); // Show immediately without animation on other pages
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Trigger at 15-25% visibility
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -50px 0px' });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [isAllowedPage]);

  let animationClass = '';
  if (isVisible && isAllowedPage) {
    if (direction === 'left') animationClass = 'animate-slide-from-left';
    else if (direction === 'right') animationClass = 'animate-slide-from-right';
    else if (direction === 'up') animationClass = 'animate-fade-up';
  }

  return (
    <div
      ref={domRef}
      className={`${className} ${animationClass}`}
      style={{
        opacity: isVisible || !isAllowedPage ? 1 : 0,
        animationDelay: delay,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
