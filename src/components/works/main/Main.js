import React from "react";
import "./Main.css";
import NavImage from "../../../images/works_nav_placeholder.jpg";
import DevelopmentProjectsImage from "../../../images/development.jpg";
import BoardGamesImage from "../../../images/board_games.jpg";
import VRProjectsImage from "../../../images/vr_projects.jpg";
import DesignProjectsImage from "../../../images/design_projects.jpg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();

  let design_card_object_list = [
    {
      image_src: VRProjectsImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image_src: DesignProjectsImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image_src: DesignProjectsImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image_src: BoardGamesImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image_src: BoardGamesImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image_src: DevelopmentProjectsImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      image_src: DevelopmentProjectsImage,
      project_title: "Lorem ipsum",
      created_at: "04/03/2022",
      project_type: "Design",
      project_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="works_main_container">
      <div className="works_nav_section">
        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/design");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={NavImage} alt="" />
          </div>
          <h3 className="works_button_title">Design Projects</h3>
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
            navigate("/works/development");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={NavImage} alt="" />
          </div>
          <h3 className="works_button_title">Development</h3>
        </button>

        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/vrprojects");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={NavImage} alt="" />
          </div>
          <h3 className="works_button_title">VR Projects</h3>
        </button>

        <button
          className="works_nav_button"
          onClick={() => {
            navigate("/works/boardgames");
          }}
        >
          <div className="works_image_container">
            <img className="works_image" src={NavImage} alt="" />
          </div>
          <h3 className="works_button_title">Board Games</h3>
        </button>
      </div>
      <div className="works_card_section">
        <h3 className="w_card_section_title_text">Sample Projects</h3>
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
  );
};

export default Main;
