/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import Cookies from 'universal-cookie';
import icon from '../../../img/logOut.png';
import LogInJSON from '../../../Lib/LogInJSON';

const cookies = new Cookies();

function TakeOrderHeader({ handleMenu, handleOrders }) {
  const { removeCookies } = LogInJSON();
  const userName = cookies.get('name').firstName;

  return (
    <>
      <header className="orders-header">
        <span className="menu-buttons">
          <button
            type="button"
            className="breakfast"
            onClick={() => {
              handleMenu('breakfast');
              handleOrders(null);
            }}
          >
            Desayuno
          </button>
          <button
            type="button"
            className="dinner"
            onClick={() => {
              handleMenu('dinner');
              handleOrders(null);
            }}
          >
            Resto del día
          </button>
        </span>
        <span>
          <button
            type="button"
            className="see-orders"
            onClick={() => {
              handleOrders('pedidos');
            }}
          >
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

export default TakeOrderHeader;
