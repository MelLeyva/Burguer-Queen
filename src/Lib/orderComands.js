/* function UseOrders() { */
const addProduct = (item, setData, data) => {
  const exist = data.find((x) => x.id === item.id);
  if (exist) {
    setData(
      data.map((x) => (x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x))
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

const cancel = (setClient, setData) => {
  const confirmBox = window.confirm('¿Desea cancelar la orden?');
  if (confirmBox === true) {
    setClient('');
    setData([]);
  }
};

export { addProduct, restProduct, deleteProduct, cancel };
