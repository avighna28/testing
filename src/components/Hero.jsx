import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="overlay"></div>
        <img src="/assets/user_hero.png" alt="Gym" />
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="label-top">
            <span className="dot"></span> THE ELITE STANDARD
          </div>
          <h1>
            EVOLVE <br />
            YOUR <span className="text-primary text-italic">POWER</span>
          </h1>
          <p>
            Mission Fitness Club. Your Goals, Our Mission. Best machines, 
            professional trainers, and the perfect place to get stronger every day.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
