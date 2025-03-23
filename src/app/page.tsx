'use client';
import promotor from '@/../public/Imagens/Promotor.jpg';
import campaignsIncentv from '@/../public/Imagens/Campanha-incentivo.jpg';
import staff from '@/../public/Imagens/staff.jpg';
import blitz from '@/../public/Imagens/blitz.jpg';
import { ICard } from '@/Interfaces/card';
import { CentralSection } from '@/Components/CentralSection';
import ScrollServices from '@/Components/ScrollService';

export default function Home() {
  const cardDestaque: ICard[] = [
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
    {
      imageBg: campaignsIncentv.src,
      title: 'Campanha de sustentação',
      text: 'É uma estratégia de marketing contínua, criada para manter a visibilidade, o interesse e o engajamento em torno do seu produto, serviço ou marca após o lançamento. O objetivo é consolidar a presença no mercado, fidelizar clientes e garantir que o produto ou marca se mantenha relevante ao longo do tempo. Ela pode incluir ações regulares de comunicação, promoções, atualizações e reforço da marca para manter o público envolvido.',
    },
  ];

  return (
    <div className="">
      <CentralSection />

      <ScrollServices
        cardsObjects={cardDestaque}
        title="Destaques"
      />
    </div>
  );
}
