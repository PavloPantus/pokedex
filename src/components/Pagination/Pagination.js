import React, { useContext, useEffect } from 'react';
import './Pagination.scss';
import { observer } from 'mobx-react-lite';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { PaginationStoreContext } from '../../store/paginationStore';
import { PokemonsStoreContext } from '../../store/pokemonsStore';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const RadioGroupHorizontal = withStyles({
  root: {
    flexDirection: 'row',
  },
})(props => <RadioGroup {...props} />);

export default observer(() => {
  const searchParams = new URLSearchParams(useLocation().search);

  const history = useHistory();

  const classes = useStyles();

  const paginationStore = useContext(PaginationStoreContext);
  const pokemonStore = useContext(PokemonsStoreContext);

  useEffect(() => {
    paginationStore.setCurrentPage(searchParams.get('page') || '1');
    paginationStore.setItemsPerPage(searchParams.get('itemsPerPage') || '10');
  }, []);

  const handleChangItemsPerPage = (event) => {
    const { value } = event.target;

    searchParams.set('itemsPerPage', value);
    history.push({
      search: searchParams.toString(),
    });

    paginationStore.setItemsPerPage(value);
    pokemonStore.loadPokemonsFromServer(
      ` https://pokeapi.co/api/v2/pokemon/?limit=
        ${paginationStore.itemsPerPage}&offset=
        ${paginationStore.currentPage-1}`
    );
    window.scroll(0, 0);
  };

  const handleChangePagination = (event, clickedPage) => {
    searchParams.set('page', clickedPage);
    history.push({
      search: searchParams.toString(),
    });
    paginationStore.setCurrentPage(clickedPage);
    console.log(paginationStore.currentPage,'page', paginationStore.itemsPerPage,'items')
    pokemonStore.loadPokemonsFromServer(
      ` https://pokeapi.co/api/v2/pokemon/?limit=
        ${paginationStore.itemsPerPage}&offset=
        ${paginationStore.itemsPerPage * (paginationStore.currentPage - 1)}`
    );
    window.scroll(0, 0);
  };

  return (
    <div className={classes.root}>

      <FormControl component="fieldset">
        <FormLabel component="legend">show pokemons per page</FormLabel>
        <RadioGroupHorizontal
          aria-label="show pokemons per page"
          name="itemsPerPage"
          value={paginationStore.itemsPerPage || '10'}
        >
          <FormControlLabel
            onChange={handleChangItemsPerPage}
            value="10"
            control={<Radio />}
            label="10"
          />
          <FormControlLabel
            onChange={handleChangItemsPerPage}
            value="20"
            control={<Radio />}
            label="20"
          />
          <FormControlLabel
            onChange={handleChangItemsPerPage}
            value="50"
            control={<Radio />}
            label="50"
          />
        </RadioGroupHorizontal>
      </FormControl>

      <Pagination
        count={Math.floor(
          pokemonStore.countOfPokemonsOnServer / paginationStore.itemsPerPage
        )}
        page={+paginationStore.currentPage}
        onChange={handleChangePagination}
      />
    </div>
  );
});
