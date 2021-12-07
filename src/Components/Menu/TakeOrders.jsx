/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import TakeOrderHeader from './Header/TakeOrderHeader';
import Check from './Check/Check';
import UseHeader from '../../Hooks/UseHeader';
import UseComanda from '../../Hooks/UseComanda';

function TakeOrders({ user }) {
  const [dinnerMenu, setDinnerMenu] = useState();
  const [breakfastMenu, setBreakfastMenu] = useState();
  const { setMenu, menu } = UseHeader();
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

  const addProduct = (item) => {
    const exist = resume.find((x) => x.id === item.id);
    if (exist) {
      setResume(
        resume.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setResume([...resume, { ...item, qty: 1 }]);
    }
  };

  const restProduct = (item) => {
    const exist = resume.find((x) => x.id === item.id);
    if (exist === undefined) {
      return '';
    }
    if (exist.qty === 1) {
      return setResume(resume.filter((x) => x.id !== item.id));
    }
    return setResume(
      resume.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  };

  const deleteProduct = (item) => {
    const exist = resume.find((x) => x.id === item.id);
    if (exist) {
      setResume(resume.filter((x) => x.id !== item.id));
    }
  };

  const cancel = () => {
    setResume([]);
    setClient('');
  };

  return (
    <>
      <TakeOrderHeader user={user} setMenu={setMenu} menu={menu} />
      <div className="take-order">
        <>
          {menu === 'breakfast' ? (
            <Breakfast
              breakfastMenu={breakfastMenu}
              addProduct={addProduct}
              restProduct={restProduct}
              resume={resume}
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
            />
          ) : null}
        </>
        <Check
          resume={resume}
          client={client}
          setClient={setClient}
          deleteProduct={deleteProduct}
          cancel={cancel}
        />
      </div>
    </>
  );
}

TakeOrders.propTypes = {
  user: PropTypes.string.isRequired
};

export default TakeOrders;
