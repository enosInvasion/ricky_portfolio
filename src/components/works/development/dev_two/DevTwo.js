import React from "react";
import { useLocation } from "react-router-dom";
import "./DevTwo.css";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import lev_1 from "../../../../images/dev_two/Levels/2_1.png";
import lev_2 from "../../../../images/dev_two/Levels/2_2.png";
import lev_3 from "../../../../images/dev_two/Levels/2_3.png";
import blu_1 from "../../../../images/dev_two/Development/2C_1.png";
import blu_2 from "../../../../images/dev_two/Development/2C_2.png";
import blu_3 from "../../../../images/dev_two/Development/2C_3.png";
import blu_4 from "../../../../images/dev_two/Development/2C_4.png";
import blu_5 from "../../../../images/dev_two/Development/2C_5.png";
import blu_6 from "../../../../images/dev_two/Development/2C_6.png";
import blu_7 from "../../../../images/dev_two/Development/2C_8.png";
import blu_8 from "../../../../images/dev_two/Development/2C_9.png";
import blu_9 from "../../../../images/dev_two/Development/2C_10.png";
import blu_10 from "../../../../images/dev_two/Development/2C_11.png";
import blu_11 from "../../../../images/dev_two/Development/2C_12.png";
import blu_12 from "../../../../images/dev_two/Development/2C_13.png";
import blu_13 from "../../../../images/dev_two/Development/2C_14.png";
import blu_14 from "../../../../images/dev_two/Development/2C_15.png";
import blu_15 from "../../../../images/dev_two/Development/2C_16.png";
import blu_16 from "../../../../images/dev_two/Development/2C_17.png";
import blu_17 from "../../../../images/dev_two/Development/2C_18.png";
import blu_18 from "../../../../images/dev_two/Development/2C_19.png";
import blu_19 from "../../../../images/dev_two/Development/2C_20.png";
import ui_1 from "../../../../images/dev_two/UI/2U_1.png";
import ui_2 from "../../../../images/dev_two/UI/2U_2.png";
import ui_3 from "../../../../images/dev_two/UI/2U_3.png";
import ui_4 from "../../../../images/dev_two/UI/2U_4.png";
import ui_5 from "../../../../images/dev_two/UI/2U_5.png";
import ui_6 from "../../../../images/dev_two/UI/2U_6.png";
import ui_7 from "../../../../images/dev_two/UI/2U_7.png";
import ui_8 from "../../../../images/dev_two/UI/2U_8.png";
import ui_9 from "../../../../images/dev_two/UI/2U_9.png";
import ui_10 from "../../../../images/dev_two/UI/2U_10.png";

const DevTwo = () => {
  const location = useLocation();
  const imgList = [];
  const levelImgList = [lev_1, lev_2, lev_3];
  const bluePrintImgList = [
    blu_1,
    blu_2,
    blu_3,
    blu_4,
    blu_5,
    blu_6,
    blu_7,
    blu_8,
    blu_9,
    blu_10,
    blu_11,
    blu_12,
    blu_13,
    blu_14,
    blu_15,
    blu_16,
    blu_17,
    blu_18,
    blu_19,
  ];
  const uiImgList = [
    ui_1,
    ui_2,
    ui_3,
    ui_4,
    ui_5,
    ui_6,
    ui_7,
    ui_8,
    ui_9,
    ui_10,
  ];
  return (
    <div className="dev_two_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <div className="dev_two_c_one">
          <h2>Objective and Concept : </h2>
          <p>
            My objective for my second game in my indie game development journey
            was to pay homage to the classic arcade game Pac-Man while infusing
            it with a fresh and modern twist. I aimed to demonstrate my growing
            skills as a game developer by creating a 3D adaptation of Pac-Man
            with increased complexity and immersion. This project allowed me to
            challenge myself and build upon my prior experience, developing a
            game that would both engage players and reflect my progress in the
            industry.
          </p>
        </div>
        <div className="dev_two_c_two">
          <h2>Concept : </h2>
          <p>
            The concept for this game is a reimagined version of the iconic
            arcade game Pac-Man, transformed into a dynamic 3D experience. The
            player navigates through three different levels, each progressively
            larger and more challenging, with the introduction of additional
            enemies and power-up points.
          </p>
          <p>
            The gameplay revolves around the player's mission to explore the
            maps while evading enemy characters. In this 3D adaptation,
            orthographic camera angles and detailed 3D wall models provide a
            visually engaging and immersive environment.
          </p>
          <p>
            Key gameplay elements include teleportation mechanisms that enable
            the player to move swiftly from one side of the map to the other,
            strategically avoiding enemies or pursuing power-ups. Power-up
            points grant the player temporary abilities to devour enemies and
            accumulate points more effectively.
          </p>
          <p>
            The user interface (UI) elements include a score display to track
            the player's points and a visible representation of the number of
            lives remaining, reminiscent of the classic Pac-Man experience.
          </p>
          <p>
            This project marked a significant step in my indie game development
            journey, showcasing my ability to reimagine a classic game while
            incorporating modern 3D elements, increased complexity, and engaging
            gameplay dynamics. It reflects my passion for game development and
            the continuous pursuit of creating memorable and enjoyable gaming
            experiences.
          </p>
        </div>
        <div className="dev_two_c_three">
          <h2>Gameplay Overview : </h2>
          <p>
            In this thrilling reinterpretation of the classic arcade game
            Pac-Man, players are plunged into an immersive 3D world of mazes,
            strategy, and chases. The game's mechanics are a delightful blend of
            nostalgia and modern twists, making it an engaging and challenging
            experience.
          </p>
          <h4>Control and Movement : </h4>
          <p>
            Players control their character, referred to as the "pawn," using
            the W, A, S, and D keys, navigating through the maze-like levels.
            The pawn is in constant forward motion, which adds a sense of
            urgency to the gameplay.
          </p>
          <h4>Objective : </h4>
          <p>
            The main objective is to consume every point and power-up point
            hidden throughout the maze while avoiding enemy characters. There
            are three progressively harder levels to this challenge. To advance,
            the player must demonstrate strategic thinking, quick reflexes, and
            map awareness. And all three levels will run in a loop
            progressively.
          </p>
          <h4>Points and Power-ups : </h4>
          <p>
            The game introduces three types of points, each granting 1000 points
            when collected. The added twist is the appearance of fruit, such as
            berries, oranges, and donuts, which provide a delicious 1000-point
            bonus, and donuts will give a speed boost when collected. The
            variety of points keeps the gameplay engaging. The occurrence of
            these fruits is random, and only one fruit will spawn per level.
          </p>
          <h4>Teleportation Mechanism : </h4>
          <p>
            The presence of teleportation openings on the maze's right-side
            walls adds a dynamic element. These teleport players from one side
            of the map to the other, offering an escape route from pursuing
            enemies or aiding in point collection.
          </p>
          <h4>Enemy Types and Behavior : </h4>
          <p>
            The introduction of two enemy types, "wanderers" and "hunters," adds
            complexity. Wanderers meander aimlessly, while hunters actively
            pursue the player. The number of enemies rises as levels advance,
            culminating in a difficult final level with six enemies who are
            split evenly between wanderers and hunters. The enemies wait for
            varying lengths of time before beginning to stray or pursue. They
            will leave the house one after another when their wait time is over.
          </p>
          <h4>Power-up Points and Vulnerability : </h4>
          <p>
            Consuming a power-up point renders an opponent vulnerable. Players
            can earn more points by touching enemies during this time, with each
            enemy eaten worth 200, 400, 800, and 1600 points. This dynamic
            component gives the gameplay an additional layer of risk and reward.
          </p>
          <h4>Lives and Extra Lives : </h4>
          <p>
            Players start with a set number of lives displayed on the screen.
            Extra lives are awarded at specific point milestones, adding an
            incentive to aim for higher scores and increasing replayability.
          </p>
          <h4>Respawning : </h4>
          <p>
            When a player is touched by an enemy, all enemies stop moving and
            respawn at its original location, while the player stops moving and
            respawns at its original location. When an enemy is touched while it
            is vulnerable, it will stop moving and respawn inside the house.
            Once its waiting period is up, it will resume either wandering or
            hunting according to its assigned behavior.
          </p>
          <p>
            This reimagined Pac-Man game masterfully captures the essence of the
            original while offering fresh challenges and mechanics. The blend of
            classic and modern elements, strategic depth, and the ever-enticing
            chase make it an enjoyable and addictive gaming experience. The
            gradual increase in difficulty and the variety of points and
            power-ups keep players engaged and eager to conquer all three
            levels. Whether you're evading relentless hunters or strategically
            planning your path, this game offers an exciting journey through
            familiar yet thrilling territory.
          </p>
        </div>
        <div className="dev_two_c_four">
          <h3>Platform and Engine : </h3>
          <p>
            This game was created exclusively for the PC using Unreal Engine
            4.27.
          </p>
        </div>
        <div className="dev_two_c_five">
          <h2>Technical Skills : </h2>
          <h4>Unreal Engine Blueprint : </h4>
          <p>
            Proficient in using Unreal Engine's Blueprint system for game
            development, encompassing the creation of game logic, player
            interactions, and enemy behaviors.
          </p>
          <h4>Level Design : </h4>
          <p>
            Skillful in designing levels using box brushes and custom materials
            to craft an engaging and immersive game environment.
          </p>
          <h4>Geometry Creation : </h4>
          <p>
            Expertise in using boolean cutters in Unreal Engine to craft complex
            geometry for player characters (pawn) and enemies, allowing for
            intricate maze designs.
          </p>
          <h4>Asset Integration : </h4>
          <p>
            Adept at integrating marketplace assets into the game, including
            fruit power-ups, to enrich the game's visual and interactive
            elements.
          </p>
          <h4>Material Customization : </h4>
          <p>
            Proficient in customizing materials to achieve the desired
            aesthetics for walls and various in-game elements, ensuring a
            cohesive and visually appealing game world.
          </p>
          <h4>UI Design with Widget Blueprints : </h4>
          <p>
            Skilled in using Unreal Engine's widget blueprints to design and
            implement user interface elements, including point displays, health
            indicators, start menus, pause menus, game over screens,
            leaderboards, and level completion menus.
          </p>
          <h4>Game Instance Management : </h4>
          <p>
            Utilizing Unreal Engine's game instance for data management,
            including saving and displaying leaderboard data, provides a
            seamless experience across different parts of the game.
          </p>
          <h4>Game Logic and Functionality : </h4>
          <p>
            Profound knowledge of game mode implementation to maintain
            consistent game functionality throughout various levels, ensuring a
            cohesive and uninterrupted player experience.
          </p>
          <h4>Animation and Interactivity: : </h4>
          <p>
            Understanding game logic, such as using the flip-flop method to
            control actions like gobbling the pawn and transitioning between
            game states, contributes to engaging and dynamic gameplay.
          </p>
        </div>
        <div className="dev_two_c_six">
          <h2>Screenshots : </h2>
          <h3>Levels : </h3>
          <Caraousal props={levelImgList} />
          <h3>Blueprint : </h3>
          <Caraousal props={bluePrintImgList} />
          <h3>User Interface : </h3>
          <Caraousal props={uiImgList} />
        </div>
        <div className="dev_two_c_seven">
          <h2>Challenges Faced : </h2>
          <p>
            Despite gaining a foundation of experience in Unreal Engine,
            creating this particular game presented several noteworthy
            challenges that pushed my skills and problem-solving abilities to
            new heights. Some of the key challenges included:
          </p>
          <h4>Gobbling Character and Enemy Types : </h4>
          <p>
            The implementation of a dynamic character that could gobble points
            and power-ups, as well as the introduction of two enemy types with
            distinct behaviors, posed significant hurdles. Ensuring that the
            gameplay felt engaging and balanced required a deep understanding of
            Blueprint scripting and AI logic.
          </p>
          <h4>Learning and Self-Training : </h4>
          <p>
            Navigating Unreal Engine's expansive toolkit and finding effective
            solutions required a commitment to continuous learning. Tackling
            these complexities often involved scouring materials, watching
            tutorials, and conducting extensive online research. This learning
            process demanded patience and adaptability.
          </p>
          <h4>Save Structure and Leaderboard: : </h4>
          <p>
            Designing and implementing a save structure that could preserve
            player progress and a leaderboard system to display high scores was
            a complex task. It involved intricate data management and required a
            thorough grasp of Unreal Engine's capabilities.
          </p>
          <h4>Sound Selection and Mood: : </h4>
          <p>
            Choosing appropriate audio assets to complement the game's mood and
            atmosphere was a challenge in itself. This required an artistic
            sensibility and the ability to align sound elements with the
            gameplay to enhance player immersion.
          </p>
          <h4>Point Structure Management : </h4>
          <p>
            Seamlessly continuing the game while maintaining point structure
            integrity was another obstacle. Ensuring that players could pick up
            where they left off and understanding the intricacies of scoring and
            progression demanded precise control over the game's logic and
            systems.
          </p>
          <p>
            These challenges, while demanding, were instrumental in expanding my
            skills and knowledge as a game developer. Overcoming these obstacles
            not only resulted in a polished and engaging game but also
            represented a valuable learning experience that will inform future
            projects and endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevTwo;
