import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function SectionPositioning() {
  return (
    <section id="approach" className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-y-14 md:gap-x-24 items-start">
          <div>
            <Reveal>
              <h2 className="display-lg max-w-[16ch]">
                A different kind of{" "}
                <span className="serif-italic">psychology practice</span>.
              </h2>
            </Reveal>

            <div className="mt-12 md:mt-16 flex flex-col gap-7 body-lede prose-sage max-w-[52ch]">
              <Reveal as="p" delay={80}>
                Sage Psychological Services is a private psychology practice in
                East Fremantle, offering thoughtful, individualised care to
                adults across the Fremantle and wider Perth community. We are
                deliberately small. That is the point.
              </Reveal>

              <Reveal as="p" delay={140}>
                When you come to Sage you work directly with{" "}
                <Link href="/about">Jacob Jones</Link>, a registered
                psychologist who takes the time to understand not just what you
                are experiencing, but why. There is no revolving door of
                practitioners and no one-size-fits-all programme. There is
                simply a considered, collaborative approach shaped around your
                history, your goals, and the pace that feels right for you.
              </Reveal>

              <Reveal as="p" delay={200}>
                Our approach draws on evidence-based treatments including{" "}
                <Link href="/cbt-therapy-perth">
                  Cognitive Behaviour Therapy
                </Link>{" "}
                and{" "}
                <Link href="/emdr-therapy-perth">
                  Eye Movement Desensitisation and Reprocessing (EMDR)
                </Link>
                , integrated with psychodynamic and schema-based work where it
                helps. Whether you are seeking support for the first time or
                returning to therapy after a break, you will find a space here
                that is safe, unhurried, and genuinely tailored to you.
              </Reveal>
            </div>
          </div>

          <Reveal delay={160}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-linen">
              <Image
                src="/img/armchairs.jpg"
                alt="Two chairs facing a curtained window in soft afternoon light"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
