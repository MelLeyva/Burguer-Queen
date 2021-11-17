import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import Auth from './Components/Log-In/Auth';
// import LogIn from './Components/Log-In/LogIn';
import BreakFast from './Components/Orders';
import './Styles-scss/App.scss';

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    // eslint-disable-next-line no-unused-expressions
    currentUser ? setUser(currentUser) : setUser(null);
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/orders" element={<BreakFast usuario={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
