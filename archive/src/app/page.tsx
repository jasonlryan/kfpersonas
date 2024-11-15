import { personas } from '@/data/personas';
import PersonaCard from '@/components/PersonaCard';

export default function Home() {
  return <PersonaCard persona={personas[0]} />;
}