import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UserScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/products" element={<ProductScreen/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/users" element={<UsersScreen/>} />
          <Route path="/product/:id/edit" element={<ProductEditScreen/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
