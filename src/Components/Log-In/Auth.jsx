/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithEmailAndPassword, auth } from '../../firebase-config';
import LogInForm from './LogInForm';

function Auth() {
  // const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate('/orders');
        const { uid } = currentUser;
        console.log('entry', uid);
      } else {
        navigate('/');
      }
    });
  }, [navigate]);

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
