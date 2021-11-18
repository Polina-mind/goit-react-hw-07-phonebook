import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/operations';
import './Form.css';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name !== '' && this.state.number !== '') {
      this.props.onSubmit(this.state);
      this.setState({ name: '', number: '' });
      return;
    }

    alert('No name or number to save!');
  };

  render() {
    const { name, number } = this.state;

    return (
      <form type="submit" onSubmit={this.handleSubmit} className="Form">
        <label className="Label">
          Name
          <input
            className="Input"
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Polina"
            required
          />
        </label>

        <label className="Label">
          Number
          <input
            className="Input"
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="000-00-00"
            required
          />
        </label>

        <button type="submit" className="Button">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
