import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { POSTS } from "@/app/blog/posts";

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

/* ── Featured post (first article, hero card) ───────────────── */

function FeaturedPost() {
  const featured = POSTS[0];
  return (
    <section id="articles" className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-16">
          <div>
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Featured article
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
                Start <span className="serif-italic">here</span>.
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={140}>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-[16px] overflow-hidden bg-paper border border-ink/8 hover:border-ink/25 transition-colors"
          >
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.02]"
              />
            </div>
            <div className="lg:col-span-6 p-8 md:p-12 flex flex-col gap-6 justify-center">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                {featured.category} · {featured.readTime}
              </div>
              <h3
                className="max-w-full leading-[1.05] transition-colors group-hover:text-evergreen"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                {featured.title}
              </h3>
              <p className="body-lede max-w-full">{featured.excerpt}</p>
              <div className="mt-2 flex items-center gap-2 text-evergreen text-[0.85rem] tracking-[0.2em] uppercase">
                <span>Read article</span>
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── All posts grid ─────────────────────────────────────────── */

function AllPosts() {
  const rest = POSTS.slice(1);
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              All articles
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
              Written by <span className="serif-italic">Jacob</span>.
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 40}>
              <Link
                href={`/blog/${p.slug}`}
                className="group h-full flex flex-col rounded-[16px] overflow-hidden bg-paper-soft border border-ink/8 hover:border-ink/25 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4 p-7 md:p-8 flex-1">
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                    {p.category} · {p.readTime}
                  </div>
                  <h3
                    className="max-w-full leading-[1.2] transition-colors group-hover:text-evergreen"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.35rem, 1.8vw, 1.65rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[0.98rem] leading-snug text-ink/70 flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-moss text-[0.85rem] tracking-[0.2em] uppercase">
                    <span>Read article</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
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
        <FeaturedPost />
        <AllPosts />
        <WhenReadingIsNotEnough />
      </main>
      <Footer />
    </>
  );
}
