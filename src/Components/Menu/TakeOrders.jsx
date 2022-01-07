/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import TakeOrderHeader from './Header/TakeOrderHeader';
import Check from './Check/Check';
import UseHeader from '../../Hooks/UseHeader';
import UseComanda from '../../Hooks/UseComanda';
import {
  addProduct,
  restProduct,
  deleteProduct,
  cancel
} from '../../Lib/orderComands';
import { newData } from '../../Lib/crud';
import Orders from './Orders/Orders';

const cookies = new Cookies();
function TakeOrders() {
  const [dinnerMenu, setDinnerMenu] = useState();
  const [breakfastMenu, setBreakfastMenu] = useState();
  const userId = cookies.get('name').firstName;

  const { handleMenu, menu, orders, handleOrders } = UseHeader();
  const { resume, setResume, client, setClient } = UseComanda();

  const getDataDinner = async () => {
    const url = `http://localhost:5000/comidas`;
    const getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData);
    setDinnerMenu(getFetchData);
  };
  useEffect(() => {
    getDataDinner();
  }, []);

  const getDataBreakfast = async () => {
    const url = `http://localhost:5000/desayunos`;
    const getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData);
    setBreakfastMenu(getFetchData);
  };
  useEffect(() => {
    getDataBreakfast();
  }, []);

  const body = {
    userId,
    client,
    resume,
    date: new Date().toLocaleDateString(),
    timeIn: new Date().toLocaleTimeString(),
    status: 'pending'
  };

  const sendOrder = async () => {
    await newData('orders', body);
  };

  /*   const handleMenu = (typeMenu) => {
    setMenu(typeMenu);
  };
  const handleOrders = (ord) => {
    setOrders(ord);
  };
 */
  return (
    <>
      <TakeOrderHeader handleMenu={handleMenu} handleOrders={handleOrders} />
      <div className="take-order">
        <>
          {orders === 'pedidos' ? (
            <Orders />
          ) : (
            <>
              <>
                {menu === 'breakfast' ? (
                  <Breakfast
                    breakfastMenu={breakfastMenu}
                    addProduct={addProduct}
                    restProduct={restProduct}
                    resume={resume}
                    setResume={setResume}
                  />
                ) : null}
              </>
              <>
                {menu === 'dinner' ? (
                  <Dinner
                    dinnerMenu={dinnerMenu}
                    addProduct={addProduct}
                    restProduct={restProduct}
                    resume={resume}
                    setResume={setResume}
                  />
                ) : null}
              </>
              <Check
                resume={resume}
                setResume={setResume}
                client={client}
                setClient={setClient}
                deleteProduct={deleteProduct}
                cancel={cancel}
                sendOrder={sendOrder}
              />
            </>
          )}
          ;
        </>
      </div>
    </>
  );
}

export default TakeOrders;
