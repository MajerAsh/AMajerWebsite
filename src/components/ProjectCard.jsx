import React from "react";

export default function ProjectCard({
  title,
  description,
  tags = [],
  image,
  youtubeId,
  href,
  imageAlign = "left",
}) {
  return (
    <div
      className={`project-card-vertical ${
        imageAlign === "right" ? "project-card-vertical--reverse" : ""
      }`}
    >
      {(youtubeId || image) && (
        <figure className="project-card-vertical__media">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&enablejsapi=1`}
              title={`Demo of ${title}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
          )}
        </figure>
      )}
      <div className="project-card-vertical__body card">
        <h2 className="h4">{title}</h2>
        <p className="muted">{description}</p>
        <p className="chips" aria-label="Tech stack">
          {tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </p>
        <div className="project-card-buttons">
          <a
            className="project-card-btn"
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            View App
          </a>
          {/* Example repo link, replace with actual repo URL if available */}
          <a
            className="project-card-btn"
            href={
              title === "Myco Map"
                ? "https://github.com/MajerAsh/BackendCapstone"
                : title === "Page Pal Library App"
                ? "https://github.com/majerash/Page-Pal"
                : title === "Whack-A-Mole Game"
                ? "https://github.com/majerash/whackAmole"
                : "#"
            }
            target="_blank"
            rel="noreferrer"
          >
            View Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
