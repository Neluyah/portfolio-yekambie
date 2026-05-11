import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveCursor = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };

    const hoverElements = () => {
      ring.classList.add('hovered');
    };
    const unhoverElements = () => {
      ring.classList.remove('hovered');
    };

    window.addEventListener('mousemove', moveCursor);

    const links = document.querySelectorAll('a, button, .btn, [data-hover]');
    links.forEach((el) => {
      el.addEventListener('mouseenter', hoverElements);
      el.addEventListener('mouseleave', unhoverElements);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
