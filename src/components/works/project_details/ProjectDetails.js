import React from "react";
import "./ProjectDetails.css";
import Caraousal from "./caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import VrImage from "../../../images/vr_projects.jpg";
import DevelopmentImage from "../../../images/development.jpg";
import atIcon from "../../../images/at_icon.svg";
import twitter from "../../../images/t_icon.svg";
import github from "../../../images/git_icon.svg";
import insta from "../../../images/instagram.svg";

const ProjectDetails = (details) => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });
  console.log(location.state.object.game_description);
  console.log(location.state.object.title);

  return (
    <div className="project_details_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="game_description">
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero libero
          ipsum quisquam vitae fuga aliquid, perferendis soluta optio id. Autem
          eaque corrupti eius! Temporibus perferendis architecto optio vero!
          Minima, illum. */}
          {location.state.object.game_description}
        </div>
        <div className="genre_features_section">
          <div className="genre_section">
            <h4 className="genre_title tit">Genre</h4>
            <p className="genre_values des">Action, Adventure, RPG</p>
          </div>
          <div className="features_section">
            <h4 className="feature_title tit">Features</h4>
            <p className="des">Single Player</p>
          </div>
        </div>
        <div className="development_details">
          <h3 className="sec_title">Development Details</h3>
          <div className="setps_section">
            <div className="inital_setps">
              <div className="initial_setps_text">
                <ul className="steps_text">
                  <li>
                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li>
                    Proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non
                  </li>
                  <li>
                    Proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non
                  </li>
                </ul>
              </div>
              <div className="intial_setps_image_section">
                <img
                  className="intial_setps_image setps_image"
                  src={VrImage}
                  alt="blue print"
                />
              </div>
            </div>
            <div className="final_setps">
              <div className="final_setps_image">
                <img
                  className="setps_image"
                  src={DevelopmentImage}
                  alt="blue print"
                />
              </div>
              <div className="final_setps_text">
                <ul className="steps_text">
                  <li>
                    Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li>
                    Proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non
                  </li>
                  <li>
                    Proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="game_instructions_section">
          <h2 className="game_instructions_title">Game Instructions</h2>
          <div className="game_instructions_text_section">
            <ul className="game_instructions_text">
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed faucibus turpis in eu mi. Ac turpis egestas sed tempus
                  urna et. Morbi tincidunt ornare massa eget egestas purus
                  viverra accumsan in. Purus faucibus ornare suspendisse sed
                  nisi.
                </p>
              </li>
              <li>
                <p>
                  Pulvinar pellentesque habitant morbi tristique senectus et
                  netus et malesuada. Imperdiet massa tincidunt nunc pulvinar
                  sapien. Nunc lobortis mattis aliquam faucibus purus in. Auctor
                  eu augue ut lectus. Enim lobortis scelerisque fermentum dui
                  faucibus in ornare. Adipiscing diam donec adipiscing tristique
                  risus nec feugiat. Sed velit dignissim sodales ut eu sem
                  integer. Rutrum quisque non tellus orci. Volutpat odio
                  facilisis mauris sit amet massa.
                </p>
              </li>
              <li>
                <p>
                  Pulvinar pellentesque habitant morbi tristique senectus et
                  netus et malesuada. Imperdiet massa tincidunt nunc pulvinar
                  sapien. Nunc lobortis mattis aliquam faucibus purus in. Auctor
                  eu augue ut lectus. Enim lobortis scelerisque fermentum dui
                  faucibus in ornare. Adipiscing diam donec adipiscing tristique
                  risus nec feugiat. Sed velit dignissim sodales ut eu sem
                  integer. Rutrum quisque non tellus orci. Volutpat odio
                  facilisis mauris sit amet massa.
                </p>
              </li>
              <li>
                <p>
                  Dui ut ornare lectus sit amet est placerat. Pulvinar sapien et
                  ligula ullamcorper malesuada proin libero nunc consequat.
                  Viverra nam libero justo laoreet sit amet. Aliquam sem
                  fringilla ut morbi tincidunt augue interdum. Cursus sit amet
                  dictum sit amet justo. Tellus pellentesque eu tincidunt tortor
                  aliquam nulla facilisi cras. Erat velit scelerisque in dictum
                  non. Fermentum leo vel orci port
                </p>
              </li>
              <li>
                <p>
                  Urna nec tincidunt praesent semper feugiat. Sollicitudin
                  aliquam ultrices sagittis orci a scelerisque purus semper.
                  Massa eget egestas purus viverra accumsan in nisl nisi. Mi
                  ipsum faucibus vitae aliquet nec ullamcorper sit. Posuere
                  lorem ipsum dolor sit. Pellentesque diam volutpat commodo sed
                  egestas egestas fringilla phasellus. Lorem mollis aliquam ut
                  porttitor leo a diam. Nisl rhoncus mattis rhoncus urna neque
                  viverra justo nec.
                </p>
              </li>
            </ul>
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

export default ProjectDetails;
