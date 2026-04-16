import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);
  const [isHoveredResume, setHoveredResume] = useState(false);
  const [isHoveredGithub, setHoveredGithub] = useState(false);
  const [isHoveredLinkedin, setHoveredLinkedin] = useState(false);

  const [scale, setScale] = useState(
    Math.max(window.innerWidth / 2560, window.innerHeight / 1440),
  );

  useEffect(() => {
    const onResize = () =>
      setScale(Math.max(window.innerWidth / 2560, window.innerHeight / 1440));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMouseEnter = (setHovered) => () => {
    setHovered(true);
  };

  const handleMouseLeave = (setHovered) => () => {
    setHovered(false);
  };

  return (
    <>
      {/* Hover animations and Text */}
      <div
        style={{
          position: "fixed",
          width: "2560px",
          height: "1440px",
          top: "50%",
          left: "50%",
          transformOrigin: "center center",
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="bwmenu_1.mp4" type="video/mp4" />
        </video>
        <p
          className="font-starcraft"
          style={{
            position: "absolute",
            top: "40.5%",
            left: "20.5%",
            fontSize: "48px",
            textShadow: "0 6px 0px rgba(0,0,0,0.9)",
            color: isHovered1 ? "#B5EE71" : "#60D632",
            pointerEvents: "none",
          }}
        >
          <span style={{ color: "#B5EE71" }}>M</span>y projects
        </p>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            top: "14.7%",
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
        <p
          className="font-starcraft"
          style={{
            position: "absolute",
            top: "67%",
            left: "66%",
            fontSize: "48px",
            textShadow: "0 6px 0px rgba(0,0,0,0.9)",
            color: isHovered2 ? "#B5EE71" : "#60D632",
            pointerEvents: "none",
          }}
        >
          <span style={{ color: "#B5EE71" }}>C</span>ontact me
        </p>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "62.35%",
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
        <p
          className="font-starcraft"
          style={{
            userSelect: "none",
            position: "absolute",
            top: "24%",
            left: "29.5%",
            fontSize: "48px",
            textShadow: "0 6px 0px rgba(0,0,0,0.9)",
            color: isHovered3 ? "#B5EE71" : "#60D632",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <span style={{ color: "#B5EE71" }}>C</span>ertifications
        </p>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: ".15%",
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
          style={{
            position: "absolute",
            top: "11.7%",
            left: "60.82%",
            width: "615px",
            height: "615px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "16px",
            overflow: "hidden",
          }}
        >
          <img
            src="stephen.png"
            alt="Stephen"
            style={{ width: "90%", margin: "20px", marginLeft: "18px" }}
          />

          <h2
            className="font-starcraft"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: "26px",
              alignSelf: "center",
              margin: "-25px",
              letterSpacing: "12px",
            }}
          >
            WEND-BELL
          </h2>
          <div style={{ marginTop: 55 }}>
            <p>Languages & Technologies</p>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>I think here I want to put more recent projects actually</li>
              <li>
                Find a component that like pulls my recent projects? from
                readme?
              </li>
            </ul>
          </div>
        </div>

        {/* bottom left links */}
        {/* bottom left links */}
        {/* bottom left links */}
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "7%",
            width: "615px",
            height: "615px",
          }}
        >
          <ul
            className="font-starcraft"
            style={{
              position: "absolute",
              fontSize: "48px",
              textShadow: "0 6px 0px rgba(0,0,0,0.9)",
              color: isHovered3 ? "#B6EE71" : "#60D632",
              zIndex: 2,
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <li
              onMouseEnter={() => setHoveredResume(true)}
              onMouseLeave={() => setHoveredResume(false)}
              style={{
                color: isHoveredResume ? "#B6EE71" : "#60D632",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#B5EE71" }}>R</span>esume
            </li>
            <li
              onMouseEnter={() => setHoveredGithub(true)}
              onMouseLeave={() => setHoveredGithub(false)}
              style={{
                color: isHoveredGithub ? "#B6EE71" : "#60D632",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#B5EE71" }}>G</span>ithub
            </li>
            <li
              onMouseEnter={() => setHoveredLinkedin(true)}
              onMouseLeave={() => setHoveredLinkedin(false)}
              style={{
                color: isHoveredLinkedin ? "#B6EE71" : "#60D632",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#B5EE71" }}>L</span>inkedin
            </li>
            <li>
              <span style={{ color: "#B5EE71" }}>9</span>16-248-3606
            </li>
            <li>
              <span style={{ color: "#B5EE71" }}>S</span>tephenwb360@gmail.com
            </li>
          </ul>
        </div>

        {/* Boundaries for hovering / clicking */}
        <div
          onClick={() => navigate("/projects")}
          onMouseEnter={handleMouseEnter(setHovered1)}
          onMouseLeave={handleMouseLeave(setHovered1)}
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
            width: "700px",
            height: "400px",
            zIndex: 1,
            cursor: "pointer",
          }}
        />
        <div
          onMouseEnter={handleMouseEnter(setHovered2)}
          onMouseLeave={handleMouseLeave(setHovered2)}
          style={{
            position: "absolute",
            top: "65%",
            left: "62%",
            width: "470px",
            height: "450px",
            zIndex: 1,
            cursor: "pointer",
          }}
        />
        <div
          onMouseEnter={handleMouseEnter(setHovered3)}
          onMouseLeave={handleMouseLeave(setHovered3)}
          style={{
            position: "absolute",
            top: "0%",
            left: "20%",
            width: "800px",
            height: "450px",
            zIndex: 3,
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}

export default Home;
