import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <NavLink to="/" className="logo logo-blue" onClick={closeMenu}>
          SK
        </NavLink>
        
        {/* PRIMEICONS TOGGLE */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "pi pi-times" : "pi pi-bars"} style={{ fontSize: '1.5rem' }}></i>
        </div>

        <div className={menuOpen ? "nav-links nav-menu active" : "nav-links nav-menu"}>
          <NavLink to="/" onClick={closeMenu}>
            <i className="pi pi-home"></i> Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            <i className="pi pi-user"></i> About
          </NavLink>
          <NavLink to="/skills" onClick={closeMenu}>
            <i className="pi pi-code"></i> Skills
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu}>
            <i className="pi pi-briefcase"></i> Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;