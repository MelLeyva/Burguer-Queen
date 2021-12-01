/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Prueba from './Prueba';

function Check({ check, setCheck, cancel }) {
  // console.log(check);
  return (
    <div>
      <form>
        <label>
          Cliente:
          <input className="client" type="text" />
        </label>
      </form>
      {check.length === 0 ? (
        <p>No hay alimentos seleccionados</p>
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
        <button type="button">Enviar</button>
      </div>
    </div>
  );
}

export default Check;
