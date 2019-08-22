import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setUser, setRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const sumbit = (e, username, password) => {
    e.preventDefault();
    console.log(username, password);
    axios.post('http://localhost:5000/api/register', { username, password })
      .then(() => {
        axios.post('http://localhost:5000/api/login', { username, password })
          .then(({ data }) => {
            setUser(data.cookie);
            setRegister(false);
          });
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
        Register
      </button>
    </form>
  );
};

export default Register;