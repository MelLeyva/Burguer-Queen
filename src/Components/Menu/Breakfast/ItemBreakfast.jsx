/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function ItemBreakfast({ product, addProduct, restProduct, check }) {
  const { name, image, price } = product;

  return (
    <>
      {product && (
        <>
          <div className="product-bfast">
            <img className="img-bfast" src={image} alt="product" />
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
              {check.map((item) => (
                <p key={item.id} item={item}>
                  {item.qty}
                </p>
              ))}
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
export default ItemBreakfast;
