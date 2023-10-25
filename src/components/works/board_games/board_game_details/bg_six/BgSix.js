import React from "react";
import "./BgSix.css";
import Navbar from "../../../../navbar/Navbar";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";

const BgSix = () => {
  const location = useLocation();
  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  // var bottomImgList = [mShapesOne, mShapesTwo, mShapesThree];
  return (
    <div className="bg_six_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="human_exp_container">
          <h3>Human Experience Theme</h3>
          <p>
            We decided to tackle the theme of ‘appreciation’ in our game. We
            interpret this as appreciation connected to the story of The Hunter
            and The Fox Woman, and the lack of appreciation for the things we
            have, as well as the sorrow caused by the loss of those things.
          </p>
        </div>
        <div className="game_description_container">
          <h3>A Trip Down Memory Lane In Relation to Appreciation</h3>
          <p>
            The goal of A Trip Down Memory Lane is to build two characters and
            use them in creating a story composed of various life events that
            they experience. Players cooperate at different points in the game
            to experience a co-created narrative as they role-play the
            characters they’ve created. The goal is to involve the players in a
            unique player-crafted narrative that is lightly directed by the
            prompts the game proffers, including themes such as love and grief.
          </p>
          <p>
            The conflict arises when the game changes pace gradually across the
            five rounds of play. Each round gives each player a new prompt card
            to base a life event on, however, during certain rounds, the players
            are given a shared card where they must involve both characters in
            the event and discuss what this event should be. Importantly, as the
            game goes on, more negatively framed prompts appear, such as
            sickness or fear.{" "}
          </p>
          <p>
            By incorporating the players in forging their own narratives;
            continually giving them more prompts to complicate their narratives;
            and then forcing them to make tough decisions through negative
            prompts, we hope to invoke a sense of appreciation. Specifically
            for: An appreciation for when life was simpler, and things were
            overall largely positive; an appreciation for your partner player
            when you have the luxury to work together with them explicitly; an
            appreciation for the process of creating stories and the immersion
            that brings.
          </p>
          <p>
            The experience goal of ATDML is not focused on winning or losing,
            but rather concentrating on the emotional experience between the two
            actors in play. During design, the group quickly realized that in
            order to evoke the feeling of appreciation, one must have a sense of
            value. Therefore, the necessary buildup of value is simulated
            through the player-crafted emergent story, branching in and out with
            the other player’s character. This also models the story of The
            Hunter and The Fox Woman, as their fate was similar.{" "}
          </p>
          <p>
            Despite difficulties in truly modelling the theme of appreciation,
            the mechanics evoke a series of other emotions as observed during
            the playtests. Players felt a need to cooperate and engage with
            their creativity. The prompt card mechanic, together with the round
            system, attempts to bond the two players together until they are
            separated during the final round. The “cut” or “barrier” mechanic
            was intended to model appreciation in a sense where the players part
            with each other and must continue on their own, creating a feeling
            of reflection in addition to appreciation. However, additional rules
            and variables should have been added in order to portray a deeper
            meaning while conveying the intended experience further.
          </p>
        </div>
        <div className="bg_six_how_to_play">
          <h2>How to play</h2>
          <div className="bg_six_about_section">
            <h3>About</h3>
            <p>
              ATDML is a 2 player tabletop game where the player crafts the life
              narrative of two characters they create based on life events or
              entirely fictional events that occur through the game.
            </p>
          </div>
          <div className="bg_six_resources_container">
            <h3>Resources</h3>
            <p>
              18 different prompt cards <br /> 2 character sheets
            </p>
          </div>
          <div className="bg_six_goal_container">
            <h3>Goal</h3>
            <p>
              Build two characters by creating their own stories, cooperating
              with your partner player to have fun roleplaying as characters
              you’ve created. In the end, you explore how your paths converged
              and changed, looking back at the two stories!
            </p>
          </div>
          <div className="game_flow_container">
            <h3>Game Flow</h3>
            <p>
              You are given two character sheets you need to fill out. Create
              any character you wish.
            </p>
            <p>
              Then, you will be given two random prompt cards by the Game
              Master. These prompt cards have specific themes which you use to
              write parts of the stories with. Craft a story, memories and any
              other events that you want to include, specifically revolving
              around those themes. E.g. Sickness, Love, Fear etc.{" "}
            </p>
          </div>
          <div className="rounds">
            <h3>Rounds</h3>
            <p>The game then proceeds in a round format:</p>
            <p>
              <span>Round 1: </span> 2 random prompt cards per player
            </p>
            <p>
              <span>Round 2: </span> 1 random prompt card per player
            </p>
            <p>
              <span>Round 3: </span> 1 random prompt card for both players*
            </p>
            <p>
              <span>Round 4: </span> 1 random prompt card for both players*
            </p>
            <p>
              <span>Round 5: </span> 1 random prompt card per player
            </p>
            <h4 className="bg_six_imp_point">
              *characters must base their prompt story with the second
              character.
            </h4>
            <p className="bg_six_note_section">
              ☝️Note: As the game progresses, prompt cards are more likely to be
              negatively connotated, such as feelings of envy or sickness.
              Choose how to deal with this.{" "}
            </p>
          </div>
        </div>

        <h3 className="caraousal_heading">
          The images below represent the game concept.
        </h3>
        {/* <Caraousal props={bottomImgList} /> */}
      </div>
    </div>
  );
};

export default BgSix;
