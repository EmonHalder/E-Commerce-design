import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const productsQuantity=(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
       }

    return (
        <div className='container'>

            <div className='products'>
                {
                    products.map(product=><Product
                    
                    key={product.id}
                    products={product}
                    productsQuantity={productsQuantity}
                    ></Product>) 
                }
            </div>

            <div className='order-summary'>
                <h5>Cart</h5>
                <p>Total items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;