import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UserScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<PrivateRouter> <HomeScreen/> </PrivateRouter>} exact />
            <Route path="/products" element={<PrivateRouter> <ProductScreen/> </PrivateRouter>} />
            <Route path="/addproduct" element={<PrivateRouter> <AddProduct/> </PrivateRouter>} />
            <Route path="/users" element={<PrivateRouter> <UsersScreen/> </PrivateRouter>} />
            <Route path="/product/:id/edit" element={<PrivateRouter> <ProductEditScreen/> </PrivateRouter>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<PrivateRouter> <NotFound/> </PrivateRouter>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
