import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
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
    </>
  );
}

export default App;
