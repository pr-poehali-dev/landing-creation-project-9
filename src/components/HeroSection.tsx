import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  placesLeft: number;
  onOpenForm: (type: 'module01' | 'module02') => void;
}

const HeroSection = ({ placesLeft, onOpenForm }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 text-primary shimmer">
            ПИИОНЕРСКИЙ ЛАГЕРЬ 18+ · ЛЕТО 2026
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Как люди, которые умеют работать с <span className="text-primary glow-text">ИИ</span>, зарабатывают в <span className="text-secondary">3–4 раза больше</span> и работают в <span className="text-accent">2 раза меньше</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            4 дня в пИИонерском лагере, где вы соберёте свой AI-стек: второй мозг, ассистенты, сайты, презентации и личную систему продуктивности.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => onOpenForm('module01')} className="text-lg bg-primary hover:bg-primary/90 pulse-glow group">
              <Icon name="Zap" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Записаться на MODULE_01
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-secondary text-secondary hover:bg-secondary/10">
              <a href="#program" className="flex items-center">
                <Icon name="ChevronDown" className="mr-2" size={20} />
                Смотреть программу
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
            <Card className="neon-border bg-card/30 backdrop-blur-xl">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <Icon name="Calendar" size={32} className="text-primary" />
                <p className="font-semibold">24–27 июня 2026</p>
                <p className="text-sm text-muted-foreground">4 дня и 3 ночи</p>
              </CardContent>
            </Card>
            <Card className="neon-border bg-card/30 backdrop-blur-xl pulse-glow">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <Icon name="Users" size={32} className="text-accent" />
                <p className="font-semibold text-accent">Осталось {placesLeft} мест</p>
                <p className="text-sm text-muted-foreground">из 25 мест</p>
              </CardContent>
            </Card>
            <Card className="neon-border bg-card/30 backdrop-blur-xl">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <Icon name="Sparkles" size={32} className="text-secondary" />
                <p className="font-semibold">Практический формат</p>
                <p className="text-sm text-muted-foreground">Без воды и теории</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
