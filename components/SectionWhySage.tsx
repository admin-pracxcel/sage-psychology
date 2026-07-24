import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

type Reason = {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
};

function IconContinuity() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="7" cy="12" r="2.4" />
      <circle cx="17" cy="12" r="2.4" />
      <path d="M9.4 12 H14.6" />
    </svg>
  );
}
function IconTailored() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFees() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 4 H16 L18 6 V20 H6 Z" />
      <path d="M9 10 H15" />
      <path d="M9 14 H13" />
    </svg>
  );
}
function IconRoom() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21 V10" />
      <path d="M12 12 C 9 12 6 10 5 6 C 8 6 11 8 12 12 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M12 14 C 15 14 18 12 19 8 C 16 8 13 10 12 14 Z" fill="currentColor" fillOpacity="0.12" />
    </svg>
  );
}

const REASONS: Reason[] = [
  {
    icon: <IconContinuity />,
    title: "You see the same psychologist every time",
    body: (
      <>
        Continuity matters in therapy. At Sage you build a working relationship
        with Jacob, not a rotating team, so your progress is never lost in a
        handover.
      </>
    ),
  },
  {
    icon: <IconTailored />,
    title: "Genuinely individualised care",
    body: (
      <>
        No scripted programmes. Jacob draws on a broad evidence base and shapes
        each session around your history, your goals, and your pace.
      </>
    ),
  },
  {
    icon: <IconFees />,
    title: "Accessible, transparent fees",
    body: (
      <>
        Sage is a private billing practice with a deliberately low gap fee of
        $78.45 per session under a Mental Health Care Plan, well below the
        Australian Psychological Society&rsquo;s recommended fee. Full details
        are on our <Link href="/fees" className="link">fees and rebates</Link>{" "}
        page.
      </>
    ),
  },
  {
    icon: <IconRoom />,
    title: "A calm, private setting",
    body: (
      <>
        Located within the Silas Street Specialists in East Fremantle, the
        practice is designed to feel welcoming and safe from the moment you
        arrive.
      </>
    ),
  },
];

export default function SectionWhySage() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left · Image
              Below lg (mobile + tablet): full width, fixed 300px height
              lg+ desktop: side-by-side, stretched to match content height */}
          <Reveal className="lg:col-span-5 min-w-0 lg:h-full">
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-full overflow-hidden rounded-[16px] bg-linen">
              <Image
                src="/img/armchairs.jpg"
                alt="A quiet interior at the Silas Street practice, soft afternoon light"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Right · Content */}
          <div className="lg:col-span-7 min-w-0">
            <Reveal>
              <h2
                className="leading-[1.02] max-w-[16ch]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 4.2vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Why choose <span className="serif-italic">Sage</span>.
              </h2>
            </Reveal>

            {/* 2×2 feature grid */}
            <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9">
              {REASONS.map((r, i) => (
                <Reveal
                  key={i}
                  delay={i * 90}
                  className="flex flex-col gap-3 max-w-[36ch]"
                >
                  <span className="text-moss" aria-hidden>
                    {r.icon}
                  </span>
                  <h3
                    className="leading-[1.2]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-[0.98rem] leading-relaxed opacity-80 prose-sage">
                    {r.body}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal delay={200} className="mt-12">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book an appointment <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
