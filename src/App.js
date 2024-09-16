import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './fonts.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import OurWork from './components/ourWork';
import Work from './components/Work';
import OurPricing from './components/ourPrices';
import OurContactDetails from './components/ourContactDetails';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <OurWork />
              <OurPricing />
              <OurContactDetails />
            </>
          } />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;