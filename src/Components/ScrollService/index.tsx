import { ICard } from '@/Interfaces/card';
import { useRef } from 'react';
import { Card } from '../Card';

interface IScrollServices {
  cardsObjects: ICard[];
  title: string;
}

const ScrollServices = ({ cardsObjects, title }: IScrollServices) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="text-2xl text-center p-8">{title}</div>
      <div className="relative w-full p-8">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-scroll flex gap-4 w-full scrollbar-hide snap-x snap-mandatory"
        >
          {cardsObjects.map((card, index) => (
            <div
              key={index}
              className="flex h-full min-w-80 "
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Card
                text={card.text}
                imageBg={card.imageBg}
                title={card.title}
                description={card.description}
                key={index}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default ScrollServices;
