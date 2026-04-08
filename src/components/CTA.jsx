import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const [showPlans, setShowPlans] = React.useState(false);

  const plans = [
    { title: 'BRONZE', duration: '1 MONTH', price: '₹500' },
    { title: 'SILVER', duration: '3 MONTHS', price: '₹1500' },
    { title: 'ELITE', duration: '1 YEAR', price: '₹6000' }
  ];

  return (
    <section className="cta section-padding">
      <div className="container">
        <div className="cta-card glass">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2 className="cta-title">READY TO <span className="text-primary text-italic">DOMINATE?</span></h2>
            <p>
              Join the community of elite performers. No contracts, just 
              commitment to your own evolution.
            </p>

            {!showPlans ? (
              <form className="signup-form" onSubmit={(e) => { e.preventDefault(); setShowPlans(true); }}>
                <button type="submit" className="btn-join" style={{ width: '100%' }}>JOIN NOW</button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="pricing-grid"
              >
                {plans.map((plan, i) => (
                  <div key={plan.title} className="price-card glass">
                    <span className="price-label">{plan.title}</span>
                    <h3 className="price-amount">{plan.price}</h3>
                    <p className="price-duration">{plan.duration}</p>
                    <button className="select-btn">Select Plan</button>
                  </div>
                ))}
              </motion.div>
            )}

            <div className="cta-footer">
              <span>FREE ASSESSMENT</span>
              <span className="dot"></span>
              <span>PERSONALIZED PLAN</span>
              <span className="dot"></span>
              <span>EXPERT COACHING</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
