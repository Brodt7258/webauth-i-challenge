import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const UserPanel = styled.li`
  max-width: 60%;
  margin: 2rem auto;
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
`;

const PosedUserPanel = posed(UserPanel)({
  shown: {
    opacity: '1'
  },
  hidden: {
    opacity: 0
  }
});

const User = ({ user }) => {
  return (
    <PosedUserPanel>
      <p>User: {user.id}</p>
      <p>Name: {user.username}</p>
      <p>Password: {user.password}</p>
    </PosedUserPanel>
  );
};

export default User;