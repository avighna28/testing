import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Dumbbell, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeTab, setActiveTab] = React.useState('All');

  const categories = [
    { name: 'All', icon: <LayoutGrid /> },
    { name: 'Elite Machines', icon: <Dumbbell /> },
    { name: 'Facilities', icon: <ShieldCheck /> }
  ];

  const galleryItems = [
    { title: 'Main Gym Floor', type: 'landscape', category: 'Facilities' },
    { title: 'Dumbbell Column', type: 'portrait', category: 'Elite Machines' },
    { title: 'Gym Interior', type: 'landscape', category: 'Facilities' },
    { title: 'Iron Plates Zone', type: 'portrait', category: 'Elite Machines' },
    { title: 'Changing Room', type: 'portrait', category: 'Facilities' },
    { title: 'Dynamic Lighting', type: 'landscape', category: 'Facilities' },
    { title: 'Resistance Machines', type: 'landscape', category: 'Elite Machines' },
    { title: 'Cardio Section', type: 'portrait', category: 'Elite Machines' }
  ];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gallery-page"
    >
      <section className="gallery-hero">
        <div className="container">
          <Link to="/" className="back-btn glass">← BACK TO HOME</Link>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="gallery-title-wrap"
          >
            <span className="label">THE VISUAL REVEAL</span>
            <h1>MFC <span className="text-primary italic">GALLERY</span></h1>
            <p className="large-p">Simple. Raw. Powerful. Explore our premium facilities.</p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-grid-section section-padding">
        <div className="container">
          <div className="category-tabs">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                onClick={() => setActiveTab(cat.name)}
                className={`cat-pill glass ${activeTab === cat.name ? 'active-pill' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((img, i) => (
                <motion.div 
                  key={img.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`masonry-item ${img.type} glass glass-shadow`}
                >
                  <div className="placeholder-content">
                    <div className="gym-watermark">MFC</div>
                    <div className="img-info">
                      <h3>{img.title}</h3>
                      <span>{img.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="gallery-bottom glass">
        <div className="container">
          <div className="bottom-info">
            <h2>WANT TO SEE IT <span className="text-primary italic">IN PERSON?</span></h2>
            <Link to="/" className="btn-solid">Schedule a Visit</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
