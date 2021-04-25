import axios from 'axios';
import {
  fetchContatsRequest,
  fetchContatsSuccess,
  fetchContatsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContact = () => dispatch => {
  dispatch(fetchContatsRequest());
  axios
    .get('./contacts')
    .then(({ data }) => dispatch(fetchContatsSuccess(data)))
    .catch(error => dispatch(fetchContatsError(error)));
};

const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContact };
