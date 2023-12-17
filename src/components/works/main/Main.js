import React from "react";
import "./Main.css";
import NavImage from "../../../images/prototype_bg_r.png";
import devImage from "../../../images/dev_bg_r.png";
import boardImage from "../../../images/board_bg_r_new.png";
import vrImage from "../../../images/vr_bg_r.png";
import designImage from "../../../images/design_bg_r.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { main_card_object_list } from "../../../componet_objects/CardObjects";
const Main = () => {
  const [id, setId] = useState("");
  let navigate = useNavigate();

  return (
    <div className="works_main_container">
      <div className="works_nav_section">
        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/development");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={devImage} alt="dev-image" />
          </div>
          <h3 className="works_button_title">Development</h3>
        </button>
        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/prototypes");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={NavImage} alt="" />
          </div>
          <h3 className="works_button_title">Prototypes</h3>
        </button>

        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/boardgames");
          }}
        >
          <div className="works_image_container">
            <img className="works_image board_image" src={boardImage} alt="" />
          </div>
          <h3 className="works_button_title">Board Games</h3>
        </button>
        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/vrprojects");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={vrImage} alt="" />
          </div>
          <h3 className="works_button_title">VR Projects</h3>
        </button>
        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/design");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={designImage} alt="" />
          </div>
          <h3 className="works_button_title">Design Projects</h3>
        </button>
      </div>
      <div className="works_card_section">
        <h3 className="w_card_section_title_text">Sample Projects</h3>
        <div className="card_container_section">
          <div className="design_card_container">
            {main_card_object_list.map((object) => {
              return (
                <div
                  className="works_card"
                  key={object.id}
                  onClick={() => {
                    setId(object.id);
                    navigate(`/works/mainpage/${object.id}`, {
                      state: { object: object },
                    });
                    // console.log(" from development : " + object.id);
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
  );
};

export default Main;
