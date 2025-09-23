import React from "react";
import "../Home.css";

export default function Home() {
  return (
    <section className="hero container hero-full">
      <div className="hero__text hero-animated">
        <div className="hero-header-row">
          <span className="h1 hero-hi animate-hi">Hi, I’m</span>
          <span className="h1 hero-name animate-name">Ashley Majer</span>
        </div>
        <div
          className="lead hero-lead animate-lead"
          style={{ display: "flex", flexDirection: "column", gap: "0.2em" }}
        >
          <span>I build useful, accessible web experiences.</span>
          <span>
            Currently exploring accessibility, tests, and delightful UIs.
          </span>
        </div>
      </div>
    </section>
  );
}
