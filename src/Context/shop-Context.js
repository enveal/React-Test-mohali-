import React from "react";
import {data} from "../Utils/DummyData"

export default React.createContext({
  products:data,
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
