import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      label: 'STRENGTH',
      title: 'IRON_CORE',
      desc: 'Master strength training patterns progressive overload and olympic principles. Built for raw power.',
      intensity: '85%',
      img: '/assets/bodybuilder.png'
    },
    {
      label: 'CONDITIONING',
      title: 'PULSE_HIIT',
      desc: 'High intensity anaerobic training designed to push your cardiovascular celling to the limit.',
      intensity: '95%',
      img: '/assets/conditioning.png'
    },
    {
      label: 'MOBILITY',
      title: 'ZEN_KINETIC',
      desc: 'Enhanced range of motion, recovery, and resilience protocols for longevity and athletic performance.',
      intensity: '65%',
      img: '/assets/mobility.png'
    }
  ];

  return (
    <section className="programs section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="title-wrap">
            <h2>Featured <br />Programs</h2>
            <div className="dot-line"></div>
          </div>
          <p className="header-desc">
            Curated training experiences led by world-class performance coaches. Choose your path.
          </p>
        </motion.div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.div 
              className="program-card glass" 
              key={program.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-img-wrap">
                <img src={program.img} alt={program.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-body">
                <div className="card-label-row">
                  <span className="card-label">{program.label}</span>
                  <div className="label-icon">↗</div>
                </div>
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Programs;
