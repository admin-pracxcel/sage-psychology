import Link from "next/link";
import Reveal from "./Reveal";

const ITEMS: { text: React.ReactNode; href?: string }[] = [
  {
    text: (
      <>
        Anxiety, panic, and chronic worry
      </>
    ),
    href: "/anxiety-therapy-perth",
  },
  {
    text: <>Trauma and post-traumatic stress</>,
    href: "/trauma-therapy-perth",
  },
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
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        {/* header */}
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16 mb-14 md:mb-24">
          <Reveal className="flex md:flex-col items-baseline md:items-start gap-4">
            <span className="chapter-mark">N&deg; 02</span>
            <span className="eyebrow">What we help with</span>
          </Reveal>
          <div>
            <Reveal as="h2" className="display-lg max-w-[22ch]">
              People come to Sage{" "}
              <span className="serif-italic">for many reasons</span> — and
              rarely for a single, tidy issue.
            </Reveal>
            <Reveal
              as="p"
              delay={100}
              className="mt-8 body-lede max-w-[58ch] prose-sage"
            >
              Below are some of the areas Jacob works with most often. If what
              brings you here is not listed, it is still worth a conversation.
              We provide psychological support for adults experiencing:
            </Reveal>
          </div>
        </div>

        {/* Editorial list — two columns with hairline top borders */}
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16">
          <div className="hidden md:block" aria-hidden />
          <ul className="grid md:grid-cols-2 gap-x-14">
            {ITEMS.map((item, idx) => (
              <Reveal
                as="li"
                key={idx}
                delay={idx * 55}
                className="group flex items-baseline gap-6 py-6 border-t hairline text-[1.1rem] md:text-[1.18rem] leading-snug"
              >
                <span className="chapter-mark shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="link flex-1 flex items-baseline gap-3"
                  >
                    <span>{item.text}</span>
                    <span
                      className="serif-italic text-brass opacity-80 text-[0.9rem] whitespace-nowrap"
                    >
                      &mdash; read more
                    </span>
                  </Link>
                ) : (
                  <span className="flex-1">{item.text}</span>
                )}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          as="p"
          delay={100}
          className="mt-16 md:mt-24 max-w-[62ch] body-lede body-quiet ml-auto md:ml-[calc(220px+4rem)]"
        >
          <span className="serif-italic">Each of these is met</span> with the
          same principle: therapy is tailored to the individual, drawing on the
          treatment approaches best suited to what you are working through.
        </Reveal>
      </div>
    </section>
  );
}
