import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../../redux/auth/auth-operation';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hendleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('ну привет');
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    const LoginUser = {
      email,
      password,
    };
    dispatch(operation.login(LoginUser));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form className={s.form} onSubmit={hendleSubmit}>
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
          inputProps={{
            value: password,
          }}
          autoComplete="current-password"
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
    </>
  );
}
