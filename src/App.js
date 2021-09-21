// Components //
import ContactForm  from 'components/ContactForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import PropTypes from 'prop-types';

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
        <Contacts />
      </div>
    )
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  filter: PropTypes.string,
};