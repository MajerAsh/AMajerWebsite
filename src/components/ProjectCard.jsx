import React from "react";

export default function ProjectCard({
  title,
  description,
  tags = [],
  image,
  href,
  imageAlign = "left",
}) {
  return (
    <div
      className={`project-card-vertical ${
        imageAlign === "right" ? "project-card-vertical--reverse" : ""
      }`}
    >
      {image && (
        <figure className="project-card-vertical__media">
          <img src={image} alt={`image of ${title}`} loading="lazy" />
        </figure>
      )}
      <a
        className="project-card-vertical__body card"
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        <h3 className="h4">{title}</h3>
        <p className="muted">{description}</p>
        <p className="chips" aria-label="Tech stack">
          {tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </p>
        <span className="external" aria-hidden>
          Visit →
        </span>
      </a>
    </div>
  );
}
