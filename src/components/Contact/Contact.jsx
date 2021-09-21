import './Contact.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getLoading } from 'redux/contacts';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  return (
    <li className="Contacts__item">
      <div className="Contacts__content">
        <p className="Contacts__text">{name} :</p>
        <p className="Contacts__text">{number}</p>
      </div>
     
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