import Link from "next/link";
import Reveal from "./Reveal";

const REASONS: {
  heading: React.ReactNode;
  body: React.ReactNode;
}[] = [
  {
    heading: (
      <>
        You see the <span className="serif-italic">same</span> psychologist
        every time.
      </>
    ),
    body: (
      <>
        Continuity matters in therapy. At Sage you build a working relationship
        with Jacob, not a rotating team, so your progress is never lost in a
        handover.
      </>
    ),
  },
  {
    heading: (
      <>
        Genuinely <span className="serif-italic">individualised</span> care.
      </>
    ),
    body: (
      <>
        No scripted programmes. Jacob draws on a broad evidence base and shapes
        each session around your history, your goals, and your pace.
      </>
    ),
  },
  {
    heading: (
      <>
        Accessible, <span className="serif-italic">transparent</span> fees.
      </>
    ),
    body: (
      <>
        Sage is a private billing practice with a deliberately low gap fee of{" "}
        <span className="text-evergreen font-medium">$78.45</span>
        {" "}per session under a Mental Health Care Plan, well below the
        Australian Psychological Society&rsquo;s recommended fee. Full details
        are on our <Link href="/fees" className="link">fees and rebates</Link>{" "}
        page.
      </>
    ),
  },
  {
    heading: (
      <>
        A <span className="serif-italic">calm</span>, private setting.
      </>
    ),
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
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16 mb-14 md:mb-24">
          <Reveal className="flex md:flex-col items-baseline md:items-start gap-4">
            <span className="chapter-mark">N&deg; 04</span>
            <span className="eyebrow">Why Sage</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg max-w-[22ch]">
              A small practice, held to a{" "}
              <span className="serif-italic">high standard</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16">
          <div className="hidden md:block" aria-hidden />
          <ol className="grid gap-0">
            {REASONS.map((r, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 90}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[100px_1fr_1fr] gap-x-6 md:gap-x-10 py-10 md:py-14 border-t hairline"
              >
                <span className="chapter-mark self-start">
                  0{i + 1}
                </span>
                <h3 className="display-sm md:display-md max-w-[18ch] col-span-1">
                  {r.heading}
                </h3>
                <p className="body-lede body-quiet max-w-[46ch] mt-4 md:mt-1 col-span-2 md:col-span-1 prose-sage">
                  {r.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
