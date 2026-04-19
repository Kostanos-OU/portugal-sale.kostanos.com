import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Lightbox } from "./Lightbox";

interface Props {
  images: string[];
  alt: string;
  itemId: string;
  initialIndex: number;
  lightbox: boolean;
  searchParams: string;
  basePath?: string;
}

export function Gallery({ images, alt, itemId, initialIndex, lightbox, searchParams, basePath = "/item" }: Props) {
  const navigate = useNavigate();
  const touchStart = useRef(0);
  const qs = searchParams ? `?${searchParams}` : "";
  const [index, setIndex] = useState(initialIndex);

  // Sync from URL when lightbox opens at a specific image
  useEffect(() => {
    if (lightbox) setIndex(initialIndex);
  }, [lightbox, initialIndex]);

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);

  const openLightbox = useCallback(() => {
    navigate(`${basePath}/${itemId}/i${index + 1}${qs}`);
  }, [navigate, itemId, index, qs]);

  const closeLightbox = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const lightboxGoTo = useCallback((i: number) => {
    navigate(`${basePath}/${itemId}/i${i + 1}${qs}`, { replace: true });
    setIndex(i);
  }, [navigate, itemId, qs]);

  // Keyboard navigation when lightbox is NOT open
  useEffect(() => {
    if (lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") navigate(`/${qs}`);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox, prev, next, navigate, qs]);

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
    <>
      <div className="gallery">
        <div
          className="gallery-main"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={openLightbox}
        >
          <img src={images[index]} alt={alt} className="gallery-image" />
          {images.length > 1 && (
            <>
              <button className="gallery-arrow gallery-arrow-left" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">&#8249;</button>
              <button className="gallery-arrow gallery-arrow-right" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">&#8250;</button>
              <span className="gallery-counter">{index + 1} / {images.length}</span>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="gallery-thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                className={`gallery-thumb ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
      {lightbox && (
        <Lightbox
          images={images}
          index={index}
          onClose={closeLightbox}
          onChange={lightboxGoTo}
        />
      )}
    </>
  );
}
