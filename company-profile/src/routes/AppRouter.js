import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactNew from '../pages/ContactNew';
import Footer from '../components/Footer';

function AppRouter() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactNew />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </>
  );
}

export default AppRouter;
