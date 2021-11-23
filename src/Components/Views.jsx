import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logInAuth, logOut /* , errorMessage */ } from '../Lib/firebase';
import LogInPage from './Log-In/LogIn';
import Orders from './Menu/Orders';

const Views = ({ user }) => (
  <div>
    {user ? (
      <Routes>
        <Route
          exact
          path="/"
          element={<Orders user={user} logOut={logOut} />}
        />
      </Routes>
    ) : (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LogInPage
              logInAuth={logInAuth} /* errorMessage={errorMessage} */
            />
          }
        />
      </Routes>
    )}
  </div>
);

Views.propTypes = {
  user: PropTypes.string.isRequired
};

export default Views;
