import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onOpenForm: (type: 'module01' | 'module02') => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-card/90 border-b border-primary/20 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-primary glow-text">пИИонерский</span>
          <span className="text-secondary ml-2">ЛАГЕРЬ</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#program" className="hover:text-primary transition-colors">Программа</a>
          <a href="#benefits" className="hover:text-secondary transition-colors">Преимущества</a>
          <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          <Button onClick={() => onOpenForm('module01')} className="bg-primary hover:bg-primary/90 pulse-glow">
            Записаться
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </Button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-card/95 border-t border-primary/20 animate-fade-in shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#program" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Программа</a>
            <a href="#benefits" className="hover:text-secondary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
            <a href="#faq" className="hover:text-accent transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
            <Button onClick={() => { onOpenForm('module01'); setMobileMenuOpen(false); }} className="w-full bg-primary pulse-glow">
              Записаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;