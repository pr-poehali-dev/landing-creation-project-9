import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

const SuccessModal = ({ show, onClose }: SuccessModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <Card className="w-full max-w-md neon-border bg-card/95 backdrop-blur-xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-8 text-center space-y-4">
          <div className="flex justify-end mb-2">
            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-primary/10">
              <Icon name="X" size={20} />
            </Button>
          </div>

          <div className="text-6xl mb-4">🎉</div>

          <h2 className="text-2xl font-bold text-foreground">Ура! Заявка получена!</h2>

          <p className="text-foreground font-semibold">Привет, капитан! Ты на борту.</p>

          <div className="text-muted-foreground space-y-3">
            <p>Мы получили твою заявку на пИИонерский ЛАГЕРЬ и скоро свяжемся с тобой, чтобы обсудить детали.</p>
            
            <p>Обычно отвечаем в течение нескольких часов (если не спим 😴).</p>
            
            <p>А пока — подписывайся на наш канал, чтобы быть в курсе всех новостей и получать полезные материалы по ИИ ещё до старта:</p>
          </div>

          <a
            href="https://t.me/chernikovgpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors neon-glow"
          >
            <Icon name="Send" size={20} />
            Перейти в Telegram
          </a>

          <p className="text-foreground font-medium pt-2">До встречи на Песчаном! 🌊</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessModal;
