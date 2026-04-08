import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import Owner from './components/Owner';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <main>
    <Hero />
    <Philosophy />
    <Programs />
    <Owner />
    <CTA />
  </main>
);

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
