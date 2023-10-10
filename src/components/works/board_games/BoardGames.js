import React from "react";
import "./BoardGames.css";
import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import { board_games_card_object_list } from "../../../componet_objects/CardObjects";
import { useNavigate } from "react-router-dom";

const BoardGames = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

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
              {board_games_card_object_list.map((object) => {
                console.log(object.id);
                return (
                  <div
                    className="works_card"
                    key={object.id}
                    onClick={() => {
                      console.log("cliked card : " + object.id);
                      setId(object.id);
                      navigate(`/works/boardgames/${object.id}`, {
                        state: { object: object },
                      });
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

export default BoardGames;
