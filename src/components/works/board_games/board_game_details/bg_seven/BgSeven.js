import React from "react";
import "./BgSeven.css";
import Footer from "../../../../footer/Footer";
import Navbar from "../../../../navbar/Navbar";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import bgSevenImgOne from "../../../../../images/bg_seven_one.jpg";
import bgSevenImgTwo from "../../../../../images/bg_seven_two.jpg";

const BgSeven = () => {
  const location = useLocation();
  const imgList = [bgSevenImgOne, bgSevenImgTwo];

  return (
    <div className="bg_seven_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="role_team_section">
          <h3>Role : Game Designer</h3>
          <h3>Team Members : Clara Pauline Lüty, Dani Waked</h3>
        </div>
        <div className="bg_seven_c_one">
          <h2>Objective and Initial Concept : </h2>
          <p>
            The primary goal of this project is to design and implement an
            interactive system that immerses players in a story-like experience.
            Unlike traditional linear narratives or strictly predefined plots,
            this system will dynamically generate a narrative journey for the
            player, weaving together narrative events and player choices. The
            focus is not on creating a conventional game but rather on crafting
            an engaging storytelling experience.
          </p>
          <div className="bg_seven_c_two">
            <h3>Key Objectives : </h3>
            <div className="">
              <h4>Dynamic Plot Generation: </h4>
              <p>
                Developing a system capable of generating a narrative plot on
                the fly, without relying on pre-defined story structures. This
                involves selecting narrative events from a pool of possibilities
                based on internal bookkeeping and rules.
              </p>
            </div>
            <div className="">
              <h4>Maintaining Story Well-Formedness : </h4>
              <p>
                Implementing mechanisms to ensure the coherence and consistency
                of the narrative as it unfolds. The system should adhere to the
                principles of good storytelling, avoiding breaks in narrative
                flow or illogical plot developments.
              </p>
            </div>
            <div className="">
              <h4>Player Interaction : </h4>
              <p>
                Enable players to influence the narrative direction through
                their choices and actions. The system should respond dynamically
                to player decisions, shaping the unfolding story accordingly.
              </p>
            </div>
            <div className="">
              <h4>Interest and Engagement : </h4>
              <p>
                Select and present narrative events that captivate and intrigue
                the player. The goal is to create an experience that remains
                compelling and immersive throughout, keeping players invested in
                the unfolding story.
              </p>
            </div>
          </div>
          <div className="dev_four_c_three">
            <h3>Description : </h3>
            <p>
              The protagonist is the astronaut from MASA. John is his name.
              Finding a new planet that is capable of supporting life is his
              aim. His mission was to locate a planet capable of harboring life.
              He discovered an inhabited planet after three years of intense
              study and exploration, at which point he returned to Earth. But
              twenty years ago, humanity on Earth collapsed. A small group of
              scientists persevered, fought, and ensured his safe landing.
            </p>
            <p>
              After meeting and conferring with the scientists, John was
              informed of everything that had happened while he was away. In
              their search for limitless energy sources, scientists
              miscalculated atomic fusion, causing chaos all over the world.
              Animals benefited from this, becoming bigger, smarter, and
              stronger, but for humans, it was nothing short of disastrous.
              Numerous deaths have been attributed to the current heavy, thick
              smog in the atmosphere, with oxygen deprivation being the main
              cause.
            </p>
            <p>
              Scientists have created oxygen capsules that, when swallowed, can
              provide 1.5 days' worth of oxygen. John did, however, benefit
              somewhat from his previous astronaut and military training. A
              single oxygen capsule can help him survive for nearly two days.
            </p>
            <p>
              Despite the error and destruction, scientists have since produced
              nanocontainers that can hold a power source and serve as an
              alternative fuel. These nanocontainers may be useful to use in
              spaceship ignition to travel from Earth to the new habitable
              planet that John discovered.
            </p>
            <p>
              John's primary goal is to find the power source in a closed
              research facility, fill as many nanocontainers as possible, and
              safely return to the main base. In addition, he can save any
              survivors he comes across. He is carrying an off-road truck, a
              handgun, a flashlight, two oxygen capsules, a knife, a compass, a
              map, and knowledge about the existence of nanocontainer
            </p>
            <p>
              The player must make decisions throughout the game's
              narrative-like experience, from searching for the energy source to
              departing the planet. Different game endings can result from
              decisions made during the game. The tension and oxygen meters in
              the game allow for a realistic experience and maintain a sense of
              drama.
            </p>
          </div>
          <div className="dev_four_c_four">
            <p>
              We divided up the tasks among ourselves: crafting the narrative,
              creating cards, crafting strong climaxes and endings, and
              monitoring instances in which the plot needs to feel cohesive.
              Once we reached a consensus regarding the story's theme, I took on
              the task of crafting the narrative's central structure. I changed
              the plot with every iteration to make it seem more realistic and
              organic. I was greatly inspired by the movies, anime, video games,
              and books that I have read, played, and watched. Through these
              experiences, I learned how to construct a story, when to add drama
              or tension, and how to create plot twists.
            </p>
            <p>
              We started working on the cards after the story's main structure
              was finished, and I was given the task of writing each of the 39
              pre-climax cards using my teammate's flow as a guide. I carefully
              examined every scenario that could arise depending on the
              decisions made, and I made an effort to arrange everything in the
              pre-climax area. To improve the experience and manage my time
              better, I had to remove some of the parts that were making the
              story longer.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BgSeven;
