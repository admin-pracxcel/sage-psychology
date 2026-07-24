import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Enquiry Received | Sage Psychological Services",
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
            Enquiry received
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1
            className="mt-6 max-w-full leading-[0.98] text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Thank you for{" "}
            <span className="serif-italic">getting in touch</span>.
          </h1>
        </Reveal>
        <Reveal
          as="p"
          delay={140}
          className="mt-8 body-lede text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          Your enquiry has come through and we will respond as soon as we
          can, usually within one business day. If your message came through
          over a weekend or public holiday, we will be in touch on the next
          business day.
        </Reveal>
      </div>
    </section>
  );
}

const WAITING_LINKS: { label: string; href: string }[] = [
  {
    label: "What to expect from your first session",
    href: "/how-therapy-works",
  },
  {
    label: "Fees, Medicare rebates, and other funding pathways",
    href: "/fees",
  },
  { label: "Frequently asked questions", href: "/faq" },
  { label: "More about Jacob's background and approach", href: "/about" },
];

function WhileYouWait() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                While you wait
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
                A few pages that{" "}
                <span className="serif-italic">might help</span>.
              </h2>
            </Reveal>
            <Reveal as="p" delay={140} className="mt-8 body-lede max-w-full">
              If you would like to read more in the meantime, these pages
              answer the questions we are asked most.
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="flex flex-col">
              {WAITING_LINKS.map((l, i) => (
                <Reveal
                  as="li"
                  key={i}
                  delay={i * 60}
                  className="border-t border-ink/12 last:border-b"
                >
                  <Link
                    href={l.href}
                    className="flex items-center justify-between gap-8 py-8 md:py-10 group"
                  >
                    <span
                      className="max-w-full leading-[1.2] transition-colors group-hover:text-evergreen"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.3rem, 1.8vw, 1.65rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {l.label}
                    </span>
                    <span className="text-moss shrink-0 transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={280}>
              <p className="mt-10 body-lede prose-sage max-w-full">
                If you already know you would like to go ahead, you are
                welcome to <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book an appointment</Link>{" "}
                directly rather than waiting for a reply.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrisisBlock() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[68rem]">
        <div className="rounded-[16px] border border-moss/40 bg-paper-soft p-8 md:p-12">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              If you need support sooner
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="mt-4 max-w-full leading-[1.1]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 2.6vw, 2.4rem)",
                letterSpacing: "-0.015em",
              }}
            >
              This inbox is not{" "}
              <span className="serif-italic">monitored around the clock</span>.
            </h2>
          </Reveal>
          <Reveal as="p" delay={140} className="mt-6 body-lede max-w-full">
            Please do not wait on a reply if you are in distress. Lifeline is
            available 24 hours a day.
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Lifeline", number: "13 11 14", tel: "131114", note: "24 hours" },
              {
                name: "Beyond Blue",
                number: "1300 22 4636",
                tel: "1300224636",
                note: "24 hours",
              },
              { name: "Emergency services", number: "000", tel: "000" },
            ].map((c, i) => (
              <li key={i}>
                <a
                  href={`tel:${c.tel}`}
                  className="block rounded-[12px] border border-ink/12 bg-paper p-6 hover:border-ink/30 transition-colors"
                >
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                    {c.name}
                  </div>
                  <div
                    className="mt-3 leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {c.number}
                  </div>
                  {c.note && (
                    <div className="mt-3 text-[0.9rem] text-moss">{c.note}</div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={80}>
          <div className="mt-14 text-center">
            <Link href="/" className="btn btn-primary">
              Return to homepage <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function EnquiryReceivedPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <Hero />
        <WhileYouWait />
        <CrisisBlock />
      </main>
      <Footer />
    </>
  );
}
