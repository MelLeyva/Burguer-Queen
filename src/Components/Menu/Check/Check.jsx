/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Check() {
  return (
    <div>
      <form>
        <label>
          Cliente:
          <input className="client" type="text" />
        </label>
      </form>
      <span />
    </div>
  );
}

export default Check;
