import React, { useContext, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { observer } from 'mobx-react-lite';
import { TagsStoreContext } from '../../store/tagsStore';
import classes from './FilterByTags.module.scss';
import {PokemonsStoreContext} from "../../store/pokemonsStore";

const FilterBytags = observer(() => {
  const TagsStore = useContext(TagsStoreContext);
  const { tags } = TagsStore;
  const { tagsState } = TagsStore;
  const setTagsState = TagsStore.setTagsState.bind(TagsStore);
  const pokemonStore = useContext(PokemonsStoreContext);

  useEffect(() => {
    TagsStore.loadTagsFromServer('https://pokeapi.co/api/v2/type/');
  }, []);

  const handleChange = (event) => {
    setTagsState({
      ...tagsState, [event.target.name]: event.target.checked,
    });
    pokemonStore.setActiveFilterTags(event.target.name);
  };

  return (
    <div className={classes.filter}>
      <span className={classes.filter__heading}>
        filter by tag
      </span>
      <FormGroup row>
        {
          tags.map(tag => (
            <FormControlLabel
              key={tag.name}
              control={<Checkbox style={{ color: tag.color }} checked={tagsState[tag.name] || false} onChange={handleChange} name={tag.name} />}
              label={tag.name}
            />
          ))
        }

      </FormGroup>
    </div>
  );
});

export default FilterBytags;
