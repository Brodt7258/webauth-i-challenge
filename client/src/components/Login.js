import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  width: 40%;
  margin: 5rem auto;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 0.75rem 0;
  }

  input {
    padding: 0.5rem;
    border: 1px solid grey;
    border-radius: 0.5rem;
    margin-left: 1rem;
  }

  .login {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    color: white;
    background-color: #cc007e;
    cursor: pointer;

    &:hover {
      background-color: #ff66c4
    }
  }

  .register {
    background: none;
    border: none;
    color: #cc007e;
    cursor: pointer;

    &:hover {
      color: #ff66c4
    }
  }
`;

const Login = ({ setUser, setRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sumbit = (e, username, password) => {
    e.preventDefault();
    console.log(username, password);
    axios.post('http://localhost:5000/api/login', { username, password })
      .then(({ data }) => {
        console.log(data);
        setUser(data.cookie);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={e => sumbit(e, username, password)}>
      <h2>Login</h2>
      <div>
        <label htmlFor="">
          Username:
        </label>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">
          Password:
        </label>
        <input 
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button 
        type="submit"
        className="login"
      >
        Login
      </button>
      <button 
        onClick={() => setRegister(true)}
        className="register"
      >
        Register New Account
      </button>
    </Form>
  );
};

export default Login;