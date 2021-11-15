/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import getAuth from '../firebase-config';
import burger from '../img/hamburger.png';
import crown from '../img/crown.png';
import '../Styles-scss/LogIn.scss';

function LogIn() {
  const auth = getAuth;
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const login = async () => {
    try {
      const usuario = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(usuario);
    } catch (error) {
      console.log(error.message);
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
        <form>
          <input
            className="e-mail"
            placeholder="Correo electrónico"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            className="password"
            type="password"
            placeholder="Contraseña"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <Link to="/orders">
            <button type="submit" onClick={login}>
              Ingresar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
