'use client';
import { ICard } from '@/Interfaces/card';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ScrollServices from '../ScrollService';
import { cardsObjects } from '@/helper/cardsObjects';

export const ServiceDetails = () => {
  const params = useParams();
  const [card, setCard] = useState<ICard | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (params.id) {
      const decodedCard = JSON.parse(decodeURIComponent(params.id as string));
      setCard(decodedCard);
    }
  }, [params.id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row h-full min-h-[800px] justify-between text-center md:p-8 gap-8 shadow-lg">
        <div
          className="w-full h-[450px] md:h-auto bg-gray-300 flex justify-center items-center rounded-lg"
          style={{
            backgroundImage: `url(${card.imageBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="w-full flex flex-col justify-center items-center md:items-start p-8">
          <h1 className="text-5xl mb-4">{card.title}</h1>
          <p
            className="text-2xl text-center md:text-start"
            dangerouslySetInnerHTML={{ __html: card.text }}
          ></p>
        </div>
      </div>

      <ScrollServices cardsObjects={cardsObjects} title="Nossos seviços" />
    </div>
  );
};
