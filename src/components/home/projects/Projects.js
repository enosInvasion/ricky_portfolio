import React from "react";
import "../projects/Projects.css";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="projects_leftside">
        <div className="feature_card">
          <div className="card_text_section">
            <div className="heading_description">
              <h3 className="heading_text">Design Projects</h3>
              <p className="heading_small_text">
                A series of VR Projects that I have done in the past
              </p>
            </div>
            <div className="project_count">
              <p>3 Projects</p>
            </div>
          </div>
          <div className="card_logo_section">
            <DesignServicesOutlinedIcon />
          </div>
        </div>
        <div className="feature_card">
          <div className="card_text_section">
            <div className="heading_description">
              <h3 className="heading_text">VR Projects</h3>
              <p className="heading_small_text">
                A series of VR Projects that I have done in the past
              </p>
            </div>
            <div className="project_count">
              <p>3 Projects</p>
            </div>
          </div>
          <div className="card_logo_section">
            <ViewInArOutlinedIcon />
          </div>
        </div>
        <div className="feature_card">
          <div className="card_text_section">
            <div className="heading_description">
              <h3 className="heading_text">Game Dev Projects</h3>
              <p className="heading_small_text">
                A series of VR Projects that I have done in the past
              </p>
            </div>
            <div className="project_count">
              <p>3 Projects</p>
            </div>
          </div>
          <div className="card_logo_section">
            <VideogameAssetOutlinedIcon />
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          doloremque sequi deleniti nesciunt, totam eveniet possimus perferendis
          similique minus aliquid qui delectus incidunt blanditiis aperiam
          laborum dolorum magnam perspiciatis! Quis officia nam et accusamus
          repellat. Animi omnis nemo ex velit.
        </div>
      </div>
    </div>
  );
};

export default Projects;