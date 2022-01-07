/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import ItemBreakfast from './ItemBreakfast';

function Breakfast({
  breakfastMenu,
  addProduct,
  restProduct,
  resume,
  newResume
}) {
  return (
    <>
      <section className="breakfast-menu">
        {breakfastMenu &&
          breakfastMenu.map((product) => (
            <ItemBreakfast
              product={product}
              key={product.id}
              addProduct={addProduct}
              restProduct={restProduct}
              resume={resume}
              newResume={newResume}
            />
          ))}
      </section>
    </>
  );
}

export default Breakfast;
