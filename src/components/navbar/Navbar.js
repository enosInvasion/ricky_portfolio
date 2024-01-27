import React from "react";
import "./Navbar.css";
import atIcon from "../../images/at_icon.svg";
import twitter from "../../images/t_icon.svg";
import github from "../../images/git_icon.svg";
import linkedin from "../../images/link_icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav_bar_container">
      <h2 className="logo_section">
        Sahashranshu <span className="span_class">Gouda</span>
      </h2>
      <div className="nav_bar">
        <ul className="nav_items group_one">
          <li className="nav_list_item">
            <a href="/" className="nav_link_btn">
              Home
            </a>
          </li>
          <li className="nav_list_item">
            <a href="/works" className="nav_link_btn">
              Works
            </a>
          </li>
          <li className="nav_list_item">
            <a href="#" className="nav_link_btn">
              Resume
            </a>
          </li>
        </ul>
        <ul className="nav_items group_two">
          <li className="nav_list_item" href>
            <a
              href="https://www.linkedin.com/in/sahashransu-gouda-a72488170/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="mail" className="nav_icon" />
            </a>
          </li>
          <li className="nav_list_item">
            <a
              href="https://github.com/Sahashransu"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="mail" className="nav_icon" />
            </a>
          </li>
          <li className="nav_list_item">
            <a
              href=" rickygouda9827.sweden@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={atIcon} alt="mail" className="nav_icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
