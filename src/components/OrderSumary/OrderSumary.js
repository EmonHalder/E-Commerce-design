import React from "react";
import "./Ordersumary.css";

const OrderSumary = ({product, removeItems}) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="orderReview">
      <img src={img} alt="" />

      <div className="order-info">
        <p>{name}</p>
        <p>Price: <span className="text-color">${price}</span></p>
        <p>Quantity: <span className="text-color">{quantity}</span></p>
      </div>

      <button onClick={()=>removeItems(id)} className="btn">
      <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default OrderSumary;
