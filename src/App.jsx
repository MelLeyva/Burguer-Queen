/* eslint-disable no-console */
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import Views from './Components/Views';
import './Styles-scss/App.scss';
import './Styles-scss/LogIn.scss';

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    // eslint-disable-next-line no-unused-expressions
    currentUser ? setUser(currentUser.email) : setUser(null);
  });

  return (
    <div className="App">
      <Router>
        <Views user={user} />
      </Router>
    </div>
  );
}

export default App;
