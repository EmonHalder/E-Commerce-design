import React from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props);
    const {name, price, seller, img, ratings}=props.products;
    return (
        <div className='product'>
                <img src={img} alt="" />
                 
                <div className='product-details'>
                   <div className='main-title'>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                   </div>

                <div className='small-text'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} start</p>
                </div>
                </div>
                <button className='btn2'>Add to Cart</button>
              
        </div>
    );
};

export default Product;