import React, { useReducer } from "react";
import {Products} from "../data";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT} from "./reducer";
import ShopContext from "./ShopContext";

export default function StateProvider(props) {
  const [cartState, dispatch] = useReducer(shopReducer, {cart: []});

  const addProduct = product => {
    dispatch({
      type: ADD_PRODUCT,
      product: product
    });
  };

  const removeFromProduct = productId => {
    dispatch({
      type: REMOVE_PRODUCT,
      productId: productId
    });
  };
  return (
    <ShopContext.Provider value= {{
        products: Products,
        cart: cartState.cart,
        addProductToCart: addProduct,
        removeProductFromCart: removeFromProduct,
    }}>
      {props.children}
    </ShopContext.Provider>
  )
}

// export default StateProvider;