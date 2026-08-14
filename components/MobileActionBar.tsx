import Link from "next/link";

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4h2.4a1 1 0 0 1 1 .8l.9 3.6a1 1 0 0 1-.3 1L8 10.7a12 12 0 0 0 5.3 5.3l1.3-1.5a1 1 0 0 1 1-.3l3.6.9a1 1 0 0 1 .8 1v2.4c0 .8-.7 1.5-1.5 1.5A15.5 15.5 0 0 1 4 5.5Z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3.5v3" />
      <path d="M16 3.5v3" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4h13c.8 0 1.5.7 1.5 1.5v10c0 .8-.7 1.5-1.5 1.5H10l-4 3.5V17H5.5c-.8 0-1.5-.7-1.5-1.5v-10Z" />
    </svg>
  );
}

const ITEMS: {
  label: string;
  href: string;
  icon: () => React.ReactElement;
  external?: boolean;
}[] = [
  { label: "Call", href: "tel:0480425776", icon: IconPhone },
  {
    label: "Book",
    href: "https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices",
    icon: IconCalendar,
    external: true,
  },
  { label: "Message", href: "/contact/", icon: IconMessage },
];

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-evergreen text-paper border-t border-black/10 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-3">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          const isMiddle = i === 1;
          const liClass = isMiddle
            ? "border-l border-r border-paper/20"
            : "";
          const content = (
            <span className="flex flex-col items-center justify-center gap-1 py-3 active:opacity-70 transition-opacity">
              <Icon />
              <span className="text-[0.72rem] tracking-[0.14em] uppercase">
                {item.label}
              </span>
            </span>
          );
          if (item.external || item.href.startsWith("tel:")) {
            return (
              <li key={item.label} className={liClass}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="block"
                >
                  {content}
                </a>
              </li>
            );
          }
          return (
            <li key={item.label} className={liClass}>
              <Link href={item.href} aria-label={item.label} className="block">
                {content}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
