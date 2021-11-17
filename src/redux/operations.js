import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('https://618d756dfe09aa001744077a.mockapi.io/contacts/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = { ...name, ...number };

  dispatch(addContactRequest());

  axios
    .post(
      'https://618d756dfe09aa001744077a.mockapi.io/contacts/contacts',
      contact,
    )
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest(id));

  axios
    .delete(
      `https://618d756dfe09aa001744077a.mockapi.io/contacts/contacts/${id}`,
    )
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

//асинхронный вариант
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get(
//       'https://618d756dfe09aa001744077a.mockapi.io/contacts/contacts',
//     );

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// const addContact = (name, number) => async dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest());
//   try {
//     const { data } = await axios.post(
//       'https://618d756dfe09aa001744077a.mockapi.io/contacts/contacts',
//       contact,
//     );
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// const deleteContact = id => async dispatch => {
//   dispatch(deleteContactRequest(id));
//   try {
//     await axios.delete(
//       `https://618d756dfe09aa001744077a.mockapi.io/contacts/contacts/${id}`,
//     );
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

export { addContact, deleteContact, fetchContacts };
