import React from "react";
import ProductPage from "./Components/ProductPage"
import Cart from './Components/Cart'
import GlobalState from "./Context/GlobalState"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <GlobalState>
     <Router>
      <div className="App">
        <Switch>
        <Route path="/" component={ProductPage} exact />
        <Route path="/cart" component={Cart} exact />
        </Switch>
      </div>
    </Router>
    </GlobalState>
  );
}
