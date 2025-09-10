import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="site">
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="/">
            Ashley Majer
          </a>
          {/*<NavLink to="/" className="brand">
            Ashley Majer
          </NavLink> ...tried in place of <a> but it didn't work */}

          {/* Mobile nav toggle */}
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded="false" /*={menuOpen}*/
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>☰
          </button>
          {/* Nav menu */}
          <ul id="nav-menu" className="nav__list" data-collapsed={!menuOpen}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" className="site__main" role="main">
        <Outlet />
      </main>

      <footer className="site__footer" role="contentinfo">
        <p>© {new Date().getFullYear()} Ashley Majer. All rights reserved.</p>
        <ul className="social">
          <li>
            <a
              href="https://github.com/MajerAsh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashley-majer-8b3978362"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:majerash@gmail.com">Email</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

/*
function toggleMenu(e) {
  const btn = e.currentTarget;
  const list = document.getElementById("nav-menu");
  const isCollapsed = list.getAttribute("data-collapsed") === "true";
  list.setAttribute("data-collapsed", String(!isCollapsed));
  btn.setAttribute("aria-expanded", String(isCollapsed));
}
*/
