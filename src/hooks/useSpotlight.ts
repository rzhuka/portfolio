import { useCallback, useRef, type MouseEvent } from "react";

/** Tracks the cursor via CSS variables (--mx, --my) without causing re-renders. */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((event: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return { ref, onMouseMove };
}
