import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

/* On narrow screens, set a slightly zoomed-out initial viewport scale so
 users don't have to pinch-zoom manually. Modified the existing
 <meta name="viewport"> tag at runtime so it only affects small devices.
 STILL NOT DOING WHAT IT SHOULD:*/
function adjustViewportForSmallScreens() {
  try {
    const meta = document.querySelector('meta[name="viewport"]');
    if (!meta) return;
    const mql = window.matchMedia("(max-width: 420px)");
    const apply = (matches) => {
      if (matches) {
        // Slightly zoomed-out initial scale. Users can still pinch/zoom.
        meta.setAttribute("content", "width=device-width, initial-scale=0.95");
      } else {
        // Revert to default responsive viewport
        meta.setAttribute("content", "width=device-width, initial-scale=1");
      }
    };
    // Apply on load
    apply(mql.matches);
    // Listen for changes (orientation/resize)
    if (mql.addEventListener) {
      mql.addEventListener("change", (ev) => apply(ev.matches));
    } else if (mql.addListener) {
      mql.addListener((ev) => apply(ev.matches));
    }
  } catch (e) {
    /* no-op if any host blocks meta mutation
(it'll silently fail and the page will use the default viewport)*/
  }
}

adjustViewportForSmallScreens();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
