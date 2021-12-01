import { useState } from 'react';

function GetCheck() {
  const [check, setCheck] = useState([]);

  return {
    check,
    setCheck
  };
}

export default GetCheck;
