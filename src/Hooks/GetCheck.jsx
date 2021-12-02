import { useState } from 'react';

function GetCheck() {
  const [check, setCheck] = useState([]);
  const [client, setClient] = useState('');

  return {
    check,
    setCheck,
    client,
    setClient
  };
}

export default GetCheck;
