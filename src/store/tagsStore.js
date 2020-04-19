import { observable, decorate, action } from "mobx";
import { createContext } from "react";

const TagsStore = {
  tags: [],
  loadTagsFromServer(link) {
    fetch(link)
      .then(response=>response.json())
      .then((data)=>{this.tags = data.results.map(type=>({name: type.name}))})
  }
}

decorate(TagsStore, {
  tags: observable,
  loadTagsFromServer: action,
})

export const TagsStoreContext = createContext(TagsStore);
