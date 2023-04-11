import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // useEffect(() => {
  //   const storeCart = getShoppingCart();
  //   let savedCart = [];

  //   for (const id in storeCart) {
  //     const matchingId = products.find((product) => product.id === id);
  //     if (matchingId) {
  //       const quantity = storeCart[id];
  //       matchingId.quantity = quantity;
  //       savedCart.push(matchingId);
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);

  const productsQuantity = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  const clearCart=()=>{
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            products={product}
            productsQuantity={productsQuantity}
          ></Product>
        ))}
      </div>

      <div className="order-summary">
        <Cart 
        cart={cart}
        clearCart={clearCart}
        >
          <Link to ="/orders">
          <button className="reviewOrder">Review Orders <span className="delete-icon"><i className="fa-solid fa-arrow-right-long"></i></span></button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
