import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionsContainer from './components/MissionsContainer';
import RocketCards from './components/RocketCards';
import ProfileContainer from './components/ProfileContainer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Rockets" element={<RocketCards />} />
        <Route path="/" element={<Navigate replace to="/Rockets" />} />
        <Route path="/Missions" element={<MissionsContainer />} />
        <Route path="/MyProfile" element={<ProfileContainer />} />
      </Routes>
    </>
  );
}

export default App;
