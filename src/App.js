import "./App.css";

import Home from "./components/home/Home";
import Works from "./components/works/Works";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Design from "./components/works/design/Design";
import Development from "./components/works/development/Development";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/design" element={<Design />} />
        <Route path="/works/development" element={<Development />} />
        <Route path="/works/vrprojects" element={<VRProjects />} />
        <Route path="/works/boardgames" element={<BoardGames />} />
        <Route path="/works/:id/projectdetails" element={<ProjectDetails />} />
        <Route path="/works/boardgames/board1" element={<BgOne />} />
        <Route path="/works/boardgames/board2" element={<BgTwo />} />
        <Route path="/works/boardgames/board3" element={<BgThree />} />
        <Route path="/works/boardgames/board4" element={<BgFour />} />
        <Route path="/works/boardgames/board5" element={<BgFive />} />
        <Route path="/works/boardgames/board6" element={<BgSix />} />
        <Route path="/works/boardgames/board7" element={<BgSeven />} />
      </Routes>
    </Router>
  );
}

export default App;
