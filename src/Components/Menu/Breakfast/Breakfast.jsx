/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import ItemBreakfast from './ItemBreakfast';

function Breakfast({
  breakfastMenu,
  addProduct,
  restProduct,
  resume,
  setResume
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
              setResume={setResume}
            />
          ))}
      </section>
    </>
  );
}

export default Breakfast;
