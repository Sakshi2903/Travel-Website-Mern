import React from "react";
import { NavLink } from "react-router-dom";
import goa from "../images/goa.jpg";
import greese from "../images/Greece.jpg";
import iceland from "../images/Iceland.jpg";
import italy from "../images/italy.jpg";
import varanasi from "../images/Varanasi.jpg";
import japan from "../images/Japan.jpg";
import paris from "../images/paris.jpg";
import rome from "../images/rome.jpg";
import tokyo from "../images/tokyo.jpg";
import turkey from "../images/Turkey.jpg";

const Home = () => {
  return (
    <>
      <header>
        <section className="hero">
          <div className="hero-inner">
            <h1>WandurLust</h1>
            <NavLink to="" className="hero-btn">
              Explore Places
            </NavLink>
          </div>
        </section>
      </header>

      {/* destination section */}
      <br />
      <h2 className="form-title"> Explore Destinations </h2>
      <div class="imageGrid" id="imageGrid">
        <div class="tile imagegr1">
          <div class="textWrapper">
            <h2>Greese</h2>
            <div class="content">
            </div>
          </div>
        </div>
        <div class="tile imagegr2">
          <div class="textWrapper">
            <h2>Paris</h2>
            <div class="content">
            </div>
          </div>
        </div>
        <div class="tile imagegr3">
          <div class="textWrapper">
            <h2>Rome</h2>
            <div class="content">
            </div>
          </div>
        </div>
        <div class="tile imagegr4">
          <div class="textWrapper">
            <h2>Turkey</h2>
            <div class="content">
            </div>
          </div>
        </div>
        <div class="tile imagegr5">
          <div class="textWrapper">
            <h2>Tokyo</h2>
            <div class="content">
              </div>
          </div>
        </div>
        <div class="tile imagegr6">
          <div class="textWrapper">
            <h2>Varanasi</h2>
            <div class="content"></div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by <br/>
                <a href="#">Sakshi Kulkarni</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li className="icon-single">
                <i class="zmdi zmdi-linkedin-box"></i>
                </li>
                <li className="icon-single">
                <i class="zmdi zmdi-facebook-box"></i>
                </li>
                <li className="icon-single">
                <i class="zmdi zmdi-github"></i>
                </li>
                <li className="icon-single">
                <i class="zmdi zmdi-pinterest-box"></i>
                </li>
                <li className="icon-single">
                <i class="zmdi zmdi-twitter-box"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
