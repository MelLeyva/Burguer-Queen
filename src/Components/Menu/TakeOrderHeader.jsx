import React from 'react';
import PropTypes from 'prop-types';
// import avatar from '../../img/avatar-white.png';
import icon from '../../img/logOut.png';
import { logOut } from '../../Lib/firebase';

function TakeOrderHeader({ user }) {
  return (
    <>
      <header className="orders-header">
        <span className="menu-buttons">
          <button type="button" className="breakfast">
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
            {/* <span>
              <img className="icon" src={avatar} alt="avatar" />
            </span> */}
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
  user: PropTypes.string.isRequired
  /* logOut: PropTypes.func.isRequired */
};

export default TakeOrderHeader;
