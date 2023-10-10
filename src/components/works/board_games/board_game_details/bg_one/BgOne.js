import "./BgOne.css";
import React from "react";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../navbar/Navbar";
import atIcon from "../../../../../images/at_icon.svg";
import twitter from "../../../../../images/t_icon.svg";
import github from "../../../../../images/git_icon.svg";
import insta from "../../../../../images/instagram.svg";
import bgone from "../../../../../images/bg_one.png";

const BgOne = (details) => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });
  // console.log(location.state.object.game_description);
  // console.log(location.state.object.title);

  return (
    <div className="bg_one_details_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="game_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero libero
          ipsum quisquam vitae fuga aliquid, perferendis soluta optio id. Autem
          eaque corrupti eius! Temporibus perferendis architecto optio vero!
          Minima, illum.
          {/* {location.state.object.game_description} */}
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
        <div className="story_telling_container">
          <h3 className="story_telling_heading">Story Telling</h3>
          <p className="sotry_telling_content">
            The game is inspired by politics and how, in a democratic system,
            agents can influence the state of affairs in their environment
            through voting and negotiation. Sometimes the leaders from different
            parties share a similar goal; sometimes their goals are conflicted.
            Betrayal, cooperation, and predictions based on psychology usually
            happen between politicians.
          </p>
        </div>
        <div className="feeling_container">
          <h3 className="feeling_heading">Feeling</h3>
          <p className="feeling_content">
            We want players to try and be sneaky and manipulative in order to
            achieve their objective. Players should be distrustful of each other
            because they can betray each other regardless of what they
            negotiate. Through the game, players should be encouraged to
            anticipate and predict the behavior of their opponents while
            managing their own feelings about the inherent uncertainty embedded
            in the game.
          </p>
        </div>
        <div className="asthetics_container">
          <div className="asthetics_text_section">
            <h3 className="asthetics_heading">Asthetics</h3>
            <ol className="asthetics_list">
              <li>Negotiation</li>
              <li>Sbotage</li>
              <li>Deceit</li>
              <li>psychological</li>
              <li>Trickery</li>
            </ol>
          </div>
          <img className="bgone_image" src={bgone} alt="game-image" />
        </div>
        <div className="how_to_play_container">
          <h2 className="how_to_play_heading">How to play</h2>
          <div className="beginning_container">
            <p>
              First, setup the game as in the figure to the right. Each player
              receives the color cube of their choice and a direction card.
              Decide which player moves first in the first round by rolling a
              die. The movement then follows a clockwise order. In the second
              round,
            </p>
            <p>
              The player who moves second in the first round then becomes the
              first player in the subsequent round.
            </p>
          </div>
          <div className="goal_of_the_game_container">
            <h3 className="goal_of_the_game_container_heading">
              Goal of the game
            </h3>
            <p className="goal_of_the_game_content">
              The objective of the game is to capture the yellow star. A player
              captures the yellow star by moving onto its square. As soon as a
              player captures the yellow star, the game ends, and that player
              wins.
            </p>
          </div>
          <div className="turn_structure_container">
            <h3>Turn Structure</h3>
            <p>
              The round is comprised of three successive phases. A round is
              complete after all phases have been executed.
            </p>
            <ol className="turn_structure_list">
              <li>
                <h4>Movement Phase</h4>
                <p>
                  Each player moves 1 step horizontally or vertically each turn,
                  with respect to the order. If a player is next to an obstacle,
                  the player can decide to give up their movement chance and
                  choose to push the block 1 step away instead. Players cannot
                  push a block if the grid where the block should move is
                  occupied by another player or block.
                </p>
              </li>
              <li>
                <h4>Negotiation Phase</h4>
                <p>
                  First, a timer of 15 seconds will be set, and all the players
                  will discuss freely with each other.
                </p>
              </li>
              <li>
                <h4>Voting Phase</h4>
                <p>
                  Each player secretly decides the moving direction of the star,
                  flips the direction card in their hand, making the arrow point
                  towards their desired direction, and reveals it at the same
                  time. Then all the votes will be stacked or countered with
                  each other to decide the final position of the star.
                </p>
              </li>
            </ol>
          </div>
          <div className="what_happens_container">
            <h3>What happens if the star moves onto an obstacle? </h3>
            <p>Can’t move or lands on top (top might be cool)</p>
            <p>
              When moved to an obstacle, the star will be put on top of it and
              won’t be reached by any player. If the players want to get it,
              they will need another voting turn to let the star down.
            </p>
          </div>
          <div className="star_moves_onto_container">
            <h3 className="start_moves_heding">
              What happens if the star moves onto a player?
            </h3>
            <p>Player wins probably, right?</p>
            <p>The player will win.</p>
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

export default BgOne;
