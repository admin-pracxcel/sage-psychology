import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const REASONS: { title: string; body: React.ReactNode }[] = [
  {
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
    title: "Genuinely individualised care",
    body: (
      <>
        No scripted programmes. Jacob draws on a broad evidence base and shapes
        each session around your history, your goals, and your pace.
      </>
    ),
  },
  {
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
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-y-14 md:gap-x-24 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-linen">
              <Image
                src="/img/window-light.jpg"
                alt="Afternoon light through a lace curtain in the practice"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="display-lg max-w-[16ch]">
                Why choose <span className="serif-italic">Sage</span>.
              </h2>
            </Reveal>

            <ol className="mt-12 md:mt-14 grid gap-0">
              {REASONS.map((r, i) => (
                <Reveal
                  as="li"
                  key={i}
                  delay={i * 90}
                  className="py-8 md:py-9 border-t border-ink/15 first:border-t-0 first:pt-0"
                >
                  <h3 className="display-sm max-w-[22ch]">{r.title}</h3>
                  <p className="mt-4 body-lede max-w-[44ch] prose-sage opacity-90">
                    {r.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
