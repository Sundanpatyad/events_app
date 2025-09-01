import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ExhibitionsPortfolio from './pages/ExhibitionsPortfolio';
import Team from './pages/Team';
import Header from './components/Header';
import ContactUs from './pages/Contact-us';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/exhibitions-portfolio" element={<ExhibitionsPortfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
