/* eslint-disable react/prop-types */
import React from 'react';

function KitchenOrders({ orden, doneOrder }) {
  const { userId, id, resume, status, timeIn } = orden;
  return (
    <>
      <div>
        <li>Orden: {id}</li>
        <li>{timeIn}</li>
        <li>Mesero: {userId}</li>
        {resume.map((food) => (
          <section key={food.id}>
            <p>{food.name}</p>
            <p>x{food.qty}</p>
          </section>
        ))}
        <button type="button" onClick={() => doneOrder(id)}>
          {status}
        </button>
      </div>
    </>
  );
}

export default KitchenOrders;
