import React from "react";
import atIcon from "../../images/at_icon.svg";
import artstation from "../../images/artstation.svg";
import github from "../../images/git_icon.svg";
import insta from "../../images/instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <a
          href="https://www.artstation.com/goudasahashransu"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer_icon" src={artstation} />
        </a>
        <a
          href="https://github.com/Sahashransu"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer_icon" src={github} />
        </a>
        <a
          href="https://www.instagram.com/thenoob_designer/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer_icon" src={insta} />
        </a>
        <a
          href="rickygouda9827.sweden@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer_icon" src={atIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
