import React from "react";
import signpic from "../images/signup.jpg";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <section className="signup">      
      <h2 className="form-title"> Signup </h2>
        <div className="container mt-4">
          <div className="signup-content">
            <div className="signup-form">
              <form className="register-form" id="register-form">
                <div class="form-group">
                <label for="inputName">
                  <i class="zmdi zmdi-account"></i>
                </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                <label for="inputEmail">
                  <i class="zmdi zmdi-email"></i>
                </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                <label for="inputMobileno">
                  <i class="zmdi zmdi-phone"></i>
                </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputMobileno"
                    placeholder="Mobile Number"
                  />
                </div>
                <div class="form-group">
                <label for="inputName">
                <i class="zmdi zmdi-lock-open"></i>
                </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                <label for="inputName">
                <i class="zmdi zmdi-lock"></i>
                </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputcPass"
                    placeholder="Confirm your password"
                  />
                </div>
                <div class="form-group">
                <button type="submit" class="register-btn">
                  Register
                </button>
                </div>
                <div class="login-link">
                <NavLink to="/login" className="signup-image-link">I already have an account</NavLink>
                </div>
              </form>
            </div>
             <div className="signup-image">
                <figure>
                  <img src={signpic} alt="registration pic" width="75%"/>
                </figure>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
