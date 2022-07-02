import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Announcement">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center display-none'>
              <p>+91 7705015947</p>
              <p>details@decor.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end">
              <Link to="">
                <i className="fab fa-facebok-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*Header*/}
      <div className="header">
        <div className="container">
          <div className="pc-header">
            <div className="row">
              <div className='col-md-3 col-4 d-flex align-items-center'>
                <Link className='navbar-brand' to="/">
                  <img alt="logo" src="/images/logo.jpg"/>
                </Link>
              </div>
              <div className='col-md-6 col-8 d-flex align-items-center'>
                <form className='input-group'>
                  <input
                    type ="search"
                    className="form-control rounded search"
                    placeholder="Search"
                  />
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <div className='btn-group'>
                  <button
                    type ="button"
                    className="name-button dropdown-toggle"
                    data-toggle = "dropdown"
                    aria-haspopup ="true"
                    aria-expanded = "false"
                    >
                      Hi! Admin G2
                    </button>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to="/profile">
                        Profile
                      </Link>
                      <Link className='dropdown-item' to="#">
                        Logout
                      </Link>
                    </div>
                </div>

                <Link to="/cart">
                  <i className='fas fa-shopping-bag'></i>
                  <span className='badge'>4</span>
                </Link>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
