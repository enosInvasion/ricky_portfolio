import React from "react";
import "../projects/Projects.css";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects_container">
      <div className="projects_leftside">
        <div
          className="feature_card"
          onClick={() => navigate("works/development")}
        >
          <div className="card_text_section">
            <div className="heading_description">
              <h3 className="heading_text">Development Projects</h3>
              <p className="heading_small_text">
                A series of Game Development Projects that I have done in the
                past.
              </p>
            </div>
            <div className="project_count">
              <p>4 Projects</p>
            </div>
          </div>
          <div className="card_logo_section">
            <VideogameAssetOutlinedIcon />
          </div>
        </div>
        <div
          className="feature_card"
          onClick={() => {
            navigate("/works/prototypes");
          }}
        >
          <div className="card_text_section">
            <div className="heading_description">
              <h3 className="heading_text">Prototype Projects</h3>
              <p className="heading_small_text">
                A series of Game Prototypes that I have done in the past.
              </p>
            </div>
            <div className="project_count">
              <p>4 Projects</p>
            </div>
          </div>
          <div className="card_logo_section">
            <ViewInArOutlinedIcon />
          </div>
        </div>
        <div className="feature_card" onClick={() => navigate("/works/design")}>
          <div className="card_text_section">
            <div className="heading_description">
              <h3 className="heading_text">Design Projects</h3>
              <p className="heading_small_text">
                A series of Design Projects that I have done in the past.
              </p>
            </div>
            <div className="project_count">
              <p>17 Projects</p>
            </div>
          </div>
          <div className="card_logo_section">
            <DesignServicesOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="projects_rightside">
        <div className="intro_heading_section">
          <h6 className="intro_sub_heading">Introduction</h6>
          <h3 className="intro_heading_text">
            Hello ! I'm Sahashranshu <br /> Gouda
          </h3>
        </div>
        <div className="intro_description">
          Every great game begins with an even better story
        </div>
        <div className="intro_story">
          Meet this game developer - a tech wizard with a degree in computer
          science and engineering. With two years of game-making experience, he
          turns ideas into awesome virtual adventures. Imagine a world where
          codes and pixels come together to create fun and exciting games. Get
          ready to peek behind the scenes and discover the magic crafted by our
          game developer extraordinaire!
        </div>
      </div>
    </div>
  );
};

export default Projects;
