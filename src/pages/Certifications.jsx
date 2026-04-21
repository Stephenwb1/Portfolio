import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { certifications } from "../data/certifications";
import { ExternalLink } from "lucide-react";
import { AnthropicIcon, Anthropic } from "@dev.icons/react";

function Certifications() {
  const [leaving, setLeaving] = useState(false);
  const [finished, setFinished] = useState(false);
  const [displayCards, setDisplayCards] = useState(false);
  const navigate = useNavigate();
  const reverseVideoRef = useRef(null);
  const [scale, setScale] = useState(
    Math.max(window.innerWidth / 2560, window.innerHeight / 1440),
  );

  // for beginning video
  const location = useLocation();
  const entryVideoRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/certifications") {
      setLeaving(false);
      setFinished(false);
      entryVideoRef.current.currentTime = 0;
      entryVideoRef.current.play();
    }
  }, [location.pathname]);

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
        reverseVideoRef.current.currentTime = 0;
        reverseVideoRef.current?.play();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Styles for each card */}
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
        {displayCards && (
          <div style={{}}>
            {/* certifications */}
            <div
              style={{
                position: "absolute",
                top: "260px",
                left: "500px",
                width: "850px",
                height: "670px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
              }}
            >
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="font-starcraft"
                  style={{ color: "#60D632", fontSize: "28px" }}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "48px",
                      display: "flex",
                      alignItems: "center",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <AnthropicIcon
                      size={48}
                      style={{
                        background: "rgba(255,255,255,1)",
                        marginRight: "6px",
                      }}
                    />
                    <span style={{ color: "#B5EE71" }}>{cert.name[0]}</span>
                    {cert.name.slice(1)}
                    <ExternalLink size={32} />
                  </a>
                </div>
              ))}
            </div>
            {/* Ok and Back buttons */}
            <p
              className="font-starcraft"
              style={{
                userSelect: "none",
                position: "absolute",
                top: "80.8%",
                left: "72%",
                fontSize: "48px",
                textShadow: "0 6px 0px rgba(0,0,0,0.9)",
                color: "#60D632",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <span style={{ color: "#B5EE71" }}>O</span>k
            </p>
            <p
              onClick={() => {
                setLeaving(true);
                setDisplayCards(false);
                reverseVideoRef.current?.play();
              }}
              className="font-starcraft"
              style={{
                userSelect: "none",
                position: "absolute",
                top: "88.6%",
                left: "73%",
                fontSize: "48px",
                textShadow: "0 6px 0px rgba(0,0,0,0.9)",
                color: "#60D632",
                zIndex: 2,
              }}
            >
              <span style={{ color: "#B5EE71" }}>B</span>ack
            </p>
          </div>
        )}

        {/* Forward and backward transition videos */}
        <video
          ref={entryVideoRef}
          muted
          playsInline
          onEnded={() => {
            setDisplayCards(true);
            setTimeout(() => {
              setFinished(true);
            }, 100);

            reverseVideoRef.current.currentTime = 0;
          }}
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: -1,
            opacity: finished ? 0 : 1,
          }}
        >
          <source src="/certificates_transition.mp4" type="video/mp4" />
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
            opacity: finished ? 1 : 0,
          }}
        >
          <source src="/certificates_transition_reverse.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Certifications;
