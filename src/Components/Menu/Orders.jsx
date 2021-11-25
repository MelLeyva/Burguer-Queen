/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React from 'react';
import '../../Styles-scss/Order.scss';
// import Breakfast from './Breakfast/Breakfast';
import TakeOrderHeader from './TakeOrderHeader';

function Orders({ user }) {
  // console.log(user.email);
  return (
    <>
      <TakeOrderHeader user={user} />
      {/* <Breakfast /> */}
    </>
  );
}

Orders.propTypes = {
  user: PropTypes.string.isRequired
};

export default Orders;
