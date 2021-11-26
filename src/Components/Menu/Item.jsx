/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function Item({ product }) {
  return (
    <>
      {product && (
        <>
          <div className="product">
            <img className="img-food" src={product.image} alt="product" />
            <section>
              <li>{product.name}</li>
              <li>${product.price}.00</li>
            </section>
            <div className="btns-counter">
              <button type="button" className="btn-rest">
                -
              </button>
              <p className="counter">0</p>
              <button type="button" className="btn-add">
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
export default Item;
