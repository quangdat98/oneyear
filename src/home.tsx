import React from "react";
import "./homeCss.css";
import $ from "jquery";
import "./homeScript.js";

export const home = (props) => {
  return (
    <>
      <div
        className="animation-element bounce-up"
        style={{ backgroundColor: "#ff4000" }}
      >
        <div className="paral paralsec jumbotron bounce-up" id="about">
          <div className="desc">
              <div className="wrapper">
                <ul id="sb-slider" className="sb-slider">
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2969141180"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/1.jpg"
                        alt="image1"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Creative Lifesaver</h3>
                    </div>
                  </li>
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2968268187"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/2.jpg"
                        alt="image2"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Honest Entertainer</h3>
                    </div>
                  </li>
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2968114825"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/3.jpg"
                        alt="image1"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Brave Astronaut</h3>
                    </div>
                  </li>
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2968122059"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/4.jpg"
                        alt="image1"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Affectionate Decision Maker</h3>
                    </div>
                  </li>
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2969119944"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/5.jpg"
                        alt="image1"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Faithful Investor</h3>
                    </div>
                  </li>
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2968126177"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/6.jpg"
                        alt="image1"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Groundbreaking Artist</h3>
                    </div>
                  </li>
                  <li>
                    <a
                      href="http://www.flickr.com/photos/strupler/2968945158"
                      target="_blank"
                    >
                      <img
                        src="https://tympanus.net/Development/Slicebox/images/7.jpg"
                        alt="image1"
                      />
                    </a>
                    <div className="sb-description">
                      <h3>Selfless Philantropist</h3>
                    </div>
                  </li>
                </ul>

                <div id="shadow" className="shadow"></div>

                <div id="nav-arrows" className="nav-arrows">
                  <a href="#">Next</a>
                  <a href="#">Previous</a>
                </div>
              </div>
       
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div
          className="jumbotron container-fluid"
          style={{ backgroundColor: "#0040ff", height: "1000px" }}
        ></div>
      </div>

      <div
        className="animation-element bounce-up"
        style={{ backgroundColor: "#ff00bf" }}
      >
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
                src="https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=150&lazy=load%20150w,%20https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load%20300w,%20https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load%20400w,%20https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load%20600w,%20https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load%20800w,%20https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load%201200w,%20https://images.pexels.com/photos/19845907/pexels-photo-19845907/free-photo-of-r-ng-cay-hinh-bong-hinh-chi-u.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load%201600w"
                className="thumb"
                alt="Groom"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="animation-element bounce-up"
        style={{ backgroundColor: "#ffff00" }}
      >
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
