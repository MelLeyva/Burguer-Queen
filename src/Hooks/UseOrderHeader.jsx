import { useState } from 'react';

function UseOrderHeader() {
  const [menu, setMenu] = useState('breakfast');

  const handleMenu = (option) => {
    setMenu(option);
  };
  /*   const [breakfastBtnClicked, setBreakfastBtnClicked] = useState(true);
  const [dinnerBtnClicked, setDinnerBtnClicked] = useState(false);

  const handleBreakfastBtnClick = () => {
    setBreakfastBtnClicked(true);
    setDinnerBtnClicked(true);
  };
  const handleDinnerBtnClick = () => {
    setBreakfastBtnClicked(false);
    // setDinnerBtnClicked(true);
  }; */
  return {
    menu,
    handleMenu
    /*    breakfastBtnClicked,
    handleBreakfastBtnClick,
    dinnerBtnClicked,
    handleDinnerBtnClick */
  };
}

export default UseOrderHeader;
