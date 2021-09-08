// import { useState, useEffect } from 'react';
// Components //
import ContactForm  from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid'; 

export function App() {
  // useEffect(() =>{
    //  window.localStorage.setItem('contacts', JSON.stringify(contacts))
    // },[contacts])

    return (      
      <div className="App">
        <h1 className="Phonebook-title">Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  filter: PropTypes.string,
};