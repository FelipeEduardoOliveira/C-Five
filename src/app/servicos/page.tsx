'use client';
import ServiceCards from '@/Components/ServiceCards';
import { cardsObjects } from '@/helper/cardsObjects';

export default function Service() {
  return (
    <>
      <div className="w-full text-center p-10 ">
        <h1 className="text-4xl md:text-6xl">Serviços</h1>

        <p className="mt-7 text-2xl md:text-4xl">
          Breve descrição sobre serviços
        </p>
      </div>

      <ServiceCards cards={cardsObjects} />
    </>
  );
}
