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
        searchParams.get('itemsPerPage') || '10'
      }&offset=${
      (searchParams.get('page') - 1) * searchParams.get('itemsPerPage') || '0'}`);
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
                .map((link, i) => {
                  if(link){
                   return (
                      <img
                        alt={pokemon.name}
                        key={i}
                        src={link}
                      />
                    )
                  }
                })}
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
