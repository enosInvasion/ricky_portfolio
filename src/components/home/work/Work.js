import React from "react";
import "./Work.css";
import valorant from "../../../images/valorant.jpg";

const Work = () => {
  return (
    <div className="work_container">
      <div className="work_card c_one">
        <div className="img-section">
          <img className="work_image" src={valorant} alt="" />
        </div>
        <div className="text_section">
          <h3 className="card_heading">Gravida in fermentum</h3>
          <p className="card_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            pretium quam vulputate dignissim. Leo vel fringilla est ullamcorper.
            Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec. Leo vel orci porta non pulvinar neque laoreet.
            Pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis
            imperdiet massa tincidunt. At in tellus integer feugiat scelerisque
            varius morbi. Sapien faucibus et molestie ac feugiat
          </p>
        </div>
      </div>
      <div className="work_card c_two">
        <div className="text_section">
          <h3 className="card_heading">Gravida in fermentum</h3>
          <p className="card_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            pretium quam vulputate dignissim. Leo vel fringilla est ullamcorper.
            Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec. Leo vel orci porta non pulvinar neque laoreet.
            Pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis
            imperdiet massa tincidunt. At in tellus integer feugiat scelerisque
            varius morbi. Sapien faucibus et molestie ac feugiat
          </p>
        </div>
        <div className="img-section">
          <img className="work_image" src={valorant} alt="" />
        </div>
      </div>
      <div className="work_card c_three">
        <div className="img-section">
          <img className="work_image" src={valorant} alt="" />
        </div>
        <div className="text_section">
          <h3 className="card_heading">Gravida in fermentum</h3>
          <p className="card_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            pretium quam vulputate dignissim. Leo vel fringilla est ullamcorper.
            Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec. Leo vel orci porta non pulvinar neque laoreet.
            Pharetra sit amet aliquam id diam maecenas. Amet mauris commodo quis
            imperdiet massa tincidunt. At in tellus integer feugiat scelerisque
            varius morbi. Sapien faucibus et molestie ac feugiat
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
