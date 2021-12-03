/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import ItemBreakfast from '../Breakfast/ItemBreakfast';
// import ItemDinner from './ItemDinner';

function Dinner({ dinnerMenu, addProduct, restProduct, check }) {
  return (
    <>
      <section className="dinner-menu">
        {dinnerMenu &&
          dinnerMenu.map((product) => (
            <ItemBreakfast
              product={product}
              key={product.id}
              addProduct={addProduct}
              restProduct={restProduct}
              check={check}
            />
          ))}
      </section>
    </>
  );
}

export default Dinner;
