import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
          <p className="rating">Rating:  
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
           </p>
        </div>
      </div>
      <button onClick={() => productsQuantity(props.products)} className="btn2">
        <span className="btn-text">Add to Cart</span>
        <i class="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default Product;
