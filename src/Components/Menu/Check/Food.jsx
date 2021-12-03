/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

function Food({ alimento, deleteProduct }) {
  // console.log(alimento);
  const totalProduct = alimento.price * alimento.qty;
  return (
    <div>
      <section>
        <p>{alimento.name}</p>
        <p>x{alimento.qty}</p>
        <p>${totalProduct.toFixed(2)}</p>
        <button type="button" onClick={() => deleteProduct(alimento)}>
          X
        </button>
      </section>
    </div>
  );
}

export default Food;
