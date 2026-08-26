import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // For hash navigation, use a precise manual offset to account for fixed navbar
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const navbarHeight = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 0);
    } else {
      // Disable smooth scrolling temporarily for instant page transition to the top
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      
      // Restore smooth scrolling for regular interactions after a short delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 50);
    }
  }, [pathname, hash]);

  return null;
}
