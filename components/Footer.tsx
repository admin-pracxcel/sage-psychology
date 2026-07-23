import Link from "next/link";
import Image from "next/image";

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
      { label: "Book Now", href: "/book" },
      { label: "Contact", href: "/contact" },
      { label: "Journal", href: "/blog" },
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
              7B Silas Street
              <br />
              East Fremantle WA 6158
            </address>
            <div className="mt-5 flex flex-col gap-1 text-[1rem]">
              <a href="tel:0480425776" className="link font-medium">
                0480 425 776
              </a>
              <span className="opacity-70 text-[0.92rem]">
                By appointment only
              </span>
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
