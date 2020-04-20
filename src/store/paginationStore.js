import { observable, decorate, action, computed } from 'mobx';
import { createContext } from 'react';

const PaginationStore = {
  itemsPerPage: '10',
  setItemsPerPage (items) {
    this.itemsPerPage = items
  },

  currentPage: '1',
  setCurrentPage (page) {
    this.currentPage = page
  }

};

decorate(PaginationStore, {
  itemsPerPage: observable,
  setItemsPerPage: action,
  currentPage: observable,
  setCurrentPage: action,
});

export const PaginationStoreContext = createContext(PaginationStore);
