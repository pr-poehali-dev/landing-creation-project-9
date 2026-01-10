import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-xl transition-all hover:scale-110 animate-in fade-in slide-in-from-bottom-4 duration-300"
          aria-label="Вернуться наверх"
        >
          <Icon name="Mouse" size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
