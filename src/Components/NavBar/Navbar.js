import { NavLink } from 'react-router-dom';
import logo from '.././images/logo.png';
import './Navbar.modules.css';

const NavBar = () => (
  <div className="nav">
    <div className="nav-bar">
      <img className="logo" src={logo} alt="planet" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/Missions">Missions</NavLink>
    <NavLink to="/MyProfile">My Profile</NavLink>
  </div>
);

export default NavBar;
