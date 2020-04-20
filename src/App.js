import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.scss';
import { PokemonsList } from './components/PokemonsList/PokemonsList';
import TransitionsModal from './components/ModalWindow/ModalWindow';
import PaginationControlled from './components/Pagination/Pagination';
import FilterByTags from './components/FilterByTags/FilterByTags';
import { ModalContentStoreContext } from './store/modalContentStore';
import { PokemonsStoreContext } from './store/pokemonsStore';

const App = observer(() => {
  const modalContentStore = useContext(ModalContentStoreContext);
  const pokemonStore = useContext(PokemonsStoreContext);

  return (
    (
      <BrowserRouter>
        <div className={classes.app}>
          <h1 className={classes.app__heading}>Pokedex app</h1>

          <nav className={classes['app__mobile-navigation']} role="navigation">
            <div id={classes.menuToggle}>
              <input type="checkbox" />
              <span className={classes['toggle-span']} />
              <span className={classes['toggle-span']} />
              <span className={classes['toggle-span']} />

              <ul id={classes.menu}>
                <div className={classes.app__filters_mobile}>
                  <div className={classes['appp__filter-name']}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="filter by Name"
                      multiline
                      rowsMax={4}
                      value={pokemonStore.filterQueryName}
                      onChange={(e) => {
                        pokemonStore.setFilterQueryName(e.target.value);
                      }}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes['app__filter-type']}>
                    <FilterByTags />
                  </div>
                </div>
              </ul>
            </div>
          </nav>

          <div className={classes.app__filters}>
            <div className={classes['appp__filter-name']}>
              <TextField
                id="outlined-multiline-flexible"
                label="filter by Name"
                multiline
                rowsMax={4}
                value={pokemonStore.filterQueryName}
                onChange={(e) => {
                  pokemonStore.setFilterQueryName(e.target.value);
                }}
                variant="outlined"
              />
            </div>
            <div className={classes['app__filter-type']}>
              <FilterByTags />
            </div>
          </div>

          <div className={classes['app__pokemons-list']}>
            <PokemonsList />
          </div>

          {
            modalContentStore.content && (
              <TransitionsModal>
                {modalContentStore.content}
              </TransitionsModal>
            )

          }

          <div className={classes.app__pagination}>
            <PaginationControlled />
          </div>

        </div>
      </BrowserRouter>

    )
  );
});

export default App;
