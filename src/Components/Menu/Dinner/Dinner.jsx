/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
// import ItemBreakfast from '../Breakfast/ItemBreakfast';
import ItemDinner from './ItemDinner';
// import ItemDinner from './ItemDinner';

function Dinner({ dinnerMenu, addProduct, restProduct, resume, setResume }) {
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
              resume={resume}
              setResume={setResume}
            />
          ))}
      </section>
    </>
  );
}

export default Dinner;
