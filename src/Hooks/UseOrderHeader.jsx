/* eslint-disable no-console */
import { useState } from 'react';

function UseOrderHeader() {
  const [menu, setMenu] = useState('breakfast');

  const handleMenu = (typeMenu) => {
    setMenu(typeMenu);
  };
  console.log(typeof menu);

  return {
    menu,
    handleMenu
  };
}

export default UseOrderHeader;
