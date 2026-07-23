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
        {/* Big wordmark row */}
        <div className="border-b hairline pb-14 mb-14">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div className="display-xl leading-[0.85] max-w-[20ch]">
              Sage
              <span className="serif-italic opacity-80"> Psychological</span>
            </div>
            <div className="text-right hidden md:block">
              <div className="chapter-mark">Est. 2023</div>
              <div className="eyebrow mt-2">East Fremantle · WA</div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.webp"
                alt="Sage Psychological Services"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="display-sm leading-none">Sage</span>
            </div>
            <address className="not-italic body-quiet text-[0.98rem] leading-relaxed">
              7B Silas Street
              <br />
              East Fremantle WA 6158
              <br />
              <span className="serif-italic">
                Within Silas Street Specialists
              </span>
            </address>
            <div className="mt-6 flex flex-col gap-1 text-[0.98rem]">
              <a href="tel:0480425776" className="link">
                0480 425 776
              </a>
              <span className="body-quiet">By appointment only</span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <div className="eyebrow mb-6">{col.heading}</div>
              <ul className="flex flex-col gap-3 text-[0.98rem]">
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
        <div className="mt-20 pt-8 border-t hairline flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[0.82rem] body-quiet">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
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
