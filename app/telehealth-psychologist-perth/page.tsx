import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Telehealth Psychology Perth | Online Sessions | Sage",
  description:
    "Online psychology sessions with registered psychologist Jacob Jones, available across Western Australia. Same evidence-based care, from wherever you are. Medicare rebates apply.",
};

/* ── Small SVG icons ────────────────────────────────────────── */

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function IconDevice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M12 17v3" />
      <circle cx="12" cy="11" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconWifi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.5 9.5c5.5-5 13.5-5 19 0" />
      <path d="M5.5 12.5c3.7-3.4 9.3-3.4 13 0" />
      <path d="M8.5 15.5c2-1.8 5-1.8 7 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconRoom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 21V9l8-6 8 6v12" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}
function IconLock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */

function TelehealthHero() {
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
            <span className="text-evergreen">Telehealth Psychology</span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 max-w-[60rem]">
          <Reveal delay={40}>
            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full border border-moss/40 bg-paper-soft/70 text-[0.72rem] tracking-[0.16em] uppercase text-moss">
              <IconPin />
              <span>Available across Western Australia</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="mt-6 max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6.4vw, 5.75rem)",
                letterSpacing: "-0.025em",
              }}
            >
              Telehealth Psychology{" "}
              <span className="serif-italic">across Western Australia</span>.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p
              className="mt-8 serif-italic text-moss max-w-[54ch] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 1.6vw, 1.55rem)",
              }}
            >
              The same considered, evidence-based therapy, delivered securely
              to wherever you are. No commute, no waiting room, no compromise
              on care.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book a Telehealth Session <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask about telehealth
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Therapy that comes to you ─────────────────────────── */

function TherapyComesToYou() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/sunset-ocean.jpg"
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
            Therapy that <span className="serif-italic">comes to you</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Telehealth psychology is simply therapy delivered by secure video
            or telephone rather than in a consulting room. The work itself is
            unchanged. You still see the same psychologist, follow the same
            evidence-based approaches, and build the same working relationship
            over time. What changes is the practicality: you can attend from
            home, from a private office, or from anywhere in Western Australia
            with a stable connection.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            At Sage Psychological Services, telehealth sessions are delivered
            by registered psychologist{" "}
            <Link
              href="/about"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Jacob Jones
            </Link>
            , the same practitioner you would see in East Fremantle. For many
            clients this makes consistent therapy genuinely achievable for the
            first time.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · Who telehealth suits (hairline list) ──────────────── */

const WHO_SUITS: string[] = [
  "You live outside the Fremantle and Perth metropolitan area, including regional and remote Western Australia",
  "Work, study, or caring responsibilities make travelling to appointments difficult",
  "You have limited transport or mobility",
  "Attending an unfamiliar clinic feels daunting, particularly if you are managing anxiety",
  "You would simply feel more at ease speaking from your own space",
  "Illness, weather, or travel would otherwise cause you to miss a session",
];

function WhoTelehealthSuits() {
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
              Who telehealth{" "}
              <span className="serif-italic">suits</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full">
            Telehealth is not a lesser option or a fallback. For a great many
            people it is simply the better fit. You might find it particularly
            useful if:
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 max-w-[72rem] mx-auto">
          {WHO_SUITS.map((item, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 45}
              className="border-t border-ink/15 py-6 text-[1.05rem] md:text-[1.15rem] leading-snug"
            >
              {item}
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          delay={80}
          className="mt-14 md:mt-16 body-lede max-w-[68ch] mx-auto text-center opacity-85"
        >
          Consistency matters enormously in therapy, and telehealth removes
          many of the practical reasons that sessions get cancelled or quietly
          abandoned.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S3 · What can be delivered online (two cards) ──────────── */

function WhatCanBeDeliveredOnline() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[68rem]">
          <Reveal>
            <h2
              className="max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              What can be{" "}
              <span className="serif-italic">delivered online</span>.
            </h2>
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="mt-8 serif-italic text-moss leading-snug max-w-full"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 1.4vw, 1.4rem)",
            }}
          >
            Most of Jacob&rsquo;s therapeutic work translates well to
            telehealth.
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {/* Card 1 · Well suited */}
          <Reveal>
            <div className="h-full flex flex-col gap-6 p-8 md:p-10 rounded-[16px] bg-paper-soft border border-ink/8 hover:border-ink/20 transition-colors">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Well suited by video
              </div>
              <h3
                className="max-w-full leading-[1.15]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                CBT, anxiety, depression, stress and grief
              </h3>
              <p className="body-lede prose-sage max-w-full flex-1">
                <Link href="/cbt-therapy-perth">
                  Cognitive Behaviour Therapy
                </Link>{" "}
                in particular is highly effective delivered online, with
                strong research support behind it. Sessions for{" "}
                <Link href="/anxiety-therapy-perth">anxiety</Link>,{" "}
                <Link href="/depression-counselling-perth">depression</Link>,
                stress, and grief all work well by video.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/cbt-therapy-perth"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] tracking-[0.06em] uppercase font-medium border border-ink/15 text-ink hover:border-evergreen hover:text-evergreen transition-colors"
                >
                  CBT
                </Link>
                <Link
                  href="/anxiety-therapy-perth"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] tracking-[0.06em] uppercase font-medium border border-ink/15 text-ink hover:border-evergreen hover:text-evergreen transition-colors"
                >
                  Anxiety
                </Link>
                <Link
                  href="/depression-counselling-perth"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] tracking-[0.06em] uppercase font-medium border border-ink/15 text-ink hover:border-evergreen hover:text-evergreen transition-colors"
                >
                  Depression
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Card 2 · With adaptation */}
          <Reveal delay={120}>
            <div className="h-full flex flex-col gap-6 p-8 md:p-10 rounded-[16px] bg-paper-soft border border-ink/8 hover:border-ink/20 transition-colors">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                With appropriate adaptation
              </div>
              <h3
                className="max-w-full leading-[1.15]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                Trauma-focused work and EMDR
              </h3>
              <p className="body-lede prose-sage max-w-full flex-1">
                Trauma-focused work, including{" "}
                <Link href="/emdr-therapy-perth">EMDR</Link>, can also be
                delivered by telehealth with appropriate adaptation, though
                Jacob will discuss with you whether in-person sessions might
                suit better depending on what you are working through. That
                conversation happens early, and the decision is always made
                together.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/emdr-therapy-perth"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] tracking-[0.06em] uppercase font-medium border border-ink/15 text-ink hover:border-evergreen hover:text-evergreen transition-colors"
                >
                  EMDR
                </Link>
                <Link
                  href="/trauma-therapy-perth"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] tracking-[0.06em] uppercase font-medium border border-ink/15 text-ink hover:border-evergreen hover:text-evergreen transition-colors"
                >
                  Trauma therapy
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S4 · How telehealth sessions work ──────────────────────── */

function HowSessionsWork() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left · Prose */}
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
                How telehealth sessions{" "}
                <span className="serif-italic">work</span>.
              </h2>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6 body-lede prose-sage max-w-full">
              <Reveal as="p" delay={80} className="max-w-full">
                Sessions run for approximately 50 minutes, exactly as they
                would in person. You will receive a secure link before your
                appointment, and you do not need to install specialist
                software. All you need is a device with a camera and
                microphone, a reliable connection, and a private space where
                you will not be interrupted.
              </Reveal>

              <Reveal as="p" delay={140} className="max-w-full">
                Confidentiality is treated with the same seriousness as it is
                in the consulting room. Sessions are conducted over a secure,
                encrypted platform and are never recorded. Your privacy and
                the security of your health information are governed by the
                same obligations that apply to all of Jacob&rsquo;s work, as
                set out in our <Link href="/privacy-policy">privacy policy</Link>.
              </Reveal>
            </div>
          </div>

          {/* Right · What you'll need card */}
          <Reveal delay={160} className="lg:col-span-5 min-w-0 lg:sticky lg:top-28">
            <div className="rounded-[20px] bg-paper border border-ink/8 p-7 md:p-8">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss mb-6">
                What you&rsquo;ll need
              </div>

              <ul className="flex flex-col">
                <li className="flex items-start gap-4 py-5 border-t border-ink/10">
                  <span className="text-moss shrink-0 mt-0.5">
                    <IconDevice />
                  </span>
                  <div>
                    <div
                      className="leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                      }}
                    >
                      A device with a camera and microphone
                    </div>
                    <div className="mt-1 text-[0.92rem] opacity-70">
                      Laptop, tablet, or phone all work.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4 py-5 border-t border-ink/10">
                  <span className="text-moss shrink-0 mt-0.5">
                    <IconWifi />
                  </span>
                  <div>
                    <div
                      className="leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                      }}
                    >
                      A reliable internet connection
                    </div>
                    <div className="mt-1 text-[0.92rem] opacity-70">
                      Enough for a video call. No specialist software.
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4 py-5 border-t border-ink/10">
                  <span className="text-moss shrink-0 mt-0.5">
                    <IconRoom />
                  </span>
                  <div>
                    <div
                      className="leading-tight"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.2rem",
                      }}
                    >
                      A private space
                    </div>
                    <div className="mt-1 text-[0.92rem] opacity-70">
                      Somewhere you will not be interrupted for 50 minutes.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-ink/10 flex items-center gap-3">
                <span className="text-moss shrink-0">
                  <IconLock />
                </span>
                <div className="text-[0.92rem] leading-relaxed opacity-85">
                  Secure, encrypted, never recorded.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S5 · Medicare rebates ──────────────────────────────────── */

function MedicareRebates() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[72rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <h2
                className="max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 3.8vw, 3.25rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Medicare rebates{" "}
                <span className="serif-italic">apply</span>.
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="mt-6 body-lede prose-sage max-w-full"
            >
              Telehealth sessions attract the same Medicare rebates as
              in-person appointments when you have a Mental Health Care Plan
              from your GP, bringing your out-of-pocket cost to the same
              $78.45 per session. Full details of fees, rebates, and other
              funding pathways are set out on our{" "}
              <Link href="/fees">fees and rebates</Link> page.
            </Reveal>
          </div>

          {/* Fee callout — modest, factual */}
          <Reveal delay={120}>
            <div className="rounded-[16px] bg-paper-soft border border-ink/8 p-7 md:p-8">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Out of pocket, per session
              </div>
              <div
                className="mt-4 text-evergreen leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.75rem, 4.5vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                $78.45
              </div>
              <div className="mt-3 text-[0.95rem] opacity-75 max-w-[26ch]">
                Under a Mental Health Care Plan from your GP.
              </div>
              <Link
                href="/fees"
                className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-medium text-evergreen link"
              >
                Fees &amp; rebates <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S6 · Book a Telehealth Session ─────────────────────────── */

function BookTelehealthCTA() {
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
            className="max-w-[24ch] text-paper leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Book a telehealth{" "}
            <span className="serif-italic">session</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[62ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          If distance, schedule, or circumstance has been standing between you
          and consistent support, telehealth may be the answer. You can{" "}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book a session
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            get in touch
          </Link>{" "}
          to ask whether online therapy would suit your situation.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
            Book a Telehealth Session <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Ask about telehealth
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function TelehealthPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <TelehealthHero />
        <TherapyComesToYou />
        <WhoTelehealthSuits />
        <WhatCanBeDeliveredOnline />
        <HowSessionsWork />
        <MedicareRebates />
        <BookTelehealthCTA />
      </main>
      <Footer />
    </>
  );
}
