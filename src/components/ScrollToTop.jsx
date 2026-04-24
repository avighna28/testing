import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small delay to ensure the page has rendered and animations have started
    const timeout = setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 300); // 300ms is usually the sweet spot for React mount

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
