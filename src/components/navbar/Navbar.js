import React from "react";
import "./Navbar.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import atIcon from "../../images/at_icon.svg";
import twitter from "../../images/t_icon.svg";
import github from "../../images/git_icon.svg";

const Navbar = () => {
  return (
    <div className="nav_bar_container">
      <h2 className="logo_section">
        Sahashranshu <span className="span_class">Gouda</span>
      </h2>
      <nav className="nav_bar">
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
          <li className="nav_list_item">
            <img src={twitter} alt="mail" className="nav_icon" />
          </li>
          <li className="nav_list_item">
            <img src={github} alt="mail" className="nav_icon" />
          </li>
          <li className="nav_list_item">
            <img src={atIcon} alt="mail" className="nav_icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
