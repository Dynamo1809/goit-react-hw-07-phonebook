import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getAllContacts,getFilter],
  (contacts, filter) => {
    const normalizedFilterName = filter.toLowerCase().trim();
    return contacts.filter( ({ name }) => name.toLowerCase().includes(normalizedFilterName));
  },
);
  




  // export const getVisibleContacts = state => {
  //   const filter = getFilter(state);
  //   const contacts = getAllContacts(state);
  //   const normalizedFilterName = filter.toLowerCase().trim();
  //   return contacts.filter( ({ name }) => name.toLowerCase().includes(normalizedFilterName));
  // };

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilterName = filter.toLowerCase().trim();
//   return allContacts.filter( ({ name }) => name.toLowerCase().includes(normalizedFilterName));
// };