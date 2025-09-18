import React, { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = ["home", "about", "projects", "contact"];
  const sectionRefs = useRef({});

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Scrollspy effect
  useEffect(() => {
    function onScroll() {
      const sections = sectionIds.map((id) => document.getElementById(id));
      let current = sectionIds[0];
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          {/* Removed brand for centered nav */}
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>☰
          </button>
          <ul
            id="nav-menu"
            className="nav__list nav__list--centered"
            data-collapsed={!menuOpen}
          >
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" className="site__main" role="main">
        <section
          id="home"
          style={{ scrollMarginTop: "100px", padding: "70px 0 105px 0" }}
        >
          <Home />
        </section>
        <section
          id="about"
          style={{ scrollMarginTop: "100px", padding: "70px 0 105px 0" }}
        >
          <About />
        </section>
        <section
          id="projects"
          style={{ scrollMarginTop: "100px", padding: "70px 0 105px 0" }}
        >
          <Projects />
        </section>
        <section
          id="contact"
          style={{ scrollMarginTop: "100px", padding: "70px 0 105px 0" }}
        >
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
              <img src="/icons/github.svg" alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashley-majer-8b3978362"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="mailto:majerash@gmail.com" aria-label="Email">
              <img src="/icons/mail.svg" alt="" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
