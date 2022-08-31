/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navLinks = [
    {
      navId: 1,
      path: '/Rockets',
      text: 'Rockets',
    },
    {
      navId: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      navId: 3,
      path: 'MyProfile',
      text: 'My Profile',
    },
  ];

  return (
    <header className={styles.header}>
      <div>
        <img src={logo} className={styles.logo} alt="planet_logo" />
        <p className={styles.title}>Space Traveler&apos;s Hub</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLink_wrap}>
          {navLinks.map((link) => (
            <li key={link.navId}>
              <NavLink className={styles.navLink} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
