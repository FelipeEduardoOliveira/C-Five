import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'C-five',
    template: '%s | C-five',
  },
  description: 'C-five, Eventos marcantes, marcas inesquecíveis!',
};

export default function SiteMap() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Mapa do Site
      </h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Página Inicial
          </Link>
        </li>
        <li>
          <Link
            href="/sobre-nos"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <Link
            href="/servicos"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            href="/contatos"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Contato
          </Link>
        </li>
        {/* <li>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Blog
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
