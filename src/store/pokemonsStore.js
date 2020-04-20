/* eslint-disable no-shadow */
import { observable, decorate, action, computed } from 'mobx';
import { createContext } from 'react';

const PokemonsStore = {
  pokemons: [],

  filterQueryName: '',

  activeFilterTags: [],

  countOfPokemonsOnServer: null,

  loading: false,

  setFilterQueryName(name) {
    this.filterQueryName = name;
  },

  setActiveFilterTags(newTag) {
    if (this.activeFilterTags.find(tag => tag === newTag)) {
      this.activeFilterTags.splice(this.activeFilterTags
        .indexOf(this.activeFilterTags
          .find(tag => tag === newTag)), 1);
    } else {
      this.activeFilterTags.push(newTag);
    }
  },

  get filteredPokemons() {
    return this.pokemons
      .filter((pokemon) => {
        if (this.filterQueryName.length === 0
          && this.activeFilterTags.length === 0) {
          return true;
        }

        if (this.filterQueryName.length === 0) {
          return pokemon.types.filter(
            type => this.activeFilterTags
              .find(name => name === type.type.name)
          ).length > 0;
        }

        if (this.activeFilterTags.length === 0) {
          return pokemon.name.toLowerCase().includes(this.filterQueryName.toLowerCase());
        }

        return pokemon.name.includes(this.filterQueryName)
          && pokemon.types.filter(
            type => this.activeFilterTags
              .find(name => name === type.type.name)
          ).length > 0;
      });
  },

  loadPokemonsFromServer(link) {
    this.loading = true;
    fetch(link)
      .then(response => response.json())
      .then((data) => {
        this.countOfPokemonsOnServer = data.count;
        const promises = data.results
          .map(result => fetch(result.url).then(response => response.json()));

        Promise.all(promises)
          .then((data) => {
            this.pokemons = data;
            this.loading = false;
          });
      });
  },
};

decorate(PokemonsStore, {
  pokemons: observable,
  filterQueryName: observable,
  setFilterQueryName: action,
  filteredPokemons: computed,
  loadPokemonsFromServer: action,
  activeFilterTags: observable,
  setActiveFilterTags: action,
  loading: observable,
  countOfPokemonsOnServer: observable,
});

export const PokemonsStoreContext = createContext(PokemonsStore);
