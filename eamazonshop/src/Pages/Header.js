import React from 'react';
import "../CSS/Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <div className = "header">
      <Link to ="/" style={{ textDecoration:"none" }}>
        <div className="header_logo">
          <StorefrontIcon className='header_logoImage' />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header_search">
        <input type="text" className='header_searchInput'/>
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className="header_nav">
        <Link to ="/Login" style={{ textDecoration:"none" }}>
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="navLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="navLineTwo">Shop</span>
        </div>
        <Link to="/Checkout" style={{ textDecoration:"none" }}>
          <div className="nav_item">
            <ShoppingBasketIcon>Basket</ShoppingBasketIcon>
            <span className="nav_itemLineTwo nav_BasketCount">({props.cart})</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header