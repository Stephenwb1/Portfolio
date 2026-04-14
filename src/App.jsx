import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);

  const handleMouseEnter = (setHovered) => () => {
    setHovered(true);
  };

  const handleMouseLeave = (setHovered) => () => {
    setHovered(false);
  };

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="bwmenu_1.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          top: "15.7%",
          left: "-12.5%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isHovered1 ? 1 : 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <source src="/sat_hover3.webm" type="video/webm" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: "63.2%",
          left: "57.55%",
          width: "752px",
          height: "542px",
          objectFit: "cover",
          opacity: isHovered2 ? 1 : 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <source src="/black_hole_hover.webm" type="video/webm" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: "-2.95%",
          left: "15.45%",
          width: "1102px",
          height: "550px",
          opacity: isHovered3 ? 1 : 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <source src="/ships_hover.webm" type="video/webm" />
      </video>

      <div
        onMouseEnter={handleMouseEnter(setHovered1)}
        onMouseLeave={handleMouseLeave(setHovered1)}
        style={{
          position: "fixed",
          top: "40%",
          left: "30%",
          width: "400px",
          height: "550px",
          zIndex: 1,
          cursor: "pointer",
        }}
      />
      <div
        onMouseEnter={handleMouseEnter(setHovered2)}
        onMouseLeave={handleMouseLeave(setHovered2)}
        style={{
          position: "fixed",
          top: "75%",
          left: "64%",
          width: "300px",
          height: "300px",
          zIndex: 1,
          cursor: "pointer",
        }}
      />
      <div
        onMouseEnter={handleMouseEnter(setHovered3)}
        onMouseLeave={handleMouseLeave(setHovered3)}
        style={{
          position: "fixed",
          top: "0%",
          left: "20%",
          width: "800px",
          height: "350px",
          zIndex: 1,
          cursor: "pointer",
        }}
      />
    </>
  );
}

export default App;
