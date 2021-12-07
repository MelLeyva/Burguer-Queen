/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import Views from './Components/Views';
import './Styles-scss/App.scss';
import './Styles-scss/LogIn.scss';
import './Styles-scss/Order-style/Order.scss';

function App() {
  const [user, setUser] = useState(null);
  const authState = onAuthStateChanged(auth, (currentUser) => {
    // eslint-disable-next-line no-unused-expressions
    currentUser ? setUser(currentUser.email) : setUser(false);
  });
  useEffect(() => {
    authState();
  }, [authState]);

  return (
    <Router>
      <Views user={user} />
    </Router>
  );
}

export default App;
