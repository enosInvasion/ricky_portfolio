import React from "react";
import "./ProtTwo.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import ptwo1 from "../../../../images/prototype/Prototype/2_1.png";
import ptwo2 from "../../../../images/prototype/Prototype/2_2.png";
import ptwo3 from "../../../../images/prototype/Prototype/2_3.png";
import ptwo4 from "../../../../images/prototype/Prototype/2_4.png";
import ptwo5 from "../../../../images/prototype/Prototype/2_5.png";
import ptwo6 from "../../../../images/prototype/Prototype/2_6.png";
import ptwo7 from "../../../../images/prototype/Prototype/2_7.png";
import ptwo8 from "../../../../images/prototype/Prototype/2_8.png";
import ptwo9 from "../../../../images/prototype/Prototype/2_9.png";
const ProtTwo = () => {
  const location = useLocation();

  var imgList = [];
  location.state.object.carousal_imageList.map((img) => {
    imgList.push(img);
  });

  var centerImgList = [ptwo2, ptwo3];

  var centerLowerImgList = [ptwo8, ptwo9];

  var bottomImgList = [
    ptwo1,
    ptwo2,
    ptwo3,
    ptwo4,
    ptwo5,
    ptwo6,
    ptwo7,
    ptwo8,
    ptwo9,
  ];

  return (
    <div className="prot_two_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="prot_two_c_one">
          <h2>Game Concept</h2>
          <h3>Introduction</h3>
          <p>
            The Mur’s journey concept came during our brainstorming section. We
            decided to create a game where two players are lost in time after
            messing with an artefact in a museum. They are in two dimensions,
            one in the past and the other one in the future. They need to find
            their way back to the present. Hence, the story / game unfolds.
          </p>
          <h3>Background</h3>
          <p>
            Based on the prompt for this game jam coursework, play with
            communication, we seek to implement both verbal and non-verbal modes
            of communication in Mur’s journey.
          </p>
        </div>
        <div className="prot_two_c_two">
          <h2>Game Description</h2>
          <h3>Genre</h3>
          <p>2D platformer</p>
          <h3>Key Features</h3>
          <p>
            <span>Multiplayer Non-Verbal Communication: </span>One particular
            player can leave audible clues to help another
          </p>
          <p>
            <span>Verbal Communication:</span> Players can talk with each other
            Map Design: Although two players are on the same map, they can’t see
            each other, as they are at different times
          </p>
          <h3>Project scope</h3>
          <p>
            We will develop the prototype with Unity. And we will use open
            source assets and also spice it up with our custom design assets.
          </p>
        </div>
        <div className="prot_two_c_three">
          <h2>General game flow</h2>
          <p>
            As a result of entering the portal, two players are placed on
            different versions of the same map. These maps strongly resemble
            each other, but have differences in the available paths which need
            to be navigated - broadly, the future map is in ruins and has some
            paths closed off, while the past map is intact and open.{" "}
          </p>
          <p>
            A recurrent problem which we aimed to solve with iterations in our
            design was ensuring that verbal communication alone was not
            sufficient to complete the game, as our task was to ensure that both
            verbal and non-verbal methods were important. The first change we
            made to ensure this was having the two players spawn at different
            locations within the two maps
          </p>
          <div className="map_image_section">
            <p>
              When two players are placed on the map, players in the past need
              to know where they are and where they should go. At this time,
              they need to explain the terrain around them clearly so that the
              other one could get to the place and guide them. More
              specifically, players in the past need to leave audible clues to
              point out the direction the other one should go and use verbal
              communication to further help another player overcome obstacles.
            </p>
            <div className="inner_map_image_section">
              <img src={ptwo1} alt="map_image" />
              <p className="pt_image_text">Earshot range for the bell</p>
            </div>
          </div>
          <p>
            The player in the past could press ‘F’ to leave a ‘bell’ on the
            floor in the level. This bell could be heard, but not seen by the
            future player. The sound of the bell would scale with distance from
            the location it was dropped. This would allow players to locate each
            other, despite not being able to see each other.{" "}
          </p>
          <p>
            To create more difficulty in navigating the map, we added an
            additional mechanic to vary the vision scope available to the
            players.
            <span>
              Players teleported to the future can see a relatively large area,
              while the one in the past has much of their vision shrouded.
            </span>
          </p>
          <Caraousal props={centerImgList} />
        </div>
        <div className="prot_two_c_four">
          <h2>Game Narrative</h2>
          <h3>Story Overview</h3>
          <p>
            It was in the late evening on a Saturday, Murray and Murphy planned
            to visit the ancient chinese museum. On arriving they were startled
            by the amazing works of art, the oriental monuments were startling,
            then Murray beckoned on Murphy, “Hey man, look what I found out.” It
            was a vintage, brown door leading to a hallway, with some Chinese
            markings on it. There’s no need to read. Afterall here is no atomic
            bomb, or weapon of mass destruction. Off they opened the door, it
            was a dark hallway and as they curiously walked, they heard sounds,
            not a terrible one, it was slow, and appealing hear and suddenly a
            thunder flashing. Murphy does not seem to know where he is. Neither
            does Murray. He kept calling, “Murray, are you there, where are
            you?” They are thousands years apart, lost in different dimensions
            and hoping to get back to the present, their sane, beautiful
            ecstatic world.
          </p>
          <h3>Plot</h3>
          <p>
            The plot is that a museum is an historical place of sight and
            wouldn’t be a portal to time travel, but an ancient chinese
            scientist had performed some experiment many years ago, causing the
            portal opening, making the protagonist lost in the new dimension
            they found themselves in.
          </p>
          <h3>Ending</h3>
          <p>
            While Murray, and Murphy navigate each time dimension, through
            communication and collaboration they will meet each other again at
            the present and continue their normal life.
          </p>
        </div>
        <div className="prot_one_c_five">
          <h2>Level Design</h2>
          <h3>Prototype</h3>
          <div className="prot_two_image_section">
            <div>
              <img src={ptwo4} alt="" />
              <p> map layout in the past</p>
            </div>
            <div>
              <img src={ptwo5} alt="" />
              <p> map layout in the future</p>
            </div>
          </div>
          <p>
            This version of the level design focused on creating a more
            confusing layout to deliberately disorient players. One issue with a
            simple layout was that the non-verbal communication mechanic of the
            bell sound was largely unnecessary because it was easy for players
            to compare their positions on the map. We felt that disorienting
            players would encourage them to use the droppable ‘chimes’ sound
            queue to lead each other through the map.
          </p>
          <p>
            In this version of the map, we repeated geometry in several
            locations between the past and future versions to prevent players
            from easily comparing their locations. We also varied the spawn
            locations of the players. The past player begins at the objective,
            and can move relatively freely through the map, as doors are left
            open. In the future, however, large sections of the map are caved
            in. The past player must communicate with the future player to
            determine which paths are open to them, and then lead them through
            those paths to the objective.
          </p>
        </div>
        <div className="prot_two_c_six">
          <h3>Mirrored level</h3>
          <p>
            We also experimented with a further mechanic of mirroring the past
            map so that the map layouts still matched, but were flipped on the
            X-axis. This mechanic was extremely effective in disorienting
            players - it might be too effective to actually use. It made
            navigation exceptionally difficult.
          </p>
          <div className="prot_two_image_section">
            <div>
              <img src={ptwo6} alt="" />
            </div>
            <div>
              <img src={ptwo7} alt="" />
            </div>
          </div>
        </div>
        <div className="prot_two_c_seven">
          <h3>Puzzle level</h3>
          <p>
            This version of the level design focuses on puzzle solving. When two
            players reach the door, it is locked and there is a black screen in
            front of it. There are two buttons, one will lift a bridge that
            accesses to the door and the other one will open the gate, and they
            are able to be pressed if two switches on the map are turned on.
          </p>
          <Caraousal props={centerLowerImgList} />
        </div>
      </div>
    </div>
  );
};

export default ProtTwo;
