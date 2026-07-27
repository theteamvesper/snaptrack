import { useCallback, useRef, useState } from 'react';
import { ShotCard } from './BentoCard';

/**
 * Phone-only screenshot slideshow.
 *
 * CSS scroll-snap does the scrolling — no animation loop, no library — so the
 * fling keeps native momentum and stays smooth on cheap Android. React only
 * mirrors the scroll offset into the dots. The track bleeds past the section
 * gutter so slides run edge to edge, with the next one peeking in to advertise
 * that it swipes.
 */
export default function Carousel({ items, label, edge, className = '' }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // Nearest slide centre wins. Measuring the children keeps this honest no
  // matter what the gap, slide width or bleed padding happen to be.
  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    [...track.children].forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - centre);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  const goTo = (i) => {
    const track = trackRef.current;
    const slide = track?.children[i];
    if (!slide) return;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <div className={'flex flex-col gap-3 ' + className}>
      <div
        ref={trackRef}
        onScroll={sync}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        className="no-scrollbar relative -mx-[18px] flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-[18px]"
      >
        {items.map((s, i) => (
          <div
            key={s.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="w-[86%] shrink-0 snap-center"
          >
            <ShotCard {...s} className="w-full" edge={edge} />
          </div>
        ))}
      </div>

      {/* 32px tap targets around 6px dots — thumb-sized without looking it. */}
      <div className="flex items-center justify-center">
        {items.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active || undefined}
            className="grid h-8 w-7 place-items-center"
          >
            <span
              className={
                'h-1.5 rounded-pill transition-all duration-300 ' +
                (i === active ? 'w-5 bg-[var(--accent)]' : 'w-1.5 bg-white/25')
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
