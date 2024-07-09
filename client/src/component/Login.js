import React, { useState } from "react";
import signpic from "../images/signin.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const loginUser = async (e) => {
      e.preventDefault();

      const {email, password} = user;
      console.log(user);
      const res = await fetch("/signin", {
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      const data = await res.json();
      console.log(data);
      if(data.status === 400 || !(data)){
        window.alert("Login Failed!");
        console.log("Login Failed!");
        return
      }else{
        window.alert("Login Success!");
        console.log("Login Success!");

        navigate('/');
      }
  }

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
              <form className="login-form" id="login-form" method="POST">
                <div className="form-group">
                <label for="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                <label for="password">
                <i className="zmdi zmdi-lock"></i>
                </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" name="signin" id="signin" className="login-btn" value="Log In" onClick={loginUser} />
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
