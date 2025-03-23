import { ServiceDetails } from '@/Components/ServiceDetails';

export async function generateStaticParams() {
  // Aqui você deve retornar uma lista de objetos com os parâmetros estáticos
  // Exemplo:
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ServiceShowDetails() {
  return <ServiceDetails />;
}
