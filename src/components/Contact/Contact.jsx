import './Contact.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getLoading } from 'redux/contacts';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  return (
    <li className="Contacts__item">
      <p className="Contacts__text">{name} : {number}</p>
      <button onClick={() => dispatch(deleteContact(id))} className="Contacts__button">Delete</button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

// {isLoading ? 'Deleting...' : 'Delete'}