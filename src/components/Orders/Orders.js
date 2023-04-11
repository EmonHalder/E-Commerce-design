import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import OrderSumary from "../OrderSumary/OrderSumary";
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  

  const [cart, setCart]= useState(savedCart);

  const removeItems=(id)=>{
    const remove = cart.filter(product=> product.id !== id);
    setCart(remove);
    removeFromDb(id)
  }

  const clearCart=()=>{
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="container">
      <div className="orderSumary-container">
        {
          cart.map(product=><OrderSumary
            product={product}
            key={product.id}
            removeItems={removeItems}
          ></OrderSumary>)
        }
      </div>

      <div className="order-summary">
        <Cart 
        cart={cart}
        clearCart={clearCart}
        >
          <Link to='/checkout'>
          <button  className="reviewOrder">Procced Checkout <span className="delete-icon"><i className="fa-regular fa-credit-card"></i></span></button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
