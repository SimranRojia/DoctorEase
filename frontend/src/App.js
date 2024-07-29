import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Service/Service';
import Doctors from './components/Doctor/Doctor';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

function App() {
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#87CEEB',
    padding: '20px',
  };

  const h1Style = {
    color: '#333',
    fontSize: '3rem',
    margin: 0,
  };

  const h3Style = {
    color: '#666',
    fontSize: '1.5rem',
    margin: 0,
  };

  return (
    <Router>
      <div>
        <header style={headerStyle}>
          <h1 style={h1Style}>DoctorEase</h1>
          <h3 style={h3Style}>India's No.1 online doctor consulting</h3>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

