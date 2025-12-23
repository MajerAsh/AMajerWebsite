// Hook used in Timeline.jsx, About.jsx, AtAGlance.jsx, Projects.jsx and Contact.jsx
import { useEffect } from "react";

export default function usePopInOnScroll(ref, visibilityThreshold = 0.85) {
  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    const threshold = Number.isFinite(visibilityThreshold)
      ? Math.min(1, Math.max(0, visibilityThreshold))
      : 0.85;

    // IntersectionObserver triggers callbacks when the element crosses the root
    // boundaries. We shrink the bottom boundary so it behaves like:
    // rect.top < window.innerHeight * threshold
    // Example: threshold=0.85 -> bottom rootMargin = -15%
    const bottomMarginPct = -((1 - threshold) * 100);
    const rootMargin = `0px 0px ${bottomMarginPct}% 0px`;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;

          // Preserve original behavior: visible whenever element's top is above
          // the threshold line (including when it's above the viewport).
          const top =
            entry.boundingClientRect?.top ?? node.getBoundingClientRect().top;
          if (top < window.innerHeight * threshold) {
            node.classList.add("visible");
          } else {
            node.classList.remove("visible");
          }
        },
        { root: null, rootMargin, threshold: 0 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * threshold) {
        node.classList.add("visible");
      } else {
        node.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, visibilityThreshold]);
}
