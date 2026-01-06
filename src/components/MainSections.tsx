import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface MainSectionsProps {
  placesLeft: number;
  onOpenForm: (type: 'module01' | 'module02') => void;
}

const MainSections = ({ placesLeft, onOpenForm }: MainSectionsProps) => {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="bg-accent/20 text-accent border-accent/50 mb-3 sm:mb-4 text-xs sm:text-sm">ПРОБЛЕМА</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
              Пока одни жгут токены, другие жгут время впустую
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="neon-border bg-card/95 backdrop-blur-xl animate-scale-in shadow-xl">
              <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                    <Icon name="AlertTriangle" size={24} className="text-red-600" />
                  </div>
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
                stat: '↓ 50% рутины'
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
              <Card key={index} className="neon-border bg-card/95 backdrop-blur-xl hover:scale-105 transition-all duration-300 group cursor-pointer shadow-xl">
                <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-xl bg-${item.color}/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <Icon name={item.icon as any} size={28} className={`text-${item.color}`} />
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

      <section id="program" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/50 mb-3 sm:mb-4 text-xs sm:text-sm">ПРОГРАММА</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Что вы заберёте с собой через <span className="text-primary">96 часов</span>
            </h2>
          </div>
          
          <Card className="neon-border bg-card/95 backdrop-blur-xl mb-6 sm:mb-8 shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/50 text-xs sm:text-sm">HUMAN + AI</Badge>
                <p className="text-xs sm:text-sm text-muted-foreground">Личная эффективность через AI-стек · 4 дня и 3 ночи · старт: 24 июня</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Соберите свою персональную <span className="text-primary glow-text">AI-инфраструктуру</span>
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Фокус модуля – <span className="text-foreground font-semibold">сохранить ваше время</span> и упаковать задачи в систему, где за вас работает ИИ. 
                  Только то, что вы сможете <span className="text-secondary font-semibold">применять ежедневно</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 p-6 rounded-xl bg-muted/30">
                <div className="text-center">
                  <Icon name="Sparkles" size={32} className="text-primary mx-auto mb-2 animate-pulse" />
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-muted-foreground">AI-инструментов</p>
                </div>
                <div className="text-center">
                  <Icon name="Sun" size={32} className="text-secondary mx-auto mb-2 animate-spin" style={{animationDuration: '8s'}} />
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Практика</p>
                </div>
                <div className="text-center">
                  <Icon name="Palmtree" size={32} className="text-accent mx-auto mb-2" style={{animation: 'float 3s ease-in-out infinite'}} />
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Дня интенсива</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Waves" size={24} className="text-primary" style={{animation: 'float 2s ease-in-out infinite'}} />
                  Что вы создадите
                </h4>
                <div className="grid gap-3">
                  {[
                    { icon: 'Cpu', title: 'Второй мозг и умная база знаний', description: 'Структурированное хранилище идей и решений с доступом за секунды' },
                    { icon: 'Bot', title: 'Персональный AI-ассистент', description: 'От личных дневников до бизнес-аналитики и документов' },
                    { icon: 'GraduationCap', title: 'ИИ-преподаватель для любых дисциплин', description: 'Настраиваемые туторы под ваш уровень и темп обучения' },
                    { icon: 'Globe', title: 'Сайты и лендинги без кода', description: 'Собирайте веб-страницы с помощью ИИ за минуты' },
                    { icon: 'MessageSquare', title: 'Мастерство prompt-инженерии', description: 'Управление контекстом, выбор моделей, цепочки запросов' },
                    { icon: 'Sparkles', title: 'Нейро-фотосессии топ-уровня', description: 'Визуалы дороже стоковых решений для вашего бренда' },
                    { icon: 'Presentation', title: 'Презентации от 50 000 ₽', description: 'Продающие PPT для клиентов и своих запусков' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all group cursor-pointer border border-transparent hover:border-primary/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon name={item.icon as any} size={20} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-primary/20 pt-6 sm:pt-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground">Инвестиция в участие</h4>
                    <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                      <span className="text-4xl sm:text-5xl font-bold text-primary">35 000 ₽</span>
                      <div className="space-y-1">
                        <span className="text-xl sm:text-2xl text-muted-foreground line-through block">60 000 ₽</span>
                        <Badge variant="outline" className="border-accent text-accent text-xs sm:text-sm">-42% до 1 марта</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
                      <Icon name="Clock" size={16} className="text-accent animate-pulse" />
                      <span>Цена вырастет после дедлайна</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-accent font-semibold flex-wrap">
                      <Icon name="AlertCircle" size={16} className="animate-pulse" />
                      <span>Осталось {placesLeft} мест из 30</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-full lg:w-auto">
                    <Button size="lg" onClick={() => onOpenForm('module01')} className="bg-primary hover:bg-primary/90 pulse-glow w-full lg:w-auto group text-sm sm:text-base">
                      <Icon name="Waves" className="mr-2 group-hover:rotate-12 transition-transform" size={18} />
                      Забронировать за 35 000 ₽
                    </Button>
                    <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 w-full lg:w-auto text-sm sm:text-base">
                      <Icon name="Send" className="mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                      <a href="https://t.me/ТОЧКИ_НАД_ИИ" target="_blank" rel="noopener noreferrer">Задать вопрос</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Award', title: 'Результат гарантируем', description: 'Спикер — эксперт с 12-летним опытом' },
              { icon: 'Users', title: 'Нетворкинг', description: 'Знакомства с единомышленниками' },
              { icon: 'Headphones', title: 'Поддержка', description: 'Чат поддержки и после кэмпа' }
            ].map((item, index) => (
              <Card key={index} className="neon-border bg-card/95 backdrop-blur-xl shadow-lg group hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name={item.icon as any} size={24} className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="font-semibold mb-1">{item.title}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/50 mb-3 sm:mb-4 text-xs sm:text-sm">ОТЗЫВЫ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Что говорят <span className="text-secondary">участники</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                quote: 'Мастер-класс прошел очень живо. Люди получили практичное понимание, какие процессы можно упростить с ИИ уже завтра.',
                author: 'Павел Недостоев',
                role: 'CEO EVENT MBA',
                rating: 5
              },
              {
                quote: 'Один из самых ярких докладов: сложные технические детали были донесены доступно и креативно.',
                author: 'Иван Юницкий',
                role: 'IT-предприниматель, вожатый кэмпа',
                rating: 5
              }
            ].map((item, index) => (
              <Card key={index} className="neon-border bg-card/95 backdrop-blur-xl hover:scale-105 transition-transform shadow-xl">
                <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <Icon name="Quote" size={32} className="text-primary/30 animate-pulse" />
                  <p className="text-lg italic leading-relaxed">"{item.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name="User" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{item.author}</p>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <div className="flex items-center gap-2 text-accent flex-wrap">
                <Icon name="Sun" size={16} className="animate-spin flex-shrink-0" style={{animationDuration: '6s'}} />
                <span className="text-xs sm:text-sm font-semibold">Старт 24 июня · Осталось {placesLeft} мест из 30</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 pt-2 sm:pt-4">
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

export default MainSections;