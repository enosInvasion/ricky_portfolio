import "./App.css";

import Home from "./components/home/Home";
import Works from "./components/works/Works";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Design from "./components/works/design/Design";
import Development from "./components/works/development/Development";
import VRProjects from "./components/works/vr/VRProjects";
import BoardGames from "./components/works/board_games/BoardGames";
import ProjectDetails from "./components/works/project_details/ProjectDetails";

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
      </Routes>
    </Router>
  );
}

export default App;
