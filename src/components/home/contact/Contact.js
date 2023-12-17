import React from "react";
import "./Contact.css";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import twitter from "../../../images/t_icon.svg";
import github from "../../../images/git_icon.svg";
import intsagram from "../../../images/in_icon.svg";
import linkedin from "../../../images/link_icon.svg";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_leftside">
        <div className="contact_details_section">
          <div className="contact_card c_one">
            <div className="contact_logo">
              <ChatBubbleOutlinedIcon id="contact_icon" />
            </div>
            <div className="contact_text_section">
              <div className="email_details contact_text">
                <h3>Chat with me</h3>
                <p className="contact_subtext">
                  Easiest way of starting a conversation
                </p>
              </div>
              <p className="contact_subtext">
                `rickygouda9827.sweden@gmail.com
              </p>
            </div>
          </div>
          <div className="contact_card c_two">
            <div className="contact_logo">
              <LocationOnIcon id="contact_icon" />
            </div>
            <div className="contact_text_section">
              <div className="location_details contact_text">
                <h3>Meet me</h3>
                <p>Easiest way of starting a conversation</p>
              </div>
              <p className="contact_subtext">At a nearby coffe shop, Sweden</p>
            </div>
          </div>
          <div className="contact_card c_three">
            <div className="contact_logo">
              <CallIcon id="contact_icon" />
            </div>
            <div className="contact_text_section">
              <div className="contact_details contact_text">
                <h3>Ring me</h3>
                <p>Easiest way of starting a conversation</p>
              </div>
              <p className="contact_subtext">+46 762882862 , +91 7008847108</p>
            </div>
          </div>
        </div>
        <div className="s_media_icons">
          <button className="icon_buttons">
            <img src={twitter} alt="twitter" className="contact_icons" />
          </button>
          <button className="icon_buttons">
            <img src={linkedin} alt="linkedin" className="contact_icons" />
          </button>
          <button className="icon_buttons">
            <img src={intsagram} alt="instagram" className="contact_icons" />
          </button>
          <button className="icon_buttons">
            <img src={github} atl="github" className="contact_icons" />
          </button>
        </div>
      </div>
      <div className="contact_rightside">
        <div className="contact_heading">
          <h3>
            Got ideas? I've got <br /> the skills.
            <span className="coloured_text">Let's team up.</span>
          </h3>
          <p className="contact_subtext">
            Tell me more about yourself and what you have got in your mind.
          </p>
        </div>
        <form className="contact_form">
          <div className="user_name">
            <input
              type="text"
              autoComplete="off"
              className="contact_input_filed user_name_in"
              placeholder="Your name"
            />
          </div>
          <div className="user_mail">
            <input
              type="email"
              autoComplete="off"
              className="contact_input_filed user_mail_in"
              placeholder="Your email"
            />
          </div>
          <div className="user_description">
            <textarea
              type="text"
              autoComplete="off"
              className="contact_input_filed user_description_in"
              placeholder="Tell me a bit more about yourself"
            />
          </div>
        </form>
        <div className="button_container">
          <button className="submit_button_new">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
