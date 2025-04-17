"use client"

import { useState, useEffect } from "react";

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth cursor following effect
  useEffect(() => {
    const moveCursor = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.1, // Lerp effect
        y: prev.y + (targetPosition.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(moveCursor);
    };
    moveCursor();
  }, [targetPosition]);

  return (
    <div
      className="fixed w-4 h-4 border border-orange-500 rounded-full pointer-events-none transition-transform ease-out duration-100"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        visibility: isVisible ? "visible" : "hidden",
      }}
    />
  );
};

export default CursorEffect;

