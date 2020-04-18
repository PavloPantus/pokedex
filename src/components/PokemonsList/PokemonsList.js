import React from 'react';
import classes from './PokemonsList.module.scss';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonsList = () => (
  <ul className={classes.pokemons}>
    <li className="pokemons__item">
      <PokemonCard />
    </li>

    <li>
      <PokemonCard />
    </li>

    <li>
      <PokemonCard />
    </li>

    <li>
      <PokemonCard />
    </li>

    <li>
      <PokemonCard />
    </li>
  </ul>
);
