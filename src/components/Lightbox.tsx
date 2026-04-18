import { useEffect, useRef, useCallback } from "react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const touchStart = useRef(0);

  const prev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange]);
  const next = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <div
        className="lightbox-content"
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.length > 1 && (
          <button className="lightbox-arrow lightbox-arrow-left" onClick={prev}>&#8249;</button>
        )}
        <img src={images[index]} alt="" className="lightbox-image" />
        {images.length > 1 && (
          <button className="lightbox-arrow lightbox-arrow-right" onClick={next}>&#8250;</button>
        )}
      </div>
      {images.length > 1 && (
        <span className="lightbox-counter">{index + 1} / {images.length}</span>
      )}
    </div>
  );
}
