import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
















// import { v4 as uuidv4 } from 'uuid'; 

// const addContact = createAction('contacts/add', (newName, number) => ({
//   payload: {
  //     id: uuidv4(),
  //     name: newName, 
//     number,
//   }
// }))

// import contactTypes from './contact-types';

// const addContact = ( newName, number) => ({
  //   type: contactTypes.ADD,
  //   payload: {
    // id: uuidv4(),
    // name: newName, 
    // number,
    //   }
    // });
    
    // const deleteContact = (contactId) => ({
      //   type: contactTypes.DELETE,
      //   payload: contactId,
      // });

      // const changeFilter = (value) => ({
        //   type: contactTypes.CHANGE_FILTER,
        //   payload: value,
        // })
        