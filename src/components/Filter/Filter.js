import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/actions';
import './Filter.css';
import { getFilter } from '../../redux/selectors';

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <p className="FindTitle">Find contacts by name</p>

      <input
        className="InputFilter"
        value={filter}
        onChange={handleChange}
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

//с использованием селектора
const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
