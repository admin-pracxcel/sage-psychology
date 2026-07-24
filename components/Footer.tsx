import Link from "next/link";
import Image from "next/image";

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4h2.4a1 1 0 0 1 1 .8l.9 3.6a1 1 0 0 1-.3 1L8 10.7a12 12 0 0 0 5.3 5.3l1.3-1.5a1 1 0 0 1 1-.3l3.6.9a1 1 0 0 1 .8 1v2.4c0 .8-.7 1.5-1.5 1.5A15.5 15.5 0 0 1 4 5.5Z" />
    </svg>
  );
}

const cols: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Practice",
    items: [
      { label: "About Jacob", href: "/about" },
      { label: "How therapy works", href: "/how-therapy-works" },
      { label: "Fees & rebates", href: "/fees" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "CBT therapy", href: "/cbt-therapy-perth" },
      { label: "EMDR therapy", href: "/emdr-therapy-perth" },
      { label: "Anxiety therapy", href: "/anxiety-therapy-perth" },
      { label: "Trauma therapy", href: "/trauma-therapy-perth" },
      { label: "Telehealth", href: "/telehealth-psychologist-perth" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "Book Now", href: "https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-paper text-ink">
      <div className="edge mx-auto max-w-[86rem] pt-24 md:pt-28 pb-10">
        <div className="grid gap-14 md:gap-16 md:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.webp"
              alt="Sage Psychological Services"
              width={1920}
              height={639}
              className="h-14 md:h-16 w-auto object-contain object-left mb-8"
            />
            <address className="not-italic text-[1.02rem] leading-relaxed">
              <a
                href="https://maps.app.goo.gl/NoWCWRPuBQun5GFS9"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-evergreen transition-colors"
              >
                <IconPin className="mt-1.5 shrink-0 text-moss" />
                <span>
                  7B Silas Street
                  <br />
                  East Fremantle WA 6158
                </span>
              </a>
            </address>
            <div className="mt-5 flex items-center gap-3 text-[1rem]">
              <IconPhone className="shrink-0 text-moss" />
              <a
                href="tel:0480425776"
                className="font-medium hover:text-evergreen transition-colors"
              >
                0480 425 776
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <div className="text-[0.78rem] uppercase tracking-[0.18em] opacity-60 mb-5">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-3 text-[1rem]">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-ink/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.85rem]">
          <div className="flex flex-wrap gap-x-8 gap-y-2 opacity-70">
            <span>
              &copy; {new Date().getFullYear()} Sage Psychological Services
            </span>
            <span>Jacob Jones · Registered Psychologist · AHPRA PSY0002462461</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="link">
              Privacy
            </Link>
            <Link href="/terms" className="link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
