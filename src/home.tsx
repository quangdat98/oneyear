import React from "react";
import "./homeCss.css";
import "./homeScript.js";
import "./bootstrap.css";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

export const home = (props) => {
  const imageFoot = [];
  for (let i = 1; i <= 120; i++) {
    imageFoot.push(
      <div
        key={i}
        className="image"
        style={{
          "--i": i,
          "--url": `url('https://picsum.photos/200?v=${i}')`,
        }}
      ></div>
    );
  }

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
                    src="http://www.webdesigndev.com/wp-content/uploads/2015/07/The-Ice-cavern-by-refriedspinach.jpg"
                    alt="Slide 1"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8dc4a523607575.55deba70e5e71.jpg"
                    alt="Slide 2"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://i.pinimg.com/originals/08/b2/0f/08b20f2d451fef77cebab0ae273dd283.jpg"
                    alt="Slide 3"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/bthumb/deer-polygon-art-8k-am.jpg"
                    alt="Slide 4"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="http://www.webdesigndev.com/wp-content/uploads/2015/07/The-Ice-cavern-by-refriedspinach.jpg"
                    alt="Slide 5"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://cdn.wallpapersafari.com/86/48/wHpFRg.jpg"
                    alt="Slide 6"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2c7758404315.560bcaeb3ce4e.jpg"
                    alt="Slide 7"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8dc4a523607575.55deba70e5e71.jpg"
                    alt="Slide 8"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/bthumb/deer-polygon-art-8k-am.jpg"
                    alt="Slide 9"
                  />
                </figure>
                <figure className="shadow">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/bthumb/deer-polygon-art-8k-am.jpg"
                    alt="Slide 10"
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
              <h1>Abhishek</h1>
            </div>
            <div className="img-cylinder">{imageFoot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
