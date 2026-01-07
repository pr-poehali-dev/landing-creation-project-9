import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import Footer from '@/components/Footer';
import BookingFormModal from '@/components/modals/BookingFormModal';
import OfertaModal from '@/components/modals/OfertaModal';
import PrivacyModal from '@/components/modals/PrivacyModal';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  const [placesLeft, setPlacesLeft] = useState(19);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showOferta, setShowOferta] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [formType, setFormType] = useState<'module01' | 'module02'>('module01');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlacesLeft(prev => Math.max(15, prev - (Math.random() > 0.7 ? 1 : 0)));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

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
          formType
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert('🎉 Ура! Заявка получена!\n\nПривет, капитан! Ты на борту.\n\nМы получили твою заявку на пИИонерский ЛАГЕРЬ и скоро свяжемся с тобой, чтобы обсудить детали.\n\nОбычно отвечаем в течение нескольких часов (если не спим 😴).\n\nА пока — подписывайся на наш канал, чтобы быть в курсе всех новостей и получать полезные материалы по ИИ ещё до старта:\n\n👉 https://t.me/chernikovgpt\n\nДо встречи на Песчаном! 🌊');
        setShowForm(false);
        setFormData({ name: '', phone: '', role: '' });
        setAgreedToTerms(false);
      } else {
        alert(result.error || 'Произошла ошибка. Попробуйте еще раз.');
      }
    } catch (error) {
      alert('Ошибка отправки. Проверьте интернет и попробуйте снова.');
    }
  };

  const openForm = (type: 'module01' | 'module02') => {
    setFormType(type);
    setShowForm(true);
    setAgreedToTerms(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/0c6e3721-7d9f-4d23-a289-2455cad00bee/files/0225e313-ee53-4f81-aa1b-4a8dfd6478c6.jpg" 
          alt="Beach background" 
          className="w-full h-full object-cover wave-animation"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10">
        <Header onOpenForm={openForm} />

        <BookingFormModal
          showForm={showForm}
          formType={formType}
          formData={formData}
          agreedToTerms={agreedToTerms}
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
          onFormDataChange={setFormData}
          onAgreedToTermsChange={setAgreedToTerms}
          onShowOferta={() => setShowOferta(true)}
          onShowPrivacy={() => setShowPrivacy(true)}
        />

        <OfertaModal
          showOferta={showOferta}
          onClose={() => setShowOferta(false)}
        />

        <PrivacyModal
          showPrivacy={showPrivacy}
          onClose={() => setShowPrivacy(false)}
        />

        <HeroSection placesLeft={placesLeft} onOpenForm={openForm} />
        <MainSections placesLeft={placesLeft} onOpenForm={openForm} />
        <Footer />

        <ScrollToTopButton
          showScrollTop={showScrollTop}
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};

export default Index;