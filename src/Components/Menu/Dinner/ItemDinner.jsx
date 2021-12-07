/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function ItemDinner({ product, addProduct, restProduct, resume }) {
  const { name, image, price, id } = product;

  return (
    <>
      {product && (
        <>
          <div className="product-dinner">
            <img className={`img${id}`} src={image} alt="product" />
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
              {resume.map((item) =>
                product.id === item.id ? (
                  <p key={item.id} item={item}>
                    {item.qty}
                  </p>
                ) : null
              )}
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
