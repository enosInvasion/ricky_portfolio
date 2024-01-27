import React from "react";
import "./Works.css";
import Navbar from "../navbar/Navbar";
import Main from "./main/Main";
import atIcon from "../../images/at_icon.svg";
import artstation from "../../images/artstation.svg";
import github from "../../images/git_icon.svg";
import insta from "../../images/instagram.svg";
import Footer from "../footer/Footer";

const Works = () => {
  return (
    <div className="works_container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Works;
