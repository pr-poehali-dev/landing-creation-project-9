import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [placesLeft, setPlacesLeft] = useState(8);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    role: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'module01' | 'module02'>('module01');

  useEffect(() => {
    const interval = setInterval(() => {
      setPlacesLeft(prev => Math.max(3, prev - (Math.random() > 0.7 ? 1 : 0)));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в Telegram в ближайшее время.');
    setShowForm(false);
    setFormData({ name: '', email: '', telegram: '', role: '' });
  };

  const openForm = (type: 'module01' | 'module02') => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="gradient-mesh grid-pattern fixed inset-0 z-0" />
      
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary glow-text">пИИонерский</span>
              <span className="text-secondary ml-2">ЛАГЕР</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#program" className="hover:text-primary transition-colors">Программа</a>
              <a href="#benefits" className="hover:text-secondary transition-colors">Преимущества</a>
              <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
              <Button onClick={() => openForm('module01')} className="bg-primary hover:bg-primary/90 pulse-glow">
                Записаться
              </Button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden backdrop-blur-xl bg-background/90 border-t border-primary/20 animate-fade-in">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                <a href="#program" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Программа</a>
                <a href="#benefits" className="hover:text-secondary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
                <a href="#faq" className="hover:text-accent transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <Button onClick={() => { openForm('module01'); setMobileMenuOpen(false); }} className="w-full bg-primary pulse-glow">
                  Записаться
                </Button>
              </div>
            </div>
          )}
        </header>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={() => setShowForm(false)}>
            <Card className="w-full max-w-md neon-border bg-card/95 backdrop-blur-xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">
                    {formType === 'module01' ? 'MODULE_01 :: HUMAN + AI' : 'MODULE_02 :: VIBE MARKETING'}
                  </h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowForm(false)}>
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Имя *" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email *" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Telegram @username *" 
                      required
                      value={formData.telegram}
                      onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                      className="bg-muted/50 border-primary/30"
                    />
                  </div>
                  {formType === 'module01' && (
                    <div>
                      <Input 
                        placeholder="Чем вы занимаетесь?" 
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="bg-muted/50 border-primary/30"
                      />
                    </div>
                  )}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    {formType === 'module01' ? 'Забронировать место' : 'Встать в лист ожидания'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

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
                <Button size="lg" onClick={() => openForm('module01')} className="text-lg bg-primary hover:bg-primary/90 pulse-glow group">
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

        <section className="py-20 px-4 bg-muted/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge className="bg-accent/20 text-accent border-accent/50 mb-4">ПРОБЛЕМА</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Пока одни жгут токены, другие жгут время впустую
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="neon-border bg-card/50 backdrop-blur-xl animate-scale-in">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon name="AlertTriangle" size={24} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-accent">Знакомо?</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Вы тратите часы на рутину, которую уже сегодня можно делегировать ИИ',
                      'Конкуренты двигаются быстрее за счёт AI-автоматизации',
                      'Пробовали ChatGPT, но не встроили в реальные процессы',
                      'Чувствуете, что волна ИИ здесь, но не знаете с чего начать'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <Icon name="X" size={20} className="text-accent flex-shrink-0 mt-1 group-hover:rotate-90 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="neon-border bg-card/50 backdrop-blur-xl animate-scale-in shimmer">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">Решение</h3>
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
                        <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-secondary transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/50 mb-4">ВЫГОДЫ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
                Почему в кэмп едут те, кто <span className="text-primary glow-text">думает наперёд</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: 'Clock', 
                  title: '10-20 часов в неделю', 
                  subtitle: 'Экономия времени',
                  description: 'Сократите рутину за счёт AI-ассистентов и автоматизации', 
                  color: 'primary',
                  stat: '↓ 50% рутины'
                },
                { 
                  icon: 'TrendingUp', 
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
                  icon: 'Zap', 
                  title: 'Адаптивность', 
                  subtitle: 'Гибкость в изменениях',
                  description: 'ИИ – ваш усилитель для быстрой адаптации к новым вызовам', 
                  color: 'primary',
                  stat: '⚡ 2x скорость'
                }
              ].map((item, index) => (
                <Card key={index} className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 space-y-4">
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

        <section id="program" className="py-20 px-4 bg-muted/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/50 mb-4">ПРОГРАММА</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Что вы заберёте с собой через <span className="text-primary">96 часов</span>
              </h2>
            </div>
            
            <Card className="neon-border bg-card/50 backdrop-blur-xl mb-8">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/20 text-primary border-primary/50">MODULE_01 :: HUMAN + AI</Badge>
                  <p className="text-sm text-muted-foreground">Личная эффективность через AI-стек · 4 дня и 3 ночи · старт: 24 июня</p>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Соберите свою персональную <span className="text-primary glow-text">AI-инфраструктуру</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Фокус модуля – <span className="text-foreground font-semibold">сохранить ваше время</span> и упаковать задачи в систему, где за вас работает ИИ. 
                    Только то, что вы сможете <span className="text-secondary font-semibold">применять ежедневно</span>.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 p-6 rounded-xl bg-muted/30">
                  <div className="text-center">
                    <Icon name="BookOpen" size={32} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">7</p>
                    <p className="text-sm text-muted-foreground">AI-инструментов</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Target" size={32} className="text-secondary mx-auto mb-2" />
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-muted-foreground">Практика</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Rocket" size={32} className="text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">Дня интенсива</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold flex items-center gap-2">
                    <Icon name="Package" size={24} className="text-primary" />
                    Что вы создадите
                  </h4>
                  <div className="grid gap-3">
                    {[
                      { icon: 'Brain', title: 'Второй мозг и умная база знаний', description: 'Структурированное хранилище идей и решений с доступом за секунды' },
                      { icon: 'Bot', title: 'Персональный AI-ассистент', description: 'От личных дневников до бизнес-аналитики и документов' },
                      { icon: 'GraduationCap', title: 'ИИ-преподаватель для любых дисциплин', description: 'Настраиваемые туторы под ваш уровень и темп обучения' },
                      { icon: 'Globe', title: 'Сайты и лендинги без кода', description: 'Собирайте веб-страницы с помощью ИИ за минуты' },
                      { icon: 'MessageSquare', title: 'Мастерство prompt-инженерии', description: 'Управление контекстом, выбор моделей, цепочки запросов' },
                      { icon: 'Camera', title: 'Нейро-фотосессии топ-уровня', description: 'Визуалы дороже стоковых решений для вашего бренда' },
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

                <div className="border-t border-primary/20 pt-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="space-y-3">
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground">Инвестиция в участие</h4>
                      <div className="flex items-baseline gap-4">
                        <span className="text-5xl font-bold text-primary">50 000 ₽</span>
                        <div className="space-y-1">
                          <span className="text-2xl text-muted-foreground line-through block">65 000 ₽</span>
                          <Badge variant="outline" className="border-accent text-accent">-23% до 9 февраля</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} className="text-accent" />
                        <span>Цена вырастет после дедлайна</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                        <Icon name="AlertCircle" size={16} />
                        <span>Осталось {placesLeft} мест из 25</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full lg:w-auto">
                      <Button size="lg" onClick={() => openForm('module01')} className="bg-primary hover:bg-primary/90 pulse-glow w-full lg:w-auto group">
                        <Icon name="Rocket" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                        Забронировать за 50 000 ₽
                      </Button>
                      <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 w-full lg:w-auto">
                        <Icon name="Send" className="mr-2" size={18} />
                        <a href="https://t.me/ТОЧКИ_НАД_ИИ" target="_blank" rel="noopener noreferrer">Задать вопрос</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Shield', title: 'Гарантия возврата', description: 'Если не подойдёт формат – вернём деньги' },
                { icon: 'Users', title: 'Нетворкинг', description: 'Знакомства с единомышленниками' },
                { icon: 'Headphones', title: 'Поддержка 24/7', description: 'Чат поддержки и после кэмпа' }
              ].map((item, index) => (
                <Card key={index} className="neon-border bg-card/30 backdrop-blur-xl">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Icon name={item.icon as any} size={24} className="text-secondary flex-shrink-0" />
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/20 text-secondary border-secondary/50 mb-4">ОТЗЫВЫ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Что говорят <span className="text-secondary">участники</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
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
                <Card key={index} className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-transform">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={18} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                    <Icon name="Quote" size={32} className="text-primary/30" />
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

        <section className="py-20 px-4 bg-muted/5">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-6 mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/50">ПРИЗЫВ К ДЕЙСТВИЮ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Готовы встроить <span className="text-primary glow-text">ИИ</span> в жизнь?
              </h2>
              <p className="text-xl text-muted-foreground">Выберите свой формат участия</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-all cursor-pointer shimmer group" onClick={() => openForm('module01')}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-primary/20 text-primary border-primary/50">ОСНОВНОЙ</Badge>
                    <Icon name="ArrowRight" size={24} className="text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold">MODULE_01 :: HUMAN + AI</h3>
                  <p className="text-muted-foreground">4 дня интенсивной работы над вашим личным AI-стеком</p>
                  <div className="flex items-center gap-2 text-accent">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm font-semibold">Старт 24 июня · Осталось {placesLeft} мест</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 group-hover:pulse-glow">
                    Записаться сейчас
                  </Button>
                </CardContent>
              </Card>
              <Card className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-all cursor-pointer group" onClick={() => openForm('module02')}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-secondary text-secondary">СКОРО</Badge>
                    <Icon name="Bell" size={24} className="text-secondary group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold">MODULE_02 :: VIBE MARKETING</h3>
                  <p className="text-muted-foreground">Маркетинг, креатив и коммуникации, усиленные ИИ</p>
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon name="Calendar" size={16} />
                    <span className="text-sm font-semibold">Анонс скоро · Лист ожидания открыт</span>
                  </div>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                    Встать в лист ожидания
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <Badge className="bg-accent/20 text-accent border-accent/50 mb-4">FAQ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Частые <span className="text-accent">вопросы</span>
              </h2>
            </div>
            <Card className="neon-border bg-card/50 backdrop-blur-xl">
              <CardContent className="p-8">
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
                          <Icon name="HelpCircle" size={18} className="text-primary" />
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

        <footer className="py-12 px-4 border-t border-primary/20 bg-muted/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-primary glow-text">пИИонерский</span>
                  <br />
                  <span className="text-secondary">ЛАГЕР</span>
                </h3>
                <p className="text-muted-foreground text-sm">AI-интенсив для предпринимателей и творцов</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Menu" size={18} className="text-primary" />
                  Навигация
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#program" className="block hover:text-primary transition-colors">Программа</a>
                  <a href="#benefits" className="block hover:text-secondary transition-colors">Преимущества</a>
                  <a href="#faq" className="block hover:text-accent transition-colors">FAQ</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} className="text-secondary" />
                  Контакты
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="https://t.me/ТОЧКИ_НАД_ИИ" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors flex items-center gap-2">
                    <Icon name="Send" size={14} />
                    Telegram: ТОЧКИ НАД ИИ
                  </a>
                  <a href="mailto:support@точкинадии.ru" className="block hover:text-primary transition-colors flex items-center gap-2">
                    <Icon name="Mail" size={14} />
                    support@точкинадии.ru
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Info" size={18} className="text-accent" />
                  Правовая информация
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>ИП Черников Сергей Николаевич</p>
                  <p className="text-xs">ОГРНИП: 3317774600305002</p>
                </div>
              </div>
            </div>
            <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
              <p>© 2026 пИИонерский ЛАГЕР. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
