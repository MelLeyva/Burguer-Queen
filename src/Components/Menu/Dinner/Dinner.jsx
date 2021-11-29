/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import DinnerItem from './DinnerItem';

function Dinner({ dinnerMenu }) {
  return (
    <>
      <section className="dinner-menu">
        {dinnerMenu &&
          dinnerMenu.map((product) => (
            <DinnerItem product={product} key={product.id} />
          ))}
      </section>
    </>
  );
}

export default Dinner;
