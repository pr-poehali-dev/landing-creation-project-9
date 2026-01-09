import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/50 mb-3 sm:mb-4 text-xs sm:text-sm">ВЫГОДЫ</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate-fade-in px-2">
            Почему в кэмп едут те, кто <span className="text-primary glow-text">думает наперёд</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { 
              icon: 'Waves', 
              title: '10-20 часов в неделю', 
              subtitle: 'Экономия времени',
              description: 'Сократите рутину за счёт AI-ассистентов и автоматизации', 
              color: 'primary',
              stat: '↓ 50% рутины',
              customImage: 'https://cdn.poehali.dev/files/freepik__-ai-__29398.png'
            },
            { 
              icon: 'Sun', 
              title: '3-4x доход', 
              subtitle: 'Рост заработка',
              description: 'Превратите AI-навыки в монетизацию: новые проекты и продукты', 
              color: 'secondary',
              stat: '↑ 300% ROI'
            },
            { 
              icon: 'Brain', 
              title: 'Навык на годы', 
              subtitle: 'Долгосрочная инвестиция',
              description: 'Один раз прокачиваете навык, который отбивается в любых нишах', 
              color: 'accent',
              stat: '∞ применений'
            },
            { 
              icon: 'Sparkles', 
              title: 'Адаптивность', 
              subtitle: 'Гибкость в изменениях',
              description: 'ИИ – ваш усилитель для быстрой адаптации к новым вызовам', 
              color: 'primary',
              stat: '⚡ 2x скорость'
            }
          ].map((item, index) => (
            <Card key={index} className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-all duration-300 group cursor-pointer shadow-xl">
              <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    {(item as any).customImage ? (
                      <img src={(item as any).customImage} alt="" className="w-10 h-10 object-contain" />
                    ) : (
                      <Icon name={item.icon as any} size={28} className={`text-${item.color}`} />
                    )}
                  </div>
                  <Badge variant="outline" className={`text-${item.color} border-${item.color}/50 text-xs`}>
                    {item.stat}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className={`text-sm text-${item.color} font-semibold mb-2`}>{item.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;