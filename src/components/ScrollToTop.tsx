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
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-primary/50 hover:bg-primary/70 text-primary-foreground rounded-full p-4 shadow-xl transition-all hover:scale-110 animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-sm"
          aria-label="Вернуться наверх"
        >
          <Icon name="Mouse" size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;