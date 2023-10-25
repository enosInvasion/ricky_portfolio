import React from "react";
import "./DevOne.css";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";

const DevOne = () => {
  const location = useLocation();
  const imgList = [];
  const levelImgList = [];
  const blueImgList = [];
  const uiImgList = [];
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
      </div>
    </div>
  );
};

export default DevOne;
