import React, { useState } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';

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

export default App;
