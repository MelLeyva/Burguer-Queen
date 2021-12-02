/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

function Prueba({ alimento }) {
  // console.log(check, setCheck);
  return (
    <div>
      <p>{alimento.name}</p>
      <p>{alimento.price}</p>
      <p>{alimento.qty}</p>
    </div>
  );
}

export default Prueba;
