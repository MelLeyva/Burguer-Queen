import { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  return {
    cart,
    setCart
  };
}

export default Cart;
