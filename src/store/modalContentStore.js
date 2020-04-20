import { observable, decorate, action } from 'mobx';
import { createContext } from 'react';

const ModalContentStore = {
  content: null,

  setContent(newContent) {
    this.content = newContent;
  },
};

decorate(ModalContentStore, {
  content: observable,
  setContent: action,

});

export const ModalContentStoreContext = createContext(ModalContentStore);
