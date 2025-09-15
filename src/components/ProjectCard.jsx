import React from "react";

export default function ProjectCard({
  title,
  description,
  tags = [],
  image,
  href,
}) {
  return (
    <a
      className="project card"
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      <figure className="project__media">
        <img src={image} alt={`image of ${title}`} loading="lazy" />
      </figure>
      <div className="project__body">
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
      </div>
    </a>
  );
}
