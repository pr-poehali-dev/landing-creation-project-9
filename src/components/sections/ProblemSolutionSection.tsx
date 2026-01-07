import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ProblemSolutionSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge className="bg-accent/20 text-accent border-accent/50 mb-3 sm:mb-4 text-xs sm:text-sm">ПРОБЛЕМА</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
            Пока одни жгут токены, другие жгут время впустую
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="neon-border bg-card/50 backdrop-blur-xl animate-scale-in shadow-xl">
            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://cdn.poehali.dev/files/freepik__-ai-__60974.png" alt="Внимание" className="w-12 h-12 animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-red-600">Знакомо?</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Вы тратите часы на рутину, которую уже сегодня можно делегировать ИИ',
                  'Конкуренты двигаются быстрее за счёт AI-автоматизации',
                  'Пробовали ChatGPT, но не встроили в реальные процессы',
                  'Чувствуете, что волна ИИ здесь, но не знаете с чего начать'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <Icon name="X" size={20} className="text-red-600 flex-shrink-0 mt-1 group-hover:rotate-90 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="neon-border bg-card/95 backdrop-blur-xl animate-scale-in shimmer shadow-xl">
            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Sun" size={24} className="text-secondary animate-spin" style={{animationDuration: '6s'}} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary">Решение</h3>
              </div>
              <p className="text-lg">
                <span className="font-semibold text-primary">пИИонерский лагер</span> — это не курс по генерации картинок. 
                Это практический кэмп по <span className="text-secondary font-semibold">AI-ориентированному мышлению</span>.
              </p>
              <ul className="space-y-3">
                {[
                  'Фундаментальные ИИ-навыки, а не хаки',
                  'Бест-практики оптимизации времени',
                  'Личный AI-стек под вашу жизнь'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                    <span className="group-hover:text-secondary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;