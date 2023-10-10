import React from "react";
import "./BgFive.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../navbar/Navbar";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import mShapesOne from "../../../../../images/bottom_carousal/MediaShapes_1.png";
import mShapesTwo from "../../../../../images/bottom_carousal/MediaShapes_2.jpg";
import mShapesThree from "../../../../../images/bottom_carousal/MediaShapes_3.jpg";

const BgFive = () => {
  const location = useLocation();
  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  var bottomImgList = [mShapesOne, mShapesTwo, mShapesThree];

  return (
    <div className="bg_five_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="game_details_section">
          <h2>Game Details</h2>
          <p>
            The seemingly unfair pattern of representation in media, as observed
            by Katha Pollitt1 named the Smurfette principle, defined as the
            practice in media, such as film and television, to include only one
            woman in an otherwise entirely male ensemble. It establishes a
            male-dominated narrative, where the woman is the exception and
            exists only in reference to the men. This has inspired our current
            prototype, titled MediaShapes. In MediaShapes, we seek to explore
            media practices through a tabletop, card, or role-play game where
            players play as media directors, supposedly movies, where they play
            to see their cast, interest rule, or emerge. Even though the concept
            for our prototype came from modeling the Smurfette principle, it
            soon evolved to highlight different theoretical concepts such as
            homogeneity and diversity.
          </p>
          <p>
            In MediaShapes, the first media director, that is, the first player
            character, is called the Smurfette Advocate. This character was
            created based on the Smurfette principle. We visualised Smurfette
            principle as 🔵🔵🔵🔵🔵🔺 where circle is the male and triangle the
            female, alternatively it can be represented as MMMMMF. Hence, this
            is the winning condition for the Smurfette Advocate character.
          </p>
          <p>
            The second media director, that is, the second player character, is
            called the Homogeneity Advocate. This character was created based on
            the concept of hegemonic masculinity, a gender order theory term in
            gender studies coined by R. W. Connell2 which acknowledges a variety
            of masculinities that differ over time in society, culture, and the
            person. Hegemonic masculinity is described as a practice that
            supports men's dominance in society and justifies the subordination
            of other men and women, as well as other marginalized aspects of
            what it means to be a man. Hegemonic masculinity is a theoretical
            theory that aims to explain how and why men continue to hold
            dominating social roles over women and other gender identities that
            are seen as "feminine" in a certain society. Clearly, hegemonic
            masculinity describes one gender as bearing rule, the male. Hence
            our visual representation 🔵🔵🔵🔵🔵🔵. This also form the winning
            condition for our prototype with some extra 🔺🔺🔺🔺🔺🔺, this might
            mean extreme feminist agenda, but this is not intended rather, we
            choose do creative liberty to keep it as it were.
          </p>
          <p>
            Lastly, the third player in our prototype play as the Diversity
            Advocate where his mission is to promote diversity of gender as
            opposed to the other players, the winning condition for this player
            is a combination of either MMMFFF, or vice versa, visually as
            🔵🔵🔵🔺🔺🔺.
          </p>
          <p>
            Although our goal was to explore the structures, experiences, and
            representations in media, we also intended to propose diversity as a
            better approach to the seemingly challenging challenges of
            representation or biased patterns in media. When we mean diversity,
            we mean equal representation of both genders. Even though
            realistically this might be hard, as implied by Steve Rose3 in the
            gurdian.com article, it doesn’t seem as much of a complex goal to
            arrive at in MediaShapes. A more complex winning condition to arrive
            at in MediaShapes is the hegemonic masculinity, where the
            homogeneity advocate has to have the combination of MMMMMM or FFFFFF
            to win. This we see as the current limitation of our prototype.
          </p>
          <p>
            In future development, we will seek to figure out how to make the
            winning condition for the homogeneity advocate more plausible, We
            will also try to introduce more features, such as adding plot twist
            at the end of the game, possibility of having uneven deck of cards,
            having a more concrete film title to be determined by player as
            opposed to the undefined movie title, and also having variable cast
            titles as opposed to the predefined ones
          </p>
        </div>
        <div className="bg_five_how_to_play_container">
          <h3>How to play</h3>
          <p>
            The MediaShapes game is a game where the players play as a media
            expert, supposedly a movie franchise director, and have the task of
            pushing their agenda to win the game.
          </p>
          <p>
            Three players play the game, and each has a mission/character card
            that determines who you play as and what you have to do to win.
          </p>
          <p>There are 3 characters : </p>
          <ol>
            <li>The Smurfette Advocate</li>
            <li>The Diversity Advocate</li>
            <li>The Homogeneity Advocate</li>
          </ol>
          <p>
            Your character is determined by randomization at the beginning.{" "}
          </p>
          <p>
            There is a mandatory negotiation phase to push your interest (you
            could be stealthy about this), which is a turn-by-turn event
            determined by a roll of the die at the first turn, and then the next
            negotiator is determined anti-clockwise.
          </p>
          <p>For every turn, your cards must be placed anonymously. </p>
          <p>
            At the end, half of the gender-cards will be revealed, and then a
            battle face to brute push your agenda one last time comes into play.
          </p>
          <p>
            There will be a rolling of the dice, and whoever has the lowest
            number places their card first.
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

export default BgFive;
