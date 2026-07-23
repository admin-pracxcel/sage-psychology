import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function SectionPositioning() {
  return (
    <section
      id="approach"
      className="relative bg-paper text-ink w-full overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:min-h-[760px] lg:min-h-[820px] xl:min-h-[880px]">
        {/* Left half — image, bleeds to viewport edge, fills section band */}
        <Reveal
          as="div"
          className="relative w-full md:w-1/2 h-[440px] md:h-auto md:min-h-[760px] lg:min-h-[820px] xl:min-h-[880px] bg-linen"
        >
          <Image
            src="/img/armchairs.jpg"
            alt="Two chairs facing a curtained window in soft afternoon light"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </Reveal>

        {/* Right half — content, inset with generous padding, vertically centred */}
        <div className="w-full md:w-1/2 flex items-center py-20 md:py-16 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28">
          <div className="max-w-[36rem]">
            <Reveal>
              <h2 className="display-lg leading-[1.02]">
                A different kind of{" "}
                <span className="serif-italic">psychology practice</span>.
              </h2>
            </Reveal>

            <div className="mt-10 md:mt-12 flex flex-col gap-6 body-lede prose-sage max-w-[44ch]">
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
        </div>
      </div>
    </section>
  );
}
