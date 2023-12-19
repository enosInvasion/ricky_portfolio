import React from "react";
import "./DevThree.css";
import Navbar from "../../../navbar/Navbar";
import Caraousal from "../../project_details/caraousal/Caraousal";
import { useLocation } from "react-router-dom";
import charImage from "../../../../images/dev_three/Development/3D_1.png";
import locOne from "../../../../images/dev_three/Development/3D_2.0.png";
import locTwo from "../../../../images/dev_three/Development/3D_2.1.png";
import locThree from "../../../../images/dev_three/Development/3D_2.2.png";
import locFour from "../../../../images/dev_three/Development/3D_2.3.png";
import locFive from "../../../../images/dev_three/Development/3D_3.png";
import locSix from "../../../../images/dev_three/Development/3D_4.png";
import locSeven from "../../../../images/dev_three/Development/3D_5.png";
import locEight from "../../../../images/dev_three/Development/3D_6.png";
import locNine from "../../../../images/dev_three/Development/3D_7.png";
import locTen from "../../../../images/dev_three/Development/3D_8.png";
import locEleven from "../../../../images/dev_three/Development/3D_9.png";
const DevThree = () => {
  const location = useLocation();
  const imgList = [];
  const levelImgList = [];
  const puzzelsImgList = [];
  const bpImgList = [];
  const characterList = [charImage];
  const locoList = [
    locOne,
    locTwo,
    locThree,
    locFour,
    locFive,
    locSix,
    locSeven,
    locEight,
    locNine,
    locTen,
    locEleven,
  ];

  return (
    <div className="dev_three_container">
      <Navbar />
      <div className="main_section">
        <h1 className="game_title">{location.state.object.title}</h1>
        <Caraousal props={imgList} />
        <div className="dev_three_c_one">
          <h2>Objective and Concept : </h2>
          <p>
            "AMAZE" is an enthralling and thought-provoking video game that
            immerses players in the shoes of an archaeology student on an
            intriguing quest. Tasked with rediscovering the enigmatic ancient
            Benin wall and selecting a precious artifact for analysis, the game
            unveils a mysterious twist. The once-familiar walls have been
            re-engineered, transforming them into a complex maze filled with
            challenges and secrets waiting to be unraveled.
          </p>
          <p>
            In "AMAZE," players embark on a journey as an archaeologist with a
            unique mission, blending exploration and puzzle-solving. As you
            navigate the intricate maze, you must utilize your skills,
            knowledge, and wit to complete your mission successfully. However,
            the maze is not your only obstacle; hidden puzzles and cryptic clues
            are scattered throughout the walls, adding depth and complexity to
            your quest.
          </p>
          <p>
            As you progress, you will be challenged to adapt and think
            critically, fostering an atmosphere of intrigue and suspense. Will
            you fulfill your mission and emerge victorious, or will you be
            confronted with revelations that could change your understanding of
            the ancient Benin Wall forever?
          </p>
          <p>
            "AMAZE" is not just a game; it's an immersive experience that
            combines history, mystery, and adventure, offering players a chance
            to test their problem-solving abilities and engage in a captivating
            journey filled with surprises. Are you up for the challenge?
          </p>
        </div>
        <div className="dev_three_c_two">
          <h2>Gameplay Overview : </h2>
          <p>
            "AMAZE" takes players on a captivating journey as they step into the
            shoes of an archaeology student in a quest to rediscover the ancient
            Benin wall and select a valuable artifact for analysis. As you
            venture through this thrilling desktop game, created in Unreal
            Engine, you'll encounter a myriad of challenges and mysteries.
          </p>
          <h4>Character and Controls : </h4>
          <p>
            You assume the role of "Echo," a versatile and skilled character,
            Wind Walker, whose actions you control using the classic W, A, S,
            and D keys for movement. Your view is directed by the mouse,
            aligning with the latest gaming standards and offering a dynamic and
            immersive perspective. Echo is not just an observer; you can make
            her jump, equip and sheath weapons, and gather valuable money and
            artifacts along the way.
          </p>
          <h4>Four distinct parts : </h4>
          <p>
            The level is thoughtfully divided into four distinct parts, each
            demanding a unique approach and skill set for success:
          </p>
          <h4>Maze of Walls and Puzzles : </h4>
          <p>
            The first part introduces you to a labyrinth of walls concealing
            secrets and puzzles. Solving these puzzles reveals a crucial key
            that unlocks the door to the next level.
          </p>
          <h4>Dynamic Maze Challenge : </h4>
          <p>
            The second part presents a twist, with moving walls that add an
            element of unpredictability. Embedded clues guide your way to a
            mysterious underground well, unveiling new depths to explore.
          </p>
          <h4>Combat and Exploration : </h4>
          <p>
            The third level takes you beneath the surface, where Echo arms
            herself with a sword. Encounter formidable guards, combat them with
            light and heavy attacks (left-click and right-click), and destroy
            objects to claim rewards.
          </p>
          <p>
            Face enemies that react to your presence, initiating attacks or
            patrolling as you move within their radar.
          </p>
          <p>
            Experience dynamic hit-and-death animations based on the direction
            of impact. Deadly Fan Challenge and Puzzles:
          </p>
          <p>
            The third level presents an escalating challenge as you navigate
            deadly, rapidly moving fans. Collect health potions for sustenance
            after each successful traversal.
          </p>
          <p>
            Certainly! In the game, once the player reaches what initially
            appears to be the artifact, they soon realize that it's nothing more
            than a mirage, a clever illusion designed to challenge their
            expectations. Instead of discovering the actual artifact at this
            point, a concealed wall opens, revealing a hidden and enigmatic
            two-story building beyond.
          </p>
          <h4>Final Level : </h4>
          <p>
            This building is a new layer of the game, distinct from the previous
            levels. It presents an elevated level of challenge, featuring
            experienced enemies who are more formidable and cunning than those
            encountered before. To reach the true artifact, which is positioned
            at the center of this building and represents the ultimate goal of
            the game, players must overcome additional obstacles.
          </p>
          <p>
            To access the artifact, players must solve a series of four
            intricate puzzles embedded within the building. However, they don't
            need to solve all four puzzles; the requirement is to successfully
            solve at least two of them. The puzzles are designed to test the
            player's problem-solving abilities, logical thinking, and
            adaptability. Each solved puzzle brings the player closer to the
            coveted artifact.
          </p>
          <p>
            Throughout "AMAZE," checkpoints enable you to respawn and continue
            your adventure upon facing defeat. The game seamlessly blends
            exploration, combat, and puzzle-solving, ensuring a diverse and
            captivating gaming experience that challenges your skills and
            intellect. Will you conquer the maze and claim the artifact, or will
            its mysteries remain unsolved?
          </p>
        </div>
        <div className="dev_three_c_three">
          <h2>Platform and Engine:</h2>
          <p>
            This game was created exclusively for the PC using Unreal Engine
            4.27.
          </p>
        </div>
        <div>
          <h2>Technical Skills : </h2>
          <h4>Unreal Engine C++ Programming : </h4>
          <p>
            Proficiency in using Unreal Engine's C++ to implement and control
            most of the game's functionality, including character attributes,
            enemy behavior, point collection, and game mechanics.
          </p>
          <h4>Blueprint Scripting : </h4>
          <p>
            Skilled in using Unreal Engine's Blueprint system, primarily for
            creating intricate puzzles and interactive elements within the game,
            showcasing a comprehensive understanding of the engine's visual
            scripting capabilities.
          </p>
          <h4>Character Animation : </h4>
          <p>
            Utilized multiple animation blueprints for character control,
            reducing complexity and enhancing character movement and
            responsiveness. Imported and retargeted animations from Unreal
            Engine 5's default mannequin to the Wind Walker Echo character,
            allowing for seamless animation integration.
          </p>
          <h4>Attack Animations and Montages : </h4>
          <p>
            Implemented combat animations for both the player character and
            enemies using animation montages. These montages incorporate
            randomized attack sections, enhancing the variety and
            unpredictability of in-game combat. Also included attack hit
            reactions and death animations, triggered based on the direction of
            impact, further adding depth to the combat system.
          </p>
          <h4>Collision and Impact Detection : </h4>
          <p>
            Employed box tracing techniques on character and enemy weapons to
            accurately detect hit impacts, which were then used to modify
            collisions and interactions. Integrated Unreal Engine's breakable
            actor feature to create dynamic interactions, such as breaking pots
            and objects, enhancing the game's realism.
          </p>
          <h4>3D Modeling and Texturing : </h4>
          <p>
            Proficient in creating maze structures, UV unwrapping, and texturing
            using Blender, providing an immersive and visually captivating game
            environment. Integrated marketplace assets for various in-game
            objects, enhancing the overall game design.
          </p>
          <h4>User Interface (UI) Design : </h4>
          <p>
            Designed UI elements in Photoshop to display essential in-game
            information, including a timer, coin and artifact counters,
            objectives, and hints. The quality and functionality of the UI were
            carefully crafted to improve the player experience.
          </p>
          <h4>Asset Integration : </h4>
          <p>
            Successfully integrated various assets from the Epic Marketplace,
            including weapons, breakable objects, chests, artifacts, and visual
            effects, demonstrating the ability to seamlessly incorporate
            external resources into the game.
          </p>
          <p>
            These technical skills highlight your comprehensive knowledge and
            proficiency in Unreal Engine, 3D modeling, animation, asset
            management, and user interface design. They showcase your ability to
            create a well-rounded and engaging gaming experience by blending
            various elements and technical aspects seamlessly.
          </p>
        </div>
        <div className="dev_three_c_four">
          <p>
            The art and design of "AMAZE" are the result of a collaborative
            effort among team members, combining their skills and knowledge to
            create a visually engaging and immersive game. Here's an overview of
            the art and design aspects:
          </p>
          <h4>Maze-Like Structure : </h4>
          <p>
            The team chose a maze-like structure for the game's levels, which
            added a sense of mystery and challenge to the environment. This
            decision allowed players to navigate through intricate and winding
            paths, discovering secrets and solving puzzles along the way.
          </p>
          <h4>Design Workflow : </h4>
          <p>
            The level designer played a pivotal role in the design process. They
            initiated by creating a 2D outline of each part of the map,
            providing a blueprint for the maze's layout. This outline served as
            a reference image for building the walls within Blender, ensuring
            that the maze's structure was thoughtfully designed and intuitive to
            navigate.
          </p>
          <h4>UV Unwrapping and Texturing : </h4>
          <p>
            Blender was used for UV unwrapping and texturing, a crucial step in
            creating the game's assets. This process ensured that the textures
            were properly applied to the 3D models, enhancing the visual appeal
            of the walls and other in-game objects. Careful consideration was
            given to the height and width of the walls to ensure that players
            could move and explore the maze comfortably.
          </p>
          <h4>Low Poly Models with High-Quality Textures : </h4>
          <p>
            The wall models were intentionally kept low poly to optimize
            performance while providing a clear and visually pleasing gaming
            experience. To achieve high-definition aesthetics, the team employed
            2K textures. This choice allowed for well-defined and detailed
            walls, contributing to the game's overall visual appeal.
          </p>
          <h4>Balancing Programming and Art : </h4>
          <p>
            While primarily responsible for programming, I also played a crucial
            role in assisting my teammates in learning and understanding
            Blender, leveraging my prior experience. This collaborative approach
            bridged the gap between the programming and art/design aspects of
            the game, ensuring a harmonious blend of functionality and
            aesthetics.
          </p>
        </div>
        <div className="dev_three_c_five">
          <h2>Challenges Faced : </h2>
          <p>
            The development journey of "Amaze" was a testament to the dedication
            and tenacity of the team, as they ventured into uncharted territory,
            working on a 3D third-person game for the first time. Several
            challenges were encountered throughout the process:
          </p>
          <h4>Race Against Time : </h4>
          <p>
            Developing "Amaze" as part of a course curriculum and for the
            Gotland Game conference meant adhering to strict timelines and
            deadlines. Racing against the clock to achieve the game's desired
            goals presented a significant challenge.
          </p>
          <h4>Transition from Board Games : </h4>
          <p>
            While the team had experience in creating board games
            collaboratively, transitioning to a 3D third-person video game
            format posed a new set of challenges. The shift in design and
            development methods required adapting to new tools and practices.
          </p>
          <h4>Effective Communication and Collaboration : </h4>
          <p>
            With team members who were all relatively new to game development,
            ensuring effective communication and collaboration was pivotal.
            Coordinating efforts, sharing ideas, and maintaining clear lines of
            communication was a learning curve for everyone.
          </p>
          <h4>Bug solving and testing : </h4>
          <p>
            As development progressed, identifying and solving bugs and issues
            within the game became a critical task. Rigorous testing was
            essential after implementing new features, and this process demanded
            meticulous attention to detail.
          </p>
          <h4>Performance Optimization : </h4>
          <p>
            Ensuring that the game ran smoothly and performed well on players'
            machines was a substantial challenge. Performance optimization
            required a deep understanding of Unreal Engine's capabilities and
            efficient resource management.
          </p>
          <h4>Working under pressure : </h4>
          <p>
            Meeting tight deadlines and delivering a polished product for the
            Gotland Game conference pushed the team to work effectively under
            pressure, enhancing their ability to manage time and resources
            efficiently.
          </p>
        </div>
        <div className="dev_three_c_six">
          <h2>Achievements : </h2>
          <p>
            While "Amaze" may not have received awards at the Gotland Game
            conference, the project was a resounding success in various aspects,
            making it a truly commendable achievement. Here are some notable
            accomplishments:
          </p>
          <h4>Nomination for People's Choice Award : </h4>
          <p>
            "Amaze" received recognition in the form of a nomination for the
            People's Choice Award at the Gotland Game conference. This
            acknowledgement reflects the game's appeal and its ability to engage
            and captivate players.
          </p>
          <h4>Course Completion with Distinction : </h4>
          <p>
            The successful development and presentation of "Amaze" resulted in
            the team passing the course with distinction. This academic
            recognition underscores the team's commitment to excellence in game
            development.
          </p>
          <h4>Positive Player Feedback : </h4>
          <p>
            "Amaze" left a lasting impression on players who experienced the
            game. The effort, collaboration, and complexity achieved in a short
            period received praise from players. Positive feedback highlighted
            the team's dedication and creativity.
          </p>
          <h4>Valuable Learning through Feedback : </h4>
          <p>
            In addition to the positive feedback, "Amaze" also garnered
            constructive criticism and suggestions from players. This feedback
            expanded the team's knowledge and insights into game development,
            providing a platform for continuous improvement.
          </p>

          <p>
            These achievements demonstrate the team's ability to create a
            compelling and engaging game, even in the face of challenges and
            constraints. "Amaze" succeeded in leaving a positive impact on
            players and serving as a platform for growth and learning,
            illustrating the team's dedication to their craft and their
            commitment to delivering a noteworthy gaming experience
          </p>
        </div>
        <div className="dev_three_c_seven">
          <h2>Screenshots : </h2>
          <h3>Levels : </h3>
          <Caraousal props={levelImgList} />
          <h3>Puzzels : </h3>
          <Caraousal props={puzzelsImgList} />
          <h3>BluePrints and Coding: </h3>
          <h4>Character : </h4>
          <Caraousal props={characterList} />
          <h4>Locomotion : </h4>
          <Caraousal props={locoList} />
        </div>
        <div className="dev_three_c_eight">
          <h2>Lesson learned : </h2>
          <p>
            The development of "Amaze" provided a wealth of valuable lessons for
            you and your teammates, extending well beyond the realm of game
            programming. Here are some key insights and lessons acquired during
            the development process:
          </p>
          <h4>Proper planning and documentation : </h4>
          <p>
            Recognizing the importance of thorough planning and well-documented
            game development was a crucial lesson. Setting clear objectives,
            establishing deadlines, and maintaining comprehensive development
            documentation were vital for project organization and success.
          </p>
          <h4>Working under pressure : </h4>
          <p>
            The experience of working under tight deadlines and delivering a
            polished game highlighted the importance of time management and the
            ability to thrive under pressure. This skill will serve me well in
            future projects and endeavors.
          </p>
          <h4>Problem-Solving Dedication : </h4>
          <p>
            The process of diving deep into complex problems to find effective
            solutions taught me the value of perseverance and tenacity. The
            ability to tackle challenges head-on and persistently seek
            resolutions is an essential skill for a game programmer.
          </p>
          <h4>Enjoying the Creative Process : </h4>
          <p>
            The development of "Amaze" showed the significance of enjoying the
            creative process while working on a project. This enjoyment fuels
            motivation and innovation, leading to a more engaging and rewarding
            experience.
          </p>
          <h4>Team Collaboration and Connections : </h4>
          <p>
            Building and maintaining strong connections among team members was a
            critical lesson. Effective communication, collaboration, and mutual
            support were fundamental to overcoming obstacles and fostering a
            harmonious team dynamic.
          </p>
          <h4>
            These lessons extend far beyond game development and are applicable
            to various aspects of life and career. They underscore the
            importance of not only honing technical skills but also developing
            soft skills, such as effective teamwork, adaptability, and
            problem-solving, which are invaluable assets in the field of game
            programming and beyond.
          </h4>
        </div>
        <div className="dev_three_c_eight">
          <h2>Further Development : </h2>
          <p>
            The journey of developing "Amaze" revealed the potential for an even
            more immersive and complex gaming experience. Here are some key
            features and enhancements that can be considered for further
            development:
          </p>
          <h3>Expanded Movement Mechanics : </h3>
          <h4>Crouching : </h4>
          <p>
            Implement crouching mechanics to allow players to navigate through
            tight spaces and avoid detection by enemies.
          </p>
          <h4>Dodging : </h4>
          <p>
            Add a dodging mechanic for players to evade enemy attacks and
            enhance their combat capabilities
          </p>
          <h4>Sprinting : </h4>
          <p>
            Introduce a sprinting feature to provide players with increased
            speed and agility during exploration and combat.
          </p>
          <h4>Weapon Upgrade System : </h4>
          <p>
            Develop a weapon upgrade system that enables players to enhance the
            damage and effectiveness of their sword. This system can include
            different upgrade paths and strategic choices for players to make
          </p>
          <h4>Diverse Enemy Types : </h4>
          <p>
            Introduce various enemy types with distinct behaviors, strengths,
            and weaknesses. Consider adding boss enemies that present formidable
            challenges and require unique strategies to defeat.
          </p>
          <h4>Expanded Level Design : </h4>
          <p>
            Create additional levels, each on separate maps, to diversify the
            game environment and provide players with new challenges and puzzles
            to solve.
          </p>
          <h4>Day and night cycles : </h4>
          <p>
            Implement dynamic day and night cycles, which can influence
            gameplay, enemy behavior, and puzzle solutions. Advanced lighting
            effects can enhance the visual and atmospheric aspects of the game.
          </p>
          <h4>Advanced Lighting : </h4>
          <p>
            Enhance the game's lighting effects to create a more immersive and
            visually stunning experience. Advanced lighting techniques can
            significantly contribute to the game's atmosphere and realism.
          </p>
          <p>
            These proposed features for further development have the potential
            to elevate "Amaze" to new heights, offering players a deeper and
            more engaging experience. By expanding movement options, adding a
            weapon upgrade system, introducing diverse enemies and bosses,
            creating more levels, implementing day and night cycles, and
            enhancing lighting effects, the game can become even more
            captivating and memorable. The possibilities for improvement are
            endless, and the future holds exciting potential for "Amaze."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevThree;
