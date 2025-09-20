import React from "react";
import "../About.css";
import Badge from "../components/Badge";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <section className="container stack-lg">
      <header className="stack-sm">{/*<h2 className="h2">About</h2>*/}</header>

      <div className="about-cards-vertical">
        <div className="about-header-row about-header-row--left">
          <h3 className="about-section-header teal-header">Snapshot</h3>
        </div>
        <article className="card about-card about-card--left">
          <p className="muted" style={{ marginBottom: "1.2rem" }}>
            Junior developer with a passion for building clean, user-friendly
            applications and a creative eye for design. I love solving problems,
            learning new tools, and creating projects that make a real impact.
          </p>
          <ul className="list-dots">
            <li>Based in Atlanta, Georgia</li>
            <li>Currently learning: TypeScript & testing</li>
            <li>Fluent in Spanish</li>
            <li>Open to junior developer roles & freelance</li>
          </ul>
        </article>

        <div className="about-header-row about-header-row--right">
          <h3 className="about-section-header teal-header">Skills</h3>
        </div>
        <article className="card about-card about-card--right">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <div>
              <strong>Languages & Tools:</strong>
              <div className="chips" aria-label="Languages and Tools">
                <Badge name="HTML" icon="html" />
                <Badge name="CSS" icon="css" />
                <Badge name="JavaScript" icon="javascript" />
                <Badge name="PostgreSQL" icon="sql" />
                <Badge name="Git" icon="git" />
                <Badge name="Vite" icon="vite" />
              </div>
            </div>
            <div>
              <strong>Frameworks & Libraries:</strong>
              <div className="chips" aria-label="Frameworks and Libraries">
                <Badge name="React" icon="react" />
                <Badge name="Node.js" icon="nodejs" />
                <Badge name="Express" icon="express" />
                <Badge name="Mapbox" icon="mapbox" />
                <Badge name="Multer" icon="multer" />
                <Badge name="Context API" />
                <Badge name="Custom Hooks" />
              </div>
            </div>
            <div>
              <strong>Core Concepts:</strong>
              <div className="chips" aria-label="Core Concepts">
                <Badge name="REST APIs" icon="api" />
                <Badge name="JWT Auth" icon="jwt" />
                <Badge name="Accessibility" icon="accessibility" />
                <Badge name="Responsive Design" icon="responsive" />
                <Badge name="Testing" icon="testing" />
                <Badge name="Automated Tests" icon="automation" />
              </div>
            </div>
          </div>
        </article>

        <div className="about-header-row about-header-row--left">
          <h3 className="about-section-header teal-header">Story</h3>
        </div>
        <article className="card about-card about-card--left">
          <p className="muted">
            My career began in nutrition and human services, where I developed
            strong communication, problem-solving, and data management skills
            while guiding diverse clients through complex systems. Over time, I
            discovered that what I loved most—breaking down problems, finding
            efficient solutions, and learning new tools—aligned closely with
            software engineering.
          </p>
          <p className="muted">
            This led me to complete a Software Engineering Immersive at
            Fullstack Academy, where I gained expertise in modern web
            technologies like React, Node, Express, and PostgreSQL. Now, I bring
            a unique perspective to engineering: the empathy and adaptability
            gained from serving people, combined with the technical skills to
            design and deliver user-focused applications.
          </p>
          <p className="muted">
            Outside of tech, I love hiking creeks and finding waterfalls,
            foraging gourmet mushrooms, and watching hummingbirds at my many
            feeders. I’m energized by learning, creating, and building things
            that bring clarity and value to others.
          </p>
        </article>
      </div>

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
      <section className="github-activity container" style={{ marginTop: "2.5rem", textAlign: "center" }}>
        <h2 className="h2" style={{ marginBottom: "1.5rem" }}>GitHub Activity</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GitHubCalendar username="majerash" blockSize={16} blockMargin={4} color="#4f7de9" fontSize={14} />
        </div>
      </section>
    </section>
  );
}
