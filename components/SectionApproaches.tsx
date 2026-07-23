import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const APPROACHES = [
  {
    tag: "N° I",
    name: "Cognitive Behaviour Therapy",
    initials: "CBT",
    href: "/cbt-therapy-perth",
    body: (
      <>
        A structured, practical, and well-researched approach that helps you
        recognise and shift the thought and behaviour patterns keeping you
        stuck. CBT is a first-line treatment for anxiety and depression.
      </>
    ),
    linkLabel: (
      <>
        CBT therapy in Perth
      </>
    ),
  },
  {
    tag: "N° II",
    name: "Eye Movement Desensitisation & Reprocessing",
    initials: "EMDR",
    href: "/emdr-therapy-perth",
    body: (
      <>
        A specialised, evidence-based therapy for trauma that helps the brain
        reprocess distressing memories so they lose their grip. EMDR is one of
        Jacob&rsquo;s core areas of training.
      </>
    ),
    linkLabel: <>EMDR therapy in Perth</>,
  },
];

const OTHERS = [
  "Schema Therapy",
  "Dialectical Behaviour Therapy (DBT)",
  "Acceptance and Commitment Therapy (ACT)",
  "Solution-Focused Brief Therapy",
  "Psychodynamic psychotherapy",
];

export default function SectionApproaches() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      {/* subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(241,235,221,0.06), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative edge mx-auto max-w-[92rem]">
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16 mb-16 md:mb-28">
          <Reveal className="flex md:flex-col items-baseline md:items-start gap-4">
            <span className="chapter-mark">N&deg; 03</span>
            <span className="eyebrow" style={{ color: "var(--brass-soft)" }}>
              Therapeutic approaches
            </span>
          </Reveal>
          <div>
            <Reveal as="h2" className="display-lg max-w-[22ch]">
              Therapy is not a{" "}
              <span className="serif-italic">one-size-fits-all</span> solution.
            </Reveal>
            <Reveal as="p" delay={100} className="mt-8 body-lede max-w-[58ch] opacity-90">
              At Sage we take a personalised approach that draws on several
              evidence-based modalities to create the right programme for you.
              Our two areas of particular focus are:
            </Reveal>
          </div>
        </div>

        {/* Two focus modalities */}
        <div className="grid md:grid-cols-2 gap-y-16 md:gap-x-16 border-t border-paper/15 pt-14 md:pt-20">
          {APPROACHES.map((a, i) => (
            <Reveal key={a.initials} delay={i * 120} className="flex flex-col gap-8">
              <div className="flex items-baseline justify-between gap-6">
                <span
                  className="serif-italic text-brass-soft"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {a.tag}
                </span>
                <span
                  className="display-lg opacity-15 leading-none"
                  aria-hidden
                >
                  {a.initials}
                </span>
              </div>
              <h3 className="display-md max-w-[16ch]">{a.name}</h3>
              <p className="body-lede opacity-90 max-w-[46ch]">{a.body}</p>
              <div className="mt-2">
                <Link href={a.href} className="btn btn-on-video-ghost">
                  {a.linkLabel} <Arrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Other modalities — a quiet inline list */}
        <Reveal className="mt-20 md:mt-32 border-t border-paper/15 pt-10">
          <div className="grid md:grid-cols-[220px_1fr] gap-y-8 md:gap-x-16">
            <div className="chapter-mark">Also drawing on</div>
            <p className="body-lede max-w-[62ch] opacity-90">
              Alongside these, Jacob draws on{" "}
              {OTHERS.map((label, i) => (
                <span key={label}>
                  <span className="serif-italic text-brass-soft">{label}</span>
                  {i < OTHERS.length - 2
                    ? ", "
                    : i === OTHERS.length - 2
                    ? ", and "
                    : ""}
                </span>
              ))}
              , selecting and blending approaches to suit your needs rather than
              fitting you to a method.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
