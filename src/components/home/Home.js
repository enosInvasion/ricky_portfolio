import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import About from "./about/About";
import Projects from "./projects/Projects";
import Work from "./work/Work";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <div className="home_container">
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
