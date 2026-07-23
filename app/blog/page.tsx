import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Psychology Blog | Mental Health Insights | Sage",
  description:
    "Practical, evidence-based articles on anxiety, trauma, therapy and mental health, written by registered psychologist Jacob Jones in East Fremantle.",
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
            <span className="text-evergreen">Insights</span>
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
              Insights and <span className="serif-italic">articles</span>.
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
              Practical, evidence-based writing on anxiety, trauma, therapy,
              and the everyday work of looking after your mental health.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#articles" className="btn btn-primary">
                Browse articles <Arrow />
              </a>
              <Link href="/book" className="btn btn-ghost">
                Book an appointment
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Hub introduction ──────────────────────────────────── */

function Intro() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Why this exists
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
                Understanding comes{" "}
                <span className="serif-italic">first</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-7">
            <Reveal as="p" className="body-lede prose-sage max-w-full">
              A great deal of the difficulty people experience with anxiety,
              trauma, and low mood comes not from the experience itself but
              from not understanding what is happening or why. These articles
              are written to help with that. They are practical rather than
              academic, grounded in the same evidence base that informs the
              therapy offered at Sage, and written by registered psychologist{" "}
              <Link href="/about">Jacob Jones</Link>.
            </Reveal>
            <Reveal as="p" delay={80} className="body-lede max-w-full">
              Nothing here is a substitute for individual psychological
              support, and reading about a difficulty is not the same as
              working through it. But understanding the shape of what you are
              facing is often a genuinely useful first step, and for some
              people it is what makes reaching out feel possible.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · Categories ────────────────────────────────────────── */

const CATEGORIES: {
  kicker: string;
  heading: string;
  body: React.ReactNode;
  image: string;
}[] = [
  {
    kicker: "Silo one",
    heading: "Anxiety and CBT",
    image: "/img/eucalyptus.jpg",
    body: (
      <>
        Articles on understanding anxiety, how Cognitive Behaviour Therapy
        works, and practical approaches to worry, panic, and avoidance.
        Related service: <Link href="/cbt-therapy-perth">CBT therapy</Link>{" "}
        and <Link href="/anxiety-therapy-perth">anxiety therapy</Link>.
      </>
    ),
  },
  {
    kicker: "Silo two",
    heading: "Trauma and EMDR",
    image: "/img/still-lake.jpg",
    body: (
      <>
        Articles on how trauma affects the mind and body, what EMDR involves,
        and how trauma-focused therapy works in practice. Related service:{" "}
        <Link href="/emdr-therapy-perth">EMDR therapy</Link> and{" "}
        <Link href="/trauma-therapy-perth">trauma therapy</Link>.
      </>
    ),
  },
  {
    kicker: "Silo three",
    heading: "Therapy and getting started",
    image: "/img/window-light.jpg",
    body: (
      <>
        Articles on what therapy actually involves, how Medicare and referrals
        work, and how to find the right psychologist for you. Related pages:{" "}
        <Link href="/how-therapy-works">what to expect</Link> and{" "}
        <Link href="/fees">fees and rebates</Link>.
      </>
    ),
  },
];

function Categories() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              Browse by topic
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
              Three <span className="serif-italic">threads</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {CATEGORIES.map((c, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="h-full flex flex-col rounded-[16px] overflow-hidden bg-paper-soft border border-ink/8 hover:border-ink/20 transition-colors">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 p-8 md:p-9 flex-1">
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                    {c.kicker}
                  </div>
                  <h3
                    className="max-w-full leading-[1.15]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {c.heading}
                  </h3>
                  <div className="body-lede prose-sage max-w-full flex-1">
                    {c.body}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── S3 · Post grid ─────────────────────────────────────────── */

const UPCOMING_POSTS: {
  title: string;
  category: string;
  slug: string;
}[] = [
  {
    title: "What is CBT and how does it help anxiety?",
    category: "Anxiety & CBT",
    slug: "/blog/what-is-cbt-anxiety",
  },
  {
    title: "5 signs it might be time to see a psychologist for anxiety",
    category: "Anxiety & CBT",
    slug: "/blog/signs-see-psychologist-anxiety",
  },
  {
    title: "CBT vs medication for anxiety: what the evidence says",
    category: "Anxiety & CBT",
    slug: "/blog/cbt-vs-medication-anxiety",
  },
  {
    title: "How many therapy sessions do you actually need?",
    category: "Therapy",
    slug: "/blog/how-many-therapy-sessions",
  },
  {
    title: "What is EMDR therapy and how does it work?",
    category: "Trauma & EMDR",
    slug: "/blog/what-is-emdr-therapy",
  },
  {
    title: "Signs of unresolved trauma in adults",
    category: "Trauma & EMDR",
    slug: "/blog/signs-unresolved-trauma-adults",
  },
  {
    title: "EMDR vs talk therapy for trauma: which is right for you?",
    category: "Trauma & EMDR",
    slug: "/blog/emdr-vs-talk-therapy-trauma",
  },
  {
    title: "Is it trauma or anxiety? Understanding the difference",
    category: "Trauma & Anxiety",
    slug: "/blog/trauma-vs-anxiety",
  },
  {
    title: "Finding the right psychologist in Fremantle: a guide",
    category: "Local & Trust",
    slug: "/blog/finding-psychologist-fremantle",
  },
  {
    title: "How Medicare Mental Health Care Plans work in 2026",
    category: "Local & Trust",
    slug: "/blog/medicare-mental-health-care-plan",
  },
  {
    title: "What to expect in your first psychology session",
    category: "Local & Trust",
    slug: "/blog/first-psychology-session",
  },
];

function PostGrid() {
  return (
    <section id="articles" className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              Latest articles
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
              Coming <span className="serif-italic">soon</span>.
            </h2>
          </Reveal>
          <Reveal as="p" delay={140} className="mt-8 body-lede max-w-full">
            The first tranche of articles is being written now. Below is what
            is planned. Check back, or ask us to send you a note when new
            pieces are published.
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
          {UPCOMING_POSTS.map((p, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 30}
              className="border-t border-ink/12 py-8 flex flex-col gap-3"
            >
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                {p.category}
              </div>
              <h3
                className="max-w-full leading-[1.2]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>
              <span className="mt-1 text-[0.85rem] tracking-[0.2em] uppercase text-ink/40">
                In progress
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────────── */

function WhenReadingIsNotEnough() {
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
            When reading is{" "}
            <span className="serif-italic">not enough</span>.
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          If something you have read here resonates and you would like to talk
          it through properly, Jacob is available for individual sessions in
          East Fremantle and by{" "}
          <Link
            href="/telehealth-psychologist-perth"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            telehealth
          </Link>{" "}
          across Western Australia. You can{" "}
          <Link
            href="/book"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book an appointment
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            get in touch
          </Link>{" "}
          with a question.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/book" className="btn btn-on-video">
              Book an appointment <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-on-video-ghost">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <Hero />
        <Intro />
        <Categories />
        <PostGrid />
        <WhenReadingIsNotEnough />
      </main>
      <Footer />
    </>
  );
}
