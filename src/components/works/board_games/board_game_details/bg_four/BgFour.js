import React from "react";
import "./BgFour.css";
import Navbar from "../../../../navbar/Navbar";
import Caraousal from "../../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import meetingOne from "../../../../../images/bottom_carousal/TheMeeting_1.jpg";
import meetingTwo from "../../../../../images/bottom_carousal/TheMeeting_2.jpg";
import meetingThree from "../../../../../images/bottom_carousal/TheMeeting_3.jpg";
const BgFour = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  var bottomImgList = [meetingOne, meetingTwo, meetingThree];

  return (
    <div className="bg_four_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="design_goal_section">
          <h3>Design Goal</h3>
          <p>
            My teammates and I were given the immediate task of creating a game
            that addressed either racism or colonialism. We chose colonialism
            and created a prototype that included a map with regions, specific
            pricing, and revenue generation for each round. The government of
            the land is one of the three players, and the other two are
            colonizers who want to colonize the area with their plans, outside
            weapons, and military might.
          </p>
          <p>
            To start the game, players select their roles using a role-selection
            system. The governor must secure at least two adjacent regions to
            the governing region and prevent the colonization of five
            territories to prevail. The colonizer must capture four territories
            to win. The amount of money that each colonist will start with is
            determined by rolling two dice. The majority of the territories
            shown on the map can be purchased, except for the federal capital
            territory. The cost is indicated on the territories, and if you buy
            or invest in a territory as a colonizer, you get a profit per turn.
          </p>
          <p>
            Every card is an example of a colonization project. If the governor
            accepts the colonizer's project proposal, the governor receives
            funding and the colonizer secures a territory. With the help of a
            weapon card, the colonizer can compel the governor to sell a
            territory. By creating this prototype, it is illustrating the
            concept of colonizing and negotiating to take control of a region. I
            made a game to help players understand how colonization works, how
            to negotiate with it, and how to resist it as I took a step forward
            in this direction.
          </p>
          <p>
            By creating this prototype, it is illustrating the concept of
            colonizing and negotiating to take control of a region. I wanted to
            make a game to help players understand how colonization works, how
            to negotiate with it, and how to resist it as I took a step forward
            in this direction. After receiving feedback on how to improve our
            prototype (Colrush) and negotiate effectively with a more
            sophisticated method of revenue generation, I looked at India's
            freedom struggle to learn more about how Britishers ruled India for
            200 years, how India struggled, and how freedom fighters,
            politicians, and people defended and gained independence.
          </p>
        </div>
        <div className="material_and_dimentions_section">
          <h3>Material and Dimensions</h3>
          <p>
            The main objective is to use games to depict colonization
            resistance. Through the twine, I thought about organizing the
            gameplay. Since it will be a player-versus-player game with
            negotiations and hints that must be kept a secret from other
            players, I discovered as I went along in my reading and making,
            using twine was not a practical option.Twine is not the best
            platform because it takes a long time to implement multiplayer
            gameplay, which is another deterrent. After deciding against the
            Twine concept, I tried to model a tabletop card game using paper
            prototyping, in which one player serves as a colonizer and another
            as a freedom fighter who will oppose and cause problems with each
            colonizer's actions. The initial rules of the game required a
            colonizer to conquer every area on the map and a freedom fighter to
            liberate every region from the ruling party and gain complete
            control over it. Both peaceful and violent protests will be
            represented on the freedom fighters' two decks, and the colonizer
            will also have a deck representing their response to the protests of
            the freedom fighters. Each player will have morale points connected
            to their action decks, and the winner is the player with the most
            morale points (100 or more).
          </p>
          <p>
            The mapping of history kind of came to a halt due to the lack of
            expendable information regarding the violent and nonviolent actions
            that the Indian freedom fighters and politicians took against the
            British. So, instead of using action decks, I changed the card decks
            to function as demands and actions with morale points. where each
            freedom fighter will make demands and colonizers will act following
            those demands, but it was like one type of gameplay where freedom
            fighters had the advantage.
          </p>
          <p>
            But after making a prototype, trying it out with my teammates, and
            getting their input, I reorganized everything. I looked more closely
            at the benefits and drawbacks that Britishers brought to Indian
            society and compiled ten significant instances of both.
          </p>
          <p>
            Eight agendas were created by me, using all the benefits and
            drawbacks. I changed the role of the freedom fighter to that of a
            politician, and now every British officer and politician will have
            access to 8 hints, one per round, to help them negotiate the
            agenda's terms. There will be points on each hint card related to
            negotiations. After a successful During the negotiation, each
            participant will give themselves points for the agreements they were
            able to persuade the other side to accept. The player with the most
            points at the end of eight rounds in which both parties discuss and
            negotiate agendas while forcing the other to accept their terms will
            win. "The Meeting" was the moniker given to this prototype.
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

export default BgFour;
