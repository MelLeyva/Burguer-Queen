/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React /* , { useState } */ from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config'; */
import LogInPage from './Components/Log-In/LogIn';
import PrivateRoute from './Components/PrivateRoute';
import './Styles-scss/App.scss';
import './Styles-scss/LogIn.scss';
import Orders from './Components/Orders';

// eslint-disable-next-line react/prop-types

function App() {
  /*   const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    // eslint-disable-next-line no-unused-expressions
    currentUser ? setUser(currentUser.email) : setUser(null);
  }); */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogInPage />} />
          <Route
            exact
            path="/orders"
            element={
              <PrivateRoute>
                <Orders /* user={user} */ />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
