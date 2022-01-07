/* eslint-disable no-console */
import { useState } from 'react';

function UseHeader() {
  const [menu, setMenu] = useState('breakfast');
  const [orders, setOrders] = useState(null);

  const handleMenu = (typeMenu) => {
    setMenu(typeMenu);
  };
  const handleOrders = (ord) => {
    setOrders(ord);
  };

  return {
    menu,
    handleMenu,
    orders,
    handleOrders
  };
}

export default UseHeader;
