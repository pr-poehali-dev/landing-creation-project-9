import Icon from '@/components/ui/icon';

const SupportButton = () => {
  return (
    <a
      href="https://t.me/chernikovneuro_support_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 pulse-glow group"
      aria-label="Поддержка в Telegram"
    >
      <div className="relative">
        <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full" />
      </div>
    </a>
  );
};

export default SupportButton;
