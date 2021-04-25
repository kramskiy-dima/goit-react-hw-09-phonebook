import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  changeFilter,
} from './phonebook-actions';

const contacts = createReducer([], {
  [fetchContatsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchContatsRequest]: () => true,
  [fetchContatsSuccess]: () => false,
  [fetchContatsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
