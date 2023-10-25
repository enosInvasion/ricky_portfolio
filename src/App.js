import "./App.css";

import Home from "./components/home/Home";
import Works from "./components/works/Works";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Design from "./components/works/design/Design";
// import Development from "./components/works/development/Development";
import VRProjects from "./components/works/vr/VRProjects";
import BoardGames from "./components/works/board_games/BoardGames";
import ProjectDetails from "./components/works/project_details/ProjectDetails";
import BgOne from "./components/works/board_games/board_game_details/bg_one/BgOne";
import BgTwo from "./components/works/board_games/board_game_details/bg_two/BgTwo";
import BgThree from "./components/works/board_games/board_game_details/bg_three/BgThree";
import BgFour from "./components/works/board_games/board_game_details/bg_four/BgFour";
import BgFive from "./components/works/board_games/board_game_details/bg_five/BgFive";
import BgSix from "./components/works/board_games/board_game_details/bg_six/BgSix";
import BgSeven from "./components/works/board_games/board_game_details/bg_seven/BgSeven";
import ProtOne from "./components/works/prototypes/prot_one/ProtOne";
import ProtTwo from "./components/works/prototypes/prot_two/ProtTwo";
import ProtThree from "./components/works/prototypes/prot_three/ProtThree";
import ProtFour from "./components/works/prototypes/prot_four/ProtFour";
import Prototypes from "./components/works/prototypes/Prototypes";
import Development from "./components/works/development/Development";
import DevOne from "./components/works/development/dev_one/DevOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/design" element={<Design />} />
        <Route path="/works/prototypes" element={<Prototypes />} />
        <Route path="/works/development" element={<Development />} />
        <Route path="/works/vrprojects" element={<VRProjects />} />
        <Route path="/works/boardgames" element={<BoardGames />} />
        <Route path="/works/:id/projectdetails" element={<ProjectDetails />} />
        {/* baord games paths */}
        <Route path="/works/boardgames/board1" element={<BgOne />} />
        <Route path="/works/boardgames/board2" element={<BgTwo />} />
        <Route path="/works/boardgames/board3" element={<BgThree />} />
        <Route path="/works/boardgames/board4" element={<BgFour />} />
        <Route path="/works/boardgames/board5" element={<BgFive />} />
        <Route path="/works/boardgames/board6" element={<BgSix />} />
        <Route path="/works/boardgames/board7" element={<BgSeven />} />
        {/* Prototypes paths*/}
        <Route path="/works/prototypes/prot_1" element={<ProtOne />} />
        <Route path="/works/prototypes/prot_2" element={<ProtTwo />} />
        <Route path="/works/prototypes/prot_3" element={<ProtThree />} />
        <Route path="/works/prototypes/prot_4" element={<ProtFour />} />
        {/* Development projects path */}
        <Route path="/works/developmentdetails/dev_1" element={<DevOne />} />
        {/* <Route path="/works/developmentdetails/dev_1" element={<DevOne />} />
        <Route path="/works/developmentdetails/dev_1" element={<DevOne />} />
        <Route path="/works/developmentdetails/dev_1" element={<DevOne />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
