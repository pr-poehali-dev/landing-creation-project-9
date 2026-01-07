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
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 relative">
      <div className="container mx-auto relative">
        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 -z-0 opacity-30 md:opacity-50 animate-float">
          <img 
            src="https://cdn.poehali.dev/files/freepik__-ai-__60961.png" 
            alt="AI Pioneer Logo" 
            className="w-full h-auto"
            style={{ transform: 'rotate(-8deg)' }}
          />
        </div>
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in relative z-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-[1.8]">
              <img 
                src="https://cdn.poehali.dev/files/freepik__-ai-__60962.png" 
                alt="AI Ship wheel" 
                className="w-24 h-24 animate-spin-slow"
              />
            </div>
            <Badge variant="outline" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 border-primary/70 bg-card/80 backdrop-blur-sm relative z-10 font-bold tracking-wide badge-ocean">
              П<span className="text-accent glow-text-accent animate-pulse">ИИ</span>ОНЕРСКИЙ ЛАГЕРЬ 18+ · ЛЕТО 2026
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight px-2 hero-title">
            Как <span className="hero-accent">капитаны ИИ</span> покоряют <span className="hero-accent">океан возможностей</span>, зарабатывая в <span className="hero-accent">3–4 раза больше</span> и работая в <span className="hero-accent">2 раза меньше</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
            4 дня в пИИонерском лагере, где вы соберёте свой AI-стек: второй мозг, ассистенты, сайты, презентации и личную систему продуктивности.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Button size="lg" onClick={() => onOpenForm('module01')} className="text-base sm:text-lg bg-primary hover:bg-primary/90 pulse-glow group w-full sm:w-auto">
              <Icon name="Waves" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Записаться
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg border-secondary text-secondary hover:bg-secondary/10 w-full sm:w-auto">
              <a href="#program" className="flex items-center justify-center w-full">
                <Icon name="ChevronDown" className="mr-2 animate-bounce" size={20} />
                Смотреть программу
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12">
            <Card className="neon-border bg-card/95 backdrop-blur-xl shadow-xl">
              <CardContent className="p-4 sm:p-5 flex flex-col items-center gap-2">
                <Icon name="Sun" size={32} className="text-secondary animate-spin" style={{animationDuration: '8s'}} />
                <p className="font-semibold">24–27 июня 2026</p>
                <p className="text-sm text-muted-foreground">4 дня и 3 ночи</p>
              </CardContent>
            </Card>
            <Card className="neon-border bg-card/95 backdrop-blur-xl pulse-glow shadow-xl">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <Icon name="Users" size={32} className="text-accent animate-pulse" />
                <p className="font-semibold text-accent">Осталось {placesLeft} мест</p>
                <p className="text-sm text-muted-foreground">из 30 мест</p>
              </CardContent>
            </Card>
            <Card className="neon-border bg-card/95 backdrop-blur-xl shadow-xl">
              <CardContent className="p-4 flex flex-col items-center gap-2">
                <Icon name="Palmtree" size={32} className="text-accent" style={{animation: 'float 3s ease-in-out infinite'}} />
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