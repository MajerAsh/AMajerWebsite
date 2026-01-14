export default function ProjectCard({
  title,
  description,
  tags = [],
  image,
  youtubeId,
  href,
  github,
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
              loading="lazy"
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
          <a
            className="project-card-btn"
            href={github || "#"}
            target={github ? "_blank" : undefined}
            rel={github ? "noreferrer" : undefined}
            aria-disabled={!github}
          >
            View Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
