import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="site">
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="/">
            Your Name
          </a>
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>☰
          </button>
          <ul id="nav-menu" className="nav__list" data-collapsed="true">
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
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <ul className="social">
          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:you@example.com">Email</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

function toggleMenu(e) {
  const btn = e.currentTarget;
  const list = document.getElementById("nav-menu");
  const isCollapsed = list.getAttribute("data-collapsed") === "true";
  list.setAttribute("data-collapsed", String(!isCollapsed));
  btn.setAttribute("aria-expanded", String(isCollapsed));
}
