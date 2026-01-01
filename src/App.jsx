import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import AtAGlance from "./pages/AtAGlance";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const base = import.meta.env.BASE_URL;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionIds = ["home", "ataglance", "Projects", "about", "contact"];

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Scrollspy effect and scroll progress
  useEffect(() => {
    let rafId = 0;
    let scheduled = false;

    function update() {
      scheduled = false;
      rafId = 0;
      // Scrollspy
      const sections = sectionIds.map((id) => document.getElementById(id));
      let current = sectionIds[0];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // If at top, set to home
      if (scrollY === 0) {
        current = "home";
      } else if (scrollY + windowHeight >= docHeight - 2) {
        current = sectionIds[sectionIds.length - 1];
      } else {
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Use stricter bounds: highlight only when section is mostly in view
            if (
              scrollY + windowHeight / 2 >= sectionTop &&
              scrollY + windowHeight / 2 < sectionTop + sectionHeight
            ) {
              current = section.id;
              break;
            }
          }
        }
      }
      setActiveSection(current);
      // Scroll progress
      const progress =
        docHeight - windowHeight > 0
          ? Math.min(1, window.scrollY / (docHeight - windowHeight))
          : 0;
      setScrollProgress(progress);
    }

    function requestUpdate() {
      if (scheduled) return;
      scheduled = true;
      rafId = window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    // Set initial value
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Smooth scroll for nav links
  function handleNavClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="site">
      {/* Single persistent vertical line with bioluminescent glow segment */}
      <div className="glow-scrollbar" aria-hidden="true">
        <div
          className="glow-scrollbar__glow"
          style={(() => {
            try {
              // Compute glow position in pixels so pinch/zoom on mobile
              // can change vh units and doesn't break the scrollbar length.
              const pct = Math.max(0, Math.min(1, scrollProgress));
              const vh = window.innerHeight || 0;
              const glowH = Math.round(vh * 0.14); // 14vh equivalent in px
              const topPx = Math.round(pct * (vh - glowH));
              return { top: `${topPx}px`, height: `${glowH}px` };
            } catch (e) {
              // Default fallback to previous percent-based approach
              return {
                top: `calc(${
                  Math.max(0, Math.min(1, scrollProgress)) * 100
                }% - 7vh)`,
                height: "14vh",
              };
            }
          })()}
        ></div>
      </div>
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>☰
          </button>
          <ul id="nav-menu" className="nav__list" data-collapsed={!menuOpen}>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : undefined}
                aria-current={activeSection === "home" ? "page" : undefined}
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#Projects"
                className={activeSection === "Projects" ? "active" : undefined}
                aria-current={activeSection === "Projects" ? "page" : undefined}
                onClick={(e) => handleNavClick(e, "Projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : undefined}
                aria-current={activeSection === "about" ? "page" : undefined}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : undefined}
                aria-current={activeSection === "contact" ? "page" : undefined}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" className="site__main" role="main">
        <section id="home" style={{ scrollMarginTop: "100px" }}>
          <Home showCharacter={activeSection === "home"} />
        </section>
        {/* AtAGlance sits between Home and Projects, not in nav */}
        <section id="ataglance" style={{ scrollMarginTop: "100px" }}>
          <AtAGlance />
        </section>
        <div style={{ minHeight: "50vh" }} />
        <section id="Projects" style={{ scrollMarginTop: "100px" }}>
          <Projects />
        </section>
        <section id="about" style={{ scrollMarginTop: "100px" }}>
          <About />
        </section>

        <section id="contact" style={{ scrollMarginTop: "100px" }}>
          <Contact />
        </section>
      </main>

      {/* Floating social sidebar */}
      <aside className="sidebar-social">
        <ul className="sidebar-social__list">
          <li>
            <a
              href="https://github.com/MajerAsh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src={`${base}icons/github.svg`} alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashleymajer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={`${base}icons/linkedin.svg`}
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="mailto:majerash@gmail.com" aria-label="Email">
              <img src={`${base}icons/mail.svg`} alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={`${base}resume/Ashley_Majer_Resume.pdf`}
              download="Ashley_Majer_Resume.pdf"
              aria-label="Download Resume (PDF)"
            >
              <img
                src={`${base}icons/resume.svg`}
                alt="Resume"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
