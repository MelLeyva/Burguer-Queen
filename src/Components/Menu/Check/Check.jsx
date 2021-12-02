/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Prueba from './Prueba';

function Check({ check, setCheck, cancel, client, setClient }) {
  // console.log(check);
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
          check.map((alimento) => (
            <Prueba
              key={alimento.id}
              alimento={alimento}
              check={check}
              setCheck={setCheck}
            />
          ))
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
