import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

const PriceModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem('priceModalSeen');
      if (!hasSeenModal) {
        setIsOpen(true);
        sessionStorage.setItem('priceModalSeen', 'true');
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/ac1f715b-f732-4bcd-9475-5c7805a3d158', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'module01'
        })
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        alert(result.error || 'Произошла ошибка. Попробуйте еще раз.');
      }
    } catch (error) {
      alert('Ошибка отправки. Проверьте интернет и попробуйте снова.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-background border-2 border-primary rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="mb-6 flex justify-center">
                <div className="bg-green-500/10 rounded-full p-4">
                  <Icon name="CheckCircle" size={48} className="text-green-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Отлично! 🎉</h3>
              <p className="text-muted-foreground">Ваша заявка принята. Мы свяжемся с вами в ближайшее время!</p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex justify-center">
                <div className="bg-primary/10 rounded-full p-4">
                  <Icon name="Clock" size={48} className="text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                ⏰ Время ограничено!
              </h3>

              <p className="text-lg mb-2 text-center">
                Специальная цена <span className="text-primary font-bold text-2xl">-42%</span>
              </p>
              
              <p className="text-muted-foreground mb-6 text-center">
                действует только до <span className="font-bold text-foreground">1 марта</span>
              </p>

              <div className="bg-primary/5 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Успейте забронировать место по самой выгодной цене:</p>
                <p className="text-3xl font-bold text-primary">35 000 ₽</p>
                <p className="text-sm text-muted-foreground mt-1">вместо 60 000 ₽</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="ФИО *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted/50 border-primary/30"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="Номер телефона *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-muted/50 border-primary/30"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Чем вы занимаетесь? *"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                    className="bg-muted/50 border-primary/30"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    id="modal-terms"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 cursor-pointer"
                  />
                  <label htmlFor="modal-terms" className="text-xs text-muted-foreground cursor-pointer">
                    Я ознакомлен(а) с Договором оферты и Политикой конфиденциальности
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Забронировать место
                </button>
              </form>

              <button
                onClick={handleClose}
                className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Закрыть
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceModal;