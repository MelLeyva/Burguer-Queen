import React from 'react';
import { Navigate } from 'react-router-dom';
import { signOut /* , onAuthStateChanged */ } from 'firebase/auth';
import { auth } from '../firebase-config';

const logout = async () => {
  // const navigate = useNavigate();
  await signOut(auth);
  <Navigate to="/" />;
};

export default logout;
