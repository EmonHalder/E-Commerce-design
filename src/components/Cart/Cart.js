import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 7) / 100;
  const totalPrice = total + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <hr />
      <p>
        Total items: <span className="color-text"> {cart.length}</span>
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
        <button className="clear-cart-btn">Clear <span className="delete-icon"><i class="fa-solid fa-trash"></i></span></button>
        <button className="review-order">Review order <span className="arrow-icon"><i class="fa-solid fa-circle-arrow-right"></i></span></button>
      </div>
    </div>
  );
};

export default Cart;
