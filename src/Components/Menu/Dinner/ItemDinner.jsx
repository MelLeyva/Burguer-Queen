/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function ItemDinner({ product, addProduct, restProduct }) {
  const { name, image, price } = product;

  return (
    <>
      {product && (
        <>
          <div className="product">
            <img className="img-food" src={image} alt="product" />
            <section>
              <li>{name}</li>
              <li>${price}.00</li>
            </section>
            <div className="btns-counter">
              <button
                type="button"
                className="btn-rest"
                onClick={() => restProduct(product)}
              >
                -
              </button>
              <p className="counter">0</p>
              <button
                type="button"
                className="btn-add"
                onClick={() => addProduct(product)}
              >
                +
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* Item.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired
}; */
export default ItemDinner;
