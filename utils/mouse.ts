import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let frameId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;

      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        setMousePosition((previous) => {
          // Ignore tiny moves to avoid flooding React updates.
          if (
            Math.abs(previous.x - lastX) < 2 &&
            Math.abs(previous.y - lastY) < 2
          ) {
            return previous;
          }
          return { x: lastX, y: lastY };
        });
        frameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return mousePosition;
}
