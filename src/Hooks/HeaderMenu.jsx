/* eslint-disable no-console */
import { useState } from 'react';

function HeaderMenu() {
  const [menu, setMenu] = useState('breakfast');

  return {
    menu,
    setMenu
  };
}

export default HeaderMenu;
