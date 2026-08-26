import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PoojaServices from './PoojaServices';
import CTA from '../components/CTA';
import Donation from './Donation';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="pooja-services">
        <Services />
      </div>
      <div id="donation">
        <Donation />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <CTA />
    </>
  );
};

export default Home;
