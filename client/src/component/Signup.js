import React, {useState} from "react";
import signpic from "../images/signup.jpg";
import { NavLink } from "react-router-dom";

const Signup = () => {

  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]:value});
  }


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
                    value={user.inputName}
                    onChange={handleInputs}
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
                    autoComplete="off"
                    value={user.inputEmail}
                    onChange={handleInputs}
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
                    autoComplete="off"
                    value={user.inputMobileno}
                    onChange={handleInputs}
                    placeholder="Mobile Number"
                  />
                </div>
                <div class="form-group">
                <label for="inputwork">
                <i class="zmdi zmdi-card-travel"></i>
                </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputWork"
                    autoComplete="off"
                    value={user.inputWork}
                    onChange={handleInputs}
                    placeholder="Profession"
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
                    autoComplete="off"
                    value={user.inputPassword}
                    onChange={handleInputs}
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
                    autoComplete="off"
                    value={user.inputcPass}
                    onChange={handleInputs}
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
