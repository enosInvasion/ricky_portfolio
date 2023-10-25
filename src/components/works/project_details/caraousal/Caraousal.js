import React from "react";
import "./Caraousal.css";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Caraousal = ({ props }) => {
  const imageList = [];
  props.map((img) => {
    imageList.push(img);
  });
  const [currImageIndex, setCurrImageIndex] = useState(0);
  console.log("inside carousal" + props);
  console.log(props.type);
  //console.log("image list : " + imageList);
  return (
    <div className="caraousal_container">
      <div
        className="caraousal_inner"
        style={{ backgroundImage: `url(${imageList[currImageIndex]})` }}
      >
        <div
          className="move_left_button"
          onClick={() => {
            currImageIndex > 0 && setCurrImageIndex(currImageIndex - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <div className="carousal_center"></div>
        <div
          className="move_right_button"
          onClick={() => {
            currImageIndex < imageList.length - 1 &&
              setCurrImageIndex(currImageIndex + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Caraousal;
