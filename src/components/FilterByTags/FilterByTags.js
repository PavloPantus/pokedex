import React, {useContext, useEffect} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {observer} from 'mobx-react-lite';
import {TagsStoreContext} from "../../store/tagsStore";
import classes from './FilterByTags.module.scss';


const FilterBytags = observer(() => {


  const TagsStore = useContext(TagsStoreContext);
  const tags = TagsStore.tags;
  const tagsState = TagsStore.tagsState;
  const setTagsState = TagsStore.setTagsState.bind(TagsStore);

  useEffect(()=>{
    TagsStore.loadTagsFromServer('https://pokeapi.co/api/v2/type/')
  },[])


  const handleChange = (event) => {
    setTagsState({
      ...tagsState, [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className={classes['fitler-container']}>
      <span className={classes['filter__heading']}>
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
})

export default FilterBytags
