import { useRef } from "react";
import "../About.css";

import usePopInOnScroll from "../hooks/usePopInOnScroll";

export default function AtAGlance() {
  const glanceHeaderRef = useRef(null);
  usePopInOnScroll(glanceHeaderRef);
  return (
    <section className="container stack-lg" style={{ marginBottom: "6rem" }}>
      <header className="about-header-row about-header-row--left">
        <h3
          ref={glanceHeaderRef}
          className="about-section-header teal-header pop-in"
        >
          At a Glance
        </h3>
      </header>
      <article className="card about-card about-card--left">
        <p className="muted" style={{ marginBottom: "1.2rem" }}>
          Software engineer with hands-on experience building full-stack web
          applications and a background in public benefit programs. Focused on
          clear communication, thoughtful problem-solving, and building
          reliable, user-centered systems.
        </p>
        <ul className="list-dots">
          <li>Atlanta, GA (remote-friendly)</li>
          <li>Actively building with TypeScript and testing fundamentals</li>
          <li>Bilingual: English / Spanish</li>
          <li>Seeking junior engineering roles</li>
        </ul>
      </article>
    </section>
  );
}
