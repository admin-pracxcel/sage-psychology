import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const APPROACHES = [
  {
    tag: "I",
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
    linkLabel: "CBT therapy in Perth",
  },
  {
    tag: "II",
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
    linkLabel: "EMDR therapy in Perth",
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
      {/* atmospheric botanical image, top-right, low opacity */}
      <div
        className="absolute inset-y-0 right-0 w-[42vw] md:w-[36vw] max-w-[560px] pointer-events-none"
        aria-hidden
      >
        <Image
          src="/img/eucalyptus.jpg"
          alt=""
          fill
          sizes="40vw"
          className="object-cover object-center opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(46,62,51,1) 0%, rgba(46,62,51,0.6) 30%, transparent 100%)",
          }}
        />
      </div>

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
            <Reveal
              as="p"
              delay={100}
              className="mt-8 body-lede max-w-[54ch] text-paper"
            >
              At Sage we take a personalised approach that draws on several
              evidence-based modalities to create the right programme for you.
              Our two areas of particular focus are:
            </Reveal>
          </div>
        </div>

        {/* Two focus modalities */}
        <div className="grid md:grid-cols-2 gap-y-16 md:gap-x-16 border-t border-paper/20 pt-14 md:pt-20">
          {APPROACHES.map((a, i) => (
            <Reveal key={a.initials} delay={i * 120} className="flex flex-col gap-7">
              <div className="flex items-baseline justify-between gap-6">
                <span
                  className="serif-italic text-brass-soft text-[1.1rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  N&deg; {a.tag}
                </span>
                <span className="eyebrow text-paper/80 tracking-[0.32em]">
                  {a.initials}
                </span>
              </div>
              <h3 className="display-md max-w-[16ch] text-paper">{a.name}</h3>
              <p className="body-lede text-paper max-w-[46ch]">{a.body}</p>
              <div className="mt-2">
                <Link href={a.href} className="btn btn-on-video-ghost">
                  {a.linkLabel} <Arrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Other modalities */}
        <Reveal className="mt-20 md:mt-32 border-t border-paper/20 pt-10">
          <div className="grid md:grid-cols-[220px_1fr] gap-y-8 md:gap-x-16">
            <div className="chapter-mark">Also drawing on</div>
            <div className="max-w-[62ch]">
              <p className="body-lede text-paper">
                Alongside these, Jacob draws on:
              </p>
              <ul className="mt-6 grid gap-3">
                {OTHERS.map((label) => (
                  <li
                    key={label}
                    className="flex items-baseline gap-4 py-2 border-t border-paper/15 first:border-t-0"
                  >
                    <span className="text-brass-soft chapter-mark shrink-0">
                      &mdash;
                    </span>
                    <span
                      className="serif-italic text-[1.15rem] md:text-[1.25rem]"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--paper)",
                      }}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 body-lede text-paper/90">
                — selecting and blending approaches to suit your needs rather
                than fitting you to a method.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
