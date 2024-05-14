import React from "react";
import "./homeCss.css";
import "./homeScript.js";
import "./bootstrap.css";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";
import image11 from "./images/image11.png";
import image12 from "./images/image12.png";
import image13 from "./images/image13.png";
import image14 from "./images/image14.png";
import image15 from "./images/image15.png";



export const home = (props) => {
 
  const images = [
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    // Thêm các ảnh khác nếu cần
  ];

const imageFoot = images.map((image, i) => (
  <div
    key={i}
    className="image"
    style={{
      "--i": i + 1,
      "--url": `url(${image})`,
    }}
  ></div>
));

  return (
    <div className="body">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"
        type="text/javascript"
      ></script>

<div className="animation-element bounce-up">
        <div className="paral paralsec1 jumbotron">
          <section className="slideshow">
            <div className="content">
              <div className="slider-content">
                <figure className="shadow">
                    <img
                      src={image6}
                    />
                </figure>
                <figure className="shadow">
                    <img
                      src={image7}
                    />  
                </figure>
                <figure className="shadow">
                   <img
                    src={image8}
                  />
                </figure>
                <figure className="shadow">
                  <img
                      src={image9}
                    />
                </figure>
                <figure className="shadow">
                  <img
                      src={image10}
                    />
                </figure>
                <figure className="shadow">
                  <img
                    src={image11}
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src={image12}
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src={image13}
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src={image14}
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src={image15}
                  />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </div>

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
              <h1>Yêu vợ hâmm</h1>
            </div>
            <div className="img-cylinder">{imageFoot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
