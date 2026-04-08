import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Owner', href: '/#owner' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/" className="logo">
            <img 
              src="/assets/logo.png" 
              alt="MFC Logo" 
              className="header-logo" 
              fetchPriority="high"
              loading="eager"
            />
            <div className="logo-text">
              MFC<motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >.</motion.span>
            </div>
          </Link>
        </motion.div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <button className="btn-primary-sm desktop-btn">Start_Training</button>
          <button 
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary-full">Start_Training</button>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
