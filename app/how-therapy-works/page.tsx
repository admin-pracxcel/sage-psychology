import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "What to Expect | Your First Session | Sage Psychological",
  description:
    "Nervous about your first psychology appointment? Here is exactly what happens, what to bring, and what therapy at Sage Psychological Services in East Fremantle involves.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">What to expect</span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 max-w-[58rem]">
          <Reveal delay={60}>
            <h1
              className="max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6.4vw, 5.75rem)",
                letterSpacing: "-0.025em",
              }}
            >
              What to expect from{" "}
              <span className="serif-italic">therapy</span>.
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
              If you have never seen a psychologist before, the unknown can be
              the biggest barrier. Here is exactly how it works, start to
              finish.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book your first session <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask a question
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Normalising the apprehension ─────────────────────── */

function Normalise() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Before we begin
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="mt-6 max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 3.6vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                It is completely normal to{" "}
                <span className="serif-italic">feel unsure</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="p" className="body-lede max-w-full">
              Most people feel some apprehension before a first appointment.
              You might be wondering whether your concerns are significant
              enough to warrant therapy, whether you will know what to say, or
              whether it will feel awkward. All of that is ordinary, and none
              of it is a reason to hold off. Part of Jacob&rsquo;s job is to
              make the process feel manageable from the very first
              conversation, and there is no expectation that you arrive with
              everything neatly articulated.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S2-S5 · Timeline ───────────────────────────────────────── */

const TIMELINE: {
  kicker: string;
  heading: string;
  body: React.ReactNode;
}[] = [
  {
    kicker: "Step one",
    heading: "Before your first session",
    body: (
      <>
        <p className="body-lede max-w-full">
          Once you have booked, you will receive a confirmation email with the
          practice address, parking details, and a short intake form to
          complete beforehand. Completing it in advance means more of your
          first session can be spent talking rather than filling in paperwork.
        </p>
        <p className="mt-6 body-lede prose-sage max-w-full">
          If you are using a Mental Health Care Plan, please bring both your
          plan and your GP referral letter to the first appointment. These
          need to be provided before the session so that Medicare rebates can
          be processed correctly. If you do not have a plan and would prefer
          to pay privately, that is entirely fine and no referral is needed.
          Our <Link href="/fees">fees and rebates</Link> page explains both
          pathways in detail.
        </p>
      </>
    ),
  },
  {
    kicker: "Step two",
    heading: "Your first session",
    body: (
      <>
        <p className="body-lede max-w-full">
          The first appointment runs for approximately 50 minutes and is
          primarily about understanding. Jacob will ask about what has brought
          you in, what has been happening recently, and something of your
          background and history. There is no interrogation and no script. It
          is a conversation, and you set the pace of what you share.
        </p>
        <p className="mt-6 body-lede prose-sage max-w-full">
          Towards the end of the session, Jacob will usually offer some
          initial reflections on what he is hearing and suggest an approach
          that might suit. That might mean{" "}
          <Link href="/cbt-therapy-perth">CBT</Link> for anxiety or low mood,{" "}
          <Link href="/emdr-therapy-perth">EMDR</Link> for trauma-related
          difficulties, or a blend of approaches depending on the picture.
          You will leave with a clearer sense of what the work ahead might
          look like.
        </p>
      </>
    ),
  },
  {
    kicker: "Step three",
    heading: "How therapy progresses",
    body: (
      <>
        <p className="body-lede max-w-full">
          After the first session, appointments settle into a rhythm that
          suits you, often weekly or fortnightly to begin with, spacing out as
          things improve. Each session builds on the last. Some approaches
          involve practising strategies between appointments, which is where
          a good deal of the progress actually happens.
        </p>
        <p className="mt-6 body-lede max-w-full">
          There is no fixed number of sessions. Medicare rebates cover up to
          ten individual sessions per calendar year, with your GP typically
          referring for six initially and a further four after review. Some
          people find meaningful change within that span, while others choose
          to continue for longer. Jacob will review progress with you
          regularly so that the decision to continue, pause, or finish is
          always a considered one made together.
        </p>
      </>
    ),
  },
  {
    kicker: "Throughout",
    heading: "Confidentiality",
    body: (
      <>
        <p className="body-lede prose-sage max-w-full">
          What you discuss in session is confidential. As a registered
          psychologist, Jacob is bound by strict professional and legal
          obligations regarding your personal and health information. There
          are narrow, legally defined exceptions, principally where there is
          a serious and imminent risk to your safety or someone else&rsquo;s,
          or where records are subpoenaed by a court. Jacob will explain
          these clearly at your first session so you know exactly where you
          stand. Our <Link href="/privacy-policy">privacy policy</Link> sets
          out how your information is stored and handled.
        </p>
      </>
    ),
  },
];

function Timeline() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              The process, plainly
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="mt-6 max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              From booking to{" "}
              <span className="serif-italic">the work itself</span>.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 md:mt-20 flex flex-col">
          {TIMELINE.map((item, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 60}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-ink/12 py-12 md:py-16"
            >
              <div className="md:col-span-4">
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                  {item.kicker}
                </div>
                <h3
                  className="mt-4 max-w-full leading-[1.1]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {item.heading}
                </h3>
              </div>
              <div className="md:col-span-8">{item.body}</div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────────── */

function ReadyWhenYouAre() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wa-sunrise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.7) 0%, rgba(46,62,51,0.55) 50%, rgba(46,62,51,0.82) 100%)",
          }}
        />
      </div>
      <div className="relative edge mx-auto max-w-[68rem] text-center">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Ready when <span className="serif-italic">you are</span>.
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          If that sounds manageable, the next step is straightforward. You
          can{" "}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book your first session
          </Link>{" "}
          online, or{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            get in touch
          </Link>{" "}
          first if you would rather ask a question. If you have more
          practical queries, our{" "}
          <Link
            href="/faq"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            frequently asked questions
          </Link>{" "}
          page covers the most common ones.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
              Book your first session <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-on-video-ghost">
              Ask a question
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HowTherapyWorksPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <Hero />
        <Normalise />
        <Timeline />
        <ReadyWhenYouAre />
      </main>
      <Footer />
    </>
  );
}
