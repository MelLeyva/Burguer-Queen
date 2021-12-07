/* eslint-disable no-console */
import { useState } from 'react';

function UseHeader() {
  const [menu, setMenu] = useState('breakfast');

  return {
    menu,
    setMenu
  };
}

export default UseHeader;
