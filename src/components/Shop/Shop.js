import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <div className='container'>

            <div className='products'>
                {
                    products.map(product=><Product
                    
                    key={product.id}
                    products={product}

                    ></Product>)
                }
            </div>

            <div className='order-summary'>
                <h5>order summary</h5>
            </div>
        </div>
    );
};

export default Shop;