/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import Item from '../Item';

function Breakfast({ breakfastMenu }) {
  return (
    <>
      <section className="breakfast-menu">
        {breakfastMenu &&
          breakfastMenu.map((product) => (
            <Item product={product} key={product.id} />
          ))}
      </section>
    </>
  );
}

export default Breakfast;
