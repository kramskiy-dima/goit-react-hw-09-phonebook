import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

class ContactsView extends Component {
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
    );
  }
}

export default ContactsView;
