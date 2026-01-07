import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ScrollToTopButtonProps {
  showScrollTop: boolean;
  onClick: () => void;
}

const ScrollToTopButton = ({ showScrollTop, onClick }: ScrollToTopButtonProps) => {
  if (!showScrollTop) return null;

  return (
    <Button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 shadow-lg pulse-glow animate-fade-in"
      size="icon"
    >
      <Icon name="ArrowUp" size={24} />
    </Button>
  );
};

export default ScrollToTopButton;
