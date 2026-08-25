import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Donation from './Donation';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Donation />
      <CTA />
    </>
  );
};

export default Home;
