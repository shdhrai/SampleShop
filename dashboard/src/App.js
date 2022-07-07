import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products" component={ProductScreen} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/users" component={UsersScreen} />
          <Route path="/product/:id/edit" component={ProductEditScreen} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
