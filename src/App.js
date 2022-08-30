import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import RocketPage from './Components/page/RocketPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketPage />} />
      </Routes>
    </div>
  );
}

export default App;
