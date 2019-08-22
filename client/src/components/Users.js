import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = ({ user }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users', 
      {
        headers: {
          Authorization: user
        }
      }
    )
    .then(({ data }) => {
      setUsers(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [user]);

  if (!users) {
    return (
      <div>
        loading
      </div>
    );
  }

  return (
    <ul>
      {users.map(e => (
        <li key={e.id}>
          <p>{e.id}</p>
          <p>{e.username}</p>
          <p>{e.password}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;