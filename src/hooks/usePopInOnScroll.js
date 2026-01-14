// Used in Timeline.jsx, About.jsx, AtAGlance.jsx, Projects.jsx and Contact.jsx
import { useEffect } from "react";

export function normalizeVisibilityThreshold(value, fallback = 0.85) {
  if (!Number.isFinite(value)) return fallback;
  return Math.min(1, Math.max(0, value));
}

export function getRootMarginForThreshold(threshold) {
  //threshold=0.85 -> bottom rootMargin = -15%
  const rawPct = -((1 - threshold) * 100);
  // Avoid floating-point artifacts like -15.000000000000002
  const roundedPct = Math.round(rawPct * 1000) / 1000;
  const pctText = Number.isInteger(roundedPct)
    ? String(roundedPct)
    : String(roundedPct).replace(/0+$/, "").replace(/\.$/, "");

  return `0px 0px ${pctText}% 0px`;
}

export function isTopWithinThreshold(topPx, windowInnerHeightPx, threshold) {
  return topPx < windowInnerHeightPx * threshold;
}

export default function usePopInOnScroll(ref, visibilityThreshold = 0.85) {
  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    const threshold = normalizeVisibilityThreshold(visibilityThreshold, 0.85);

    /* Bottom boundary for IntersectionObserver:
     rect.top < window.innerHeight * threshold
    threshold=0.85 -> bottom rootMargin = -15%*/
    const rootMargin = getRootMarginForThreshold(threshold);

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      let rafId = 0;

      function applyVisibility(topPx) {
        if (isTopWithinThreshold(topPx, window.innerHeight, threshold)) {
          node.classList.add("visible");
        } else {
          node.classList.remove("visible");
        }
      }

      function syncApply() {
        const topPx = node.getBoundingClientRect().top;
        applyVisibility(topPx);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry) return;

          // Top of element relative to viewport
          const top =
            entry.boundingClientRect?.top ?? node.getBoundingClientRect().top;
          applyVisibility(top);
        },
        { root: null, rootMargin, threshold: 0 }
      );

      observer.observe(node);

      // Ensure initial state is correct
      syncApply();
      rafId = window.requestAnimationFrame(syncApply);

      return () => {
        if (rafId) window.cancelAnimationFrame(rafId);
        observer.disconnect();
      };
    }

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (isTopWithinThreshold(rect.top, window.innerHeight, threshold)) {
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
