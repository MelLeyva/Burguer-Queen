/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import '../Styles-scss/Order.scss';

function BreakFast(usuario) {
  const navigate = useNavigate();
  console.log(usuario);

  const logout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="breakfast">
      <h1 className="title">Aqui van los desayunos </h1>
      <button className="exit" type="button" onClick={logout}>
        Salir
      </button>
    </div>
  );
}

export default BreakFast;
