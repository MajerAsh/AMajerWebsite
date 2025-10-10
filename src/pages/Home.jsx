import React from "react";
import "../Home.css";
import CharacterAnimation from "../components/CharacterAnimation";
import AtAGlance from "./AtAGlance";

export default function Home({ showCharacter }) {
  return (
    <>
      <section
        className="hero container hero-full"
        style={{ position: "relative" }}
      >
        <div className="hero__text hero-animated">
          <div className="hero-header-row">
            <span className="h1 hero-hi animate-hi">Hi, I’m</span>
            <span className="h1 hero-name animate-name">Ashley Majer</span>
          </div>
          <div
            className="lead hero-lead animate-lead"
            style={{ display: "flex", flexDirection: "column", gap: "0.2em" }}
          >
            <span>I build useful, accessible web experiences.</span>
            <span>Currently exploring tests and delightful UIs.</span>
          </div>
        </div>
      </section>
      {showCharacter && <CharacterAnimation />}
    </>
  );
}
