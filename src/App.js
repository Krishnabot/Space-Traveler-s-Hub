/* eslint linebreak-style: ["error", "windows"] */
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionsContainer from './components/MissionsContainer';
import RocketCards from './components/RocketCards';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Rockets" element={<RocketCards />} />
        <Route path="/Missions" element={<MissionsContainer />} />
      </Routes>
    </>
  );
}

export default App;
