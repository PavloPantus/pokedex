import React, {useContext, useEffect} from 'react';
import classes from './App.module.scss';
import { PokemonsList } from './components/PokemonsList/PokemonsList';
import TransitionsModal from "./components/ModalWindow/ModalWindow";
import PaginationControlled from "./components/Pagination/Pagination";
import TextField from "@material-ui/core/TextField";
import FilterByTags from "./components/FilterByTags/FilterByTags";
import {observer} from 'mobx-react-lite';
import {TagsStoreContext} from "./store/tagsStore";

const App = observer(() => {

  const TagsStore = useContext(TagsStoreContext);

  useEffect(()=>{
    TagsStore.loadTagsFromServer('https://pokeapi.co/api/v2/type/')
  },[])

  return (
    (

      <div className={classes['app']}>
        <h1 className={classes['app__heading']}>Pokedex app</h1>

        <div className={classes['app__filters']}>
          <div className={classes['appp__filter-name']}>
            <TextField
              id="outlined-multiline-flexible"
              label="filter by Name"
              multiline
              rowsMax={4}
              value={undefined}
              onChange={(e)=>{console.log(e)}}
              variant="outlined"
            />
          </div>
          <div className={classes['app__filter-type']}>
            <FilterByTags tags={TagsStore.tags} />
          </div>
        </div>

        <div className={classes['app__pokemons-list']}>
          <PokemonsList />
        </div>

        <TransitionsModal />
        <PaginationControlled />


      </div>

    )
  )
});

export default App;
