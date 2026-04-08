import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: <Clock />, value: '2016', label: 'ESTABLISHED' },
    { icon: <Award />, value: '10+', label: 'YEARS EXP.' },
    { icon: <Users />, value: '5000+', label: 'TRANSFORMED' },
    { icon: <MapPin />, value: 'RAISEN', label: 'LOCATION' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <Link to="/" className="back-btn glass">← BACK TO HOME</Link>
          <div className="about-hero-grid">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="about-hero-content"
            >
              <span className="label">OUR LEGACY</span>
              <h1>THE <span className="text-primary italic">MISSION</span> BEHIND MFC</h1>
              <p className="large-p">
                Founded in 2016, Mission Fitness Club has been the heart of 
                fitness in Raisen, Madhya Pradesh. We are not just a gym; 
                we are a movement.
              </p>
            </motion.div>
            <div className="about-stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card glass">
                  <div className="stat-icon">{stat.icon}</div>
                  <h3>{stat.value}</h3>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className="visionary-section section-padding glass-bg">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-image">
               <div className="img-placeholder glass">
                  <div className="gym-watermark">OWNER</div>
               </div>
            </div>
            <div className="vision-content">
              <span className="label">THE FOUNDER</span>
              <h2>MR. BIKKA <br/><span className="text-primary">(ASHPIT SINGH)</span></h2>
              <div className="experience-tag">10 YEARS OF PROFESSIONAL MASTERY</div>
              <p>
                "Mission Fitness Club was born from a vision to bring 
                world-class training to Raisen. With over a decade of 
                experience in bodybuilding and fitness education, I've 
                dedicated my life to helping people find their strongest 
                selves."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="location-map-section section-padding">
        <div className="container">
          <div className="location-header">
            <span className="label">FIND US</span>
            <h2>VISIT THE <span className="text-primary italic">ARENA</span></h2>
          </div>
          
          <div className="map-card-centered glass glass-shadow">
            <div className="map-info">
              <h3>MFC (Mission Fitness Club)</h3>
              <p>2nd floor, Jeetu Plazza, in front of Bijali Ghar,<br /> Raisen, Madhya Pradesh 464551</p>
              <a href="https://share.google/YUCbXprY7D2TR9wSL" target="_blank" className="btn-solid">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
