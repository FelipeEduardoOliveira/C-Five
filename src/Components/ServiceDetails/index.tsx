'use client';
import { ICard } from '@/Interfaces/card';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import campaignsLauch from '@/../public/Imagens/Campanha-lancamento.jpg';
import campaignsIncentv from '@/../public/Imagens/Campanha-incentivo.jpg';
import campaignsPromotion from '@/../public/Imagens/Campanha-promocional.jpg';
import coffeeBreak from '@/../public/Imagens/Coffee-break.jpg';
import promotor from '@/../public/Imagens/Promotor.jpg';
import staff from '@/../public/Imagens/staff.jpg';
import blitz from '@/../public/Imagens/blitz.jpg';

const cardsObjects: ICard[] = [
  {
    imageBg: campaignsLauch.src,
    title: 'Campanha de lançamento',
    text: 'É desenvolvida para apresentar e promover um novo produto, serviço ou marca ao público. O objetivo é gerar expectativa, atrair atenção e impulsionar as primeiras vendas ou o engajamento. Criamos um impacto inicial para alcançar o maior número de pessoas.',
  },
  {
    imageBg: campaignsIncentv.src,
    title: 'Campanha de incentivo',
    text: 'estratégia de marketing ou vendas criada para motivar e recompensar comportamentos específicos de um público-alvo, como funcionários, vendedores ou clientes. O objetivo é estimular o alcance de metas, como aumento de vendas, engajamento ou lealdade, por meio de recompensas, como prêmios, bônus ou descontos. Essas campanhas visam aumentar a performance ou o engajamento com a marca de forma motivadora e recompensadora.',
  },
  {
    imageBg: campaignsIncentv.src,
    title: 'Campanha de sustentação',
    text: 'É uma estratégia de marketing contínua, criada para manter a visibilidade, o interesse e o engajamento em torno do seu produto, serviço ou marca após o lançamento. O objetivo é consolidar a presença no mercado, fidelizar clientes e garantir que o produto ou marca se mantenha relevante ao longo do tempo. Ela pode incluir ações regulares de comunicação, promoções, atualizações e reforço da marca para manter o público envolvido.',
  },
  {
    imageBg: campaignsPromotion.src,
    title: 'Campanha promocional',
    text: 'Voltada para promover um produto, serviço ou marca, com o objetivo de aumentar as vendas, atrair novos clientes ou fidelizar os já existentes. Essas ações envolvem ofertas especiais, descontos, brindes ou outras vantagens temporárias para estimular a compra ou o consumo do seu produto ou serviço.',
  },
  {
    imageBg: coffeeBreak.src,
    title: 'Coffee Break',
    text: 'Na CFive, além de soluções criativas em marketing, também oferecemos coffee break corporativo para tornar seus eventos ainda mais especiais. Trabalhamos com opções personalizadas de snacks, bebidas e comidas leves, garantindo qualidade e sabor em cada detalhe. \n Ideal para reuniões, treinamentos e convenções, nosso serviço facilita o networking, melhora a produtividade e oferece uma experiência agradável para todos. Conte com a CFive para cuidar do coffee break do seu evento com pontualidade e atenção aos detalhes!',
  },
  {
    imageBg: promotor.src,
    title: 'Promotor',
    text: 'Na CFive oferecemos um Serviço de Contratação de Promotores, profissionais qualificados que ajudam a sua marca a se destacar em eventos, feiras e campanhas promocionais. \n O que fazemos: \n Recrutamento e seleção de promotores alinhados com a sua marca. Treinamento especializado para garantir excelência no atendimento e representação da sua marca. Acompanhamento e relatórios para medir os resultados e impacto da ação. Os promotores ajudam a aumentar o engajamento, gerar conversões de vendas e criar experiências personalizadas para seus consumidores, fortalecendo a imagem da sua marca de forma eficiente.',
  },
  {
    imageBg: staff.src,
    title: 'Staff',
    text: 'É o grupo de profissionais responsáveis pela organização, execução e suporte durante um evento. Eles desempenham funções variadas, como recepção de convidados, apoio logístico, controle de acessos, montagem de infraestrutura, atendimento ao público e coordenação das atividades. O objetivo do staff é garantir que o seu evento aconteça de forma organizada e sem imprevistos, proporcionando uma experiência positiva aos participantes.',
  },
  {
    imageBg: blitz.src,
    title: 'Blitz',
    text: 'É uma estratégia promocional que visa causar grande impacto em um curto período de tempo, com o objetivo de chamar a atenção do público de forma rápida e intensa. Esse tipo de ação é geralmente caracterizado pela execução de atividades concentradas em um local ou evento específico, com forte presença visual e interatividade, para gerar buzz e aumentar a visibilidade da sua marca ou produto.',
  },
];

export const ServiceDetails = () => {
  const params = useParams();
  const [card, setCard] = useState<ICard | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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
          <p className="text-2xl text-center md:text-start">{card.text}</p>
        </div>
      </div>

      <div className="text-2xl text-center p-8">Nossos seviços</div>
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
              className="flex h-80 min-w-80 justify-start items-center md:flex-row flex-col bg-cover bg-center relative p-4 rounded-lg hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out snap-center"
              style={{ backgroundImage: `url(${card.imageBg})` }}
              onClick={() => {
                setCard(card);
                window.scrollTo(0, 0);
              }}
            >
              <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
              <div className={`relative z-10 text-white gap-5`}>
                <h1 className="text-2xl">{card.title}</h1>
                {card.description && (
                  <p className="text-3xl mt-3">{card.description}</p>
                )}
              </div>
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
    </div>
  );
};
