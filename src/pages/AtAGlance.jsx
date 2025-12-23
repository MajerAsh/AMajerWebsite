import React, { useRef } from "react";
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
          Fullstack Web Developer with a passion for building clean,
          user-friendly applications and a creative eye for design. I love
          solving problems, learning new tools, and creating projects that make
          a real impact.
        </p>
        <ul className="list-dots">
          <li>Based in Atlanta, Georgia</li>
          <li>Currently learning: TypeScript & testing</li>
          <li>Fluent in Spanish</li>
          <li>Open to junior developer roles & freelance</li>
        </ul>
      </article>
    </section>
  );
}
