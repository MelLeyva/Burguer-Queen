/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import ItemDinner from './ItemDinner';

function Dinner({ dinnerMenu, addProduct, restProduct }) {
  return (
    <>
      <section className="dinner-menu">
        {dinnerMenu &&
          dinnerMenu.map((product) => (
            <ItemDinner
              product={product}
              key={product.id}
              addProduct={addProduct}
              restProduct={restProduct}
            />
          ))}
      </section>
    </>
  );
}

export default Dinner;
