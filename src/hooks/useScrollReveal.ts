import { useEffect } from "react";

/**
 * Adds class "in" to all elements with class "reveal" when scrolled into view.
 * Triggers fade + slide-up animation defined in index.css.
 */
export function useScrollReveal(resetKey?: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.remove("in");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [resetKey]);
}
