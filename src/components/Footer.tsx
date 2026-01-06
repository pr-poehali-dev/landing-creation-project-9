import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 border-t border-primary/20 bg-card/80 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-primary glow-text">пИИонерский</span>
              <br />
              <span className="text-secondary">ЛАГЕРЬ</span>
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">AI-интенсив для предпринимателей и творцов</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="Menu" size={18} className="text-primary" />
              Навигация
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#program" className="block hover:text-primary transition-colors">Программа</a>
              <a href="#benefits" className="block hover:text-secondary transition-colors">Преимущества</a>
              <a href="#faq" className="block hover:text-accent transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="MessageCircle" size={18} className="text-secondary" />
              Контакты
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="https://t.me/ТОЧКИ_НАД_ИИ" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors flex items-center gap-2 group">
                <Icon name="Send" size={14} className="group-hover:translate-x-1 transition-transform" />
                Telegram: ТОЧКИ НАД ИИ
              </a>
              <a href="mailto:support@точкинадии.ru" className="block hover:text-primary transition-colors flex items-center gap-2 group">
                <Icon name="Mail" size={14} className="group-hover:scale-110 transition-transform" />
                support@точкинадии.ru
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Icon name="Info" size={18} className="text-accent" />
              Правовая информация
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>ИП Черников Сергей Николаевич</p>
              <p className="text-xs">ОГРНИП: 3317774600305002</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2026 пИИонерский ЛАГЕРЬ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;