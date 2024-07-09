import React, { useState } from "react";
import signpic from "../images/signup.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
      e.preventDefault();

      const {name, email, phone, work, password, cpassword} = user;
      if(!name || !email || !phone || !work || !password || !cpassword)
      {
        window.alert("All Fields are mandatory, Registration Failed!")
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      {
        window.alert("Invalid Email Address!")
      }
      else if(!/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(phone))
      {
        window.alert("Invalid Phone number!")
      }
      else if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/i.test(password))
      {
        window.alert("Password must contain one digit, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.")
      }
      else if(password !== cpassword)
      {
        window.alert("Passwords does not match, Registration Failed!")
      }
      else
      {
        const res = await fetch("/register", {
          method: "POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name, email, phone, work, password, cpassword
          })
        });
        console.log(res)
        if(res.status === 422)
        {
          window.alert("User already exists, registration failed!");
          window.location.reload();
        }
        else if(res.status === 201)
        {
          window.alert("Registration Success!");
          console.log("Registration Success!");

          navigate('/login');
        }
      }
        
    }

  return (
    <div>
      <section className="signup">
        <h2 className="form-title"> Signup </h2>
        <div className="container mt-4">
          <div className="signup-content">
            <div className="signup-form">
              <form method="POST" className="register-form" id="register-form">
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">
                    <i class="zmdi zmdi-phone"></i>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone"
                  />
                </div>
                <div class="form-group">
                  <label for="work">
                    <i class="zmdi zmdi-card-travel"></i>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="work"
                    name="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Profession"
                  />
                </div>
                <div class="form-group">
                  <label for="password">
                    <i class="zmdi zmdi-lock-open"></i>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="cpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="cpassword"
                    name="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm your password"
                  />
                </div>
                <div class="form-group">
                  <input type="submit" name="signup" className="register-btn" value="Register" onClick={PostData} />
                </div>
                <div class="login-link">
                  <NavLink to="/login" className="signup-image-link">
                    I already have an account
                  </NavLink>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signpic} alt="registration pic" width="75%" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
