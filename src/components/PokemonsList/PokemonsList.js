import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import classes from './PokemonsList.module.scss';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { PokemonsStoreContext } from '../../store/pokemonsStore';
import { ModalContentStoreContext } from '../../store/modalContentStore';
import Loader from "../Loader/Loader";

export const PokemonsList = observer(() => {
  const pokemonStore = useContext(PokemonsStoreContext);
  const modalContentStore = useContext(ModalContentStoreContext);

  useEffect(() => {
    pokemonStore.loadPokemonsFromServer('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10');
  }, []);


  if(pokemonStore.loading){
    return <Loader />
  }

  return (
    (
      <ul className={classes.pokemons}>
        {pokemonStore.filteredPokemons.map((pokemon) => {
          const newModalContent = (
            <div className={classes['pokemon-photos']}>
              {Object.values(pokemon.sprites).map((link,i) => <img key={i} src={link} />)}
            </div>
          );

          return (
            <li
              onClick={() => {
                modalContentStore.setContent(newModalContent);
              }}
              key={pokemon.id}
              className="pokemons__item"
            >
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                stats={pokemon.stats}
              />
            </li>
          );
        })}
      </ul>
    )
  );
});
