import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import ConditionsSlider, {
  type ConditionCard,
} from "@/components/ConditionsSlider";

export const metadata: Metadata = {
  title: "EMDR Therapy Perth | Trauma Treatment | Sage Psychological",
  description:
    "Specialised EMDR therapy in East Fremantle with registered psychologist Jacob Jones. An evidence-based treatment for trauma and distressing memories. Enquire today.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function EmdrHero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span>Services</span>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">EMDR Therapy</span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 max-w-[56rem]">
          <Reveal delay={60}>
            <h1
              className="max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6.4vw, 5.75rem)",
                letterSpacing: "-0.025em",
              }}
            >
              EMDR Therapy{" "}
              <span className="serif-italic">in Perth</span>.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p
              className="mt-8 serif-italic text-moss max-w-[54ch] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 1.6vw, 1.55rem)",
              }}
            >
              A specialised, evidence-based therapy that helps the mind
              reprocess distressing memories so they no longer hold you back.
              One of Jacob&rsquo;s core areas of training.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book an EMDR Consultation <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask about EMDR
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · What is EMDR ──────────────────────────────────────── */

function WhatIsEmdr() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/still-lake.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.72) 0%, rgba(46,62,51,0.6) 50%, rgba(46,62,51,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[68rem]">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-center text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            What is <span className="serif-italic">EMDR Therapy</span>?
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Eye Movement Desensitisation and Reprocessing, known as EMDR, is a
            structured, evidence-based therapy developed specifically to help
            people recover from trauma and distressing life experiences. When
            something overwhelming happens, the brain can struggle to process
            the memory fully, leaving it stored in a raw, unresolved form.
            Years later, that memory can still trigger intense emotions,
            physical sensations, and unhelpful beliefs as though the event
            were happening now.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            EMDR helps the brain reprocess these stuck memories. Using guided
            sets of bilateral stimulation, typically side-to-side eye
            movements, the therapy supports the natural processing system so
            that the memory loses its emotional charge. The event is not
            forgotten, but it settles into the past where it belongs, and its
            grip on the present loosens.
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            At Sage, EMDR is delivered by registered psychologist{" "}
            <Link
              href="/about"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Jacob Jones
            </Link>
            , who was first introduced to trauma-focused therapy during his
            postgraduate research and has made it a central part of his
            practice ever since.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · What EMDR helps with ──────────────────────────────── */

const EMDR_HELPS_CARDS: ConditionCard[] = [
  {
    title: "Post-traumatic stress and the effects of trauma",
    body:
      "Explored further on our dedicated trauma therapy page.",
    image: "/img/trauma-man-walking-coastal-path-morning.webp",
    alt: "A person walking a coastal path near Fremantle in the morning",
    href: "/trauma-therapy-perth",
  },
  {
    title: "Distressing or intrusive memories",
    body:
      "Helping memories that push into the present settle back into the past where they belong.",
    image: "/img/dependency-kitchen-bench-morning-tea.webp",
    alt: "A kitchen bench in the morning with tea and the day ahead",
  },
  {
    title: "Childhood experiences that continue to affect adult life",
    body:
      "Working through the early events whose weight has followed you into now.",
    image: "/img/emdr-childhood-backyard-swing-afternoon.webp",
    alt: "An old swing in a suburban backyard",
  },
  {
    title: "Grief and loss",
    body:
      "Making room for the memories and the meaning that surround them.",
    image: "/img/grief-two-people-garden-chairs-afternoon.webp",
    alt: "Two people sitting together in a backyard in the late afternoon",
  },
  {
    title: "Anxiety rooted in past experiences",
    body:
      "For anxiety that seems to trace back to something specific, rather than the everyday kind.",
    image: "/img/anxiety-woman-back-step-morning-coffee.webp",
    alt: "A person sitting on their back step with a coffee in the morning",
  },
  {
    title: "Phobias and specific fears",
    body:
      "Reprocessing the moment a fear took hold, so it loses its intensity.",
    image: "/img/self-esteem-woman-leaving-house-doorway.webp",
    alt: "Stepping out the front door on a clear morning",
  },
];

function WhatEmdrHelpsWith() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="max-w-[62rem] mx-auto text-center">
          <Reveal>
            <h2
              className="max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              What EMDR can{" "}
              <span className="serif-italic">help with</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full">
            EMDR is best known as a treatment for trauma and post-traumatic
            stress, and it can be effective for a wide range of experiences,
            whether a single distressing event or the accumulated weight of
            many. Jacob uses EMDR to support clients working through:
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-20">
          <ConditionsSlider
            cards={EMDR_HELPS_CARDS}
            autoIntervalMs={3000}
            arrowPosition="sides"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ── S3 · What to expect from EMDR (5-step process) ─────────── */

const EMDR_PROCESS: string[] = [
  "History and preparation, where Jacob gets to know you and helps you build a sense of safety and stability.",
  "Identifying the specific memories or experiences to work with.",
  "Reprocessing those memories using bilateral stimulation, at a pace you control.",
  "Strengthening more helpful, adaptive beliefs about yourself.",
  "Reviewing progress and consolidating the gains you have made.",
];

function WhatToExpectEmdr() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[68rem] mx-auto">
          <Reveal>
            <h2
              className="max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              What to expect{" "}
              <span className="serif-italic">from EMDR</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full prose-sage">
            Understandably, many people feel cautious about trauma therapy.
            Jacob&rsquo;s approach is careful, paced, and always led by what
            feels manageable for you. EMDR is never rushed.
          </Reveal>

          <Reveal delay={140} className="mt-14 md:mt-16">
            <p
              className="serif-italic text-moss"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.15rem, 1.4vw, 1.35rem)",
              }}
            >
              The process generally moves through several phases:
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-0">
            {EMDR_PROCESS.map((step, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 80}
                className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 py-7 md:py-8 border-t border-ink/15"
              >
                <span
                  className="text-moss"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2vw, 2.25rem)",
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.05rem] md:text-[1.15rem] leading-snug self-center max-w-full">
                  {step}
                </span>
              </Reveal>
            ))}
          </ol>

          <Reveal as="p" delay={80} className="mt-14 md:mt-16 body-lede max-w-full prose-sage">
            Because trauma work requires a strong foundation of trust, Jacob
            often integrates EMDR with psychodynamic and{" "}
            <Link href="/cbt-therapy-perth">CBT-based</Link> approaches,
            ensuring the therapy supports the whole person, not just the
            memory.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S4 · Why Sage for EMDR ─────────────────────────────────── */

function WhySageEmdr() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <Reveal className="lg:col-span-5 min-w-0 lg:h-full">
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-full overflow-hidden rounded-[16px] bg-linen">
              <Image
                src="/img/sage-psychology-practice.webp"
                alt="The Sage Psychological Services consulting room in East Fremantle"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 min-w-0">
            <Reveal>
              <h2
                className="max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 4.2vw, 3.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Why choose Sage{" "}
                <span className="serif-italic">for EMDR</span>.
              </h2>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6 body-lede prose-sage max-w-full">
              <Reveal as="p" delay={80} className="max-w-full">
                EMDR is a specialised therapy, and it matters who guides you
                through it. Jacob&rsquo;s training in trauma-focused work
                began during his postgraduate thesis and has been deepened
                through mentorship and ongoing practice. He brings a genuine
                passion for looking beyond presenting symptoms to the
                underlying experiences that shape them, which is precisely
                the depth EMDR is designed to reach.
              </Reveal>

              <Reveal as="p" delay={140} className="max-w-full">
                Sessions take place in a calm, private room in East Fremantle,
                with the same low out-of-pocket fee under a Mental Health Care
                Plan that applies across the practice. Full details are on our{" "}
                <Link href="/fees">fees and rebates</Link> page.
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S5 · Enquire About EMDR ────────────────────────────────── */

function EnquireEmdr() {
  return (
    <section className="relative text-paper overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wa-sunrise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,22,20,0.72) 0%, rgba(20,22,20,0.55) 45%, rgba(20,22,20,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[86rem] stack-y flex flex-col items-center text-center gap-10">
        <Reveal>
          <h2
            className="max-w-[22ch] text-paper leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Enquire about EMDR{" "}
            <span className="serif-italic">in East Fremantle</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[58ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          If you feel EMDR might help you move forward, Jacob would welcome a
          conversation about whether it is the right approach for you. You can{" "}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book a consultation
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            get in touch
          </Link>{" "}
          with any questions first. There is no pressure and no obligation.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
            Book an EMDR Consultation <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Ask about EMDR
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function EmdrTherapyPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <EmdrHero />
        <WhatIsEmdr />
        <WhatEmdrHelpsWith />
        <WhatToExpectEmdr />
        <WhySageEmdr />
        <EnquireEmdr />
      </main>
      <Footer />
    </>
  );
}
