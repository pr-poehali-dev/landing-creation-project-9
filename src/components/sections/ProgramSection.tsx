import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AccommodationCarousel from '@/components/AccommodationCarousel';
import ToolsInHand from '@/components/ui/ToolsInHand';
import WorkingHands from '@/components/ui/WorkingHands';
import IntensiveCalendar from '@/components/ui/IntensiveCalendar';

interface ProgramSectionProps {
  placesLeft: number;
  onOpenForm: (type: 'module01' | 'module02') => void;
}

const ProgramSection = ({ placesLeft, onOpenForm }: ProgramSectionProps) => {
  return (
    <>
      <section id="program" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/50 mb-3 sm:mb-4 text-xs sm:text-sm">ПРОГРАММА</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Что вы заберёте с собой через <span className="text-primary">96 часов</span>
            </h2>
          </div>
          
          <Card className="neon-border bg-card/50 backdrop-blur-xl mb-6 sm:mb-8 shadow-xl">
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-6 rounded-xl bg-muted/20">
                <div className="flex flex-col items-center">
                  <div className="mb-2 text-primary">
                    <ToolsInHand size={32} />
                  </div>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-muted-foreground">AI-инструментов</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-2 text-secondary">
                    <WorkingHands size={32} />
                  </div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Практика</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-2 text-accent">
                    <IntensiveCalendar size={32} />
                  </div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Дня интенсива</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Waves" size={24} className="text-primary" style={{animation: 'float 2s ease-in-out infinite'}} />
                  Что вы создадите
                </h4>
                <div className="grid gap-3 sm:gap-4">
                  {[
                    { icon: 'Cpu', title: 'Второй мозг и умная база знаний', description: 'Структурированное хранилище идей и решений с доступом за секунды' },
                    { icon: 'Bot', title: 'Персональный AI-ассистент', description: 'От личных дневников до бизнес-аналитики и документов' },
                    { icon: 'GraduationCap', title: 'ИИ-преподаватель для любых дисциплин', description: 'Настраиваемые туторы под ваш уровень и темп обучения' },
                    { icon: 'Globe', title: 'Сайты и лендинги без кода', description: 'Собирайте веб-страницы с помощью ИИ за минуты' },
                    { icon: 'MessageSquare', title: 'Мастерство prompt-инженерии', description: 'Управление контекстом, выбор моделей, цепочки запросов' },
                    { icon: 'Sparkles', title: 'Нейро-фотосессии топ-уровня', description: 'Визуалы дороже стоковых решений для вашего бренда' },
                    { icon: 'Presentation', title: 'Презентации от 50 000 ₽', description: 'Продающие PPT для клиентов и своих запусков' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all group cursor-pointer border border-transparent hover:border-primary/30">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon name={item.icon as any} size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">{item.title}</h5>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-primary/20 pt-6 sm:pt-8">
                <Card className="neon-border bg-gradient-to-br from-secondary/5 to-accent/5 mb-6">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Star" size={24} className="text-secondary flex-shrink-0 animate-pulse" />
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-secondary mb-2">Всё включено. Буквально всё:</h4>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed">
                          Развлечения, баня, шашлыки, проживание и трёхразовое питание каждый день. Честно говоря, мы сами доплачиваем, лишь бы вы приехали)) Это не та ситуация, где нужно думать — просто берите и наслаждайтесь.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

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
                    <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 w-full lg:w-auto text-sm sm:text-base" asChild>
                      <a href="https://t.me/DashaChernikova8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        <Icon name="Send" className="mr-2 group-hover:translate-x-1 transition-transform" size={16} />
                        Задать вопрос
                      </a>
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
              <Card key={index} className="neon-border bg-card/50 backdrop-blur-xl shadow-lg group hover:scale-105 transition-transform cursor-pointer">
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

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/50 mb-3 sm:mb-4 text-xs sm:text-sm">СПИКЕР МЕРОПРИЯТИЯ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Кто будет <span className="text-primary glow-text">вести</span> программу
            </h2>
          </div>
          <Card className="neon-border bg-card/50 backdrop-blur-xl shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                  <img 
                    src="https://cdn.poehali.dev/files/freepik__-__92401.png" 
                    alt="Сергей Черников" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1">Сергей Черников</h3>
                    <p className="text-red-600 font-bold text-sm sm:text-base mb-2">главный вожатый</p>
                    <p className="text-primary font-semibold text-sm sm:text-base">Эксперт в области ИИ, нейросетей и маркетинга</p>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Icon name="Award" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <p>12+ лет опыта в области маркетинга, продвижения, искусственного интеллекта и машинного обучения</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Users" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <p>Помог более 500 предпринимателям из Владивостока внедрить ИИ в свои процессы</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="BookOpen" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <p>Автор популярного блога о машинном обучении</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <Badge className="bg-accent/20 text-accent border-accent/50 mb-3 sm:mb-4 text-xs sm:text-sm">МЕСТО ПРОВЕДЕНИЯ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Где будет проходить <span className="text-accent">интенсив</span>
            </h2>
          </div>
          <Card className="neon-border bg-card/50 backdrop-blur-xl shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">База отдыха «Плёсы Песчаного»</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Полуостров Песчаный, Владивосток</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Icon name="Waves" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p>Прямой выход к морю — идеальное место для вдохновения и отдыха</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Trees" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <p>Природа и свежий воздух создают идеальную атмосферу для обучения</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Home" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <p>Комфортные условия проживания и современная инфраструктура</p>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/20">
                    <Icon name="MapPin" size={20} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Адрес</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Приморский край, полуостров Песчаный (г. Владивосток), с. Береговое, ул. Арсеньева 10В</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/20">
                    <Icon name="Calendar" size={20} className="text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Даты</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">24–27 июня 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary/50 mb-3 sm:mb-4 text-xs sm:text-sm">МАРШРУТ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Как к нам <span className="text-secondary">добраться?</span>
            </h2>
          </div>
          <Card className="neon-border bg-card/50 backdrop-blur-xl shadow-xl">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <p className="text-center text-base sm:text-lg font-semibold text-foreground mb-6">
                Вы можете добраться до базы отдыха удобным для вас способом:
              </p>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-80 rounded-lg overflow-hidden border-4 border-primary/20 flex-shrink-0 mx-auto lg:mx-0">
                  <img 
                    src="https://cdn.poehali.dev/files/Screenshot (5).png" 
                    alt="Карта проезда" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Waves" size={14} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-primary mb-1">1. МОРСКОЙ МАРШРУТ</h4>
                      <p className="text-xs text-muted-foreground leading-snug">
                        Рядом с ж/д вокзалом города Владивосток находится Вокзал Прибрежных сообщений (паромная переправа), оттуда по расписанию отходит Катер на Мыс Песчаный. Катер идет два раза в день (кроме вторника и четверга).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/20">
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Car" size={14} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-accent mb-1">2. НАЗЕМНЫЙ МАРШРУТ</h4>
                      <p className="text-xs text-muted-foreground leading-snug">
                        По трассе М60 Владивосток-Хабаровск до поворота на Раздольное, затем по главной дороге поселка до поворота налево на мост (на указателе отмечено: "Хасан - налево"). Затем 57 км по основной дороге до села Занадворовка, проехать его (трасса идет сквозь поселок) и еще 1 км до поворота на село Береговое, поворот налево на грунтовую дорогу (22 км) (большой синий указатель). Далее по хорошей грунтовке 14 км до села Береговое. Проехать его. И остается еще 6 км до пирса.
                      </p>
                    </div>
                  </div>

                  <div className="text-center pt-2 border-t border-primary/20">
                    <p className="text-sm sm:text-base font-bold text-secondary">До скорой встречи!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/50 mb-3 sm:mb-4 text-xs sm:text-sm">ПРОЖИВАНИЕ</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              Как мы будем <span className="text-primary">жить</span>
            </h2>
          </div>
          <Card className="neon-border bg-card/50 backdrop-blur-xl shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <AccommodationCarousel />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProgramSection;