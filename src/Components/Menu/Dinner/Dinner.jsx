/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import Item from '../Item';

function Dinner({ dinnerMenu }) {
  return (
    <>
      <section className="dinner-menu">
        {dinnerMenu &&
          dinnerMenu.map((product) => (
            <Item product={product} key={product.id} />
          ))}
      </section>
    </>
  );
}

export default Dinner;
