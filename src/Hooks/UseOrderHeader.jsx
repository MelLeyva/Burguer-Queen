import { useState } from 'react';

function UseOrderHeader() {
  const [menu, setMenu] = useState('breakfast');

  const handleMenu = (typeMenu) => {
    setMenu(typeMenu);
  };

  return {
    menu,
    handleMenu
  };
}

export default UseOrderHeader;
