import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UserScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <>
     <Router>
          <Routes>
            <Route element={<PrivateRouter/>}>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/products" element={<ProductScreen/>} />
                <Route path="/addproduct" element={<AddProduct/>}/>
                <Route path="/users" element={<UsersScreen/>}/>
                <Route path="/product/:id/edit" element={<ProductEditScreen/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
