import workTable from '@/../public/Imagens/work-table.jpg';
import styles from './CentralSection.module.css';

export const CentralSection = () => {
  return (
    <div
      className="flex w-full h-screen justify-around items-center md:flex-row flex-col p-5 bg-cover bg-center relative parallax-not-fixed md:parallax"
      style={{ backgroundImage: `url(${workTable.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className={`relative z-10 w-full text-4xl md:text-8xl text-wrap text-start md:text-left p-4 text-white gap-5 ${styles.fadeInLeft}`}
      >
        Transformamos <br />
        <b className="relative inline-block px-2">ideias</b>
        em <br />
        <b className="relative inline-block px-2">experiências</b>
        <br />
        <b className="relative inline-block px-2">memoráveis!</b>
      </div>
    </div>
  );
};
