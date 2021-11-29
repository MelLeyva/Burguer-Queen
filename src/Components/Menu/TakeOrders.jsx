/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../../Styles-scss/Order.scss';
import UseOrderHeader from '../../Hooks/UseOrderHeader';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import TakeOrderHeader from './Header/TakeOrderHeader';
import Check from './Check/Check';

function TakeOrders({ user }) {
  const [dinnerMenu, setDinnerMenu] = useState();
  const [breakfastMenu, setBreakfastMenu] = useState();
  const { handleMenu, menu } = UseOrderHeader();

  const getDataDinner = async () => {
    const url = `https://my-json-server.typicode.com/MelLeyva/Burguer-Queen/comidas`;
    const getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData);
    setDinnerMenu(getFetchData);
  };
  useEffect(() => {
    getDataDinner();
  }, []);

  const getDataBreakfast = async () => {
    const url = `https://my-json-server.typicode.com/MelLeyva/Burguer-Queen/desayunos`;
    const getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData);
    setBreakfastMenu(getFetchData);
  };
  useEffect(() => {
    getDataBreakfast();
  }, []);
  // console.log(user.email);
  // console.log(typeof handleMenu);
  return (
    <>
      <TakeOrderHeader user={user} handleMenu={handleMenu} menu={menu} />
      <div>
        {menu && menu === 'breakfast' ? (
          <Breakfast breakfastMenu={breakfastMenu} />
        ) : (
          <Dinner dinnerMenu={dinnerMenu} />
        )}
      </div>
      <Check />
    </>
  );
}

TakeOrders.propTypes = {
  user: PropTypes.string.isRequired
};

export default TakeOrders;
