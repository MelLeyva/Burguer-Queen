/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const LogInForm = ({ datos }) => {
  // const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  return (
    <form className="inputs">
      <select>
        <option>Administrador</option>
        <option>Mesero</option>
        <option>Cocina</option>
      </select>
      <input
        className="e-mail"
        placeholder="Correo electrónico"
        // value={loginEmail}
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        className="password"
        type="password"
        placeholder="Contraseña"
        // value={loginPassword}
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          datos(loginEmail, loginPassword);
        }}
      >
        Ingresar
      </button>
    </form>
  );
};

export default LogInForm;
