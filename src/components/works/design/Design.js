import React from "react";
import "./Design.css";
import Navbar from "../../navbar/Navbar";
import { design_card_object_list } from "../../../componet_objects/CardObjects";
import atIcon from "../../../images/at_icon.svg";
import twitter from "../../../images/t_icon.svg";
import github from "../../../images/git_icon.svg";
import insta from "../../../images/instagram.svg";

const Design = () => {
  return (
    <div className="design_section_container">
      <Navbar />
      <div className="design_container">
        <div className="design_heading_section">
          <h2 className="design_section_heading_text">Design Projects</h2>
          <p className="design_section_description_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Eius, inventore adipisicing elit.
          </p>
        </div>
        <div className="works_card_section">
          <h3 className="w_card_section_title_text">All Design Projects</h3>
          <div className="card_container_section">
            <div className="design_card_container">
              {design_card_object_list.map((object) => {
                return (
                  <div className="works_card">
                    <div className="w_card_image_section">
                      <img src={object.image_src} alt="image" />
                    </div>
                    <div className="w_card_text_section">
                      <div className="w_card_date_container">
                        <div className="w_card_created_at">
                          <h5>{object.created_at}</h5>
                        </div>
                        <div className="w_card_type">
                          <h5>{object.project_type}</h5>
                        </div>
                      </div>
                      <div className="w_card_title">
                        <h4 className="w_card_project_heading">
                          {object.project_title}
                        </h4>
                        <p className="w_card_project_description">
                          {object.project_description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
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

export default Design;
