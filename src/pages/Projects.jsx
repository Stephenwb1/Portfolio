import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [leaving, setLeaving] = useState(false);
  const navigate = useNavigate();
  const reverseVideoRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLeaving(true);
      reverseVideoRef.current?.play();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        playsInline
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
