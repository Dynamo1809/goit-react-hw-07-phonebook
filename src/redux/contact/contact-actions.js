import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; 

const addContact = createAction('contacts/add', (newName, number) => ({
  payload: {
    id: uuidv4(),
    name: newName, 
    number,
  }
}))

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const exportedObject = {addContact, deleteContact, changeFilter}

export default exportedObject;
















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
        