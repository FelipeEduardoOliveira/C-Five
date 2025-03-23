'use client';
import campaignsIncentv from '@/../public/Imagens/Campanha-incentivo.jpg';

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl mb-4">Sobre nós</h1>
      </div>
      <div className="flex flex-col md:flex-row h-full min-h-[500px] justify-between text-center md:p-8 gap-8 shadow-lg">
        <div
          className="w-full h-[300px] md:h-auto bg-gray-300 flex justify-center items-center rounded-lg"
          style={{
            backgroundImage: `url(${campaignsIncentv.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="w-full flex flex-col justify-center items-center md:items-start p-8">
          <p className="text-2xl text-center md:text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            dignissimos, optio alias commodi adipisci velit cum eum impedit
            numquam suscipit quae quisquam. Eligendi labore eveniet voluptate
            temporibus id, modi unde.
          </p>
        </div>
      </div>
    </div>
  );
}
