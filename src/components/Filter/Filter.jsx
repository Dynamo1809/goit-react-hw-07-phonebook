import { connect } from 'react-redux'
import contactActions from 'redux/contact/contact-actions';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ onChange, filter }) => {
  return (
    <label className="Filter__label">
      Find contacts by name:<br></br><input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label> 
  );
};

const mapStateToProps = ({contacts:{ filter }}) => ({
  filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactActions.changeFilter(e.target.value))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}