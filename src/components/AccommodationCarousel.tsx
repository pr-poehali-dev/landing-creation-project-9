import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AccommodationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-35-01.jpg',
      title: 'Территория базы отдыха',
      description: 'Уютная зона отдыха с шезлонгами и видом на море'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-34-58.jpg',
      title: 'Конференц-зал',
      description: 'Просторный зал для обучения и проведения мастер-классов'
    },
    {
      url: 'https://cdn.poehali.dev/files/2.jpg',
      title: 'Летняя веранда',
      description: 'Открытая терраса с голубыми занавесками и комфортными зонами для отдыха'
    },
    {
      url: 'https://cdn.poehali.dev/files/11.jpg',
      title: 'Танцевальный зал',
      description: 'Просторный зал для активностей, танцев и групповых занятий'
    },
    {
      url: 'https://cdn.poehali.dev/files/20-4.jpg',
      title: 'Баня и купель',
      description: 'Комплекс для релаксации с деревянной баней и купелью'
    },
    {
      url: 'https://cdn.poehali.dev/files/1.jpg',
      title: 'Купель под открытым небом',
      description: 'Расслабление и восстановление сил на свежем воздухе'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-34-51.jpg',
      title: 'Территория и природа',
      description: 'Живописная территория среди зелени с дорожками для прогулок'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-34-47.jpg',
      title: 'Корпус "Южный"',
      description: 'Комфортабельные номера с современным ремонтом'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-34-44.jpg',
      title: 'Жилой корпус',
      description: 'Уютные домики среди зелени'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-33-44.jpg',
      title: 'Номер с удобствами',
      description: 'Комфортное размещение на 3-4 человека'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-33-40.jpg',
      title: 'Двухместный номер',
      description: 'Уютная комната с удобными кроватями'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-33-37.jpg',
      title: 'Холл корпуса',
      description: 'Просторное общее пространство с зоной отдыха'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-33-34.jpg',
      title: 'Холл второго этажа',
      description: 'Комфортная зона для общения и отдыха'
    },
    {
      url: 'https://cdn.poehali.dev/files/photo_2026-01-07_16-33-22.jpg',
      title: 'Главный корпус',
      description: 'Уютное здание с номерами и всеми удобствами'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
            {images[currentIndex].title}
          </h3>
          <p className="text-sm sm:text-base text-white/90">
            {images[currentIndex].description}
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>

      <div className="flex justify-center gap-2 p-4 bg-muted/30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-primary">
          Условия проживания
        </h3>
        
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold text-secondary mb-4">ЮЖНЫЙ КОРПУС</h4>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/10">
              <Icon name="Users" size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Большая общая зона</p>
                <p className="text-xs text-muted-foreground">Пространство для общения и отдыха</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/10">
              <Icon name="Baby" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Детская игровая</p>
                <p className="text-xs text-muted-foreground">Безопасная зона для детей</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/10">
              <Icon name="Coffee" size={24} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Мини-кухня</p>
                <p className="text-xs text-muted-foreground">Чайник и микроволновка</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/10">
              <Icon name="Flame" size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Мангальные зоны</p>
                <p className="text-xs text-muted-foreground">Для приготовления шашлыков</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/10">
              <Icon name="Trophy" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Теннисные столы</p>
                <p className="text-xs text-muted-foreground">Активный отдых</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/10">
              <Icon name="Volleyball" size={24} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Волейбольная площадка</p>
                <p className="text-xs text-muted-foreground">Командные игры</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Icon name="ArrowUp" size={20} />
                  <span>Второй этаж</span>
                </div>
                <div className="space-y-2 pl-7">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Circle" size={8} className="text-primary" />
                    <span>2 номера - 2-местные</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Circle" size={8} className="text-primary" />
                    <span>2 номера - 3-местные</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-secondary font-semibold">
                  <Icon name="ArrowDown" size={20} />
                  <span>Первый этаж</span>
                </div>
                <div className="space-y-2 pl-7">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Circle" size={8} className="text-secondary" />
                    <span>4 номера - 3-местные</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Bed" size={14} />
                    <span className="text-xs">Кровати все раздельные</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-accent/30">
              <Icon name="Home" size={24} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-1">Номера - спальни с санузлом</p>
                <p className="text-xs text-muted-foreground mb-2">Душ общий на первом этаже</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-6">
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-sm text-center">
                <Icon name="Info" size={16} className="inline mr-2 text-accent" />
                Если вы не хотите жить в общем корпусе, а хотите забронировать отдельный домик, 
                <span className="font-semibold text-primary"> уточняйте у администратора мероприятия</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCarousel;