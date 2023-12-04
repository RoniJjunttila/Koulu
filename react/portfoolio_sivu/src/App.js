import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gameboard from "./Gameboard";
import Alcohol from "./Alcohol";
import Footer from "./Footer";
import "./Navbar.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className="navbar-container">
          <div className={`navbar ${isOpen ? "open" : ""}`}>
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`bar ${isOpen ? "open" : ""}`}></div>
              <div className={`bar ${isOpen ? "open" : ""}`}></div>
              <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>
            <div className="my-name">
              <h3>Roni Junttila</h3>
            </div>
            <div className={`menu ${isOpen ? "open" : ""}`}>
              <Link className="link" onClick={() => setIsOpen(false)} to="/">
                Koti
              </Link>
              <Link className="link" onClick={() => setIsOpen(false)} to="/alcohol">
                Alkoholilaskuri
              </Link>
              <Link className="link" onClick={() => setIsOpen(false)} to="/about">
                Mini yatsi
              </Link>
              <Link className="link" onClick={() => setIsOpen(false)} to="/home">
                Matikka peli
              </Link>
              <Link className="link" onClick={() => setIsOpen(false)} to="/home">
                Muistipeli
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gameboard" element={<Gameboard />} />
          <Route path="/alcohol" element={<Alcohol />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
