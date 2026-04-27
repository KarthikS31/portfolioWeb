import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-container">
        <NavLink to="/" className="logo logo-blue">SK</NavLink>
        
        <div className="nav-links nav-menu">
          <NavLink to="/"><i className="pi pi-home"></i> Home</NavLink>
          <NavLink to="/about"><i className="pi pi-user"></i> About</NavLink>
          <NavLink to="/skills"><i className="pi pi-code"></i> Skills</NavLink>
          <NavLink to="/projects"><i className="pi pi-briefcase"></i> Projects</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;