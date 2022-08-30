import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionsContainer from './components/MissionsContainer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Missions" element={<MissionsContainer />} />
      </Routes>
    </>
  );
}

export default App;
