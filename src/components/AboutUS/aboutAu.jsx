import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="container about ">
      <h1 className="text-center">about us</h1>
      <div className="row justify-content-evenly ">
        <div className="col-md-6 aboutInfo">
          <h3>OUR MISSION</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
          </p>
        </div>
        <div className="col-md-6 aboutInfo">
          <h3>OUR STORIES</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="col-md-6 aboutInfo">
          <h3>OUR APPROACH</h3>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="col-md-6 aboutInfo">
          <h3>OUR PHILOSOPHY</h3>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
            quo voluptas nulla pariatur? Quis nostrum exercitationem ullam.
          </p>
        </div>
        <div className="col-md-12 aboutQuote">
          <blockquote>
            <p>
              <i className="fas fa-quote-left"></i>I am text block. Click edit
              button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo. Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
              pariatur? Quis nostrum exercitationem ullam
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
