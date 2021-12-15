/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import TakeOrderHeader from './Header/TakeOrderHeader';
import Check from './Check/Check';
import UseHeader from '../../Hooks/UseHeader';
import UseComanda from '../../Hooks/UseComanda';
import helpHttp from '../../helpers/helpHttp';
import {
  addProduct,
  restProduct,
  deleteProduct,
  cancel
} from '../../Lib/orderComands';
// import UseOrders from '../../Lib/UseOrders';

function TakeOrders() {
  const [dinnerMenu, setDinnerMenu] = useState();
  const [breakfastMenu, setBreakfastMenu] = useState();
  const [orders, setOrders] = useState([]);

  const { setMenu, menu } = UseHeader();
  const { resume, setResume, client, setClient } = UseComanda();
  // const { addProduct, restProduct, deleteProduct, cancel } = UseOrders();

  const api = helpHttp();
  const urlKitchen = 'http://localhost:5000/orders';

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

  const newOrder = () => {
    console.log({ resume });
    const body = {
      id: Date.now(),
      client,
      resume,
      date: new Date().toLocaleDateString(),
      timeIn: new Date().toLocaleTimeString(),
      status: 'pending'
    };
    // console.log(newResume);
    // eslint-disable-next-line prefer-const
    let options = {
      body,
      headers: { 'Content-Type': 'application/json' }
    };
    api.post(urlKitchen, options).then((res) => {
      // console.log(newResume);
      console.log(res);
      if (!res.err) {
        setOrders([...orders, res]);
      } else {
        console.log('esto fallo');
      }
      console.log(orders);
    });
  };

  return (
    <>
      <TakeOrderHeader setMenu={setMenu} menu={menu} />
      <div className="take-order">
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
          // newResume={newResume}
          newOrder={newOrder}
        />
      </div>
    </>
  );
}

export default TakeOrders;

// console.log(newResume);

/*   useEffect(() => {
    api.get(urlKitchen).then((res) => {
      // console.log(res);
      if (!res.err) {
        setOrders(res);
        // setError(null);
      } else {
        setOrders(null);
        // setError(res);
      }
    });
    // console.log(orders);
  }, []); */
/*   const addProduct = (item) => {
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
    const confirmBox = window.confirm('¿Desea cancelar la orden?');
    if (confirmBox === true) {
      setClient('');
      setResume([]);
    }
  }; */
