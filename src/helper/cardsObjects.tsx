import { ICard } from '@/Interfaces/card';
import campaignsLauch from '@/../public/Imagens/Campanha-lancamento.jpg';
import campaignsIncentv from '@/../public/Imagens/Campanha-incentivo.jpg';
import campaignsPromotion from '@/../public/Imagens/Campanha-promocional.jpg';
import coffeeBreak from '@/../public/Imagens/Coffee-break.jpg';
import promotor from '@/../public/Imagens/Promotor.jpg';
import staff from '@/../public/Imagens/staff.jpg';
import blitz from '@/../public/Imagens/blitz.jpg';

export const cardsObjects: ICard[] = [
  {
    imageBg: campaignsLauch.src,
    title: 'Campanha de lançamento',
    text: `<p> É desenvolvida para apresentar e promover um novo produto, serviço ou marca ao público.  </p>
      <p>O objetivo é gerar expectativa; atrair atenção e impulsionar as primeiras vendas ou o engajamento.</p> 
      <p> Criamos um impacto inicial para alcançar o maior número de pessoas. </p>`,
  },
  {
    imageBg: campaignsIncentv.src,
    title: 'Campanha de incentivo',
    text: '<p> Estratégia de marketing ou vendas criada para motivar e recompensar comportamentos específicos de um público-alvo como: funcionários, vendedores ou clientes.  </p> <p> O objetivo é estimular o alcance de metas, com aumento de vendas, engajamento ou lealdade, por meio de recompensas de prêmios, bônus ou descontos.  </p> <p>Essas campanhas visam aumentar a performance ou o engajamento com a marca de forma motivadora e recompensadora.</p>',
  },
  {
    imageBg: campaignsIncentv.src,
    title: 'Campanha de sustentação',
    text: '<p> É uma estratégia de marketing contínua, criada para manter a visibilidade, o interesse e o engajamento em torno do seu produto, serviço ou marca após o lançamento.  </p> <p> O objetivo é consolidar a presença no mercado, fidelizar clientes e garantir que o produto ou marca se mantenha relevante ao longo do tempo. Ela pode incluir ações regulares de comunicação, promoções, atualizações e reforço da marca para manter o público envolvido. </p>',
  },
  {
    imageBg: campaignsPromotion.src,
    title: 'Campanha promocional',
    text: '<p>Voltada para promover um produto, serviço ou marca, com o objetivo de aumentar as vendas, fidelizar clientes e atrair novos leads.</p> <p>Essas ações envolvem ofertas especiais, descontos, brindes ou outras vantagens temporárias para estimular a compra ou o consumo do seu produto ou serviço.</p>',
  },
  {
    imageBg: coffeeBreak.src,
    title: 'Coffee Break',
    text: '<p>Na CFive, além de soluções criativas em marketing, também oferecemos coffee break corporativo para tornar seus eventos ainda mais especiais.</p> <p>Trabalhamos com opções personalizadas de snacks, bebidas e comidas leves, garantindo qualidade e sabor em cada detalhe.  Ideal para reuniões, treinamentos e convenções, nosso serviço facilita o networking, melhora a produtividade e oferece uma experiência agradável para todos.</p> <p>Conte com a CFive para cuidar do coffee break do seu evento com pontualidade e atenção aos detalhes!</p>',
  },
  {
    imageBg: promotor.src,
    title: 'Promotor',
    text: '<p>Na CFive oferecemos um Serviço de Contratação de Promotores, profissionais qualificados que ajudam a sua marca a se destacar em eventos, feiras e campanhas promocionais.</p>  <p>Fazemos:</p>  <ul style="list-style-type: disc; margin-left: 20px;">    <li style="margin-bottom: 8px;"><span style="font-weight: 500;">Recrutamento e seleção de promotores alinhados com a sua marca.</span></li>    <li style="margin-bottom: 8px;"><span style="font-weight: 500;">Treinamento especializado para garantir excelência no atendimento e representação da sua marca.</span></li>    <li><span style="font-weight: 500;">Acompanhamento e relatórios para medir os resultados e impacto da ação.</span></li>  </ul>',
  },
  {
    imageBg: staff.src,
    title: 'Staff',
    text: '<p>É o grupo de profissionais responsáveis pela organização, execução e suporte durante um evento. Eles desempenham funções variadas; recepção de convidados; apoio logístico; controle de acessos; montagem de infraestrutura; atendimento ao público e coordenação das atividades.</p> <p>O objetivo do staff é garantir que o seu evento aconteça de forma organizada e sem imprevistos, proporcionando uma experiência positiva aos participantes.</p>',
  },
  {
    imageBg: blitz.src,
    title: 'Blitz',
    text: 'É uma estratégia promocional que visa causar grande impacto em um curto período de tempo, com o objetivo de chamar a atenção do público de forma rápida e intensa. Esse tipo de ação é geralmente caracterizado pela execução de atividades concentradas em um local ou evento específico, com forte presença visual e interatividade, para gerar buzz e aumentar a visibilidade da sua marca ou produto.',
  },
];
