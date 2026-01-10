import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Icon from '@/components/ui/icon';

const PriceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem('priceModalSeen');
      if (!hasSeenModal) {
        setIsOpen(true);
        sessionStorage.setItem('priceModalSeen', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-background border-2 border-primary rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 shadow-lg transition-all hover:scale-110"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-primary/10 rounded-full p-4">
              <Icon name="Clock" size={48} className="text-primary" />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            ⏰ Время ограничено!
          </h3>

          <p className="text-lg mb-2">
            Специальная цена <span className="text-primary font-bold text-2xl">-42%</span>
          </p>
          
          <p className="text-muted-foreground mb-6">
            действует только до <span className="font-bold text-foreground">1 марта</span>
          </p>

          <div className="bg-primary/5 rounded-xl p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Успейте забронировать место по самой выгодной цене:</p>
            <p className="text-3xl font-bold text-primary">35 000 ₽</p>
            <p className="text-sm text-muted-foreground mt-1">вместо 60 000 ₽</p>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg mb-3"
          >
            Забронировать место
          </button>

          <button
            onClick={handleClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceModal;
