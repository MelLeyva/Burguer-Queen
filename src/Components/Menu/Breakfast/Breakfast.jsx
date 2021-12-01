/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import ItemBreakfast from './ItemBreakfast';

// import Cart from '../../../Hooks/Cart';

function Breakfast({ breakfastMenu, addProduct, restProduct }) {
  // const { check, setCheck } = Cart();
  // console.log(breakfastMenu);

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
            />
          ))}
      </section>
    </>
  );
}

export default Breakfast;
