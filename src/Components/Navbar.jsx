import React, { useState, useEffect } from "react";
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
        <a href="/" className="logo logo-blue">SK</a>
        
        <div className="nav-links nav-menu">
          <a href="/"><i className="pi pi-home"></i> Home</a>
          <a href="/about"><i className="pi pi-user"></i> About</a>
          <a href="/skills"><i className="pi pi-code"></i> Skills</a>
          <a href="/projects"><i className="pi pi-briefcase"></i> Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;