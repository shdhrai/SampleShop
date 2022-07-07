import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  window.scrollTo(0, 0);
  
  const [credentials, setCredentials] = useState({
    name: "",
    email:"",
    password:""
  });
  let navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/users/register',
      data: {
      name: credentials.name, email: credentials.email,password:credentials.password
    }
  });
    const json = response;
    if (json) {
      alert("Successfully Registered");
      navigate("/");
    } else {
      alert("Invalid Details");
    }
  };

 
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            id="name" name="name" onChange={handleOnChange} value={credentials.value}
          />
          <input
            type="email"
            placeholder="Email"
            id="email" name="email" onChange={handleOnChange} value={credentials.value}
          />
          <input
            type="password"
            placeholder="Password"
            id="password" name="password" onChange={handleOnChange} value={credentials.value}
          />

          <button type="submit">Register</button>
          <p>
            <Link to="/login">
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
