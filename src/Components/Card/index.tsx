import { ICard } from '@/Interfaces/card';
import { useRouter } from 'next/navigation';

export const Card = (card: ICard) => {
  const router = useRouter();

  const redirectCardToCampaing = () => {
    const queryString = encodeURIComponent(JSON.stringify(card));
    router.push(`/servicos/${queryString}`);
  };

  return (
    <div
      className="flex h-96 w-full justify-start items-start md:items-center md:flex-row flex-col bg-cover bg-center relative p-4 rounded-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ backgroundImage: `url(${card.imageBg})` }}
      onClick={redirectCardToCampaing}
    >
      <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
      <div className={`relative z-10 text-white gap-5`}>
        <h1 className="text-4xl text-start">{card.title}</h1>
        {card.description && (
          <p className="text-1xl mt-3">{card.description}</p>
        )}
      </div>
    </div>
  );
};
