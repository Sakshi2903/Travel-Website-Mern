import React from "react";
import aboutimg from "../images/Japan.jpg";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="first-col">
          <div className="about-title">
            <h5>The best travel company</h5>
            <h2 className="form-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </h2>
          </div>
          <div className="about-image">
            <img src={aboutimg}></img>
          </div>
        </div>
        <br /> <br />
        <div className="second-col">
          <div className="about-text">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact-row1">
              <div className="fact1">
                <h2 className="fact-title">
                  3.5
                </h2>
                <h5 className="fact-body">
                  Overall Reviews
                </h5>
              </div>
              <div className="fact2">
              <h2 className="fact-title">
                  23
                </h2>
                <h5 className="fact-body">
                  Satisfied Customers
                </h5>
              </div>
            </div>
            <div className="fact-row2">
            <div className="fact3">
                <h2 className="fact-title">
                 830+
                </h2>
                <h5 className="fact-body">
                  Sucessful trips
                </h5>
              </div>
              <div className="fact4">
              <h2 className="fact-title">
                  100K
                </h2>
                <h5 className="fact-body">
                  Revenue
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
