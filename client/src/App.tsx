import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Dashboard from './Dashboard';
import Intro from './Intro';

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/register');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>logo</h1>
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
