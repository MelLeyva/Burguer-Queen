/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
import { signInWithEmailAndPassword, auth } from '../../firebase-config';

function Auth() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const logInAuth = async (loginEmail, loginPassword) => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate('/orders');
      console.log(loginEmail);
    } catch {
      setError('Verificar credenciales');
      // console.log(error);
    }
  };

  return (
    <div>
      <LogIn datos={logInAuth} />
      <p>{error}</p>
    </div>
  );
}

export default Auth;
