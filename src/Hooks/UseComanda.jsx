import { useState } from 'react';
import { newData } from '../Lib/crud';

function UseComanda() {
  const [resume, setResume] = useState([]);
  const [client, setClient] = useState('');

  const newClient = (name) => {
    setClient(name);
  };

  const newResume = (products) => {
    setResume(products);
  };
  const addProduct = (item, setData, data) => {
    const exist = data.find((x) => x.id === item.id);
    if (exist) {
      setData(
        data.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setData([...data, { ...item, qty: 1 }]);
    }
  };

  const restProduct = (item, setData, data) => {
    const exist = data.find((x) => x.id === item.id);
    if (exist === undefined) {
      return '';
    }
    if (exist.qty === 1) {
      return setData(data.filter((x) => x.id !== item.id));
    }
    return setData(
      data.map((x) => (x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x))
    );
  };
  const deleteProduct = (item, setData, data) => {
    const exist = data.find((x) => x.id === item.id);
    if (exist) {
      setData(data.filter((x) => x.id !== item.id));
    }
  };

  const cancel = (setData) => {
    const confirmBox = window.confirm('¿Desea cancelar la orden?');
    if (confirmBox === true) {
      setClient('');
      setData([]);
    }
  };

  const handleSendOrder = async (body) => {
    if (client === '') {
      alert('Ingrese el nombre del cliente');
    } else {
      const confirm = window.confirm('Confirmar orden');
      if (confirm === true) {
        await newData('orders', body);
        alert('orden enviada');
        setResume([]);
        setClient('');
      }
    }
  };

  return {
    newResume,
    newClient,
    resume,
    client,
    addProduct,
    restProduct,
    deleteProduct,
    cancel,
    handleSendOrder
  };
}

export default UseComanda;
