'use client';
import aboutUsPhoto from '@/../public/Imagens/about-us.jpg';

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl mb-4">Sobre nós</h1>
      </div>
      <div className="flex flex-col md:flex-row h-full min-h-[700px] justify-between text-center md:p-8 gap-8">
        <div
          className="w-full bg-gray-300 flex justify-center items-center rounded-lg"
          style={{
            backgroundImage: `url(${aboutUsPhoto.src})`,
            backgroundSize: 'cover', // Garante que a imagem cubra o contêiner
            backgroundPosition: 'center', // Centraliza a imagem
            backgroundRepeat: 'no-repeat', // Evita repetição da imagem
            height: '500px', // Define uma altura fixa para o contêiner
            maxHeight: '500px', // Garante que a altura máxima seja respeitada
          }}
        ></div>
        <div className="w-full flex flex-col justify-center items-center md:items-start p-8">
          <p className="text-2xl text-center md:text-start">
            Somos uma agência de marketing especializada em eventos de ativação
            de marca, criada para transformar ideias em experiências
            inesquecíveis. Com um olhar inovador e a paixão por criar conexões
            genuínas, estamos aqui para ajudar sua marca a se destacar e se
            conectar diretamente com o seu público.
          </p>
          <br />
          <p className="text-2xl text-center md:text-start">
            Ao longo dos anos, desenvolvemos uma abordagem estratégica que alia
            criatividade, inovação e um profundo entendimento das necessidades
            de cada cliente. Trabalhamos com eventos personalizados, desde
            ativações de marca até experiências imersivas, que geram engajamento
            e impulsionam o reconhecimento de marca.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:items-start p-8">
        <p className="text-2xl text-center md:text-start">
          Nosso time é formado por profissionais especializados que compartilham
          a mesma visão: criar experiências que sejam mais do que eventos,
          verdadeiros momentos de conexão com o público. Cada projeto é pensado
          para ser único, impactante e, acima de tudo, eficaz.
        </p>

        <br />
        <p className="text-2xl text-center md:text-start">
          Estamos prontos para transformar sua ideia em um evento memorável, que
          não só será lembrado, mas também gerará resultados concretos para sua
          marca.
        </p>

        <br />
        <p className="text-2xl text-center md:text-start">
          Nossa fundadora, <b>Carolyne Nascimento</b>, começou sua trajetória no
          mundo dos eventos aos 14 anos, sempre com o objetivo de proporcionar
          experiências marcantes e autênticas. Formada em Publicidade e
          Propaganda, ela uniu sua paixão pelo marketing com anos de experiência
          prática para criar uma agência focada em resultados reais.
        </p>

        <p className="text-2xl text-center md:text-start font-bold">
          Vamos juntos criar o próximo grande momento!
        </p>
      </div>
    </div>
  );
}
