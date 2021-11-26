/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Item from '../Breakfast/Item';

function Dinner() {
  const [products, setProducts] = useState();
  const getData = async () => {
    const url = `http://localhost:5000/comidas`;
    const getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData);
    setProducts(getFetchData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="dinner-menu">
        {products &&
          products.map((product) => (
            <Item product={product} key={product.id} />
          ))}
      </section>
    </>
  );
}

export default Dinner;
