'use client';

import { useState } from 'react';
import { NavigationMobile, NavigationDefault } from '../Navigation';
import { INavigation } from '@/Interfaces/navigations';
import { Logo } from '../Logo';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigationLink: INavigation[] = [
    { name: 'Página inicial', url: '/', disabled: false },
    { name: 'Sobre nós', url: '/sobre-nos', disabled: false },
    { name: 'Serviços', url: '/servicos', disabled: false },
    { name: 'Blog', url: '#', disabled: true },
    { name: 'Contatos', url: '#', disabled: true },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-4 px-7 text-white shadow-md">
        {/* <h1 className="text-2xl font-bold">Logo</h1> */}
        <Logo />
        <NavigationDefault links={navigationLink} pathname={pathname} />
        <button className="block md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-gray-200 bg-opacity-75 z-50 text-black transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-white p-4 rounded-l-lg shadow-md transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no menu
        >
          <button className="absolute top-4 right-4 z-50" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <NavigationMobile links={navigationLink} pathname={pathname} />
        </div>
      </div>
    </div>
  );
}
