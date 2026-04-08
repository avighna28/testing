import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            MFC<span>.</span>
            <p className="footer-tagline">Mission Fitness Club</p>
          </div>
          
          <div className="footer-links">
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/#owner">Owner</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/#community">Community</Link></li>
            </ul>
            <div className="link-col">
              <h4>Support</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Help Center</a>
            </div>
            <div className="link-col">
              <h4>Location</h4>
              <p className="footer-address">
                MFC (Mission Fitness Club)<br />
                Raisen, Madhya Pradesh
              </p>
              <a href="https://share.google/YUCbXprY7D2TR9wSL" target="_blank" rel="noreferrer" className="map-link">
                View on Google Maps →
              </a>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaFacebookF size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MISSION FITNESS CLUB. ALL RIGHTS RESERVED.</p>
          <div className="made-by">
            <span>MADE BY</span>
            <a href="https://www.instagram.com/avighna_exe?igsh=dzVxeW93Y2R4eXp4" target="_blank" rel="noreferrer">
               AVIGHNA SISODIA <FaInstagram className="dev-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
