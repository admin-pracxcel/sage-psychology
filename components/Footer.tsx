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
    heading: "Visit",
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
      <div className="edge mx-auto max-w-[92rem] pt-24 md:pt-32 pb-10">
        {/* Big logo mark row */}
        <div className="border-b hairline pb-14 mb-14 flex items-end justify-between gap-8 flex-wrap">
          <Image
            src="/logo.webp"
            alt="Sage Psychological Services"
            width={1920}
            height={639}
            className="h-24 md:h-32 w-auto object-contain object-left"
          />
          <div className="text-right hidden md:block">
            <div className="chapter-mark">Est. 2023</div>
            <div className="eyebrow mt-2">East Fremantle · WA</div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="eyebrow mb-6">Visit us</div>
            <address className="not-italic text-[1.05rem] leading-relaxed">
              7B Silas Street
              <br />
              East Fremantle WA 6158
              <br />
              <span className="serif-italic opacity-75">
                Within Silas Street Specialists
              </span>
            </address>
            <div className="mt-6 flex flex-col gap-1 text-[1rem]">
              <a href="tel:0480425776" className="link font-medium">
                0480 425 776
              </a>
              <span className="opacity-70 text-[0.9rem]">By appointment only</span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <div className="eyebrow mb-6">{col.heading}</div>
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

        {/* Bottom row */}
        <div className="mt-20 pt-8 border-t hairline flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[0.85rem]">
          <div className="flex flex-wrap gap-x-8 gap-y-2 opacity-75">
            <span>
              &copy; {new Date().getFullYear()} Sage Psychological Services
            </span>
            <span>AHPRA PSY0002462461</span>
            <span>Jacob Jones · Registered Psychologist</span>
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
