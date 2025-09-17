import React from "react";

export default function About() {
  return (
    <section className="container stack-lg">
      <header className="stack-sm">
        <h2 className="h2">About</h2>
        <p className="muted">
          Junior developer with a passion for building clean, user-friendly
          applications and a creative eye for design. I love solving problems,
          learning new tools, and creating projects that make a real impact.
        </p>
      </header>

      <div className="grid-2">
        <article className="card">
          <h3 className="h4">Snapshot</h3>
          <ul className="list-dots">
            <li>Based in Atlanta, Georgia</li>
            <li>Currently learning: TypeScript & testing</li>
            <li>Fluent in Spanish</li>
            <li>Open to junior developer roles & freelance</li>
          </ul>
        </article>

        <article className="card">
          <h3 className="h4">Skills</h3>
          <p className="chips" aria-label="Skill tags">
            {"HTML CSS JavaScript React Node Express SQL Git APIs"
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
        <h3 className="h4">Story</h3>
        <p>
          My career began in nutrition and human services, where I developed
          strong communication, problem-solving, and data management skills
          while guiding diverse clients through complex systems. Over time, I
          discovered that what I loved most—breaking down problems, finding
          efficient solutions, and learning new tools—aligned closely with
          software engineering.
        </p>
        <p>
          This led me to complete a Software Engineering Immersive at Fullstack
          Academy, where I gained expertise in modern web technologies like
          React, Node, Express, and PostgreSQL. Now, I bring a unique
          perspective to engineering: the empathy and adaptability gained from
          serving people, combined with the technical skills to design and
          deliver user-focused applications.
        </p>
        <p>
          Outside of tech, I love hiking creeks and finding waterfalls, foraging
          gourmet mushrooms, and watching hummingbirds at my many feeders. I’m
          energized by learning, creating, and building things that bring
          clarity and value to others.
        </p>
      </article>

      <article className="card">
        <h3 className="h4">Timeline</h3>
        <ol className="timeline">
          <li>
            <strong>{new Date().getFullYear()} — Present</strong>
            <p>
              Building portfolio projects, exploring TypeScript, and
              contributing to open source.
            </p>
          </li>
          <li>
            <strong>{new Date().getFullYear() - 1}</strong>
            <p>
              Completed Fullstack Academy’s Software Engineering Immersive,
              specializing in full-stack web development.
            </p>
          </li>
          <li>
            <strong>Prior Career</strong>
            <p>
              Nutritionist, outreach coordinator, and educator—focused on
              solving problems, guiding clients, and implementing digital
              systems.
            </p>
          </li>
        </ol>
      </article>
    </section>
  );
}
