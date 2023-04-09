import React from "react";
import "./Cart.css";

const Cart = ({cart, clearCart, children}) => {

  

  let quantity = 0;
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    if(product.quantity===0){
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = total * 7 / 100;
  const totalPrice = total + totalShipping + tax;
  
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <hr />
      <p>
        Total items: <span className="color-text"> {quantity}</span>
      </p>
      <p>
        price: <span className="color-text">${total}</span>
      </p>
      <p>
        Tax: <span className="color-text">{tax}</span>
      </p>
      <p>
        Shipping charge: <span className="color-text">${totalShipping}</span>
      </p>
      <h5>
        Total price: <span className="color-text">${totalPrice}</span>
      </h5>
      <div className="btn-container">
        <button onClick={clearCart}  className="clear-cart-btn">Clear <span className="delete-icon"><i className="fa-regular fa-trash-can"></i></span></button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
