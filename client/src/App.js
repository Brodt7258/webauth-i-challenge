import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html, body {
    height: 100%
  }

  body {
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
      radial-gradient(
        circle at top,
        #FF9933,
        #cc007e
      );
  }
`;

function App() {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);
  
  if (user) {
    return (
      <Users user={user} />
    );
  }

  if (register) {
    return (
      <Register setUser={setUser} setRegister={setRegister} />
    );
  } else {
    return (
      <Login setUser={setUser} setRegister={setRegister} />
    );
  }
}

const Wrapper = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);

export default Wrapper;
