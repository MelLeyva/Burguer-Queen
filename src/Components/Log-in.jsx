import React from 'react';
import burger from '../img/hamburger.png';
import crown from '../img/crown.png';
import '../Styles-scss/LogIn.scss';

function LogIn() {
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
          <input className="e-mail" placeholder="Correo electrónico" />
          <input className="password" placeholder="Contraseña" />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
