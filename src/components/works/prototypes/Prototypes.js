import React from "react";
import "./Prototypes.css";
import Navbar from "../../navbar/Navbar";
import { prototype_card_object_list } from "../../../componet_objects/CardObjects";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Prototypes = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  return (
    <div className="prototype_section_container">
      <Navbar />
      <div className="prototype_container">
        <div className="prot_heading_section">
          <h2 className="prot_section_heading_text">Prototypes</h2>
          <p className="prot_section_description_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Eius, inventore adipisicing elit.
          </p>
        </div>
        <div className="works_card_section">
          <h3 className="w_card_section_title_text">
            All the available prototypes
          </h3>
          <div className="card_container_section">
            <div className="design_card_container">
              {prototype_card_object_list.map((object, index) => {
                return (
                  <div
                    className="works_card"
                    key={object.id}
                    onClick={() => {
                      setId(object.id);
                      navigate(`/works/prototypes/${object.id}`, {
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
    </div>
  );
};

export default Prototypes;
