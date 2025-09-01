import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ExhibitionsPortfolio from './pages/ExhibitionsPortfolio';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/exhibitions-portfolio" element={<ExhibitionsPortfolio />} />
          
     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
