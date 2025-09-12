import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PortfolioSection from '../components/PortfolioSection'
import AboutSection from '../components/AboutSection'
import OfertaSection from '../components/OfertaSection'
import TestimonialsSection from '../components/Review'
import ContactForm from '../components/Comment'
import OurVisionSection from '../components/OurMission'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
  
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
    <div id="vision">
      <OurVisionSection />
    </div>
    <div id="comment">
      <ContactForm />
    </div>
  
    <Footer />
  </div>
  )
}

export default Home