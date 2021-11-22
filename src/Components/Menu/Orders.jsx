/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import '../../Styles-scss/Order.scss';

function Orders({ user, logOut }) {
  console.log(user);
  return (
    <div className="breakfast">
      <h1 className="title">Aqui van los desayunos </h1>
      <button
        className="exit"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          logOut();
          console.log('ya salí');
        }}
      >
        Salir
      </button>
    </div>
  );
}

Orders.propTypes = {
  user: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired
};

export default Orders;
