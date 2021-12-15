/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import icon from '../../../img/logOut.png';
import LogInJSON from '../../../Lib/LogInJSON';

const cookies = new Cookies();
function TakeOrderHeader({ setMenu }) {
  const { removeCookies } = LogInJSON();
  const userName = cookies.get('name').firstName;
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
            <p className="avatar">{userName}</p>
          </div>
          <button
            className="exit"
            type="button"
            onClick={() => {
              removeCookies();
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
  menu: PropTypes.string.isRequired
};

export default TakeOrderHeader;
