import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useEffect, useRef } from 'react';

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

const SuccessModal = ({ show, onClose }: SuccessModalProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!show || !canvasRef.current) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const playSuccessSound = () => {
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + i * 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.3);
        
        oscillator.start(audioContext.currentTime + i * 0.1);
        oscillator.stop(audioContext.currentTime + i * 0.1 + 0.3);
      });
    };
    
    playSuccessSound();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiCount = 150;
    const confetti: Array<{
      x: number;
      y: number;
      r: number;
      d: number;
      color: string;
      tilt: number;
      tiltAngle: number;
      tiltAngleIncrement: number;
    }> = [];

    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * confettiCount,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltAngle: 0,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05,
      });
    }

    let animationFrame: number;
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.lineWidth = c.r / 2;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
        ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 5);
        ctx.stroke();

        c.tiltAngle += c.tiltAngleIncrement;
        c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
        c.tilt = Math.sin(c.tiltAngle - i / 3) * 15;

        if (c.y > canvas.height) {
          confetti[i] = {
            ...c,
            y: -10,
            x: Math.random() * canvas.width,
          };
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    const timeout = setTimeout(() => {
      cancelAnimationFrame(animationFrame);
    }, 5000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 51 }}
      />
      <Card className="w-full max-w-md neon-border bg-card/95 backdrop-blur-xl animate-scale-in relative z-[52]" onClick={(e) => e.stopPropagation()}>
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