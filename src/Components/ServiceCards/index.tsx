'use client';
import { Card } from '@/Components/Card';
import { IServiceCards } from '@/Interfaces/card';

export default function ServiceCards({ cards }: IServiceCards) {
  return (
    <div className="p-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <div className="col-span-1" key={index}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
}
