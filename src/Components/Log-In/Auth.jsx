/* eslint-disable react/jsx-fragments */
import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, auth } from '../../firebase-config';
import LogInForm from './LogInForm';

function Auth() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const logInAuth = async (loginEmail, loginPassword) => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate('/orders');
      // console.log(loginEmail);
    } catch {
      setError('Verificar credenciales');
      // console.log(error);
    }
  };

  return (
    <Fragment>
      <p className="error">{error}</p>
      <LogInForm datos={logInAuth} />
    </Fragment>
  );
}

export default Auth;
