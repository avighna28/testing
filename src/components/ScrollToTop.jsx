import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Buffer for page transition and mounting
    const timeout = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback if element wasn't ready yet
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 600); 

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
