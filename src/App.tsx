import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import OfertaSection from './components/OfertaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Social from './atoms/Social';
import TestimonialsSection from './components/Review';
import ContactForm from './components/Comment';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="oferta">
        <OfertaSection />
      </div>
      <div id="review">
        <TestimonialsSection />
      </div>
      <div id="comment">
        <ContactForm />
      </div>
    
      <Footer />
    </div>
  );
}

export default App;