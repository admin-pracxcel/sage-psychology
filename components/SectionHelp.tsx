import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const ITEMS: { text: React.ReactNode; href?: string; note?: string }[] = [
  { text: <>Anxiety, panic, and chronic worry</>, href: "/anxiety-therapy-perth", note: "Anxiety therapy" },
  { text: <>Trauma and post-traumatic stress</>, href: "/trauma-therapy-perth", note: "Trauma therapy" },
  { text: <>Depression and persistent low mood</> },
  { text: <>Grief, loss, and bereavement</> },
  { text: <>Work-related stress and burnout</> },
  { text: <>Confidence, self-esteem, and identity</> },
  { text: <>Relationship difficulties and interpersonal patterns</> },
  { text: <>Anger and emotional regulation</> },
  { text: <>Alcohol, substance, and other dependencies</> },
];

export default function SectionHelp() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y overflow-hidden">
      {/* botanical accent — small, top-right */}
      <div
        className="hidden md:block absolute top-24 right-0 w-[26vw] max-w-[380px] aspect-[3/4] opacity-95"
        aria-hidden
      >
        <Image
          src="/img/eucalyptus-vase.jpg"
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-l-[2px]"
        />
      </div>

      <div className="relative edge mx-auto max-w-[92rem]">
        {/* header */}
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16 mb-14 md:mb-24">
          <Reveal className="flex md:flex-col items-baseline md:items-start gap-4">
            <span className="chapter-mark">N&deg; 02</span>
            <span className="eyebrow">What we help with</span>
          </Reveal>
          <div>
            <Reveal as="h2" className="display-lg max-w-[20ch]">
              People come to Sage{" "}
              <span className="serif-italic">for many reasons</span> — and
              rarely for a single, tidy issue.
            </Reveal>
            <Reveal as="p" delay={100} className="mt-8 body-lede max-w-[54ch] prose-sage">
              Below are some of the areas Jacob works with most often. If what
              brings you here is not listed, it is still worth a conversation.
              We provide psychological support for adults experiencing:
            </Reveal>
          </div>
        </div>

        {/* Editorial list */}
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16">
          <div className="hidden md:block" aria-hidden />
          <ul className="grid md:grid-cols-2 gap-x-16">
            {ITEMS.map((item, idx) => (
              <Reveal
                as="li"
                key={idx}
                delay={idx * 40}
                className="group py-6 border-t border-ink/15"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-6 hover:text-evergreen transition-colors"
                  >
                    <span className="chapter-mark shrink-0 w-7">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[1.1rem] md:text-[1.18rem] leading-snug">
                      {item.text}
                    </span>
                    <span className="hidden sm:inline serif-italic text-brass text-[0.9rem] whitespace-nowrap flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.note}
                      <Arrow className="ml-1" />
                    </span>
                  </Link>
                ) : (
                  <div className="flex items-baseline gap-6">
                    <span className="chapter-mark shrink-0 w-7">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[1.1rem] md:text-[1.18rem] leading-snug">
                      {item.text}
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          as="p"
          delay={100}
          className="mt-16 md:mt-24 max-w-[62ch] body-lede body-quiet md:ml-[calc(220px+4rem)]"
        >
          <span className="serif-italic">Each of these is met</span> with the
          same principle: therapy is tailored to the individual, drawing on the
          treatment approaches best suited to what you are working through.
        </Reveal>
      </div>
    </section>
  );
}
