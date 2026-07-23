"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Icons";

export type ConditionCard = {
  title: string;
  body: string;
  image: string;
  alt: string;
  href?: string;
};

interface Props {
  cards: ConditionCard[];
  autoIntervalMs?: number;
  arrowPosition?: "bottom" | "sides";
}

function ArrowLeftSvg() {
  return (
    <svg
      viewBox="0 0 20 12"
      width="18"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6H2" />
      <path d="M7 1 2 6l5 5" />
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg
      viewBox="0 0 20 12"
      width="18"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M0 6h18" />
      <path d="M13 1l5 5-5 5" />
    </svg>
  );
}

export default function ConditionsSlider({
  cards,
  autoIntervalMs = 3000,
  arrowPosition = "bottom",
}: Props) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const [paused, setPaused] = useState(false);

  const total = cards.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    const check = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(4);
      else if (window.matchMedia("(min-width: 640px)").matches) setPerView(2);
      else setPerView(1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, total - perView)));
  }, [perView, total]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    if (maxIndex === 0) return;
    const id = window.setInterval(next, autoIntervalMs);
    return () => window.clearInterval(id);
  }, [paused, next, autoIntervalMs, maxIndex]);

  const translatePercent = index * (100 / perView);

  const sideArrowClass =
    "grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-paper/95 text-ink border border-ink/10 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)] hover:bg-paper hover:text-evergreen transition-colors backdrop-blur-md";

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slider + optional side-arrow wrapper */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-[700ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {cards.map((card, i) => {
              const inner = (
                <>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-linen">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5">
                    <h3
                      className="leading-[1.15]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.2rem, 1.45vw, 1.5rem)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[0.96rem] leading-relaxed opacity-75 max-w-[32ch]">
                      {card.body}
                    </p>
                    {card.href && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-evergreen opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <Arrow />
                      </span>
                    )}
                  </div>
                </>
              );

              return (
                <div
                  key={i}
                  className="shrink-0 px-3"
                  style={{ flexBasis: `${100 / perView}%` }}
                >
                  {card.href ? (
                    <Link href={card.href} className="group block">
                      {inner}
                    </Link>
                  ) : (
                    <div className="group block">{inner}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {arrowPosition === "sides" && maxIndex > 0 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous conditions"
              className={`${sideArrowClass} absolute left-3 md:left-5 top-[38%] -translate-y-1/2 z-10`}
            >
              <ArrowLeftSvg />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next conditions"
              className={`${sideArrowClass} absolute right-3 md:right-5 top-[38%] -translate-y-1/2 z-10`}
            >
              <ArrowRightSvg />
            </button>
          </>
        )}
      </div>

      {arrowPosition === "bottom" && maxIndex > 0 && (
        <div className="mt-10 md:mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous conditions"
            className="grid place-items-center h-12 w-12 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            <ArrowLeftSvg />
          </button>

          <div className="text-[0.78rem] tracking-[0.2em] uppercase opacity-70 min-w-[5rem] text-center">
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="opacity-50">/</span>{" "}
            {String(maxIndex + 1).padStart(2, "0")}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next conditions"
            className="grid place-items-center h-12 w-12 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            <ArrowRightSvg />
          </button>
        </div>
      )}
    </div>
  );
}
