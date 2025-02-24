import { INavigationLinks } from '@/Interfaces/navigations';

const NavigationDefault = ({ links, pathname }: INavigationLinks) => {
  return (
    <nav className="hidden md:flex flex-grow justify-center">
      <ul className="flex items-center gap-5 text-nowrap text-xl">
        {links.map((item, index) => (
          <li
            key={index}
            className={`relative my-2 w-full text-center ${
              !item.disabled
                ? 'hover:scale-105 transform transition-transform duration-300 ease-in-out group'
                : ''
            }`}
          >
            <a
              className={`block p-2 ${
                item.disabled ? 'opacity-50 cursor-not-allowed' : ''
              } ${pathname === item.url ? 'font-bold' : ''}`}
              href={item.disabled ? '#' : item.url}
            >
              {item.name}
            </a>
            {!item.disabled && (
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavigationMobile = ({ links, pathname }: INavigationLinks) => {
  return (
    <nav>
      <ul className="flex flex-col items-center w-full mt-5">
        {links.map((item, index) => (
          <li
            key={index}
            className={`relative my-2 w-full text-center ${
              !item.disabled
                ? 'hover:scale-105 hover:bg-gray-100 transform transition-transform duration-300 ease-in-out group'
                : ''
            }`}
          >
            <a
              className={`block p-2 ${
                item.disabled ? 'opacity-50 cursor-not-allowed' : ''
              } ${pathname === item.url ? 'font-bold' : ''}`}
              href={item.disabled ? '#' : item.url}
            >
              {item.name}
            </a>
            {!item.disabled && (
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavigationDefault, NavigationMobile };
