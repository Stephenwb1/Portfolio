import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const hoverVideoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverVideoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    hoverVideoRef.current?.pause();
    hoverVideoRef.current.currentTime = 0;
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
        <source src="bwmenu.mp4" type="video/mp4" />
      </video>
      <video
        ref={hoverVideoRef}
        autoplay
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
          opacity: isHovered ? 1 : 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <source src="/sat_hover3.webm" type="video/webm" />
      </video>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
    </>
  );
}

export default App;
