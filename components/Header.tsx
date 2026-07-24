"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Icons";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Jacob Jones", href: "/about" },
      { label: "How Therapy Works", href: "/how-therapy-works" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/#approach",
    children: [
      { label: "CBT Therapy", href: "/cbt-therapy-perth" },
      { label: "EMDR Therapy", href: "/emdr-therapy-perth" },
      { label: "Anxiety Therapy", href: "/anxiety-therapy-perth" },
      { label: "Trauma Therapy", href: "/trauma-therapy-perth" },
      { label: "Depression Counselling", href: "/depression-counselling-perth" },
      { label: "Telehealth Psychology", href: "/telehealth-psychologist-perth" },
    ],
  },
  { label: "Fees & Rebates", href: "/fees" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      width="10"
      height="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M1 1.5 6 6.5 11 1.5" />
    </svg>
  );
}

export default function Header({
  alwaysSolid = false,
}: { alwaysSolid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(
    null
  );

  const dropdownTimer = useRef<number | null>(null);

  useEffect(() => {
    if (alwaysSolid) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  const solid = alwaysSolid || scrolled || dropdown !== null;

  const openDropdown = (label: string) => {
    if (dropdownTimer.current) {
      window.clearTimeout(dropdownTimer.current);
      dropdownTimer.current = null;
    }
    setDropdown(label);
  };

  const closeDropdownSoon = () => {
    dropdownTimer.current = window.setTimeout(() => {
      setDropdown(null);
    }, 120);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-[background-color,color,border-color,backdrop-filter] duration-500",
        solid
          ? "bg-paper/94 text-ink backdrop-blur-md border-b border-hairline"
          : "bg-transparent text-paper border-b border-transparent",
      ].join(" ")}
    >
      <div className="edge mx-auto max-w-[92rem] flex items-center justify-between py-[15px]">
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
              "h-12 md:h-14 w-auto object-contain transition-[filter] duration-500",
              solid ? "" : "[filter:brightness(0)_invert(1)]",
            ].join(" ")}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-9 text-[0.92rem]">
          {NAV.map((n) => {
            if (!n.children) {
              return (
                <Link
                  key={n.label}
                  href={n.href}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {n.label}
                </Link>
              );
            }
            const isOpen = dropdown === n.label;
            return (
              <div
                key={n.label}
                className="relative"
                onMouseEnter={() => openDropdown(n.label)}
                onMouseLeave={closeDropdownSoon}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setDropdown((d) => (d === n.label ? null : n.label))
                  }
                  className="inline-flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
                >
                  {n.label}
                  <Caret open={isOpen} />
                </button>

                {/* Dropdown panel */}
                <div
                  className={[
                    "absolute left-0 top-full pt-4",
                    "min-w-[240px]",
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none",
                    "transition-[opacity,transform] duration-200",
                  ].join(" ")}
                >
                  <div className="rounded-[12px] bg-paper text-ink shadow-[0_12px_40px_-14px_rgba(0,0,0,0.18)] border border-ink/8 py-3">
                    <ul>
                      {n.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block px-5 py-2.5 text-[0.94rem] hover:bg-ink/5 hover:text-evergreen transition-colors"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            className={
              solid ? "btn btn-primary" : "btn btn-on-video"
            }
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
              solid ? "bg-ink" : "bg-paper",
              open ? "translate-y-[7.4px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block h-[1.4px] w-6 transition-opacity duration-300",
              solid ? "bg-ink" : "bg-paper",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block h-[1.4px] w-6 transition-transform duration-300",
              solid ? "bg-ink" : "bg-paper",
              open ? "-translate-y-[7.4px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-500 bg-paper text-ink border-t border-hairline",
          open ? "max-h-[820px]" : "max-h-0",
        ].join(" ")}
      >
        <div className="edge py-6 flex flex-col gap-1">
          {NAV.map((n) => {
            if (!n.children) {
              return (
                <Link
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[1.15rem] border-b border-ink/10"
                >
                  {n.label}
                </Link>
              );
            }
            const isOpen = mobileOpenSection === n.label;
            return (
              <div key={n.label} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenSection((s) =>
                      s === n.label ? null : n.label
                    )
                  }
                  className="w-full flex items-center justify-between py-3 text-[1.15rem]"
                  aria-expanded={isOpen}
                >
                  <span>{n.label}</span>
                  <Caret open={isOpen} />
                </button>
                <div
                  className={[
                    "overflow-hidden transition-[max-height] duration-300",
                    isOpen ? "max-h-[400px]" : "max-h-0",
                  ].join(" ")}
                >
                  <ul className="pb-3 pl-2 flex flex-col gap-1">
                    {n.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-[0.98rem] opacity-85 hover:opacity-100"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary self-start mt-6"
          >
            Book Now <Arrow />
          </Link>
        </div>
      </div>
    </header>
  );
}
