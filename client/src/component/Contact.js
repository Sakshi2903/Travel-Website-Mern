import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

  const callContactPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  // storing data
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value });
  }

  // sending data to backend
  const contactForm = async (e) => {
    e.preventDefault();

    const {name, email, phone, message} = userData;

    if(!name || !email || !phone || !message)
      {
        window.alert("All Fields are mandatory, Message not sent!")
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      {
        window.alert("Invalid Email Address!")
      }
      else if(!/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(phone))
      {
        window.alert("Invalid Phone number!")
      }
      else
      {
        const res = await fetch('/contact', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, phone, message
          })
        });
    
        console.log(message);
    
        if(res.status === 400)
          {
            window.alert("User does not exists, message not sent!");
          }
          else if(res.status === 201)
          {
            window.alert("Message sent sccessfully!");
          }
      }

    
  }

  return (
    <>
      <div className="container">
      <h2 className="contact-title"> Contact Us </h2>
      <div className="contact-form">
            <div className="signup-form">
              <form method="POST" className="register-form" id="register-form">
                <div className="contact-form-group">
                <div class="form-group form-elem">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    autoComplete="off"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group form-elem">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group form-elem">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    placeholder="Phone"
                    value={userData.phone}
                    onChange={handleInputs}
                  />
                </div>
                </div>
                <div class="form-group form-elem">
                  <input
                    type="text"
                    class="form-control message-contact"
                    id="message"
                    name="message"
                    autoComplete="off"
                    placeholder="Message"
                    onChange={handleInputs}
                  />
                </div>
                <div class="form-group">
                  <input type="submit" name="query-submit" className="register-btn" value="Send" onClick={contactForm}/>
                </div>
              </form>
          </div>
        </div>
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.519880386667!2d73.74867928992694!3d18.65232789522697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1720093183672!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          className="map-main"
        ></iframe>
        <div className="card-wrapper"> 
        <div className="card card-call">
          <div className="card-body">
            <div className="card-icon">
            <i className="zmdi zmdi-phone-in-talk"></i>
            </div>
            <div className="card-title">
              Call Us
            </div>
             <p className="card-text">
              +91 1122334455
            </p>
          </div>
        </div>
        <div className="card card-email">
          <div className="card-body">
            <div classclassName="card-icon">
            <i className="zmdi zmdi-email"></i>
            </div>
            <div className="card-title">
              Email Us
            </div>
             <p className="card-text">
              sakshi29kulkarni@gmail.com
            </p>
          </div>
        </div>
        <div className="card card-addr">
          <div className="card-body">
            <div className="card-icon">
            <i className="zmdi zmdi-pin"></i>
            </div>
            <div className="card-title">
              Visit Us
            </div>
             <p className="card-text">
              plot no x, sector no y, behind x, xyz, 122033
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
