/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import burger from '../../img/hamburger.png';
import crown from '../../img/crown.png';
import LogInForm from './LogInForm';

const LogInPage = ({ logInAuth /* , errorMessage */ }) => (
  <Fragment>
    <div className="chalkboard">
      <div className="burger-queen">
        <img src={crown} className="crown" alt="crown" />;
        <img src={burger} className="burger" alt="hamburger" />;
      </div>
      <div className="form">
        <h1 className="title">BURGER QUEEN</h1>
        <h2 className="log.in">Iniciar sesión</h2>
        <LogInForm logInAuth={logInAuth} /* errorMessage={errorMessage} */ />
      </div>
    </div>
  </Fragment>
);

LogInPage.propTypes = {
  logInAuth: PropTypes.func.isRequired
};

export default LogInPage;
