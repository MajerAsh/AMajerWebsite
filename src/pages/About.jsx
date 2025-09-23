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
    <section className="container stack-lg">
      <header className="stack-sm">{/*<h2 className="h2">About</h2>*/}</header>

      <div className="about-cards-vertical">
        <div className="about-header-row about-header-row--left">
          <h3
            ref={snapshotRef}
            className="about-section-header teal-header pop-in"
          >
            At a Glance
          </h3>
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
          <h3
            ref={skillsRef}
            className="about-section-header teal-header pop-in"
          >
            Skills
          </h3>
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
          <h3
            ref={storyRef}
            className="about-section-header teal-header pop-in"
          >
            My Story
          </h3>
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

      <Timeline />
      <section
        className="github-activity container"
        style={{ marginTop: "0", textAlign: "center" }}
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
          />
        </div>
      </section>
    </section>
  );
}
