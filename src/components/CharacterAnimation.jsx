import React, { useEffect, useState } from "react";
import "./CharacterAnimation.css";

export default function CharacterAnimation() {
  const [phase, setPhase] = useState("walk");

  useEffect(() => {
    // After walk, switch to wave
    const walkDuration = 2000; // ms, matches CSS animation duration
    if (phase === "walk") {
      const timer = setTimeout(() => setPhase("wave"), walkDuration);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <div
      className={phase === "walk" ? "character walk" : "character wave"}
      aria-label="Animated character"
    />
  );
}
