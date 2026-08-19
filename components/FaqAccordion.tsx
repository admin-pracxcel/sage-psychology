"use client";

import { useState, type ReactNode } from "react";

export type FaqItem = {
  q: string;
  a: ReactNode;
  // plain-text answer for schema markup
  aText: string;
};

export default function FaqAccordion({
  items,
  startIndex = 0,
}: {
  items: FaqItem[];
  startIndex?: number;
}) {
  const [open, setOpen] = useState<number | null>(startIndex);

  return (
    <ul className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-t border-ink/12 last:border-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-8 py-8 md:py-10 text-left cursor-pointer group"
            >
              <span
                className="max-w-full leading-[1.2] transition-colors group-hover:text-evergreen"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.3rem, 1.9vw, 1.7rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.q}
              </span>
              <span
                className="mt-2 text-moss shrink-0 transition-transform"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
                aria-hidden
              >
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <path d="M10 3v14" />
                  <path d="M3 10h14" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="pb-10 md:pb-12 max-w-[60rem]">
                  <div className="body-lede prose-sage max-w-full">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
