import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import Footer from '@/components/Footer';

const Index = () => {
  const [placesLeft, setPlacesLeft] = useState(19);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'module01' | 'module02'>('module01');

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
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setShowForm(false);
        setFormData({ name: '', phone: '', role: '' });
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

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={() => setShowForm(false)}>
            <Card className="w-full max-w-md neon-border bg-card/95 backdrop-blur-xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">
                    {formType === 'module01' ? 'HUMAN + AI' : 'VIBE MARKETING'}
                  </h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowForm(false)}>
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="ФИО *" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Номер телефона *" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Чем вы занимаетесь? *" 
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    {formType === 'module01' ? 'Забронировать место' : 'Встать в лист ожидания'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        <HeroSection placesLeft={placesLeft} onOpenForm={openForm} />
        <MainSections placesLeft={placesLeft} onOpenForm={openForm} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;