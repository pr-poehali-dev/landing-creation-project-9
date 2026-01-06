import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    role: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'module01' | 'module02'>('module01');

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
              <Button onClick={() => openForm('module01')} className="bg-primary hover:bg-primary/90">
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
                <Button onClick={() => { openForm('module01'); setMobileMenuOpen(false); }} className="w-full bg-primary">
                  Записаться
                </Button>
              </div>
            </div>
          )}
        </header>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={() => setShowForm(false)}>
            <Card className="w-full max-w-md neon-border bg-card/95 backdrop-blur-xl" onClick={(e) => e.stopPropagation()}>
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
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 text-primary">
                ПИИОНЕРСКИЙ ЛАГЕРЬ 18+ · ЛЕТО 2026
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Как люди, которые умеют работать с <span className="text-primary glow-text">ИИ</span>, зарабатывают в <span className="text-secondary">3–4 раза больше</span> и работают в <span className="text-accent">2 раза меньше</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                4 дня в пИИонерском лагере, где вы соберёте свой AI-стек: второй мозг, ассистенты, сайты, презентации и личную систему продуктивности.
              </p>
              <p className="text-lg text-muted-foreground italic">
                пИИонерский лагер — практикуем AI-мышление, жжём токены у костра под песни из Suno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => openForm('module01')} className="text-lg bg-primary hover:bg-primary/90">
                  <Icon name="Zap" className="mr-2" size={20} />
                  Записаться на MODULE_01
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-secondary text-secondary hover:bg-secondary/10">
                  <a href="#program">Смотреть программу кэмпа</a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={18} className="text-primary" />
                  <span>24–27 июня 2026 · 4 дня и 3 ночи</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-secondary" />
                  <span>Всего мест: 25</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="neon-border bg-card/50 backdrop-blur-xl animate-scale-in">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-primary">Знакомо?</h2>
                  <ul className="space-y-4">
                    {[
                      'Вы тратите часы на рутину, которую уже сегодня можно делегировать ИИ.',
                      'Конкуренты двигаются быстрее за счёт AI-автоматизации, а вы всё ещё делаете многое вручную.',
                      'Вы пробовали ChatGPT и другие нейросети, но так и не встроили их в свои реальные процессы.',
                      'Вы чувствуете, что волна ИИ уже здесь, но не понимаете, с чего начать и как не утонуть в инфошуме.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="AlertCircle" size={20} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="neon-border bg-card/50 backdrop-blur-xl animate-scale-in">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-secondary">Что такое пИИонерский лагер?</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Это не курс по генерации картинок и текстов. Это практический кэмп по AI-ориентированному мышлению и личной эффективности.</p>
                    <p>Наша миссия – научить вас видеть шорткаты: как использовать ИИ для ваших личных и бизнес-задач, и собрать под вас индивидуальный набор инструментов, который реально встроится в ежедневную работу.</p>
                    <p>Кэмп – это пространство для размышления, экспериментов и коннекта. Здесь вы соединяете разные блоки своей рутины в единую систему, сокращаете время на рутину и усиливаете фокус на задачах, которые приносят деньги и удовольствие.</p>
                  </div>
                  <ul className="space-y-2 pt-4">
                    {[
                      'Фундаментальные ИИ-навыки, а не разрозненные хаки.',
                      'Бест-практики по оптимизации времени и энергии.',
                      'Личный «швейцарский нож»: готовый AI-стек под вашу жизнь и работу.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0 mt-1" />
                        <span>{item}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              Почему в кэмп поедут те, кто <span className="text-primary glow-text">думает наперёд?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Clock', title: 'Экономия времени', description: 'Сократите 10–20 часов рутины в неделю за счёт AI-ассистентов и автоматизации.', color: 'primary' },
                { icon: 'TrendingUp', title: 'Рост дохода', description: 'Превратите AI-навыки в монетизацию: от ускорения текущих проектов до запуска новых продуктов и услуг.', color: 'secondary' },
                { icon: 'Brain', title: 'Инвестиция в себя', description: 'Один раз прокачиваете навык, который будет отбивать себя годами в любых нишах и проектах.', color: 'accent' },
                { icon: 'Zap', title: 'Адаптивность', description: 'Один из ключевых навыков сегодня – быстро адаптироваться к изменениям. ИИ – ваш усилитель гибкости.', color: 'primary' }
              ].map((item, index) => (
                <Card key={index} className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-transform duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-${item.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon name={item.icon as any} size={28} className={`text-${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="program" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="neon-border bg-card/50 backdrop-blur-xl">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/20 text-primary border-primary/50">MODULE_01 :: HUMAN + AI</Badge>
                  <p className="text-sm text-muted-foreground">Личная эффективность через AI-стек · 4 дня и 3 ночи · старт: 24 июня</p>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Соберите свою персональную <span className="text-primary glow-text">AI-инфраструктуру</span> за 96 часов
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Фокус этого модуля – сохранить ваше время и упаковать ваши задачи в систему, где за вас работает ИИ. Никакой теории ради теории — только то, что вы сможете применять ежедневно.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Что вы создадите за время кэмпа</h3>
                  <div className="grid gap-4">
                    {[
                      { title: 'Второй мозг и умная база знаний', description: 'Структурированное хранилище идей, конспектов, материалов и решений, к которому можно обратиться за секунды.' },
                      { title: 'Персональный AI-ассистент', description: 'Ассистент под ваши задачи: от личных дневников и планирования до бизнес-аналитики и подготовки документов.' },
                      { title: 'ИИ-преподаватель для любых языков и дисциплин', description: 'Настраиваемые туторы по языкам, технологиям, маркетингу и другим направлениям — под ваш уровень и темп.' },
                      { title: 'Сайты, лендинги и веб-страницы без кода', description: 'Вы научитесь собирать лендинги и простые сайты с помощью ИИ без навыков программирования.' },
                      { title: 'Работа с контекстом и новейшие AI-модели', description: 'Глубокое понимание prompt-инженерии, управление контекстом, выбор моделей под задачи, построение цепочек запросов.' },
                      { title: 'Нейро-фотосессии топового уровня', description: 'Создание визуалов, изображений и обложек, которые выглядят дороже и профессиональнее, чем стандартные стоковые решения.' },
                      { title: 'PPT-презентации, которые стоят от 50 000 ₽', description: 'Сбор презентаций, которые можно продавать клиентам или использовать для своих запусков и выступлений.' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <Icon name="Sparkles" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Инвестиция в участие</h3>
                      <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-bold text-primary">50 000 ₽</span>
                        <span className="text-2xl text-muted-foreground line-through">65 000 ₽</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Специальная цена до 9 февраля</p>
                      <p className="text-xs text-muted-foreground italic">Количество мест ограничено, цена вырастет после дедлайна.</p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                      <Button size="lg" onClick={() => openForm('module01')} className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                        <Icon name="Rocket" className="mr-2" size={20} />
                        Забронировать место на MODULE_01
                      </Button>
                      <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 w-full md:w-auto">
                        <Icon name="Send" className="mr-2" size={18} />
                        <a href="https://t.me/ТОЧКИ_НАД_ИИ" target="_blank" rel="noopener noreferrer">Задать вопрос в Telegram</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Что говорят <span className="text-secondary">участники и партнёры</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: 'Мастер-класс Вани Юницкого прошел очень живо. Люди получили практичное понимание, какие процессы можно упростить с ИИ уже завтра.',
                  author: 'Павел Недостоев',
                  role: 'CEO EVENT MBA'
                },
                {
                  quote: 'Один из самых ярких и содержательных докладов: сложные технические детали были донесены доступно и креативно.',
                  author: 'Иван Юницкий',
                  role: 'IT-предприниматель, 12 лет опыта, вожатый кэмпа'
                }
              ].map((item, index) => (
                <Card key={index} className="neon-border bg-card/50 backdrop-blur-xl">
                  <CardContent className="p-6 space-y-4">
                    <Icon name="Quote" size={32} className="text-primary/50" />
                    <p className="text-lg italic">"{item.quote}"</p>
                    <div className="flex items-center gap-3 pt-4">
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готовы встроить <span className="text-primary glow-text">ИИ</span> в свою жизнь и работу?
            </h2>
            <p className="text-xl text-muted-foreground">Выберите свой формат участия</p>
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Card className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-transform cursor-pointer" onClick={() => openForm('module01')}>
                <CardContent className="p-8 space-y-4 text-left">
                  <Badge className="bg-primary/20 text-primary border-primary/50">ОСНОВНОЙ</Badge>
                  <h3 className="text-2xl font-bold">MODULE_01 :: HUMAN + AI</h3>
                  <p className="text-muted-foreground">4 дня интенсивной работы над вашим личным AI-стеком.</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
              <Card className="neon-border bg-card/50 backdrop-blur-xl hover:scale-105 transition-transform cursor-pointer" onClick={() => openForm('module02')}>
                <CardContent className="p-8 space-y-4 text-left">
                  <Badge variant="outline" className="border-secondary text-secondary">СКОРО</Badge>
                  <h3 className="text-2xl font-bold">MODULE_02 :: VIBE MARKETING</h3>
                  <p className="text-muted-foreground">Маркетинг, креатив и коммуникации, усиленные ИИ.</p>
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                    Лист ожидания
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              FAQ — <span className="text-accent">Частые вопросы</span>
            </h2>
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
                      <AccordionTrigger className="text-left hover:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="py-12 px-4 border-t border-primary/20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-primary glow-text">пИИонерский</span>
                  <br />
                  <span className="text-secondary">ЛАГЕР</span>
                </h3>
                <p className="text-muted-foreground text-sm">AI-интенсив для предпринимателей</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Навигация</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#program" className="block hover:text-primary transition-colors">Программа</a>
                  <a href="#benefits" className="block hover:text-secondary transition-colors">Преимущества</a>
                  <a href="#faq" className="block hover:text-accent transition-colors">FAQ</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="https://t.me/ТОЧКИ_НАД_ИИ" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                    Telegram: ТОЧКИ НАД ИИ
                  </a>
                  <p>support@точкинадии.ru</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Правовая информация</h4>
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
