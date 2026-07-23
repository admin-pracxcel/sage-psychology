import Link from "next/link";
import Reveal from "./Reveal";

const ITEMS: { text: React.ReactNode; href?: string }[] = [
  { text: "Anxiety, panic, and chronic worry", href: "/anxiety-therapy-perth" },
  { text: "Trauma and post-traumatic stress", href: "/trauma-therapy-perth" },
  { text: "Depression and persistent low mood" },
  { text: "Grief, loss, and bereavement" },
  { text: "Work-related stress and burnout" },
  { text: "Confidence, self-esteem, and identity" },
  { text: "Relationship difficulties and interpersonal patterns" },
  { text: "Anger and emotional regulation" },
  { text: "Alcohol, substance, and other dependencies" },
];

export default function SectionHelp() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal as="h2" className="display-lg max-w-[16ch]">
            What we help with.
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mt-8 body-lede max-w-[58ch] prose-sage"
          >
            People come to Sage for many reasons, and rarely for a single, tidy
            issue. Below are some of the areas Jacob works with most often. If
            what brings you here is not listed, it is still worth a
            conversation. We provide psychological support for adults
            experiencing:
          </Reveal>
        </div>

        <ul className="mt-16 md:mt-20 grid gap-x-12 gap-y-0 md:grid-cols-3">
          {ITEMS.map((item, idx) => (
            <Reveal
              as="li"
              key={idx}
              delay={idx * 40}
              className="border-t border-ink/15 py-7"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between gap-4 text-[1.08rem] leading-snug hover:text-evergreen transition-colors"
                >
                  <span className="max-w-[24ch]">{item.text}</span>
                  <span
                    aria-hidden
                    className="text-brass opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-0.5 duration-300"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <span className="block text-[1.08rem] leading-snug max-w-[24ch]">
                  {item.text}
                </span>
              )}
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          delay={100}
          className="mt-16 md:mt-20 body-lede max-w-[62ch] opacity-85"
        >
          Each of these is met with the same principle: therapy is tailored to
          the individual, drawing on the treatment approaches best suited to
          what you are working through.
        </Reveal>
      </div>
    </section>
  );
}
