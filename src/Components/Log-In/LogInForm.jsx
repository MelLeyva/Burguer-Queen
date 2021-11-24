/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { errorMessage } from '../../Lib/firebase';

const LogInForm = ({ logInAuth /* , errorMessage */ }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  // const [error, setError] = useState('null');

  return (
    <form
      className="inputs"
      onSubmit={(e) => {
        e.preventDefault();
        logInAuth(loginEmail, loginPassword);
      }}
    >
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
      {errorMessage && errorMessage === '' ? <p /> : <p>{errorMessage}</p>}
      <button type="submit">Ingresar</button>
    </form>
  );
};

LogInForm.propTypes = {
  logInAuth: PropTypes.func.isRequired
};

export default LogInForm;
