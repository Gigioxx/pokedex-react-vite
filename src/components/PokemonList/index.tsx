import { PokemonCard } from '../PokemonCard';
import styles from './styles.module.scss';

interface Props {
  pokemonUrls?: string[] | null;
  page?: number;
  pokemonPerPage?: number;
}

export const PokemonList = ({ pokemonUrls, page, pokemonPerPage }: Props) => {
  return (
    <div>
      {pokemonUrls?.map((pokemonUrl) => (
        <PokemonCard key={pokemonUrl} url={pokemonUrl} />
      ))}
    </div>
  );
};
