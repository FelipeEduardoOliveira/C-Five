'use client';
import ServiceCards from '@/Components/ServiceCards';
import { cardsObjects } from '@/helper/cardsObjects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'C-five',
    template: '%s | C-five',
  },
  description: 'C-five, Eventos marcantes, marcas inesquecíveis!',
};

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
