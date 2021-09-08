import Contact from 'components/Contact';
import { connect } from 'react-redux';
import contactActions from 'redux/contact/contact-actions';
import PropTypes from 'prop-types';
import './ContactList.scss';


const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="Contacts-list">
      {contacts.map( ({ id, name, number }) => {
        return (
          <Contact key={id} id={id} name={name} number={number} onDelete={onDelete}/> 
        )})        
      }  
    </ul>
  )
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilterName = filter.toLowerCase().trim();
  return allContacts.filter( ({ name }) => name.toLowerCase().includes(normalizedFilterName));
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: getVisibleContacts(items, filter)
});

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => dispatch(contactActions.deleteContact(id)),
  filteredContacts: () => null,
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
};
