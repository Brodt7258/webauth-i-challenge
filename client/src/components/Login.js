import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={e => sumbit(e, username, password)}>
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
      <button type="submit">
        Login
      </button>
      <button onClick={() => setRegister(true)}>
        Register New Account
      </button>
    </form>
  );
};

export default Login;