import React from "react";
import "./Caraousal.css";
import { useState } from "react";

const Caraousal = ({ props }) => {
  const imageList = [];
  for (var i = 0; i < props.length; i++) {
    imageList.push(props[i]);
  }
  const [currImageIndex, setCurrImageIndex] = useState(0);
  console.log("inside carousal" + props);
  console.log(props.type);
  //console.log("image list : " + imageList);
  return (
    <div className="caraousal_container">
      <div className="caraousal_inner">
        <img src={imageList[currImageIndex]} alt="game_image" />
        {/* <h1>Welcome Caraousal</h1> */}
      </div>
    </div>
  );
};

export default Caraousal;
