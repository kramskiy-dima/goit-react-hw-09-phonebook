import React, { Component } from 'react';
import { connect } from 'react-redux';
import operation from '../../redux/auth/auth-operation';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './RegisterView.module.css';

export class RegisterView extends Component {
  state = {
    name: '',
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
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    this.props.onRegister(newUser);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <div>
        {/* <Form onSubmit={this.hendleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="name"
              // value={this.state.name}
              type="name"
              placeholder="Enter your name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="email"
              // value={this.state.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.hendleChange}
              name="password"
              // value={this.state.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}

        <form className={s.form} onSubmit={this.hendleSubmit}>
          <TextField
            required
            onChange={this.hendleChange}
            label="Enter your name"
            name="name"
            type="text"
            inputProps={{
              value: this.state.name,
            }}
          />
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
            autoComplete="current-password"
            inputProps={{
              value: this.state.password,
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
}

const mapDispatchToProps = {
  onRegister: operation.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
