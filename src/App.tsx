import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import OfertaSection from './components/OfertaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="oferta">
        <OfertaSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;