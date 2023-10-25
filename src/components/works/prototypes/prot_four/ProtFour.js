import React from "react";
import "./ProtFour.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import pfour1 from "../../../../images/prototype/Prototype/4_1.png";

const ProtFour = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });
  return (
    <div className="prot_four_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="prot_four_c_one">
          <h2>Game Narrative</h2>
          <p>
            Fredrick is a senior firefighter, probably in his last days of
            service. His work history is full of honorable missions and memories
            in which he acted as a hero. But he always refused any promotion as
            he liked to act in the field. It’s because at the very beginning of
            his career, on a hot day of middle summer, his own house caught
            fire. He had just started his career then and with the lack of
            experience he stuck himself in the fire and couldn’t reach his
            daughter. The worst happened, and he lost his only child, little
            Debra, in that fire.
          </p>
          <p>
            “ …. Help me …… help me…”, the scream of his daughter, the scream he
            always hears in his nightmares.
          </p>
          <p>
            Now there is an alarm in the station, a neighborhood is on fire, it
            must have been a simple and joyful barbeque gathering, but for an
            unknown reason a fire started and spread to the nearby houses and
            now a couple of them are on fire. Their station is the first and
            nearest to the hazard so they’re the one to respond. Because of the
            quick spread of the fire they need to save the people stuck inside
            first. Some of them returned back to their houses to save beloved
            ones ….. But they’re stuck there.
          </p>
          <p>
            Every firefighter is responsible to act on its own and save people
            in every house simultaneously because the situation is quite
            desperate and there is no time to wait for other stations to join
            the rescue mission.
          </p>
        </div>
        <div className="prot_four_c_two">
          <h2>Game Play</h2>
          <p>
            Player enters the house, there is fire and smoke everywhere, there
            are 3 people who are stuck in the fire. The player should save them
            one by one, bring them at the entrance and then go for the next
            person to rescue. There is a time limit for this rescue since the
            fire is going to destroy the building completely, and on the other
            hand the heat is high enough to make the firefighters faint.
          </p>
          <p>
            When the last person is secured from the building, the player hears
            another sound “... help me ….. Help me …..”, the sound of a little
            girl. The pressure of the fire heat and smoke make him feel dizzy,
            but he needs to choose his next move. The building is going to
            collapse.
          </p>
          <p>
            The game is a short third person puzzle game. The player is tasked
            with the retrieval of 3 civilians, placed in different parts of the
            building to do so he must traverse through an office turned-maze,
            due to debris and fires, while constantly losing health because of
            the heat and smoke.
          </p>
          <p>
            If the player’s health reaches 0, Frederick enters into an
            adrenaline rush mode. In this state, the player moves faster when
            carrying civilians and will always die after a minute passes. The
            game is designed to ensure that rescuing all three civilians will
            always take too long for the player not to enter in Adrenalin rush
            mode, thus ensuring that the player dies if he chooses to save
            everyone.
          </p>
        </div>
        <div className="prot_four_c_two">
          <h2>Ending scenarios</h2>
          <h4>
            There is four different ending scenarios considered for this game:
          </h4>
          <p>
            The player only saves one or two people from the fire and decides to
            escape from the building. The player fails as the main goal is to
            save them all.
          </p>
          <p>
            The player can not rescue the three people in the house, the timer
            ends and he fails the mission.
          </p>
          <p>
            After saving the third person, the player decides to leave the
            building and forget the sound comes from another part of the
            building. Since that was a risky mission and he already feels dizzy
            and this is hard for him to breathe, he faints at the entrance and
            dies.
          </p>
          <p>
            The player decides to go and find the source of the sound in the
            fire, but he is devastated from the heat and smoke and he falls down
            after he takes the first steps and dies.
          </p>
        </div>
        <div className="prot_four_c_three">
          <h2>Game Flow</h2>
          <img src={pfour1} alt="" />
        </div>
        <div className="prot_four_c_four">
          <h2>Story</h2>
          <h3>Act 1</h3>
          <p>
            The player needs to find the first person in the building, break the
            planks which block the door with his ax and escort him\her to the
            entrance of the house.
          </p>
          <h3>Act 2</h3>
          <p>
            The player needs to find the second person in the building, move the
            obstacles around him\her and let him\her escape.Now he needs to
            escort him\her to the entrance of the house
          </p>
          <h3>Act 3</h3>
          <p>
            The player needs to find the third person in the building. The home
            appliances are on fire and make the reaching path to the person like
            a maze. The player needs to find the way by avoiding touching fires
            (Since it damages the player in an awful way) and escort him\her to
            the entrance of the house.
          </p>
          <h3>Act 4 (Optional)</h3>
          <p>
            After saving all the three people in the house, the player decides
            to avoid the mystery sound and wants to escape from the house. But
            the pressure of the heat and smoke in the building make him fall
            down as he faints and dies.
          </p>
          <h3>Act 5 (Optional)</h3>
          <p>
            The player decides to find the source of the mystery voice. He goes
            back to the fire but he can not tolerate more heat and smoke and he
            faints and slowly goes to die.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProtFour;
