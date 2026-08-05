import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page not found | Sage Psychological Services",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-32 min-h-[70vh] flex items-center border-b border-hairline">
          <div className="edge mx-auto max-w-[62rem] text-center">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                404
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1
                className="mt-6 max-w-full leading-[0.98]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                We can't find <span className="serif-italic">that page</span>.
              </h1>
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="mt-8 body-lede text-ink/75 max-w-[54ch] mx-auto"
            >
              The link may be out of date, or the page has moved. You are
              welcome to head back to the homepage or get in touch if you were
              looking for something specific.
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <Link href="/" className="btn btn-primary">
                  Return home <Arrow />
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
