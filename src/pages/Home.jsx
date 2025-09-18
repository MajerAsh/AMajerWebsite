import React from "react";

export default function Home() {
  return (
    <section className="hero container hero-full">
      <div className="hero__text hero-animated">
        <div className="hero-header-row">
          <span className="h1 hero-hi animate-hi">Hi, I’m</span>
          <span className="h1 hero-name animate-name">Ashley Majer</span>
        </div>
        <p className="lead hero-lead animate-lead">
          I build useful, accessible web experiences. Currently exploring
          accessibility, tests, and delightful UIs.
        </p>
      </div>
    </section>
  );
}
