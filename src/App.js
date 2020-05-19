import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* more pages to be added here later */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ProductDetails" component={ProductDetails} />
        <Route path="/ProductDetails/:productID" component={ProductDetails} />
        <Route path="/Cart" component={Cart} />
      </Switch>
    </div>
  );
}
