import React, { useEffect, useRef } from "react";

//autoplay on scroll into view:
function YouTubeEmbed({ youtubeId, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        } else {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&mute=1`}
      title={`Demo of ${title}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
}

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
        <h3 className="h4">{title}</h3>
        <p className="muted">{description}</p>
        <p className="project-chips" aria-label="Tech stack">
          {tags.map((t) => (
            <span key={t} className="project-chip">
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
          {/* repo link? */}
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
