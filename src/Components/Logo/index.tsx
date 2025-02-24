import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/icons/logoTipochangedf.png"
      alt="Logo C-five"
      className="w-20 md:ml-5"
      width={88}
      height={88}
    />
  );
};
