import { Logo } from '../Logo';
import { INavigation } from '@/Interfaces/navigations';

const navigationLink: INavigation[] = [
  { name: 'Página inicial', url: '/', disabled: false },
  { name: 'Sobre nós', url: '/sobre-nos', disabled: false },
  { name: 'Serviços', url: '/servicos', disabled: false },
  // { name: 'Blog', url: '#', disabled: true },
  { name: 'Contatos', url: '/contatos', disabled: false },
];

export const Footer = () => {
  return (
    <footer className="p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className=" mb-4 md:mb-0">
          <Logo />
        </div>
        <div className=" mb-4 md:mb-0">
          <nav>
            <ul className="flex flex-col md:flex-row gap-8">
              {navigationLink.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.disabled ? '#' : item.url}
                    className={`${
                      item.disabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:underline'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mb-4 md:mb-0">
          {/* <p>Contatos:</p> */}
          <p>Email: contato@cfive.com.br</p>
          <p>Telefone: (11) 94922-7115</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          &copy; {new Date().getFullYear()} C-Five. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
