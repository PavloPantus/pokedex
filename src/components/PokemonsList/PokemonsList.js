/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import classes from './PokemonsList.module.scss';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { PokemonsStoreContext } from '../../store/pokemonsStore';
import { ModalContentStoreContext } from '../../store/modalContentStore';
import Loader from '../Loader/Loader';
import {useLocation} from "react-router-dom";

export const PokemonsList = observer(() => {


  let searchParams = new URLSearchParams(useLocation().search);

  const pokemonStore = useContext(PokemonsStoreContext);
  const modalContentStore = useContext(ModalContentStoreContext);

  useEffect(() => {
    pokemonStore.loadPokemonsFromServer(
      `https://pokeapi.co/api/v2/pokemon/?limit=${
        searchParams.get('itemsPerPage')
      }&offset=${
      searchParams.get('page') * searchParams.get('itemsPerPage')}`);
  }, []);

  if (pokemonStore.loading) {
    return <Loader />;
  }

  return (
    (
      <ul className={classes.pokemons}>
        {pokemonStore.filteredPokemons.map((pokemon) => {
          const newModalContent = (
            <div className={classes['pokemon-photos']}>
              {Object.values(pokemon.sprites)
                .map((link, i) => <img alt={pokemon.name} key={i} src={link} />)}
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
