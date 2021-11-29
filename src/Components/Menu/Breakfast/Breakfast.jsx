/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import BreakfastItem from './BreakfastItem';

function Breakfast({ breakfastMenu }) {
  return (
    <>
      <section className="breakfast-menu">
        {breakfastMenu &&
          breakfastMenu.map((product) => (
            <BreakfastItem product={product} key={product.id} />
          ))}
      </section>
    </>
  );
}

export default Breakfast;
