import React from "react";
import "./Design.css";
import Navbar from "../../navbar/Navbar";
import { design_card_object_list } from "../../../componet_objects/CardObjects";

import Footer from "../../footer/Footer";

const Design = () => {
  return (
    <div className="design_section_container">
      <Navbar />
      <div className="design_container">
        <div className="design_heading_section">
          <h2 className="design_section_heading_text">Design Projects</h2>
          <p className="design_section_description_text">
            Welcome to my Design Projects Portfolio, where creativity meets
            functionality. Explore a curated collection of design endeavors that
            showcase my passion for aesthetic innovation and user-centric
            solutions.
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
      <Footer />
    </div>
  );
};

export default Design;
