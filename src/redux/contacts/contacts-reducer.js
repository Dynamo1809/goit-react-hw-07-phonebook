import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, changeFilter } from './contacts-actions';
axios.defaults.baseURL = 'https://614647788f2f4e001730401d.mockapi.io/api/v1';

const items = createReducer([], {
  [fetchContactsSuccess]: (state, {payload}) => payload,
  [addContactSuccess]: (state, {payload}) => [payload, ...state],
  [deleteContactSuccess]: (state, {payload}) => state.filter( ({id}) => id !==  payload),
});


const filter = createReducer('', {
  [changeFilter]: (_, {payload}) => payload,
});


const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
})

export default combineReducers({
  items,
  filter,
  loading,
});


















// const items = (state = initialState, { type, payload }) => {
//   switch( type ) {
//     case types.ADD:
//       return initialState.name === payload.name ? alert(`${payload.name} is already in contacts`) : [payload, ...state]

//     case types.DELETE:
//       return state.filter( ({id}) => id !==  payload)

//     default:
//       return state;
//   }
  
// };

// const filter = (state = '', {type, payload}) => {
  //   switch( type ) {
    //     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };