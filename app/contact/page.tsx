import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import ContactForm from "./ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Sage Psychological Services | East Fremantle",
  description:
    "Get in touch with Sage Psychological Services in East Fremantle. Call, email, or send an enquiry. Located at 7B Silas Street. New adult clients welcome.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function ContactHero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">Contact</span>
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
              Get in <span className="serif-italic">touch</span>.
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
              Whether you are ready to book or simply have a question, we would
              be glad to hear from you.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book Now <Arrow />
              </Link>
              <Link href="#enquiry" className="btn btn-ghost">
                Send an Enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · NAP block + form ──────────────────────────────────── */

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4.6 4.6a2 2 0 0 1 2-2h2.2a2 2 0 0 1 2 1.6l.7 3a2 2 0 0 1-.5 2l-1.4 1.4a14 14 0 0 0 6.4 6.4l1.4-1.4a2 2 0 0 1 2-.5l3 .7a2 2 0 0 1 1.6 2v2.2a2 2 0 0 1-2 2A17 17 0 0 1 4.6 4.6Z" />
    </svg>
  );
}

function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconClock({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ContactDetails() {
  return (
    <section id="enquiry" className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* NAP column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Contact details
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
                Sage Psychological{" "}
                <span className="serif-italic">Services</span>.
              </h2>
            </Reveal>

            <div className="mt-10 flex flex-col gap-8">
              <Reveal delay={120}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-moss shrink-0">
                    <IconPin />
                  </div>
                  <div>
                    <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                      Address
                    </div>
                    <a
                      href="https://maps.app.goo.gl/NoWCWRPuBQun5GFS9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-[1.05rem] md:text-[1.15rem] leading-snug hover:text-evergreen"
                    >
                      7B Silas Street
                      <br />
                      East Fremantle, WA 6158
                    </a>
                    <div className="mt-2 text-moss text-[0.95rem]">
                      Within Silas Street Specialists
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-moss shrink-0">
                    <IconPhone />
                  </div>
                  <div>
                    <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                      Phone
                    </div>
                    <a
                      href="tel:0480425776"
                      className="mt-2 block text-[1.05rem] md:text-[1.15rem] leading-snug hover:text-evergreen"
                      data-phone
                    >
                      0480 425 776
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-moss shrink-0">
                    <IconMail />
                  </div>
                  <div>
                    <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                      Email
                    </div>
                    <a
                      href="mailto:info@sagepsychservices.com.au"
                      className="mt-2 block text-[1.05rem] md:text-[1.15rem] leading-snug hover:text-evergreen"
                    >
                      info@sagepsychservices.com.au
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-moss shrink-0">
                    <IconClock />
                  </div>
                  <div>
                    <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                      Hours
                    </div>
                    <p className="mt-2 max-w-full text-[1.05rem] leading-snug">
                      Flexible appointment times to suit working schedules.
                      Please enquire about current availability.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[16px] bg-paper border border-ink/8 p-8 md:p-10">
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                  Send us a message
                </div>
                <h3
                  className="mt-4 max-w-full leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 2.6vw, 2.4rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  Prefer to write?
                </h3>
                <p className="mt-4 body-lede max-w-full">
                  Fill in the form below and we will respond as soon as we can,
                  usually within one business day. Please share only what you
                  are comfortable sharing at this stage.
                </p>

                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · Hours & getting here ──────────────────────────────── */

function GettingHere() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Getting here
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
                A short drive from{" "}
                <span className="serif-italic">Fremantle</span>.
              </h2>
            </Reveal>
            <Reveal as="p" delay={140} className="mt-8 body-lede max-w-full">
              The practice sits within the Silas Street Specialists in East
              Fremantle, a short drive from Fremantle, Melville, and the
              surrounding suburbs, with parking available on site.
            </Reveal>
            <Reveal
              as="p"
              delay={200}
              className="mt-6 body-lede prose-sage max-w-full"
            >
              If travelling to the practice is difficult, Jacob also offers{" "}
              <Link href="/telehealth-psychologist-perth">
                telehealth sessions
              </Link>{" "}
              across Western Australia.
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="tel:0480425776" className="btn btn-primary">
                  Call 0480 425 776 <Arrow />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 min-h-[380px] rounded-[16px] overflow-hidden border border-ink/8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3511752519075!2d115.7639976!3d-32.04207529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a3f56b6e453d%3A0x8d1b1ffa8b307549!2sSage%20Psychological%20Services!5e0!3m2!1sen!2sin!4v1786587009169!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sage Psychological Services on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────────── */

function NotSureWhereToStart() {
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
            Not sure <span className="serif-italic">where to start</span>.
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          If you are new to therapy, you might find it helpful to read{" "}
          <Link
            href="/how-therapy-works"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            what to expect from your first session
          </Link>{" "}
          or to browse our{" "}
          <Link
            href="/faq"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            frequently asked questions
          </Link>
          . When you feel ready, booking takes only a moment.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
              Book Now <Arrow />
            </Link>
            <Link href="#enquiry" className="btn btn-on-video-ghost">
              Send an Enquiry
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ])} />
      <Header alwaysSolid />
      <main>
        <ContactHero />
        <ContactDetails />
        <GettingHere />
        <NotSureWhereToStart />
      </main>
      <Footer />
    </>
  );
}
