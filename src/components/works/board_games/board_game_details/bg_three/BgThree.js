import React from "react";
import "./BgThree.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../navbar/Navbar";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import colrushOne from "../../../../../images/bottom_carousal/Colrush_1.jpg";
import colrushTwo from "../../../../../images/bottom_carousal/Colrush_2.jpg";
import colrushThree from "../../../../../images/bottom_carousal/Colrush_3.jpg";

const BgThree = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  var bottomImgList = [colrushOne, colrushTwo, colrushThree];

  return (
    <div className="bg_three_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="bg_three_para">
          <h2>Game Details</h2>
          <p>
            The Colrush game is a 3 player game; 2 players play as colonizers,
            and 1 player plays as the Governor.
          </p>
          <p>
            You start the game by selecting roles through a role selecting
            system. Just pick one of the purple cards.
          </p>
          <p>
            As a colonizer, YOU WIN when you get FOUR territories first. The
            Governor wins when they are able to secure FIVE territories, of
            which two must be adjacent to the FCT, depicted in blue.
          </p>
          <p>
            To play, you roll two dice to determine the amount of money you will
            start with (a maximum of 12){" "}
          </p>
          <p>
            There are several territories on the map, and most territories can
            be bought (except for federal capital territory). The cost is
            displayed on the territories, and there is a profit you get per turn
            as a colonizer if you purchase/invest in a territory.
          </p>
          <p>
            The numbers written in black are the cost of securing land; the ones
            written in green are the profit on that land, which increases per
            turn.
          </p>
          <p>
            Each card represents a colonizing project; the colonizer proposes
            the project to the governor, and if it is approved by the governor,
            the governor gets the money and the colonizer secures a territory.{" "}
          </p>
          <p>
            The colonizer has a weapon card to force the governor to sell a
            territory, you only have one, so use it wisely.
          </p>
        </div>
        <h3 className="caraousal_heading">
          The images below represent the game concept.
        </h3>
        <Caraousal props={bottomImgList} />
      </div>
    </div>
  );
};

export default BgThree;
