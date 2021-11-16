/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import getAuth from '../firebase-config';
import burger from '../img/hamburger.png';
import crown from '../img/crown.png';
import '../Styles-scss/LogIn.scss';

function LogIn() {
  const auth = getAuth;
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (loginEmail, loginPassword) => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate('/orders');
      console.log(loginEmail);
    } catch {
      setError('Verificar credenciales');
      setLoginEmail('');
      setLoginPassword('');
    }
  };

  return (
    <div className="chalkboard">
      <div className="burger-queen">
        <img src={crown} className="crown" alt="crown" />;
        <img src={burger} className="burger" alt="hamburger" />;
      </div>
      <div className="form">
        <h1 className="title">BURGER QUEEN</h1>
        <h2 className="log.in">Iniciar sesión</h2>
        <p>{error}</p>
        <form>
          <input
            className="e-mail"
            placeholder="Correo electrónico"
            value={loginEmail}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="password"
            type="password"
            placeholder="Contraseña"
            value={loginPassword}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              login(loginEmail, loginPassword);
            }}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
