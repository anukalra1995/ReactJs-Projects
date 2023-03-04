import React, { Component } from 'react';
import { Products } from '../data';

export default React.createContext({
    products: Products,
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
});