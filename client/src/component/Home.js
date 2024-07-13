import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

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
      <div className="imageGrid" id="imageGrid">
        <div className="tile imagegr1">
          <div className="textWrapper">
            <h2>Greese</h2>
            <div className="content">
            </div>
          </div>
        </div>
        <div className="tile imagegr2">
          <div className="textWrapper">
            <h2>Paris</h2>
            <div className="content">
            </div>
          </div>
        </div>
        <div className="tile imagegr3">
          <div className="textWrapper">
            <h2>Rome</h2>
            <div className="content">
            </div>
          </div>
        </div>
        <div className="tile imagegr4">
          <div className="textWrapper">
            <h2>Turkey</h2>
            <div className="content">
            </div>
          </div>
        </div>
        <div className="tile imagegr5">
          <div className="textWrapper">
            <h2>Tokyo</h2>
            <div className="content">
              </div>
          </div>
        </div>
        <div className="tile imagegr6">
          <div className="textWrapper">
            <h2>Varanasi</h2>
            <div className="content"></div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by <br/>
                <a href="https://www.linkedin.com/in/sakshikulkarni29">Sakshi Kulkarni</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li className="icon-single">
                <i className="zmdi zmdi-linkedin-box"></i>
                </li>
                <li className="icon-single">
                <i className="zmdi zmdi-facebook-box"></i>
                </li>
                <li className="icon-single">
                <i className="zmdi zmdi-github"></i>
                </li>
                <li className="icon-single">
                <i className="zmdi zmdi-pinterest-box"></i>
                </li>
                <li className="icon-single">
                <i className="zmdi zmdi-twitter-box"></i>
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
