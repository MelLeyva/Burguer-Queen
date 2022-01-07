import React, { useEffect, useState } from 'react';
import { getData, updateData } from '../../Lib/crud';
import KetchenHeader from './Header/KetchenHeader';
import KitchenOrders from './Orders/KitchenOrders';
// import OrdersKitchen from './OrdersKitchen/OrdersKitchen';
// import { getData } from '../../Lib/crud';

function Kitchen() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    getData('orders').then((pending) => setOrders(pending));
  };
  // console.log(getOrders);
  // console.log(orders);
  const doneOrder = (id, data) => {
    updateData('orders', id, {
      ...data,
      status: 'delivering',
      timeOut: new Date()
    });
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <KetchenHeader />
      {orders &&
        orders.map((orden) => (
          <KitchenOrders doneOrder={doneOrder} orden={orden} key={orden.id} />
        ))}
    </>
  );
}

export default Kitchen;
