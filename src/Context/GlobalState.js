import React, { useState, useReducer } from "react";
import shopContext from "./shop-Context";
import {data} from "../Utils/DummyData"
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./Reducers";

const GlobalState = props => {
    const products = data;
    // const [cart, setCart] = useState([]);
    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  
    const addProductToCart = product => {
      alert("jsss")
      setTimeout(() => {
        // setCart(updatedCart);
        dispatch({ type: ADD_PRODUCT, product: product });
      }, 700);
    };
  
    const removeProductFromCart = productId => {
      setTimeout(() => {
        // setCart(updatedCart);
        dispatch({ type: REMOVE_PRODUCT, productId: productId });
      }, 700);
    };
  
    return (
      <shopContext.Provider
        value={{
          products: products,
          cart: cartState.cart,
          addProductToCart: addProductToCart,
          removeProductFromCart: removeProductFromCart
        }}
      >
        {props.children}
      </shopContext.Provider>
    );
  };
  
  export default GlobalState;