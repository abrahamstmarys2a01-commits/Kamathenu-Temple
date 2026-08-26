import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PoojaServices from './pages/PoojaServices';
import YagamServices from './pages/YagamServices';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './context/LanguageContext';
import './css/index.css';
import './css/App.css';

// Disable automatic scroll restoration by the browser
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      <BookingProvider>
        <div className="app">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pooja-services" element={<PoojaServices />} />
              <Route path="/yagam-services" element={<YagamServices />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donation" element={<Donation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;

