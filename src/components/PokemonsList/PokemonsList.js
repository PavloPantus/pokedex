import React, {useContext, useEffect} from 'react';
import classes from './PokemonsList.module.scss';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import  {observer} from "mobx-react-lite";
import {PokemonsStoreContext} from "../../store/pokemonsStore";
import {ModalContentStoreContext} from "../../store/modalContentStore";

export const PokemonsList = observer(() => {

  const pokemonStore = useContext(PokemonsStoreContext);
  const modalContentStore = useContext(ModalContentStoreContext);

  useEffect(()=>{
    pokemonStore.loadPokemonsFromServer('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10')
  }, [])


  return (
    (
      <ul className={classes.pokemons}>
        {pokemonStore.pokemons.map((pokemon)=>{
          let newModalContent = (
            <div className={classes['pokemon-photos']}>
              {Object.values(pokemon.sprites).map(link =>  <img key={link} src={link} /> )}
            </div>
          )

          return (
            <li onClick={()=>{modalContentStore.setContent(newModalContent)}} key={pokemon.id} className="pokemons__item">
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                stats={pokemon.stats}
              />
            </li>
          )
        })}
      </ul>
    )
  )
});
