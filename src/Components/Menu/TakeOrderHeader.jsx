import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import avatar from '../../img/avatar-white.png';
import icon from '../../img/logOut.png';
import { logOut } from '../../Lib/firebase';
import Breakfast from './Breakfast/Breakfast';

function TakeOrderHeader({ user }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };
  return (
    <>
      <header className="orders-header">
        <span className="menu-buttons">
          <button
            type="button"
            className="breakfast"
            onClick={() => {
              handleButtonClick();
            }}
          >
            Desayuno
          </button>
          <button type="button" className="dinner">
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
      <div>{buttonClicked ? <Breakfast /> : false}</div>
    </>
  );
}

TakeOrderHeader.propTypes = {
  user: PropTypes.string.isRequired
  /* logOut: PropTypes.func.isRequired */
};

export default TakeOrderHeader;
