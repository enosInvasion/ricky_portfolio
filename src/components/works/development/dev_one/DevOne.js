import React from "react";
import "./DevOne.css";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import level_1 from "../../../../images/dev_one/Level/1_1.png";
import level_2 from "../../../../images/dev_one/Level/1_2.png";
import level_3 from "../../../../images/dev_one/Level/1_3.png";
import level_4 from "../../../../images/dev_one/Level/1_4.png";
import level_5 from "../../../../images/dev_one/Level/1_5.png";
import level_6 from "../../../../images/dev_one/Level/1_6.png";
import level_7 from "../../../../images/dev_one/Level/1_7.png";
import code_1 from "../../../../images/dev_one/Codes/1C_1.png";
import code_2 from "../../../../images/dev_one/Codes/1C_2.png";
import code_3 from "../../../../images/dev_one/Codes/1C_3.png";
import code_4 from "../../../../images/dev_one/Codes/1C_4.png";
import code_5 from "../../../../images/dev_one/Codes/1C_5.png";
import code_6 from "../../../../images/dev_one/Codes/1C_6.png";
import code_7 from "../../../../images/dev_one/Codes/1C_7.png";
import code_8 from "../../../../images/dev_one/Codes/1C_8.png";
import code_9 from "../../../../images/dev_one/Codes/1C_9.png";
import ui_1 from "../../../../images/dev_one/UI/1U_1.1.png";
import ui_2 from "../../../../images/dev_one/UI/1U_1.png";
import ui_3 from "../../../../images/dev_one/UI/1U_2.1.png";
import ui_4 from "../../../../images/dev_one/UI/1U_2.2.png";
import ui_5 from "../../../../images/dev_one/UI/1U_2.3.png";
import ui_6 from "../../../../images/dev_one/UI/1U_2.png";
import ui_7 from "../../../../images/dev_one/UI/1U_3.1.png";
import ui_8 from "../../../../images/dev_one/UI/1U_3.2.png";
import ui_9 from "../../../../images/dev_one/UI/1U_3.3.png";
import ui_10 from "../../../../images/dev_one/UI/1U_3.4.png";
import ui_11 from "../../../../images/dev_one/UI/1U_3.png";
import ui_12 from "../../../../images/dev_one/UI/1U_4.1.png";
import ui_13 from "../../../../images/dev_one/UI/1U_4.png";
import ui_14 from "../../../../images/dev_one/UI/1U_5.1.png";
import ui_15 from "../../../../images/dev_one/UI/1U_5.png";

const DevOne = () => {
  const location = useLocation();
  const imgList = [];
  const levelImgList = [
    level_1,
    level_2,
    level_3,
    level_4,
    level_5,
    level_6,
    level_7,
  ];
  const blueImgList = [
    code_1,
    code_2,
    code_3,
    code_4,
    code_5,
    code_6,
    code_7,
    code_8,
    code_9,
  ];
  const uiImgList = [
    ui_1,
    ui_1,
    ui_3,
    ui_4,
    ui_5,
    ui_6,
    ui_7,
    ui_8,
    ui_9,
    ui_10,
    ui_11,
    ui_12,
    ui_13,
    ui_14,
    ui_15,
  ];
  return (
    <div className="dev_one_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="dev_one_c_one">
          <h2>Objective and Concept</h2>
          <p>
            My main objective is to create a captivating first-person shooting
            game to showcase my expertise in game development. This project
            gives me a chance to demonstrate my abilities and originality in the
            gaming sector.
          </p>
          <p>
            The game offers players an immersive experience in a futuristic
            world where they engage in fast-paced, first-person shooting action.
            The main gameplay mechanics involve aiming and shooting at different
            coins that are floating in the air. In addition to awarding points,
            each shot at these coins increases the player's speed and adds
            valuable seconds to the game's clock.{" "}
          </p>
          <p>
            There are four different levels in the game, each with its own set
            of difficulties. Throughout the game, players will have to navigate
            and make use of deftly placed traps, alluring coin formations, and
            necessary health boosters. The goal is to successfully complete all
            four levels, which results in an adrenaline-pumping journey that
            gives players a sense of accomplishment and a top-notch gaming
            experience.
          </p>
        </div>
        <div className="dev_one_c_two">
          <h2>Gameplay Overview</h2>
          <p>
            Immerse yourself in the heart-pounding action of our first-person
            shooter game, where every step counts and every shot is crucial. In
            this adrenaline-pumping adventure, you'll navigate a perilous
            maze-like city divided into four distinct parts, with the ultimate
            goal of reaching the end to secure victory.
          </p>
          <p>
            As you embark on your journey, you'll face a multitude of
            challenges, from cunning traps like industrial fans and hissing
            steam vents that threaten your health to complex environments with
            floating platforms designed to elevate you to new heights. But
            beware, the water regions can be treacherous; stepping off these
            platforms will send you plummeting down, testing your reflexes and
            precision.
          </p>
          <p>
            Your key to success lies in collecting different types of coins
            scattered throughout the cityscape. Coins bearing values of 100,
            500, and 1000 will boost your points, allowing you to climb the
            leaderboard. Meanwhile, specialized coins offer unique advantages:
            speed boost coins temporarily elevate your maximum walking speed,
            while time coins add precious seconds to the ticking clock.
          </p>
          <p>
            Master the controls at your disposal, using the W, A, S, and D keys
            for navigation, the space bar to leap over obstacles, and your
            trusty left-click to fire your weapon. A heads-up display (HUD)
            keeps you informed with a running tally of your hard-earned points,
            a countdown timer to keep you on your toes, and a health bar to
            monitor your well-being.
          </p>
          <p>
            Should you meet your untimely demise, fear not; the game offers a
            second chance as you can restart from the beginning. The stakes are
            high, but the exhilaration of overcoming each challenge and reaching
            the final destination is a reward worth chasing.
          </p>
          <p>
            Upon reaching the game's conclusion, a user interface (UI) will
            emerge to proudly display the points you've amassed throughout your
            epic journey. This is your moment to bask in the glory of your
            achievements. So, step into the unknown, hone your shooting skills,
            and conquer the maze-like city to emerge as the ultimate victor in
            this thrilling first-person shooter adventure
          </p>
        </div>
        <div className="dev_one_c_three">
          <h2>Platform and Engine</h2>
          <p>
            This game was created exclusively for the PC using Unreal Engine
            4.27.
          </p>
          <h3>Technical Skills</h3>
          <h4>Unreal Engine Blueprint : </h4>
          <p>
            Proficient in utilizing Unreal Engine's Blueprint system to
            implement essential game mechanics, including player movement, coin
            collection, health systems, and interactive elements.
          </p>
          <h4>UI Blueprint Design : </h4>
          <p>
            Skilled in designing and animating user interface elements using
            Blueprint structures to create a dynamic and informative heads-up
            display (HUD) that displays critical game information, including
            points and timers.
          </p>
          <h4>Asset Integration : </h4>
          <p>
            Experienced in seamlessly integrating assets from Epic Games'
            Marketplace into the game to build diverse and visually captivating
            game levels, utilizing marketplace assets for environment design,
            traps, and interactive elements.
          </p>
          <h4>Custom 3D Modeling : </h4>
          <p>
            Proficient in custom 3D modeling using Blender to design and create
            a unique weapon model, replacing the default first-person template
            gun with a custom design for enhanced visual appeal.
          </p>
          <h4>Level Design : </h4>
          <p>
            Capable of using marketplace assets to construct immersive and
            challenging game levels, including incorporating traps, floating
            platforms, and water regions, all while maintaining a coherent and
            engaging player experience.
          </p>
          <h4>Game Mechanics Implementation : </h4>
          <p>
            Strong understanding of core game mechanics, including character
            control, weapon systems, coin collection, power-ups, and platform
            interactions, to ensure an enjoyable and seamless player experience.
          </p>
          <h4>Performance Optimization : </h4>
          <p>
            Skilled in optimizing the game for smooth and efficient performance
            on the PC platform, addressing potential performance bottlenecks,
            and ensuring a responsive and immersive gaming experience.
          </p>
        </div>
        <div className="dev_one_c_four">
          <h2>Screenshots </h2>
          <h3>Levels : </h3>
          <Caraousal props={levelImgList} />
          <h3>Blueprints: </h3>
          <Caraousal props={blueImgList} />
          <h3>User Interface : </h3>
          <Caraousal props={uiImgList} />
        </div>
        <div className="dev_one_c_five">
          <h2>Challenges Faced : </h2>
          <p>
            Despite my background in computer science, transitioning to Unreal
            Engine presented a unique set of challenges. While I was already
            well-versed in coding and debugging, Unreal's Blueprint system
            required me to adapt and learn new skills. Some of the challenges I
            encountered included:
          </p>
          <h4>Navigating the Unreal Interface : </h4>
          <p>
            Unreal's interface, with its myriad of options and features,
            initially felt overwhelming. Understanding how to efficiently
            navigate the engine and make the most of its capabilities required
            time and patience.
          </p>
          <h4>Optimizing for Performance : </h4>
          <p>
            Unreal's Blueprint scripting offers incredible flexibility, but with
            that comes the responsibility of optimizing for performance. I faced
            the challenge of selecting the right nodes and creating efficient
            logic flows to ensure the game ran smoothly, avoiding performance
            bottlenecks.
          </p>
          <h4>Avoiding Infinite Loops : </h4>
          <p>
            Designing logic in Blueprint without causing infinite loops or
            unexpected behavior was another learning curve. Understanding the
            sequence of execution and when to use delay nodes, custom events, or
            other control flow elements was crucial to prevent unintended
            consequences.
          </p>
          <h4>Reducing Response Time : </h4>
          <p>
            Achieving minimal response times was essential for a responsive and
            enjoyable gameplay experience. I encountered challenges in ensuring
            that player actions and interactions resulted in near-instantaneous
            feedback, enhancing player immersion.
          </p>
          <p>
            In overcoming these challenges, I gained a deeper understanding of
            Unreal Engine's capabilities and honed my skills in Blueprint
            scripting. The experience allowed me to not only create a functional
            and engaging first-person shooter but also broaden my knowledge and
            problem-solving abilities in the realm of game development.
          </p>
        </div>
        <div className="dev_one_c_five">
          <h3>Further Development : </h3>
          <p>
            While the current state of the game represents a significant
            achievement, there are exciting possibilities for future development
            and enhancements to take the gameplay experience to the next level.
            Some key areas of further development include:
          </p>
          <h4>Leaderboard Integration : </h4>
          <p>
            Implementing a leaderboard system would add a competitive element to
            the game, allowing players to compare their scores with others and
            aim for the top spot. This feature can enhance player engagement and
            replayability.
          </p>
          <h4>Enemy AI : </h4>
          <p>
            To increase the game's challenge and variety, introducing enemy
            characters with AI behaviors would be an exciting next step. These
            enemies could present dynamic obstacles for the player, requiring
            strategic gameplay and adding depth to the experience.
          </p>
          <h4>Weapon Upgrades : </h4>
          <p>
            Allowing players to use the points they've collected to upgrade
            their weapons or unlock new ones can create a sense of progression
            and customization. This feature would encourage players to
            accumulate more points and experiment with different playstyles.
          </p>
          <h4>Additional Levels : </h4>
          <p>
            Expanding the game with new, diverse levels will keep players
            engaged and excited. Each level could introduce unique challenges,
            environments, and gameplay elements, ensuring that players have a
            fresh experience as they progress through the game.
          </p>
          <h4>Storyline Integration : </h4>
          <p>
            Adding a narrative or storyline to the game can provide context and
            purpose to the player's journey through the maze-like city. This can
            make the gameplay experience even more immersive and emotionally
            engaging.
          </p>
          <h4>Power-Ups and Abilities : </h4>
          <p>
            Introducing power-ups or special abilities that players can acquire
            would further diversify gameplay. These abilities could aid in
            overcoming challenges and add an element of strategy to the game.
          </p>
          <h4>Visual and Audio Enhancements : </h4>
          <p>
            Improving the game's visuals and audio, such as adding realistic
            textures, atmospheric sound effects, and dynamic lighting, can
            significantly enhance the overall gaming experience.
          </p>
          <p>
            These future development ideas not only expand the game's content
            and features but also offer opportunities to attract a wider player
            base and make the game even more compelling. With continued
            development, the game can evolve into an even more engaging and
            polished experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevOne;
