import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book an Appointment | Sage Psychological Services",
  description:
    "Book your psychology appointment at Sage Psychological Services in East Fremantle. Simple online booking for new and returning adult clients. Medicare rebates available.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function BookHero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">Book</span>
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
              Book your <span className="serif-italic">appointment</span>.
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
              Taking the first step is often the hardest part. Booking a
              session is simple, and Jacob will take care of the rest.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#booking" className="btn btn-primary">
                Choose a time below <Arrow />
              </a>
              <a href="tel:0868011041" className="btn btn-ghost" data-phone>
                Prefer to call? 08 6801 1041
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Booking widget placeholder ────────────────────────── */

function BookingWidget() {
  return (
    <section id="booking" className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              Live availability
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
              Choose a time that{" "}
              <span className="serif-italic">suits you</span>.
            </h2>
          </Reveal>
          <Reveal as="p" delay={140} className="mt-8 body-lede max-w-full">
            Use the calendar below to select an appointment time. Once you
            have booked, you will receive a confirmation email with everything
            you need for your first session.
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 md:mt-16 rounded-[16px] border border-ink/12 bg-paper overflow-hidden">
            {/* Booking widget iframe placeholder — replace src with the Zanda Health embed once migration is live. */}
            <div className="aspect-[4/3] md:aspect-[16/10] w-full flex flex-col items-center justify-center gap-6 p-10 text-center bg-paper">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Booking widget
              </div>
              <p
                className="max-w-[46rem] leading-snug text-ink/70"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Zanda Health calendar embeds here once the migration from
                Power Diary is live.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="tel:0868011041" className="btn btn-primary" data-phone>
                  Call to book · 08 6801 1041 <Arrow />
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  Enquire instead
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── S2 · Before you book ───────────────────────────────────── */

const BEFORE_ITEMS: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Bring your plan and referral",
    body: (
      <>
        If you are using a Mental Health Care Plan, please bring your plan
        and GP referral letter to your first session. More detail is on our{" "}
        <Link href="/fees">fees and rebates</Link> page.
      </>
    ),
  },
  {
    heading: "50-minute sessions",
    body: (
      <>
        Sessions are with Jacob Jones, our registered psychologist, and run
        for approximately 50 minutes.
      </>
    ),
  },
  {
    heading: "Transparent fees",
    body: (
      <>
        The out-of-pocket cost with a Mental Health Care Plan is $78.45 per
        session; the standard fee without a plan is $180.
      </>
    ),
  },
  {
    heading: "48 hours&rsquo; notice",
    body: (
      <>
        We ask for at least 48 hours&rsquo; notice to cancel or reschedule,
        as outlined in our fee policy.
      </>
    ),
  },
];

function BeforeYouBook() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Before your first session
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="mt-6 max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                A few things worth{" "}
                <span className="serif-italic">knowing</span>.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="flex flex-col">
              {BEFORE_ITEMS.map((item, i) => (
                <Reveal
                  as="li"
                  key={i}
                  delay={i * 60}
                  className="border-t border-ink/12 py-8 md:py-10 last:border-b"
                >
                  <div
                    className="max-w-full leading-[1.15]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.3rem, 1.7vw, 1.6rem)",
                      letterSpacing: "-0.01em",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.heading }}
                  />
                  <p className="mt-4 body-lede prose-sage max-w-full">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S3 · What happens after you book ───────────────────────── */

function WhatHappensAfter() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/window-light.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.82) 0%, rgba(46,62,51,0.7) 45%, rgba(46,62,51,0.88) 100%)",
          }}
        />
      </div>
      <div className="relative edge mx-auto max-w-[68rem]">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            What happens{" "}
            <span className="serif-italic">after you book</span>.
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Once your booking is confirmed, you will receive an email with the
            practice address, parking information, and a short intake form to
            complete before your visit. Your first session is a chance for
            Jacob to understand what brings you in and to begin shaping an
            approach around your goals.
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="max-w-full prose-sage"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            There is no pressure to have everything figured out. That is what
            the work is for. If you would like to understand the process in
            more detail, read{" "}
            <Link
              href="/how-therapy-works"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              what to expect from therapy
            </Link>
            .
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S4 · Alternative contact ───────────────────────────────── */

function PreferToSpeak() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="relative edge mx-auto max-w-[68rem] text-center">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Prefer to speak to{" "}
            <span className="serif-italic">someone first</span>.
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage max-w-[62ch] mx-auto"
        >
          If you would rather ask a question before booking, or you cannot
          find a suitable time, please <Link href="/contact">get in touch</Link>{" "}
          or call{" "}
          <a href="tel:0868011041" className="link" data-phone>
            08 6801 1041
          </a>
          . Jacob also offers{" "}
          <Link href="/telehealth-psychologist-perth">
            telehealth appointments
          </Link>{" "}
          if attending in person is difficult.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#booking" className="btn btn-primary">
              Choose a time <Arrow />
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Book", url: "/book" },
      ])} />
      <Header alwaysSolid />
      <main>
        <BookHero />
        <BookingWidget />
        <BeforeYouBook />
        <WhatHappensAfter />
        <PreferToSpeak />
      </main>
      <Footer />
    </>
  );
}
