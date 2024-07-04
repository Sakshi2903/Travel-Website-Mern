import React from "react";
import signpic from "../images/signin.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="signin">      
      <h2 className="form-title"> Login </h2>
        <div className="container mt-4">
          <div className="signin-content">
          <div className="signin-image">
                <figure>
                  <img src={signpic} alt="registration pic" width="70%" className="login-img"/>
                </figure>
                </div>
            <div className="signin-form">
              <form className="login-form" id="login-form">
                <div className="form-group">
                <label for="inputEmail">
                  <i className="zmdi zmdi-email"></i>
                </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group">
                <label for="inputName">
                <i className="zmdi zmdi-lock"></i>
                </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputcPass"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group">
                <button type="submit" className="login-btn">
                  Login
                </button>
                </div>
                <div className="register-link">
                <NavLink to="/signup" className="signup-image-link">I dont have an account</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
