import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface TestimonialsCTAFAQProps {
  placesLeft: number;
  onOpenForm: (type: 'module01' | 'module02') => void;
}

const TestimonialsCTAFAQ = ({ placesLeft, onOpenForm }: TestimonialsCTAFAQProps) => {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Готовы встроить <span className="text-primary glow-text">ИИ</span> в жизнь?
            </h2>
          </div>
          <Card className="neon-border bg-card/95 backdrop-blur-xl hover:scale-105 transition-all cursor-pointer shimmer group shadow-xl max-w-2xl mx-auto" onClick={() => onOpenForm('module01')}>
            <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
              <div className="flex justify-between items-start gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/50 text-xs sm:text-sm">HUMAN + AI</Badge>
                <Icon name="ArrowRight" size={20} className="text-primary group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">4 дня интенсивной работы над вашим личным AI-стеком</h3>
              
              <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/30">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <Icon name="Star" size={20} className="text-secondary flex-shrink-0 animate-pulse mt-0.5" />
                    <div>
                      <h4 className="font-bold text-secondary mb-2 text-sm sm:text-base">Если смотреть честно, предложение неадекватно выгодное.</h4>
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                        Всё уже включено: и программа, и баня, и шашлыки, и проживание, и питание. Мы заморочились и сделали формат «приехал — и больше ни о чём не думаешь». Именно поэтому тянуть с оплатой — самое дорогое решение, которое вы можете принять.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-2 text-accent flex-wrap">
                <Icon name="Sun" size={16} className="animate-spin flex-shrink-0" style={{animationDuration: '6s'}} />
                <span className="text-xs sm:text-sm font-semibold">Старт 24 июня · Осталось {placesLeft} мест из 30</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">35 000 ₽</span>
                <div className="space-y-1">
                  <span className="text-lg sm:text-xl text-muted-foreground line-through block">60 000 ₽</span>
                  <Badge variant="outline" className="border-accent text-accent text-xs sm:text-sm">-42% до 1 марта</Badge>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 group-hover:pulse-glow text-sm sm:text-base">
                Записаться сейчас
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <Badge className="bg-accent/20 text-accent border-accent/50 mb-3 sm:mb-4 text-xs sm:text-sm">FAQ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Частые <span className="text-accent">вопросы</span>
            </h2>
          </div>
          <Card className="neon-border bg-card/95 backdrop-blur-xl shadow-xl">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: 'Кому подойдёт этот кэмп?',
                    answer: 'Предпринимателям, фрилансерам, руководителям, создателям продуктов, маркетологам и всем, кто хочет встроить ИИ в свои процессы и повысить личную эффективность.'
                  },
                  {
                    question: 'Нужны ли технические навыки?',
                    answer: 'Нет. Мы не учим программированию. Мы учим мыслить через ИИ и использовать готовые инструменты под ваши задачи.'
                  },
                  {
                    question: 'Что взять с собой?',
                    answer: 'Ноутбук, смартфон, наушники, зарядные устройства и готовность экспериментировать. Доступ к необходимым сервисам и материалам мы предоставим.'
                  },
                  {
                    question: 'Можно ли оплатить по частям?',
                    answer: 'Да, уточните доступные варианты рассрочки у организаторов через Telegram.'
                  },
                  {
                    question: 'Что если у меня не получится приехать?',
                    answer: 'Условия возврата и переноса участия описаны в договоре оферты. Свяжитесь с поддержкой, чтобы подобрать решение.'
                  }
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      <span className="flex items-center gap-2">
                        <Icon name="HelpCircle" size={18} className="text-primary group-hover:rotate-12 transition-transform" />
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-7">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default TestimonialsCTAFAQ;