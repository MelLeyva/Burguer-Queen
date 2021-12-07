import { useState } from 'react';

function UseComanda() {
  const [resume, setResume] = useState([]);
  const [client, setClient] = useState('');

  return {
    resume,
    setResume,
    client,
    setClient
  };
}

export default UseComanda;
