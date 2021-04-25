import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../../redux/auth/auth-operation';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hendleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('Привет, ну что там?))');
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(operation.register(newUser));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={hendleSubmit}>
        <TextField
          required
          onChange={hendleChange}
          label="Enter your name"
          name="name"
          type="text"
          inputProps={{
            value: name,
          }}
        />
        <TextField
          required
          onChange={hendleChange}
          label="Enter email"
          name="email"
          type="email"
          inputProps={{
            value: email,
          }}
        />

        <TextField
          required
          onChange={hendleChange}
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          inputProps={{
            value: password,
          }}
        />
        <Button
          className={s.btn}
          variant="outlined"
          color="secondary"
          size="small"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
