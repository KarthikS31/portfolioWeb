import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer"; // ← add this

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import { useEffect } from "react";
import { SHEET_URL } from "./utils/config.js";
import { useDispatch } from "react-redux";
import { fetchPortfolioData } from "./utils/actions.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolioData(SHEET_URL));
  }, [dispatch]);

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;