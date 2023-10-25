import React from "react";
import "./ProtThree.css";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import pthree1 from "../../../../images/prototype/Prototype/3_1.png";
import pthree2 from "../../../../images/prototype/Prototype/3_2.png";
import pthree3 from "../../../../images/prototype/Prototype/3_3.png";
import pthree4 from "../../../../images/prototype/Prototype/3_4.png";
import pthree5 from "../../../../images/prototype/Prototype/3_5.png";
import pthree6 from "../../../../images/prototype/Prototype/3_6.png";
import pthree7 from "../../../../images/prototype/Prototype/3_7.png";
import pthree8 from "../../../../images/prototype/Prototype/3_8.png";
import pthree9 from "../../../../images/prototype/Prototype/3_9.png";
import pthree10 from "../../../../images/prototype/Prototype/3_10.png";
import pthree11 from "../../../../images/prototype/Prototype/3_11.png";
import pthree12 from "../../../../images/prototype/Prototype/3_12.png";
import pthree13 from "../../../../images/prototype/Prototype/3_13.png";
import pthree14 from "../../../../images/prototype/Prototype/3_14.png";
import pthree15 from "../../../../images/prototype/Prototype/3_15.png";
import pthree16 from "../../../../images/prototype/Prototype/3_16.png";
import pthree17 from "../../../../images/prototype/Prototype/3_17.png";
import pthree18 from "../../../../images/prototype/Prototype/3_18.png";
import pthree19 from "../../../../images/prototype/Prototype/3_19.png";
import pthree20 from "../../../../images/prototype/Prototype/3_20.png";
import pthree21 from "../../../../images/prototype/Prototype/3_21.png";
import pthree22 from "../../../../images/prototype/Prototype/3_22.png";
import pthree23 from "../../../../images/prototype/Prototype/3_23.png";

const ProtThree = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  var centerImgList = [pthree7, pthree8, pthree9, pthree10, pthree11];
  var centerBottomImgList = [pthree12, pthree13, pthree14, pthree15, pthree16];
  var bottomImgList = [];
  return (
    <div className="prot_three_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="prot_three_c_one">
          <h3>Introduction</h3>
          <p>
            The theme of the challenge that led to the creation of this title is
            Haunted House. Sincerely, not every member of the team was aware of
            this. We were spontaneous, and our idea, in the end, leaned towards
            the theme. Interesting enough, it started from musing about Home
            Alone, and here we are with the title:{" "}
            <span>The Chronicles of Amusor (COA)</span>, a game about the
            horrific experience of a student at his family house for the
            Christmas holiday.
          </p>
        </div>
        <div className="prot_three_c_two">
          <h3>Description</h3>
          <p>
            The Chronicles of Amusor (COA) is a first-person role-play
            experience of Orti, who is at his family house(Amusor) to enjoy the
            semester break, but on getting there, he is faced with an unseemly
            event, his holiday has gone bad. He is now on a quest to restore
            peace back to the house.
          </p>
        </div>
        <div className="prot_three_c_three">
          <h3>Key Features</h3>
          <p>
            COA allows the player to explore the rich 3d environment with
            genuineness to the background story through compelling characters,
            zombies, and other assets. Key features are:
          </p>
          <ul>
            <li>Multiple Levels</li>
            <li>Narrative</li>
            <li>Verbal and nonverbal communication</li>
            <li>Interactive Sounds.</li>
          </ul>
        </div>
        <div className="prot_three_c_four">
          <h3>Genre</h3>
          <ul>
            <li>First Person Role Playing Game (FPS,RPG).</li>
          </ul>
        </div>
        <div className="prot_three_c_five">
          <h3>Platform</h3>
          <ul>
            <li>Desktop</li>
            <li>Hopefully Mobile as the project develops.</li>
          </ul>
        </div>
        <div className="prot_three_c_six">
          <h3>Concept Art</h3>
          <ul>
            <li>Main Character: Orti</li>
            <li>Otherwise, Character: Amusor (The haunted house).</li>
            <li>Zombies</li>
            <li>Crook</li>
            <li>Coffin</li>
          </ul>
        </div>
        <div className="prot_three_c_seven">
          <h2>Game Narrative</h2>
          <h3>Story Overview</h3>
          <p>
            It was near the end of the semester, and all students planned to
            travel for the Christmas break. It was definitely a cold December,
            but a rewarding one, as Orti had envisaged. He would go to his
            family house in Gilbor, a small town in Budapest. All roads lead to
            Amusor Mansion, as all family members popularly call it. It is
            customary for everyone to make themselves available for not just the
            festivities but also to reunite the family bond. By the time Orti
            arrived, on entering the Amusor mansion, nothing was normal; nobody
            was there, it seemed like everybody was gone. Now he needs to figure
            out why, traverse the big ancient villa, battle the familiar spirit,
            and put an end to the cause of this horrendous happening.
          </p>
        </div>
        <div className="prot_three_c_eight">
          <h3>Ending</h3>
          <p>
            Orti discovered the underground dungeon key, and now he needs to
            burn the corpse, which has been the cause of the enchantment and
            haunting in the house. Through this, he restored peace to Amusor and
            brought back the family members.
          </p>
        </div>
        <div className="prot_three_c_nine">
          <h2>Game Mechanics</h2>
          <h3>Core Gameplay</h3>
          <p>
            The player must search the house and find the way to finish the
            curse and get rid of the ghost who haunted their family house and
            made the other family members disappear.
          </p>
        </div>
        <div className="prot_three_c_ten">
          <h3>Game Flow</h3>
          <p>
            Mouse hover icons used to guide the player to interact with specific
            objects
          </p>
        </div>
        <div className="prot_three_c_eleven">
          <h3>Gameplay Elements</h3>
          <p>
            Mouse hover icons used to guide the player to interact with specific
            objects
          </p>
        </div>
        <div className="prot_three_c_twelve">
          <img className="pthree_div_img" src={pthree1} alt="fire" />
          <p>
            - The fire element is showing the player that is possible to burn
            something (in our scenario, it only appears when we face the corpse
            at the end of dungeon)
          </p>
        </div>
        <div className="prot_three_c_twelve">
          <div className="inner_div_images">
            <img src={pthree2} alt="lock" />
            <img src={pthree3} alt="lock" />
          </div>
          <p>
            - Lock and unlock icons which are related to the basement door, at
            the beginning when the player doesn’t find the key, the lock icon
            appears on the door. After finding the key at the top floor, the
            unlock icon shows when the player reaches the door.
          </p>
        </div>
        <div className="prot_three_c_thirteen">
          <img src={pthree4} alt="door" />
          <p>Represents doors that the player can open/close them.</p>
        </div>
        <div className="prot_three_c_thirteen">
          <img src={pthree5} alt="eye" />
          <p>
            This icon appears when the player comes at specific objects and need
            to interact with them
          </p>
        </div>
        <div className="prot_three_c_fourteen">
          <img src={pthree6} />
          <p>
            The lamp icon is for showing on the lights that the player can turn
            them on and off.
          </p>
        </div>
        <div className="prot_three_c_fifteen">
          <h3>Interface</h3>
          <p>
            Visual Design: Our design style aims towards high fidelity. The
            design decision we made balances the use of premade assets from Epic
            store and custom made assets by our team, obviously, we needed to
            work with speed and not sacrifice quality. Here are some screenshots
            from the game:
          </p>
        </div>
        <div className="prot_three_c_sixteen">
          <h3>Sound Or Music</h3>
          <p>
            Our aim is to not derail from the dark theme, hence we choose spooky
            sound effects.
          </p>
        </div>
        <div className="prot_three_c_seventeen">
          <h3>Level design</h3>
          <p>
            The whole game is happening in a house, hence we thought to design
            each floor as a level on its own, with different tasks to be
            accomplished on each floor. The design forces the player to interact
            with all floors and in fact subtly merry-go-round.
          </p>
          <Caraousal props={centerImgList} />
          <p>
            First Floor Goal: Get the Book Second Floor Goal: Find the stairs to
            the Top Floor Third Floor Goal: Get a gem that would make the zombie
            speak Basement Floor: Make use of the information for the final
            mission, and escape the ghost chase.
          </p>
        </div>
        <div className="prot_three_c_eighteen">
          <p>Clue Locations</p>
          <Caraousal props={centerBottomImgList} />
        </div>
        <div className="prot_three_c_nineteen">
          <h3>Player Controlls</h3>
          <ol>
            <li>
              <p>
                Character Input: W, A, S, and D keys can be used to move the
                character, and the mouse can be used to look up and turn around.
                By pressing the Left mouse button after viewing the widget on an
                object, a character can engage with it.
              </p>
              <div>
                <img src={pthree17} alt="code" />
                <img src={pthree18} alt="code" />
                <img src={pthree19} alt="code" />
              </div>
            </li>
            <li>
              <p>
                Key Inspection: Once the player has located the key, they can
                interact with the character by pressing the left mouse button to
                obtain the key, which will cause the dead body to suddenly come
                to life and provide them with a hint.
              </p>
              <img src={pthree20} alt="code" />
            </li>
            <li>
              <p>
                Door Movement: By clicking the left mouse button, you can move
                the door. A predetermined period of time later, the door will
                automatically close.
              </p>
              <img src={pthree21} alt="code" />
            </li>
            <li>
              <p>
                Book: Once the player has located the book, they can interact by
                clicking the left mouse button and rotating the mouse to reveal
                the hint. The player can turn the book to read the hint as the
                book is brought to their face smoothly.
              </p>
              <img src={pthree22} alt="code" />
            </li>
            <li>
              <p>
                Burning the Skeleton: At the very end, when the player has
                located an open grave containing a skeleton, he or she can burn
                the skeleton by pressing the left mouse button when they see the
                fire widget.
              </p>
              <img src={pthree23} alt="code" />
            </li>
          </ol>
        </div>
        <div className="prot_three_c_nineteen"></div>
      </div>
    </div>
  );
};

export default ProtThree;
