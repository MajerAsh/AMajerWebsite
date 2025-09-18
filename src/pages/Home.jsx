import React from "react";

export default function Home() {
  return (
    <section className="hero container">
      <div className="hero__text">
        <h1 className="h1">
          Hi, I’m <span className="underline">Ashley Majer</span>.
        </h1>
        <p className="lead">
          I build useful, accessible web experiences. Currently exploring
          accessibility, tests, and delightful UIs.
        </p>
        <div className="cta">
          <a className="btn" href="#projects">
            See my work →
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact me
          </a>
        </div>
      </div>
      <figure className="hero__visual" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1600&auto=format&fit=crop"
          alt=""
        />
      </figure>
    </section>
  );
}
