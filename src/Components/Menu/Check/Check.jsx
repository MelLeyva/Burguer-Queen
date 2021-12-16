/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Food from './Food';
// import helpHttp from '../../../helpers/helpHttp';

function Check({
  resume,
  setResume,
  client,
  setClient,
  cancel,
  deleteProduct,
  sendOrder
  // newOrder
}) {
  const total = resume.reduce((a, c) => a + c.price * c.qty, 0);
  const iva = total * 0.16;
  const totalCheck = total + iva;

  const handleSendOrder = () => {
    const confirm = window.confirm('Confirmar orden');
    if (confirm === true) {
      sendOrder();
      alert('orden enviada');
      setResume([]);
      setClient('');
    }
  };

  return (
    <div className="check">
      <form className="order-info">
        <label className="client-label">
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
        {resume.length === 0 ? (
          <p className="empty-check">No hay alimentos seleccionados</p>
        ) : (
          <div className="full-order">
            <span className="order-header">
              <li>Producto</li>
              <li>Cant.</li>
              <li className="price-hd">Costo</li>
            </span>
            <div className="div-food">
              {resume.map((food) => (
                <Food
                  key={food.id}
                  food={food}
                  deleteProduct={deleteProduct}
                  setResume={setResume}
                  resume={resume}
                />
              ))}
            </div>
            <div className="total">
              <label>
                Total:
                <p>$ {total}</p>
              </label>
              <label>
                IVA:
                <p>$ {iva.toFixed(2)}</p>
              </label>
              <label>
                Total + IVA:
                <p>$ {totalCheck.toFixed(2)}</p>
              </label>
            </div>
          </div>
        )}
        <div>
          <button
            className="cancel"
            type="button"
            onClick={() => cancel(setClient, setResume)}
          >
            Cancelar
          </button>
          <button
            className="send"
            type="button"
            onClick={() => handleSendOrder()}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Check;
