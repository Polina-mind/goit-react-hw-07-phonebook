import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/operations';
import { getLoading } from '../redux/selectors';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h2 className="Title">Phonebook</h2>
        <Form></Form>

        <h2 className="Title">Contacts</h2>
        <Filter></Filter>

        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <Contacts></Contacts>
      </>
    );
  }
}

// const mapStateToProps = ({ contacts: { loading } }) => ({
//   isLoadingContacts: loading,
// });

//с использованием селектора
const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
