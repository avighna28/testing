import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    'PROPER VENTILATION', 'PREMIUM WASHROOMS', 'WATER PURIFIER', 
    'CHANGING ROOMS', 'DYNAMIC LIGHTING', 'HIGH QUALITY MACHINES', 
    'SOFT MATTING', 'SURROUND SOUND SYSTEM', 'DIET PLANNER', 
    'EXPERT GUIDANCE', 'PERSONAL TRAINING', '24/7 ACCESS', 'ELITE COMMUNITY'
  ];

  const baseX = useMotionValue(0);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      // Slow constant speed
      let moveBy = -1.2; 
      baseX.set(baseX.get() + moveBy);
      
      // Reset loop point (halfway through the triple list)
      if (baseX.get() <= -1500) {
        baseX.set(0);
      }
    }
  });

  return (
    <section className="facilities-new">
      <div 
        className="ticker-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          ref={trackRef}
          className="ticker-track"
          style={{ x: baseX }}
          drag="x"
          dragConstraints={{ left: -1500, right: 1500 }}
          onDragStart={() => setIsHovered(true)}
          onDragEnd={() => setIsHovered(false)}
        >
          {[...facilities, ...facilities, ...facilities].map((item, i) => (
            <div key={i} className="ticker-item">
              <span className="dot"></span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container">
        <div className="methodology-compact section-padding">
          <div className="meth-grid">
            <motion.div 
              className="meth-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/assets/philosophy.png" alt="MFC Gym" />
              <div className="image-overlay-text">ELITE MFC</div>
            </motion.div>

            <motion.div 
              className="meth-info"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mfc-border-box">
                <span className="label">OUR CORE</span>
                <h2>MISSION <span className="text-primary italic">PRECISION</span></h2>
                <p>
                  At MFC, we specialize in high-output human performance. 
                  Our facilities are tools for your evolution. Modern engineering 
                  meets raw grit.
                </p>
                <div className="mini-stats">
                  <div className="stat">
                    <h4>10+</h4>
                    <span>YEARS EXP</span>
                  </div>
                  <div className="stat">
                    <h4>50+</h4>
                    <span>MACHINES</span>
                  </div>
                  <div className="stat">
                    <h4>1:1</h4>
                    <span>GUIDANCE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
