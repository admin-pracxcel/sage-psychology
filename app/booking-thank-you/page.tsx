import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Booking Confirmed | Sage Psychological Services",
  robots: { index: false, follow: false },
};

function Hero() {
  return (
    <section className="relative bg-evergreen text-paper pt-[124px] md:pt-[140px] pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wa-sunrise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.72) 0%, rgba(46,62,51,0.55) 45%, rgba(46,62,51,0.9) 100%)",
          }}
        />
      </div>
      <div className="relative edge mx-auto max-w-[68rem] text-center">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-paper/70">
            Confirmation
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1
            className="mt-6 max-w-full leading-[0.98] text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 6.4vw, 5.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Your appointment is{" "}
            <span className="serif-italic">confirmed</span>.
          </h1>
        </Reveal>
        <Reveal
          as="p"
          delay={140}
          className="mt-8 body-lede text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          A confirmation email is on its way to you now with the date and
          time, the practice address, parking information, and a short intake
          form to complete before your visit.
        </Reveal>
        <Reveal
          as="p"
          delay={200}
          className="mt-6 serif-italic text-paper/85 max-w-[60ch] mx-auto leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)",
            textShadow: "0 1px 20px rgba(0,0,0,0.35)",
          }}
        >
          Taking this step is often the hardest part, and it is worth
          acknowledging that you have taken it.
        </Reveal>
      </div>
    </section>
  );
}

const BEFORE_APPT: React.ReactNode[] = [
  <>
    Complete the intake form in your confirmation email. Filling it in
    beforehand means more of your first session can be spent talking.
  </>,
  <>
    If you are using a Mental Health Care Plan, bring your plan and GP
    referral letter to the appointment. Both are needed before the session so
    the Medicare rebate can be processed.
  </>,
  <>
    If you would like to know what a first session involves, our{" "}
    <Link href="/how-therapy-works">what to expect</Link> page walks through
    it in detail.
  </>,
  <>If you need to reschedule, please let us know at least 48 hours in advance.</>,
];

function BeforeAppointment() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Before your appointment
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
                A few things{" "}
                <span className="serif-italic">worth doing</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="flex flex-col">
              {BEFORE_APPT.map((item, i) => (
                <Reveal
                  as="li"
                  key={i}
                  delay={i * 60}
                  className="border-t border-ink/12 py-8 body-lede prose-sage max-w-full last:border-b"
                >
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeedToChange() {
  return (
    <section className="relative bg-paper text-ink stack-y border-b border-hairline">
      <div className="edge mx-auto max-w-[68rem] text-center">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 3.6vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Need to change{" "}
            <span className="serif-italic">something</span>?
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage max-w-[62ch] mx-auto"
        >
          If your confirmation email does not arrive within a few minutes,
          please check your junk folder. If anything needs adjusting, or you
          have a question before your appointment, call{" "}
          <a href="tel:0480425776" className="link" data-phone>
            0480 425 776
          </a>{" "}
          or <Link href="/contact">get in touch</Link> and we will sort it
          out.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn btn-primary">
              Return to homepage <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function BookingConfirmedPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <Hero />
        <BeforeAppointment />
        <NeedToChange />
      </main>
      <Footer />
    </>
  );
}
