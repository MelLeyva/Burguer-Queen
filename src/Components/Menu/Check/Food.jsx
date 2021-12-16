/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

function Food({ food, deleteProduct, setResume, resume }) {
  // console.log(food);
  const totalProduct = food.price * food.qty;
  return (
    <section className="order-food">
      <p className="name">{food.name}</p>
      <p className="qty">x{food.qty}</p>
      <p className="price">${totalProduct.toFixed(2)}</p>
      <button
        type="button"
        onClick={() => deleteProduct(food, setResume, resume)}
      >
        X
      </button>
    </section>
  );
}

export default Food;
