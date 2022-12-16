import { useContext } from 'react';
import { SmallPokeballIcon } from '../../assets/pokeball';
import { PokemonList } from '../../components/PokemonList';
import { PokemonContext } from '../../context/PokemonContext';

import styles from './styles.module.scss';

export const Home = () => {
  const { filteredPokemon } = useContext(PokemonContext);

  return (
    <div className={styles.home}>
      <header>
        <div>
          <SmallPokeballIcon />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList pokemonUrls={filteredPokemon} />
    </div>
  );
};
