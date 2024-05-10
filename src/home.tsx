import React from "react";
import "./homeCss.css";
import "./homeScript.js";
import "./bootstrap.css";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

export const home = (props) => {
  const imageFoot = [];
  for( let i =1; i<= 120; i++) {
    imageFoot.push(
      <div key={i}
      className="image"
      style={{
        "--i": i,
        "--url": `url('https://picsum.photos/200?v=${i}')`,
      }}
    ></div>
    )
  }

  return (
    <div className="body">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="animation-element bounce-up">
        <div className="paral paralsec jumbotron bounce-up" id="about">
          <div className="desc">
            <span className="title">
              Cảm Ơn Tể đã đồng hành cùng Bún 1 năm qua
            </span>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div
          className="jumbotron container-fluid"
          style={{ backgroundColor: "#fff" }}
        >
          <h1>Quan tâm</h1>
          <div className="row">
            <div className="col-md-6">
              <img src={image2} alt="Bride" className="thumb" />
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
          <h1>Giận Dỗi</h1>
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
              <img src={image3} alt="Groom" className="thumb" />
            </div>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div className="paral paralsec1 jumbotron">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <div className="perspective">
            <div className="content-div">
              <h1>Abhishek</h1>
            </div>
            <div className="img-cylinder">
                {imageFoot}
            </div>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div className="paral paralsec1 jumbotron">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <div className="perspective">
            <div className="content-div">
              <h1>Abhishek</h1>
            </div>
            <div className="img-cylinder">
                {imageFoot}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
