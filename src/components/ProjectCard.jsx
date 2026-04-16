import { ExternalLink } from "lucide-react";

function ProjectCard({
  title,
  url,
  github,
  github_url,
  youtubeId,
  description,
  titleStyle,
  githubStyle,
  videoStyle,
  descStyle,
}) {
  return (
    <>
      <a
        className="font-starcraft"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          fontSize: "48px",
          color: "#60D632",
          ...titleStyle,
        }}
      >
        <span style={{ color: "#B5EE71" }}>{title[0]}</span>
        {title.slice(1)} <ExternalLink size={48} />
      </a>
      <a
        className="font-starcraft"
        href={github_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          fontSize: "36px",
          color: "#60D632",

          ...githubStyle,
        }}
      >
        <span style={{ color: "#B5EE71" }}>{github[0]}</span>
        {github.slice(1)} <ExternalLink size={36} />
      </a>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        allowFullScreen
        style={{ position: "absolute", border: "none", ...videoStyle }}
      />
      <p
        className="font-starcraft"
        style={{
          whiteSpace: "pre-line",
          position: "absolute",
          fontSize: "24px",
          margin: 0,
          ...descStyle,
        }}
      >
        {description}
      </p>
    </>
  );
}

export default ProjectCard;
