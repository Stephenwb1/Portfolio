import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [leaving, setLeaving] = useState(false);
  const [displayCards, setDisplayCards] = useState(false);
  const navigate = useNavigate();
  const reverseVideoRef = useRef(null);
  const [scale, setScale] = useState(
    Math.max(window.innerWidth / 2560, window.innerHeight / 1440),
  );

  //for canvas
  useEffect(() => {
    const onResize = () =>
      setScale(Math.max(window.innerWidth / 2560, window.innerHeight / 1440));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  //for back key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLeaving(true);
        setDisplayCards(false);
        reverseVideoRef.current?.play();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Styles for each card */}
      {displayCards && (
        <div
          style={{
            position: "fixed",
            width: "2560px",
            height: "1440px",
            top: "50%",
            left: "50%",
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) scale(${scale})`,
            zIndex: 1,
          }}
        >
          {/* top left */}
          <ProjectCard
            {...projects[0]}
            titleStyle={{ top: "520px", left: "460px" }}
            githubStyle={{ top: "590px", left: "460px" }}
            videoStyle={{
              top: "220px",
              left: "450px",
              width: "480px",
              height: "288px",
            }}
            descStyle={{ top: "300px", left: "940px" }}
          />
          {/* bottom left */}
          <ProjectCard
            {...projects[1]}
            titleStyle={{ top: "780px", left: "430px" }}
            githubStyle={{ top: "850px", left: "430px" }}
            videoStyle={{
              top: "765px",
              left: "930px",
              width: "363px",
              height: "218px",
            }}
            descStyle={{ top: "1000px", left: "430px" }}
          />
          {/* right */}
          <ProjectCard
            {...projects[2]}
            titleStyle={{ top: "300px", left: "1480px" }}
            githubStyle={{ top: "370px", left: "1480px" }}
            videoStyle={{
              top: "420px",
              left: "1480px",
              width: "672px",
              height: "403px",
            }}
            descStyle={{ top: "840px", left: "1480px" }}
          />
        </div>
      )}

      {/* Forward and backward transition videos */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={() => setDisplayCards(true)}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: -1,
          opacity: leaving ? 0 : 1,
        }}
      >
        <source src="/multiplayer_transition.mp4" type="video/mp4" />
      </video>
      <video
        ref={reverseVideoRef}
        muted
        playsInline
        onEnded={() => navigate("/")}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: -1,
          opacity: leaving ? 1 : 0,
        }}
      >
        <source src="/multiplayer_transition_reverse.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default Projects;
