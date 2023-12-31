import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Intro from "./Intro";
//import Cube from "./Cube";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/register");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mak</h1>
        <button onClick={handleStartClick}>Start</button>
      </header>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
