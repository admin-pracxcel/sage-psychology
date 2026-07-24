import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import type { PostMeta } from "@/app/blog/posts";

export default function BlogPostLayout({
  post,
  related,
  children,
}: {
  post: PostMeta;
  related: PostMeta[];
  children: ReactNode;
}) {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <ArticleHero post={post} />
        <ArticleBody post={post} body={children} />
        <AuthorBox />
        <ArticleCta post={post} />
        <RelatedPosts posts={related} />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}

function ArticleHero({ post }: { post: PostMeta }) {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-16 md:pb-20">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <Link href="/blog" className="opacity-80 hover:opacity-100">
              Insights
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">{post.category}</span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 max-w-[62rem]">
          <Reveal delay={60}>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-brass">
              {post.category}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="mt-6 max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5.2vw, 4.5rem)",
                letterSpacing: "-0.025em",
              }}
            >
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-moss text-[0.95rem]">
              <span>{post.readTime}</span>
              <span className="opacity-40">·</span>
              <span>Published {post.publishedLabel}</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 md:mt-16 edge mx-auto max-w-[92rem]">
        <Reveal delay={240}>
          <div className="relative aspect-[16/8] md:aspect-[16/6] w-full rounded-[16px] overflow-hidden">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArticleBody({
  post,
  body,
}: {
  post: PostMeta;
  body: ReactNode;
}) {
  return (
    <section className="relative bg-paper text-ink pb-24 md:pb-32">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 flex flex-col gap-10">
              <div>
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                  Related pages
                </div>
                <ul className="mt-6 flex flex-col gap-4">
                  {post.linksUp.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[1rem] leading-snug text-ink/75 hover:text-evergreen transition-colors flex items-center gap-2 group"
                      >
                        <span>{l.label}</span>
                        <span className="text-moss transition-transform group-hover:translate-x-1">
                          <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-hairline pt-8">
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                  When you are ready
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-fit">
                    Book a session <Arrow />
                  </Link>
                  <Link href="/contact" className="btn btn-ghost w-fit">
                    Ask a question
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-9 order-1 lg:order-2 max-w-[52rem]">
            <div className="flex flex-col gap-6 -mt-2">{body}</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ArticleCta({ post }: { post: PostMeta }) {
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
            {post.ctaHeading}
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          {post.ctaBody}
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
              Book a session <Arrow />
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

function RelatedPosts({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              Keep reading
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
              More <span className="serif-italic">insights</span>.
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {posts.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60}>
              <Link
                href={`/blog/${p.slug}`}
                className="group h-full flex flex-col rounded-[16px] overflow-hidden bg-paper border border-ink/8 hover:border-ink/25 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-4 p-7 md:p-8 flex-1">
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                    {p.category}
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

function AuthorBox() {
  return (
    <section className="relative bg-paper text-ink pb-16 md:pb-20">
      <div className="edge mx-auto max-w-[86rem]">
        <Reveal>
          <div className="rounded-[16px] border border-hairline bg-paper-soft p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-[14px] bg-linen">
                  <Image
                    src="/img/jacob.webp"
                    alt="Jacob Jones, registered psychologist and founder of Sage Psychological Services in East Fremantle"
                    fill
                    sizes="(min-width: 768px) 240px, 60vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="md:col-span-8 lg:col-span-9 min-w-0">
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                  About the author
                </div>
                <h2
                  className="mt-4 leading-[1.05]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.75rem, 2.6vw, 2.4rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  Jacob Jones
                </h2>
                <div className="mt-3 text-[0.95rem] text-moss leading-snug">
                  Registered Psychologist · BA (Psychology), GradDip
                  (Psychology) · AHPRA PSY0002462461
                </div>

                <div className="mt-6 body-lede prose-sage max-w-[62ch]">
                  <p>
                    Jacob is a registered psychologist and founder of Sage
                    Psychological Services in East Fremantle, Western
                    Australia. He works with adults across{" "}
                    <Link href="/anxiety-therapy-perth">anxiety</Link>,{" "}
                    <Link href="/trauma-therapy-perth">trauma</Link>,{" "}
                    <Link href="/depression-counselling-perth">
                      depression
                    </Link>
                    , addiction and grief, with particular expertise in
                    psychodynamic approaches and evidence-based therapies
                    including{" "}
                    <Link href="/cbt-therapy-perth">CBT</Link> and{" "}
                    <Link href="/emdr-therapy-perth">EMDR</Link>.
                  </p>
                </div>

                <div className="mt-7">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-moss text-[0.85rem] tracking-[0.2em] uppercase group"
                  >
                    <span>More about Jacob</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="relative bg-paper text-ink py-16 md:py-20">
      <div className="edge mx-auto max-w-[68rem]">
        <div className="rounded-[14px] border border-hairline bg-paper-soft p-7 md:p-8 text-center">
          <p
            className="serif-italic max-w-[62rem] mx-auto leading-snug text-ink/70"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.05rem, 1.3vw, 1.25rem)",
            }}
          >
            This article is general information only and is not a substitute
            for individual psychological assessment or advice. Everyone&rsquo;s
            circumstances differ. If something here resonates with you,
            speaking with a registered psychologist or your GP is the
            appropriate next step.
          </p>
        </div>
      </div>
    </section>
  );
}
