import React, { createContext, useState } from 'react';

const CartContext = createContext();
  export const CartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState(null);
  
  return (
    <CartContext.Provider value={{ addToCart, setAddToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
