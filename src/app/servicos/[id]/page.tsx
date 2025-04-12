import { ServiceDetails } from '@/Components/ServiceDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'C-five',
    template: '%s | C-five',
  },
  description: 'C-five, Eventos marcantes, marcas inesquecíveis!',
};

export async function generateStaticParams() {
  // Aqui você deve retornar uma lista de objetos com os parâmetros estáticos
  // Exemplo:
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ServiceShowDetails() {
  return <ServiceDetails />;
}
