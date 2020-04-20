import { observable, decorate, action } from "mobx";
import { createContext } from "react";

const PokemonsStore = {
  pokemons: [],

  loadPokemonsFromServer(link) {
    fetch(link)
      .then(response=>response.json())
      .then((data)=>{
        let promises = data.results.map((result)=>{
          return fetch(result.url).then(response=>response.json())
        })
        Promise.all(promises)
          .then(data=>{this.pokemons = data})
      })
  }
}

decorate(PokemonsStore, {
  pokemons: observable,
  loadPokemonsFromServer: action,

})

export const PokemonsStoreContext = createContext(PokemonsStore);
