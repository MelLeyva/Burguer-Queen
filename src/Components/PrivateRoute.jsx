/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase-config';

function useAuth() {
  return auth.currentUser;
}
function PrivateRoute({ children }) {
  const auths = useAuth();
  return auths ? children : <Navigate to="/" />;
}

export default PrivateRoute;
