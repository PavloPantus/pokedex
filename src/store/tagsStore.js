import { observable, decorate, action } from "mobx";
import { createContext } from "react";

const TagsStore = {
  tags: [],
  tagsState: {},
  setTagsState (newTagsState) {
    this.tagsState = newTagsState
  },
  loadTagsFromServer(link) {
    fetch(link)
      .then(response=>response.json())
      .then((data)=>{
        this.tags = data.results.map(type=>({name: type.name}));

        const tagsState = {};
        this.tags.forEach((tag) => {
          tagsState[tag.name] = false;
        });

        this.tagsState = tagsState
      })
  }
}

decorate(TagsStore, {
  tags: observable,
  tagsState: observable,
  loadTagsFromServer: action,

})

export const TagsStoreContext = createContext(TagsStore);
