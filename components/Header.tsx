"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./Icons";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/#approach" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-[background-color,color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "bg-paper/94 text-ink backdrop-blur-md border-b border-hairline"
          : "bg-transparent text-paper border-b border-transparent",
      ].join(" ")}
    >
      <div className="edge mx-auto max-w-[92rem] flex items-center justify-between h-[76px]">
        <Link
          href="/"
          aria-label="Sage Psychological Services — home"
          className="flex items-center"
        >
          <Image
            src="/logo.webp"
            alt="Sage Psychological Services"
            width={1920}
            height={639}
            className={[
              "h-10 md:h-11 w-auto object-contain transition-[filter] duration-500",
              scrolled ? "" : "[filter:brightness(0)_invert(1)]",
            ].join(" ")}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[0.92rem]">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/book"
            className={scrolled ? "btn btn-primary" : "btn btn-on-video"}
          >
            Book Now <Arrow />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[6px] p-2"
        >
          <span
            className={[
              "block h-[1.4px] w-6 transition-transform duration-300",
              scrolled ? "bg-ink" : "bg-paper",
              open ? "translate-y-[7.4px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block h-[1.4px] w-6 transition-opacity duration-300",
              scrolled ? "bg-ink" : "bg-paper",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block h-[1.4px] w-6 transition-transform duration-300",
              scrolled ? "bg-ink" : "bg-paper",
              open ? "-translate-y-[7.4px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-500 bg-paper text-ink border-t border-hairline",
          open ? "max-h-[420px]" : "max-h-0",
        ].join(" ")}
      >
        <div className="edge py-8 flex flex-col gap-5">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="display-sm"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="btn btn-primary self-start mt-4"
          >
            Book Now <Arrow />
          </Link>
        </div>
      </div>
    </header>
  );
}
