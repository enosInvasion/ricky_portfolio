import React from "react";
import "./About.css";
import profilePic from "../../../images/rickyaai_dp_new_copy.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_left">
        <div className="about_text_section">
          <div className="highlighted_text">Video Game Developer</div>
          <div className="about_section_heading">
            <h1>I'm Sahashransu Gouda.</h1>
          </div>
          <div className="about_section_description">
            Step into the extraordinary world of game development,
            <br /> where creativity meets code and imagination meets innovation.
          </div>
        </div>
        <div className="chat_button_section">
          <Link to="/chat" className="chat_button">
            LET'S CHAT!
          </Link>
        </div>
        <div className="stats_section">
          <div className="stat_text_section ts_one">
            <div className="number">2</div>
            <div className="text">
              years of
              <br /> Experience
            </div>
          </div>
          <div className="stat_text_section ts_two">
            <div className="number">36</div>
            <div className="text">
              Projects complted
              <br /> On 3 Different domains
            </div>
          </div>
        </div>
      </div>
      <div className="about_right">
        <img className="profile_pic" src={profilePic} alt="profile-pic" />
      </div>
    </div>
  );
};

export default About;
