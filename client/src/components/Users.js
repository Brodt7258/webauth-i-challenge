import React, { useState, useEffect } from 'react';
import axios from 'axios';
import posed from 'react-pose';

import User from './User';

const PosedUsers = posed.ul({
  shown: {
    x: '0%',
    staggerChildren: 100
  },
  hidden: {
    x: '-100%',
  }
});

const Users = ({ user }) => {
  const [users, setUsers] = useState(null);
  const [visible, setVisible] = useState(false);

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
      setTimeout(() => {
        setVisible(true);
      }, 300);
    })
    .catch(err => {
      console.log(err);
    })
  }, [user, visible]);

  if (!users) {
    return (
      <div>
        loading
      </div>
    );
  }

  return (
    <PosedUsers
      pose={visible ? 'shown' : 'hidden' }
      style={{ listStyle: 'none', marginTop: '5rem', overflowX: 'hidden' }}
    >
      {users.map(e => (
        <User key={e.id} user={e} />
      ))}
    </PosedUsers>
  );
};

export default Users;