import React from "react";
import "./BoardGames.css";
import DevelopmentProjectsImage from "../../../images/development.jpg";
import BoardGamesImage from "../../../images/board_games.jpg";
import VRProjectsImage from "../../../images/vr_projects.jpg";
import DesignProjectsImage from "../../../images/design_projects.jpg";
import Navbar from "../../navbar/Navbar";

const BoardGames = () => {
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
    <div className="board_games_section_container">
      <Navbar />
      <div className="board_games_container">
        <div className="board_games_heading_section">
          <h2 className="board_games_section_heading_text">
            Board Game Projects
          </h2>
          <p className="board_games_section_description_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Eius, inventore adipisicing elit.
          </p>
        </div>
        <div className="works_card_section">
          <h3 className="w_card_section_title_text">All Board Game Projects</h3>
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
    </div>
  );
};

export default BoardGames;
