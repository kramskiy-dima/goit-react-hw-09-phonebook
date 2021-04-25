import React, { Component } from 'react';
import { connect } from 'react-redux';
import operation from '../../redux/auth/auth-operation';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const LoginUser = {
      email,
      password,
    };
    this.props.onLogin(LoginUser);

    this.reset();
  };
  reset = () => {
    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.hendleSubmit}>
          <TextField
            required
            onChange={this.hendleChange}
            label="Enter email"
            name="email"
            type="email"
            inputProps={{
              value: this.state.email,
            }}
          />

          <TextField
            required
            onChange={this.hendleChange}
            label="Password"
            name="password"
            type="password"
            inputProps={{
              value: this.state.password,
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
}
const mapDispatchToProps = {
  onLogin: operation.login,
};
export default connect(null, mapDispatchToProps)(LoginView);
