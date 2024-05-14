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
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),
    require('./images/image8.png'),
    require('./images/image9.png'),
    require('./images/image10.png'),
    require('./images/image11.png'),
    require('./images/image12.png'),
    require('./images/image13.png'),
    require('./images/image14.png'),
    require('./images/image15.png'),
    require('./images/image16.png'),
    require('./images/image1.png'),
    require('./images/image2.png'),
    require('./images/image3.png'),
    require('./images/image3.png'),
    require('./images/image4.png'),
    require('./images/image5.png'),
    require('./images/image6.png'),
    require('./images/image7.png'),

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
                Quan tâm là yếu tố cốt lõi giúp mối quan hệ trở nên bền vững và hạnh phúc Tể ạ. Quan tâm không chỉ dừng lại ở những lời nói yêu thương mà còn thể hiện qua hành động nhỏ nhặt hàng ngày. Một cái nắm tay ấm áp, một tin nhắn chúc buổi sáng tốt lành hay đơn giản là lắng nghe đối phương khi họ gặp khó khăn đều là những biểu hiện của sự quan tâm chân thành. Quan tâm còn đòi hỏi sự thấu hiểu và tôn trọng lẫn nhau, chấp nhận những khác biệt và sẵn sàng cùng nhau vượt qua thử thách. Cảm ơn Tể yêu luôn quan tâm Bún ạ :)))
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="animation-element bounce-up">
        <div className="jumbotron container-fluid">
          <h1>Tương Lai</h1>
          <div className="row">
            <div className="col-md-6">
              <p className="info">
              Trong một mối quan hệ, việc nhìn về tương lai cùng nhau cho thấy sự nghiêm túc và mong muốn gắn bó lâu dài. Những cuộc trò chuyện về tương lai giúp cả hai hiểu rõ hơn về mong muốn, mục tiêu và giá trị của nhau.Tương lai còn là khoảng thời gian để cả hai cùng trưởng thành, phát triển bản thân và học cách yêu thương nhau nhiều hơn. Trong quá trình đó, họ học cách tha thứ, hiểu và tôn trọng lẫn nhau. 
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
