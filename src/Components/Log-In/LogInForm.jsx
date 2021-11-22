/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LogInForm = ({ logInAuth }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <form
      className="inputs"
      onSubmit={(e) => {
        e.preventDefault();
        logInAuth(loginEmail, loginPassword);
      }}
    >
      <select>
        <option>Administrador</option>
        <option>Mesero</option>
        <option>Cocina</option>
      </select>
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
      <button type="submit">Ingresar</button>
    </form>
  );
};

LogInForm.propTypes = {
  logInAuth: PropTypes.func.isRequired
};

export default LogInForm;
