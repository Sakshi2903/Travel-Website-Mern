import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2 className="contact-title"> Contact Us </h2>
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
