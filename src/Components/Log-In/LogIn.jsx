/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import burger from '../../img/hamburger.png';
import crown from '../../img/crown.png';
import Auth from './Auth';

function LogInPage() {
  return (
    <Fragment>
      <div className="chalkboard">
        <div className="burger-queen">
          <img src={crown} className="crown" alt="crown" />;
          <img src={burger} className="burger" alt="hamburger" />;
        </div>
        <div className="form">
          <h1 className="title">BURGER QUEEN</h1>
          <h2 className="log.in">Iniciar sesión</h2>
          <Auth />
        </div>
      </div>
    </Fragment>
  );
}

export default LogInPage;
