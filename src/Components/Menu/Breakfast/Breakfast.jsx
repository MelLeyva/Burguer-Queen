/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Item from './Item';

function Breakfast() {
  const [products, setProducts] = useState();
  const getData = async () => {
    const url = `http://localhost:5000/desayunos`;
    const getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData);
    setProducts(getFetchData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="breakfast-menu">
        {products &&
          products.map((product) => (
            <Item product={product} key={product.id} />
          ))}
      </section>
    </>
  );
}

export default Breakfast;