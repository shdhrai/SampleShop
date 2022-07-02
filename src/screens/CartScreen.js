import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function CartScreen() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      {/* Cart  */}
      <div className="container">
        {/* <div className="alert alert-info text-center mt-3">
            Your Cart is Empty
            <Link className='btn btn-success mx-5 px-5 py-3' to='/' style={{fontSize:"12px"}}>
                Shopping Now
            </Link>
        </div> */}
        <div className="alert alert-info text-center mt-3">
          Total Cart Products
          <Link className="text-success mx-2" to="/cart">
            (4)
          </Link>
        </div>
        {/* Cart Item  */}
        <div className="cart-item row">
          <div className="remove-button d-flex justify-content-center align-items-center">
            <i className="fas fa-times"></i>
          </div>
          <div className="cart-image col-md-3">
            <img src="./images/1.png" alt="nike shoe image" srcset="" />
          </div>
          <div className="cart-text col-md-5 d-flex align-items-center">
            <Link to="#">
              <h4>Nike shoe</h4>
            </Link>
          </div>
          <div className="cart-qty col-md-5 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-content-center">
            <h6>Quantity</h6>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="cart-price col-md-2 mt-3 mt-md-0 align-items-sm-end align-items-md-end">
            <h6>Subtotal</h6>
            <h4>Rs.8000</h4>
          </div>
        </div>
        {/* End of Cart Items  */}
        <div className="total">
          <span className="sub">total:</span>
          <span className="total-price">Rs.9000</span>
        </div>
        <hr />
        <div className="cart-buttons d-flex align-items-center row">
          <Link className="col-md-6" to="/">
            <button>Continue to shopping</button>
          </Link>
          <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <Link to="#" className="text-white">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
