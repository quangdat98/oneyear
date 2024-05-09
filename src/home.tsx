import React from "react";
import "./homeCss.css";
import "./homeScript.js";
import "./bootstrap.css";

export const home = (props) => {
  return (
    <>
      <div className="animation-element bounce-up">
        <div className="paral paralsec jumbotron bounce-up" id="about">
          <div className="desc">
            <span className="title">Mr. and Mrs. John Doe</span>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div
          className="jumbotron container-fluid"
          style={{ backgroundColor: "#fff" }}
        >
          <h1>About the Bride</h1>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1463097769237-a14ad08ff22b?ixlib=rb-0.3.5&s=d50252ca609fd8dac53c9782ba9f7795&auto=format&fit=crop&w=1489&q=80"
                alt="Bride"
                className="thumb"
              />
            </div>
            <div className="col-md-6">
              <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat venenatis risus sit amet mattis. Sed sagittis accumsan
                dapibus. Quisque et justo non massa efficitur consequat. Proin
                accumsan enim sed fermentum elementum. Quisque maximus rutrum
                nunc, quis lacinia eros porta eu. Praesent odio orci,
                sollicitudin a mattis vitae, commodo sit amet felis. Sed
                condimentum facilisis feugiat. Curabitur rhoncus pharetra enim,
                vel vehicula ipsum ullamcorper eget.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div className="jumbotron container-fluid">
          <h1>About the Groom</h1>
          <div className="row">
            <div className="col-md-6">
              <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat venenatis risus sit amet mattis. Sed sagittis accumsan
                dapibus. Quisque et justo non massa efficitur consequat. Proin
                accumsan enim sed fermentum elementum. Quisque maximus rutrum
                nunc, quis lacinia eros porta eu. Praesent odio orci,
                sollicitudin a mattis vitae, commodo sit amet felis. Sed
                condimentum facilisis feugiat. Curabitur rhoncus pharetra enim,
                vel vehicula ipsum ullamcorper eget.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1490006017569-465ccb897ba1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e669bc7ae2d5682aae15610470b44efb&auto=format&fit=crop&w=1350&q=80"
                alt="Groom"
                className="thumb"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div className="paral paralsec1 jumbotron">
          <div className="desc" style={{ backgroundColor: "rgba(1,1,1,.3)" }}>
            <span className="title title2">Join us as we become one</span>
            <hr />
            <br />
            <br />
            <br />
            <span style={{ color: "#fff" }}>
              May 29, 2018
              <br />
              3:00 p.m.
            </span>
            <p>
              <button className="button">RSVP</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
