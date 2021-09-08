import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';

const initialState = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

// state.name === payload.name ? alert(`${state.name} is already in contacts`) : 

const items = createReducer(initialState, {
  [actions.addContact]: (state, {payload}) => [payload, ...state],
  [actions.deleteContact]: (state, {payload}) => state.filter( ({id}) => id !==  payload),
});


const filter = createReducer('', {
  [actions.changeFilter]: (_, {payload}) => payload,
});


export default combineReducers({
  items,
  filter
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