import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <div style={{ display: location.pathname === "/" ? "block" : "none" }}>
        <Home />
      </div>
      <div
        style={{
          display: location.pathname === "/projects" ? "block" : "none",
        }}
      >
        <Projects />
      </div>
      <div
        style={{
          display: location.pathname === "/certifications" ? "block" : "none",
        }}
      >
        <Certifications />
      </div>
    </>
  );
}

export default App;
