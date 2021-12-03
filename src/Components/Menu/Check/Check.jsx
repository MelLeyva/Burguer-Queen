/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Food from './Food';

function Check({ check, client, setClient, cancel, deleteProduct }) {
  const total = check.reduce((a, c) => a + c.price * c.qty, 0);
  const iva = total * 0.16;
  const totalCheck = total + iva;
  console.log(iva);
  return (
    <div className="check">
      <form className="order-info">
        <label>
          Cliente:
          <input
            className="client"
            type="text"
            value={client}
            onChange={(event) => {
              setClient(event.target.value);
            }}
          />
        </label>
        {check.length === 0 ? (
          <p className="empty-check">No hay alimentos seleccionados</p>
        ) : (
          <>
            <div>
              {check.map((alimento) => (
                <Food
                  key={alimento.id}
                  alimento={alimento}
                  deleteProduct={deleteProduct}
                />
              ))}
            </div>
            <div>
              <p>Total:{total}</p>
              <p>IVA:{iva}</p>
              <p>Total + IVA:{totalCheck}</p>
            </div>
          </>
        )}
        <div>
          <button className="cancel" type="button" onClick={cancel}>
            Cancelar
          </button>
          <button className="send" type="button">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Check;
