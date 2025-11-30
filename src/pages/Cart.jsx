import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts/1")
      .then(res => {
        console.log(res.data);
        setCart(res.date);
      })
      .catch(err => console.error(err));
  }, []);
  const deleteCart = () => {
    axios
      .delete("https://dummyjson.com/carts/1")
      .then(res => {
        console.log("Deleted:", res.data);
      })
      .catch(err => console.error(err));
  };


  return (
    <div className='container'>
      {!cart ? (
        <p>Loading...</p>
      ) : (
        <div className="p-4 m-20 bg-gray-200 rounded">
            <h2>Cart ID: {cart.id}</h2>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <p>Total Price: ${cart.total}</p>
            <button 
                onClick={deleteCart}
                className="bg-red-600 text-white px-4 py-2 rounded"
            >
                Delete Cart
            </button>
        </div>
      )}
    </div>
  );

}

export default Cart
