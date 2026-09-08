import { useRef, useState, useEffect, useCallback } from "react";
import "./styles/Gallery.css";

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";

const DEFAULT_IMAGES = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
];

const GAP = 14;

function getVisibleCount(width) {
  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
}

export default function Galler({
  eyebrow = "Community view",
  title = "A look at life in Pahrump.",
  images = DEFAULT_IMAGES,
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [itemWidth, setItemWidth] = useState(0);
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState({ active: false, startX: 0, delta: 0 });

  const maxIndex = Math.max(images.length - visible, 0);

  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const viewportWidth = viewportRef.current.offsetWidth;
    const count = getVisibleCount(window.innerWidth);
    setVisible(count);
    const width = (viewportWidth - GAP * (count - 1)) / count;
    setItemWidth(width);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(images.length - visible, 0)));
  }, [visible, images.length]);

  const step = itemWidth + GAP;

  const goTo = (next) => {
    const clamped = Math.min(Math.max(next, 0), maxIndex);
    setIndex(clamped);
  };

  const handlePrev = () => goTo(index - 1);
  const handleNext = () => goTo(index + 1);

  const onDragStart = (clientX) => {
    setDrag({ active: true, startX: clientX, delta: 0 });
  };

  const onDragMove = (clientX) => {
    setDrag((d) => (d.active ? { ...d, delta: clientX - d.startX } : d));
  };

  const onDragEnd = () => {
    setDrag((d) => {
      if (!d.active) return d;
      const threshold = step / 4;
      if (d.delta <= -threshold) {
        goTo(index + 1);
      } else if (d.delta >= threshold) {
        goTo(index - 1);
      }
      return { active: false, startX: 0, delta: 0 };
    });
  };

  const trackOffset = -(index * step) + (drag.active ? drag.delta : 0);

  return (
    <section className="gallery">
      <p className="gallery-eyebrow">{eyebrow}</p>
      <h2 className="gallery-title">{title}</h2>

      <div className="gallery-viewport" ref={viewportRef}>
        {index > 0 && (
          <button
            className="gallery-nav gallery-nav--prev"
            onClick={handlePrev}
            aria-label="Previous images"
          >
            ‹
          </button>
        )}

        <div
          className={`gallery-track ${drag.active ? "is-dragging" : ""}`}
          ref={trackRef}
          style={{ transform: `translateX(${trackOffset}px)` }}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
          onMouseDown={(e) => {
            e.preventDefault();
            onDragStart(e.clientX);
          }}
          onMouseMove={(e) => drag.active && onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={() => drag.active && onDragEnd()}
        >
          {images.map((src, i) => (
            <div className="gallery-item" key={i} style={{ width: itemWidth }}>
              <img src={src} alt="" draggable={false} />
            </div>
          ))}
        </div>

        {index < maxIndex && (
          <button
            className="gallery-nav gallery-nav--next"
            onClick={handleNext}
            aria-label="Next images"
          >
            ›
          </button>
        )}
      </div>

      <div className="gallery-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`gallery-dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}