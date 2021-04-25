import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import operation from '../../redux/phonebook/phonebook-operaton';
import selectors from '../../redux/phonebook/phonebook-selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const hendleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('анука-давайка посмотри что ты ввел)');
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    const newContacts = { name, number };
    const alreadyContacts = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (alreadyContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(operation.addContact(newContacts));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={hendleSubmit}>
      <label>
        Имя
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={hendleChange}
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
          value={number}
          onChange={hendleChange}
          required
        ></input>
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
