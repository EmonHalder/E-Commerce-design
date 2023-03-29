import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" sizes="" srcset="" />
            <div className='nav-elements'>
                <a href="/order">Orders</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>

        </nav>
    );
};

export default Header;