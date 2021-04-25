import React, { Component } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import operation from '../../redux/phonebook/phonebook-operaton';
import selectors from '../../redux/phonebook/phonebook-selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, addContacts } = this.props;
    const newContacts = { name, number };
    const alreadyContacts = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (alreadyContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    addContacts(newContacts);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.hendleSubmit}>
        <label>
          Имя
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hendleChange}
            required
          ></input>
        </label>
        <label>
          Телефон
          <input
            className={s.input}
            type="tel"
            pattern="^[ 0-9]+$"
            name="number"
            value={this.state.number}
            onChange={this.hendleChange}
            required
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state, action) => ({
  contacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContacts: contact => dispatch(operation.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
