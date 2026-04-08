import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageSquare, Sparkles } from 'lucide-react';

const Owner = () => {
  return (
    <section className="owner-section section-padding" id="owner">
      <div className="container">
        <div className="owner-card glass glass-shadow">
          <div className="owner-grid">
            <motion.div 
              className="owner-image-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/owner.png" alt="MFC Owner" />
              <div className="owner-badge">FOUNDER</div>
            </motion.div>

            <motion.div 
              className="owner-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="label">MEET THE VISIONARY</span>
              <h2>THE <span className="text-primary italic">CORE</span> OF MFC</h2>
              
              <div className="owner-info">
                <div className="info-item">
                  <h4>MASTERY</h4>
                  <span>10+ YEARS EXPERIENCE</span>
                </div>
                <p>
                  "We don't just build muscles; we build mindsets. 
                  Mission Fitness Club is the result of a decade 
                  of peak human performance research."
                </p>

                <div className="owner-socials">
                  <a href="#" className="social-glass" title="Instagram">
                    <Camera size={20} />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-glass" title="WhatsApp">
                    <MessageSquare size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <a href="#" className="social-glass" title="Snapchat">
                    <Sparkles size={20} />
                    <span>Snapchat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
