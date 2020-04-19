import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FilterBytags =({tags}) => {


  const [tagsState, setTagsState] = useState((() => {
    const tagsState = {};

    if(!tags){
      return {}
    }

    tags.forEach((tag) => {
      tagsState[tag.name] = false;
    });

    return tagsState;
  })());

  const handleChange = (event) => {
    setTagsState({
      ...tagsState, [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormGroup row>
      {
        JSON.stringify(tagsState)
      }
      {
        tags.map(tag => (
          <FormControlLabel
            control={<Checkbox style={{ color: tag.color }} checked={tagsState[tag.name]} onChange={handleChange} name={tag.name} />}
            label={tag.name}
          />
        ))
      }

    </FormGroup>
  );
}

export default FilterBytags
