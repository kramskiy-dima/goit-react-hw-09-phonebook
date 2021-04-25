import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;
const getLoading = state => state.phonebook.loading;

const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );
  },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default { getContacts, getFilter, getLoading, getFilterContacts };
