import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';
import './Contacts.css';
import { getVisibleContacts } from '../../redux/selectors';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <section className="Contacts">
      <ul className="ContactsList">
        {contacts.map(({ id, name, number }) => (
          <li className="Item" key={id}>
            <span className="Name">{name}:</span>
            <span className="Number">{number}</span>
            <button
              className="ButtonDelete"
              type="submit"
              onClick={() => onDelete(id)}
              id={id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     `${name}`.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

//с использованием селектора
const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
