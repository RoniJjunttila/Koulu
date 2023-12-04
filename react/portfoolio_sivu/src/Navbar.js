// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import './Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>Alkoholilaskuri</li>
        <li>Mini yatsi</li>
        <li>Matikka peli</li>
        <li>Muistipeli peli</li>
        <li>Sää</li>
      </ul>
      <div className="my-name">
         <h3>Roni Junttila</h3>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
