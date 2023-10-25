import React from "react";
import "./ProtOne.css";
import { useLocation } from "react-router-dom";
import Caraousal from "../../project_details/caraousal/Caraousal";
import Navbar from "../../../navbar/Navbar";
import p1 from "../../../../images/prototype/Prototype/1_1.png";

const ProtOne = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  var bottomImgList = [p1, p1, p1];

  return (
    <div className="prot_one_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="prot_one_c_one">
          <h2>Game descriptions</h2>
          <p>
            The game is played over Zoom via voice controls and is set in the
            G41 room at campus. The player character, who is played by an actor,
            shows up on one of the call participant’s face cameras, which act as
            a third person camera that follows behind the character with the
            help of a cameraman using a phone for a webcam. The player controls
            the player character by giving it voice commands over the zoom call.
            The player can make the character interact with different objects
            and NPCs in the room in order to solve a murder mystery.
          </p>
        </div>
        <div className="prot_one_c_two">
          <h3>Aesthetic Model</h3>
          <p>
            The game is supposed to feel like a silly, surreal experience, which
            the player comes to understand more and more throughout the game.
          </p>
        </div>
        <div className="prot_one_c_three">
          <h3>USP (Unique Selling Point)</h3>
          <p>
            Level G41 can only be played once and is played in an unusual way.
            It has a simple story with an unconventional meta twist.
          </p>
        </div>
        <div className="prot_one_c_four">
          <p>
            The player character is controlled through voice commands. Possible
            commands to use include the following :{" "}
          </p>
          <ul>
            <li>Start - starts the game</li>
            <li>Forward - makes the character move forward</li>
            <li>Backward - makes the character move backward</li>
            <li>Left - makes the character turn 90° to their left</li>
            <li>Right - makes the character turn 90° to their right</li>
            <li>Stop - makes the character stops in place</li>
            <li>
              Interact - makes the character perform an action with whatever is
              in front of them. This action is in some cases, determined by the
              story and is sometimes improvised by the actor
            </li>
            <li>(Jump - makes the character jump, just for fun</li>
            <li>Crouch - makes the character crouch, just for fun</li>
            <li>
              Enable/disable pathfinding - makes the character stop/start
              getting stuck on objects) Old
            </li>
            <li>Menu - makes the cameraman bring out the menu</li>
            <li>Continue - makes the cameraman remove the menu</li>
          </ul>
          <p>
            Jump, Crouch, and Enable/Disable pathfinding were removed in later
            iterations of the game, as while they were funny, they took time and
            had no real impact on the game.
          </p>
        </div>
        <div className="prot_one_c_five">
          <h3>Game Feel</h3>
          <p>Playing feels very clunky but also funny.</p>
        </div>
        <div className="prot_one_c_six">
          <h3>Core Game Loop</h3>
          <p>
            After the first impressions, the player will control their character
            to walk around the room and find clues. After gathering the final
            clue, they will look into a mirror, revealing the game’s secret.
            Afterward, the game ends.
          </p>
        </div>
        <div className="port_one_c_seven">
          <h3>First Impressions</h3>
          <p>
            The game starts with a short introduction to why the detective is in
            G41. The player and audience will then see a menu that contains the
            possible actions the player can command the detective to do. Then,
            when the player is ready, they say start, and the menu is removed to
            reveal the detective sitting on a chair. The detective stands up,
            and the player tries ordering him around to see what he can do.
            Soon, the player notices the NPC moving around and tries to interact
            with him.
          </p>
        </div>
        <div className="prot_one_eight">
          <h3>Level</h3>
          <p>
            (The level is set up in G41 with some clues set up in different
            parts of the room. The player will have to guide the player
            character through the room to find them all.) Old
          </p>
          <p>
            The level was changed to save time and make the clues easier for the
            player to see over Zoom. The number of clues was lowered to three
            and all but one of them can be found in the area in front of the
            player character’s starting position. The last clue is hidden in the
            supply room at the end of the room, the door to which is locked.
            After interacting with the second clue the door will be shown to the
            player opening by itself
          </p>
        </div>
        <div className="prot_one_c_nine">
          <h3>Visual Aesthetic</h3>
          <p>
            The game is an interactive theatre and as such looks like real life.
            It looks silly as it is all set in a familiar setting and the actors
            are known to the audience and player. Interactable objects are
            indicated by an obvious colour on a paper attached to them.
          </p>
        </div>
        <div className="prot_one_c_ten">
          <h3>Mood</h3>
          <p>
            Bright and funny, but with a feeling that something is not right.
          </p>
          <img src="" alt="game_imge" />
        </div>
        <div className="prot_one_c_eleven">
          <h3>Story</h3>
          <p>
            The whole story plays out through the interactable pieces of the
            game. Several interactables can be found:{" "}
          </p>
          <p>
            <span>Interactable 1: </span> The NPC. - Welcomes the player as “the
            detective”, and introduces the murder mystery narrative as well as
            giving foreshadowing.{" "}
          </p>
          <p>
            <span>Interactable 2: </span> The Button/Lever. - Opens the Door
          </p>
          <p>
            <span>Interactable 3: </span> The door - Is locked if not opened by
            the button/lever.{" "}
          </p>
          <p>
            <span>Interactable (5) 4: </span> The Phone- - On the phone, there
            is a photo/video showing the now dead person from the same
            perspective from which the player sees their character
          </p>
          <p>
            <span>Interactable (4) 5: </span> The Body. On the other side of the
            door, a body can be found. Next to the body is a phone. After
            stopping interacting with the phone, the body wakes up exclaiming,
            “The mirror!” and then dies again.{" "}
          </p>
          <p>
            <span>Interactable 6: </span> The Mirror. - When interacting with
            the mirror, the player can finally see the truth. The cameraman is
            behind your character, holding a knife. The screen goes black, and
            the main character screams in pain. The game is over.
          </p>
          <p>
            <span>Bonus Epilogue: </span>The game seems to start over from the
            same perspective but with a new player character.
          </p>
          <p>
            The order of the body and the phone were swapped for the sake of
            keeping the information from the body about where to go fresh in the
            player’s mind instead of having them watch a video before being able
            to leave.
          </p>
        </div>
        <div className="prot_one_c_twelve">
          <h3>Dialogue</h3>
          <p>Player Dialogue:</p>
          <ul>
            <li>
              Interacting with 1: (Said after the NPCs dialogue) Thank you. Just
              leave me to it, and I’ll have this case solved in no time.”{" "}
            </li>
            <li>
              Interacting with 2: “There we go, now let’s see what is hiding
              behind that door.”
            </li>
            <li>
              Interacting with 3: (If the door is locked) “It’s locked! I should
              search for a way to open it”.
            </li>
            <li>
              Interacting with 4:
              <ul>
                <li>
                  (When interacting with the body for the first time): “One of
                  the victims! Perhaps there is a clue here.”
                </li>
                <li>
                  (After the person dies again) “NO! I could have saved them! I
                  should check out that mirror, it might be the clue{" "}
                </li>
              </ul>
            </li>
            <li>
              Interacting with 5: (When seeing the video): “Looks like someone
              was here before me, but who took this video?”
            </li>
            <li>
              Interacting with 6:
              <ul>
                <li>(When seeing the cameraman): “Wait no! It was you!”</li>
                <li>
                  (Directly afterwards when the screen turns black): “[Agonising
                  scream]”
                </li>
              </ul>
            </li>
            <li>
              Interacting with useless objects: 1. “This doesn’t seem useful”,
              2. “This is of no use to me” 3. “[Improvise]”
            </li>
          </ul>
        </div>
        <div className="prot_one_c_thirteen">
          <p>NPC Dialogue: </p>
          <ul>
            <li>
              Talking to the player: “Good to see you, detective! I called you
              as soon as I could. Good luck with the case, and watch your back
              out there.”
            </li>
            <li>
              Repeated interactions: 1. “I’ll let you get to work.” 2. “Don’t
              mind me, just making sure there is no funny business.” 3.
              “[Improvise]”
            </li>
          </ul>

          <p>
            Much of the dialogue is improvised on the spot, but these are the
            general guidelines of what to say.
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

export default ProtOne;
