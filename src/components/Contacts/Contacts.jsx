import { useEffect } from 'react';
import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, getVisibleContacts } from 'redux/contacts';
import PropTypes from 'prop-types';
import './Contacts.scss';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <>
      <ContactList contacts={contacts}/>
    </>
  )
};

export default Contacts;

Contacts.propTypes = {
  dispatch: PropTypes.func,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilterName = filter.toLowerCase().trim();
//   return allContacts.filter( ({ name }) => name.toLowerCase().includes(normalizedFilterName));
// };

// const mapStateToProps = ({contacts: {items, filter}}) => ({
//   contacts: getVisibleContacts(items, filter)
// });

// const mapDispatchToProps = dispatch => ({
//   // onDelete: (id) => dispatch(deleteContact(id)),
//   fetchContacts: () => dispatch(fetchContacts()),
// });