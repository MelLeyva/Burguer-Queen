/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import LogInJSON from '../../Lib/LogInJSON';
// import { errorMessage } from '../../Lib/firebase';

const LogInForm = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { getUser } = LogInJSON();

  const handleSubmit = (e, email, pass) => {
    e.preventDefault();
    getUser(email, pass);
  };

  return (
    <form
      className="inputs"
      onSubmit={(e) => {
        handleSubmit(e, loginEmail, loginPassword);
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
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LogInForm;
