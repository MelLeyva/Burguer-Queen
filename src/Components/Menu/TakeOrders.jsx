/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../../Styles-scss/Order.scss';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import TakeOrderHeader from './Header/TakeOrderHeader';
import Check from './Check/Check';
import HeaderMenu from '../../Hooks/HeaderMenu';
import GetCheck from '../../Hooks/GetCheck';

function TakeOrders({ user }) {
  const [dinnerMenu, setDinnerMenu] = useState();
  const [breakfastMenu, setBreakfastMenu] = useState();
  const { setMenu, menu } = HeaderMenu();
  const { check, setCheck } = GetCheck();
  const { client, setClient } = GetCheck();

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

  const addProduct = (item) => {
    const exist = check.find((x) => x.id === item.id);
    if (exist) {
      setCheck(
        check.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCheck([...check, { ...item, qty: 1 }]);
    }
  };

  const restProduct = (item) => {
    const exist = check.find((x) => x.id === item.id);
    if (exist === undefined) {
      return '';
    }
    if (exist.qty === 1) {
      return setCheck(check.filter((x) => x.id !== item.id));
    }
    return setCheck(
      check.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  };

  const cancel = () => {
    setCheck([]);
    setClient('');
  };

  return (
    <>
      <TakeOrderHeader user={user} setMenu={setMenu} menu={menu} />
      <div className="take-order">
        {menu && menu === 'breakfast' ? (
          <Breakfast
            breakfastMenu={breakfastMenu}
            addProduct={addProduct}
            restProduct={restProduct}
            check={check}
          />
        ) : (
          <Dinner
            dinnerMenu={dinnerMenu}
            addProduct={addProduct}
            restProduct={restProduct}
            check={check}
          />
        )}
        <Check
          check={check}
          setCheck={setCheck}
          cancel={cancel}
          client={client}
          setClient={setClient}
        />
      </div>
    </>
  );
}

TakeOrders.propTypes = {
  user: PropTypes.string.isRequired
};

export default TakeOrders;
