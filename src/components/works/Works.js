import React from "react";
import "./Works.css";
import Navbar from "../navbar/Navbar";
import Main from "./main/Main";
import atIcon from "../../images/at_icon.svg";
import twitter from "../../images/t_icon.svg";
import github from "../../images/git_icon.svg";
import insta from "../../images/instagram.svg";

const Works = () => {
  return (
    <div className="works_container">
      <Navbar />
      <Main />
      <div className="footer">
        <div className="footer_icons">
          <img className="footer_icon" src={atIcon} />
          <img className="footer_icon" src={twitter} />
          <img className="footer_icon" src={github} />
          <img className="footer_icon" src={insta} />
        </div>
      </div>
    </div>
  );
};

export default Works;
