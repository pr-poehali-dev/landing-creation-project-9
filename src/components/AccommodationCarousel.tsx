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
    </div>
  );
};

export default AccommodationCarousel;