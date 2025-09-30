import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trust />
      <HowItWorks />
      <Features />
      <Benefits />
      <Pricing />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;