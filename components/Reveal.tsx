"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "p" | "span" | "li" | "h2" | "h3";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  style: styleProp,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  const delayStyle = delay
    ? ({ ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties)
    : {};
  const style = { ...delayStyle, ...(styleProp ?? {}) };

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
