import React from "react";
import "./Product.css";


const Product = (props) => {
  const { name, price, seller, img, ratings } = props.products;
  const productsQuantity = props.productsQuantity;

  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-details">
        <div className="main-title">
          <p>{name}</p>
          <p>Price: ${price}</p>
        </div>

        <div className="small-text">
          <p>Manufacturer: {seller}</p>
          <p className="rating">
            Rating:
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
          </p>
        </div>
      </div>
      <button onClick={() => productsQuantity(props.products)} className="btn2">
        <span className="btn-text">Add to Cart</span>
        <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default Product;
