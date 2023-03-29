import React from "react";
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(const elements of cart){
        total = total + elements.price;
    }
    
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Total items: <span className="color-text"> {cart.length}</span></p>
      <p>Total price: <span className="color-text">${total}</span></p>
      <p>Shipping charge: <span className="color-text">{}</span></p>
      <p>Tax: <span className="color-text">{}</span></p>
      <h5>Grand total: {}</h5>
    </div>
  );
};

export default Cart;
