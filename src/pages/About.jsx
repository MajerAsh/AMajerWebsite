import React, { useRef, useEffect } from "react";
import "../About.css";
import Badge from "../components/Badge";
import GitHubCalendar from "react-github-calendar";
import Timeline from "../components/Timeline";

function usePopInOnScroll(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        node.classList.add("visible");
      } else {
        node.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}

export default function About() {
  const snapshotRef = useRef(null);
  const skillsRef = useRef(null);
  const storyRef = useRef(null);
  const githubHeaderRef = useRef(null);
  usePopInOnScroll(snapshotRef);
  usePopInOnScroll(skillsRef);
  usePopInOnScroll(storyRef);
  usePopInOnScroll(githubHeaderRef);
  return (
    <section className="container stack-lg" style={{ marginBottom: "6rem" }}>
      <header className="stack-sm">{/*<h2 className="h2">About</h2>*/}</header>

      <div className="about-cards-vertical">
        <header className="about-header-row about-header-row--left">
          <h3
            ref={snapshotRef}
            className="about-section-header teal-header pop-in"
          >
            At a Glance
          </h3>
        </header>
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

        <header className="about-header-row about-header-row--right">
          <h3
            ref={skillsRef}
            className="about-section-header teal-header pop-in"
          >
            Skills
          </h3>
        </header>
        <div className="skills-row">
          <strong style={{ marginBottom: "1.2rem", display: "block" }}>
            Languages &amp; Tools:
          </strong>
          <div className="skills-icon-list" aria-label="Languages and Tools">
            {[
              { name: "HTML", icon: "html" },
              { name: "CSS", icon: "css" },
              { name: "JavaScript", icon: "javascript" },
              { name: "PostgreSQL", icon: "sql" },
              { name: "Git", icon: "git" },
              { name: "Vite", icon: "vite" },
            ].map((item) => (
              <div className="skills-icon-card" key={item.name}>
                <Badge icon={item.icon} />
                <span className="skills-tooltip">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-row">
          <strong style={{ marginBottom: "1.2rem", display: "block" }}>
            Frameworks &amp; Libraries:
          </strong>
          <div
            className="skills-icon-list"
            aria-label="Frameworks and Libraries"
          >
            {[
              { name: "React", icon: "react" },
              { name: "Node.js", icon: "nodejs" },
              { name: "Express", icon: "express" },
              { name: "Mapbox", icon: "mapbox" },
              { name: "Multer", icon: "multer" },
              { name: "Context API" },
              { name: "Custom Hooks" },
            ].map((item) => (
              <div className="skills-icon-card" key={item.name}>
                <Badge icon={item.icon} />
                <span className="skills-tooltip">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <article className="card about-card about-card--right">
          <strong>Core Concepts:</strong>
          <div className="chips" aria-label="Core Concepts">
            <Badge name="REST APIs" icon="api" />
            <Badge name="JWT Auth" icon="jwt" />
            <Badge name="Accessibility" icon="accessibility" />
            <Badge name="Responsive Design" icon="responsive" />
            <Badge name="Testing" icon="testing" />
            <Badge name="Automated Tests" icon="automation" />
          </div>
        </article>

        <header className="about-header-row about-header-row--left">
          <h3
            ref={storyRef}
            className="about-section-header teal-header pop-in"
          >
            My Story
          </h3>
        </header>
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

      <Timeline />
      <div style={{ height: "10rem" }} />
      <section
        className="github-activity container"
        style={{ marginTop: "0", marginBottom: "6rem", textAlign: "center" }}
      >
        <div className="about-header-row about-header-row--left">
          <h2
            ref={githubHeaderRef}
            className="about-section-header teal-header pop-in"
            style={{ marginBottom: "1.5rem" }}
          >
            GitHub Activity
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GitHubCalendar
            username="majerash"
            blockSize={16}
            blockMargin={4}
            color="#4f7de9"
            fontSize={14}
            transformData={(contributions) => {
              const sixMonthsAgo = new Date();
              sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
              return contributions.filter(
                (day) => new Date(day.date) >= sixMonthsAgo
              );
            }}
          />
        </div>
      </section>
    </section>
  );
}
