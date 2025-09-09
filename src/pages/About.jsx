import React from "react";

export default function About() {
  return (
    <section className="container stack-lg">
      <header className="stack-sm">
        <h2 className="h2">About</h2>
        <p className="muted">
          Bootcamp grad focused on frontend & APIs. I care about clarity,
          performance, and accessibility.
        </p>
      </header>

      <div className="grid-2">
        <article className="card">
          <h3 className="h4">Snapshot</h3>
          <ul className="list-dots">
            <li>Based in Atlanta, Georgia</li>
            <li>Currently learning: TypeScript & testing</li>
            <li>Open to roles & freelance</li>
          </ul>
        </article>

        <article className="card">
          <h3 className="h4">Skills</h3>
          <p className="chips" aria-label="Skill tags">
            {"HTML CSS JavaScript React Node Express SQL Git"
              .split(" ")
              .map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
          </p>
        </article>
      </div>

      <article className="card">
        <h3 className="h4">Timeline</h3>
        <ol className="timeline">
          <li>
            <strong>{new Date().getFullYear()} — Present</strong>
            <p>Building portfolio projects and contributing to open source.</p>
          </li>
          <li>
            <strong>{new Date().getFullYear() - 1}</strong>
            <p>Completed coding bootcamp; focused on modern web dev.</p>
          </li>
        </ol>
      </article>
    </section>
  );
}
