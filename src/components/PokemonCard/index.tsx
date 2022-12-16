import { Link } from 'react-router-dom';
import { usePokemon } from '../../hooks/usePokemon';
import { background } from '../../utils/BackgroundByType';
import { Loader } from '../Loader';

import styles from './styles.module.scss';

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  /* @ts-ignore */
  const selectedBackground = background[pokemon?.types[0]?.type?.name];

  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokemonCard}>
      <div style={{ borderColor: selectedBackground }} className={styles.top}>
        <span style={{ color: selectedBackground }}>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <img
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
        ) : (
          <div className={styles.loadingContainer}>
            <Loader color={selectedBackground} />
          </div>
        )}
      </div>
      <div style={{ background: selectedBackground }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
};
