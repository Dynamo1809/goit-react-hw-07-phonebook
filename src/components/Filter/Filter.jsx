import { useDispatch, useSelector } from 'react-redux'
import { contactsActions, getFilter } from 'redux/contacts';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className="Filter__label">
      Find contacts by name:<br></br><input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label> 
  );
};

export default Filter;

Filter.propTypes = {
  dispatch: PropTypes.func,
}

// const mapStateToProps = ({contacts:{ filter }}) => ({
//   filter,
// })

// const mapDispatchToProps = dispatch => ({
//   onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
// }) 