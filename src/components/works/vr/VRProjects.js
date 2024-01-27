import React from "react";
import "./VRProjects.css";
import Navbar from "../../navbar/Navbar";
import { vr_card_object_list } from "../../../componet_objects/CardObjects";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";
const VRProjects = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  return (
    <div className="vr_section_container">
      <Navbar />
      <div className="vr_container">
        <div className="vr_heading_section">
          <h2 className="vr_section_heading_text">VR Projects</h2>
          <p className="vr_section_description_text">
            Step into a realm of immersive experiences with my collection of
            Virtual Reality (VR) projects. Explore the convergence of technology
            and imagination through these virtual worlds designed to captivate
            and transport users to new dimensions.
          </p>
        </div>
        <div className="works_card_section">
          <h3 className="w_card_section_title_text">All VR Projects</h3>
          <div className="card_container_section">
            <div className="design_card_container">
              {vr_card_object_list.map((object) => {
                return (
                  <div
                    className="works_card"
                    key={object.id}
                    onClick={() => {
                      setId(object.id);
                      navigate(`/works/vrprojects/${object.id}`, {
                        state: { object: object },
                      });
                      console.log(object.id);
                    }}
                  >
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

export default VRProjects;
