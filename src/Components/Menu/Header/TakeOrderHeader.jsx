/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../../img/logOut.png';
import { logOut } from '../../../Lib/firebase';

function TakeOrderHeader({ user, setMenu }) {
  // console.log(typeof setMenu);
  // console.log(typeof menu);
  const handleMenu = (typeMenu) => {
    setMenu(typeMenu);
  };

  return (
    <>
      <header className="orders-header">
        <span className="menu-buttons">
          <button
            type="button"
            className="breakfast"
            onClick={() => {
              handleMenu('breakfast');
            }}
          >
            Desayuno
          </button>
          <button
            type="button"
            className="dinner"
            onClick={() => {
              handleMenu('dinner');
            }}
          >
            Resto del día
          </button>
        </span>
        <span>
          <button type="button" className="see-orders">
            Pedidos
          </button>
          <div className="waiter">
            <p className="avatar">{user}</p>
          </div>
          <button
            className="exit"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              logOut();
              // console.log('ya salí');
            }}
          >
            <img src={icon} alt="get-out" />
          </button>
        </span>
      </header>
    </>
  );
}

TakeOrderHeader.propTypes = {
  user: PropTypes.string.isRequired,
  menu: PropTypes.string.isRequired
};

export default TakeOrderHeader;
