import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const REASONS: { heading: React.ReactNode; body: React.ReactNode }[] = [
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
        <span className="text-evergreen font-medium">$78.45</span>{" "}
        per session under a Mental Health Care Plan, well below the Australian
        Psychological Society&rsquo;s recommended fee. Full details are on our{" "}
        <Link href="/fees" className="link">fees and rebates</Link>{" "}
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

        {/* Two-column: image + list */}
        <div className="grid md:grid-cols-[minmax(0,0.9fr)_1.1fr] gap-y-14 md:gap-x-16 items-start">
          <Reveal className="md:sticky md:top-28">
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-linen">
              <Image
                src="/img/window-light.jpg"
                alt="Soft afternoon light through a lace curtain in the practice"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </figure>
            <figcaption className="mt-4 flex items-baseline gap-3 chapter-mark">
              <span>Fig. 02</span>
              <span className="eyebrow" style={{ color: "var(--moss)" }}>
                Afternoon, Silas Street
              </span>
            </figcaption>
          </Reveal>

          <ol className="grid gap-0">
            {REASONS.map((r, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 90}
                className="grid grid-cols-[auto_1fr] gap-x-6 py-9 md:py-11 border-t border-ink/15 first:border-t-0 first:pt-0"
              >
                <span className="chapter-mark self-start pt-1">
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="display-sm md:display-md max-w-[20ch] leading-[1.1]">
                    {r.heading}
                  </h3>
                  <p className="body-lede max-w-[46ch] prose-sage">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
