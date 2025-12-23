import { useEffect } from "react";

export default function usePopInOnScroll(ref, visibilityThreshold = 0.85) {
  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * visibilityThreshold) {
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
