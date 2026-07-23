# Sage Psychological Services

You're building the marketing website for Sage Psychological Services, a private psychology practice in East Fremantle, Western Australia, run by Jacob Jones. It replaces an existing Wix site at https://www.sagepsychservices.com.au/. The client is expecting a website he shows off. Deliver that.

## What we're building

18 pages plus 11 blog posts. Full URL architecture and blog roadmap are in `content/sitemap.md`. Copy for the nine launch pages is final and lives in `content/01-home.md` through `content/09-trauma-therapy-perth.md`. Copy for the remaining nine pages and the 11 blog posts needs to be written to match the register of the approved pages.

## Tech

Next.js. Everything else is your call, styling, animation library, image pipeline, deployment adapter, whatever serves the design. Hosted on Hostinger Cloud Startup, which runs Node.js apps or serves static exports, so pick either.

## Design ambition

The client is expecting a site at the level of the references in `content/design-references.md`. Fetch each one before you start designing. That aesthetic bar is the target, not a stretch goal. Take a real position on typography, palette, and motion. Do not settle into safe-generic.

## Content, do not rewrite it

The nine approved pages are signed off. Preserve the sentences. Layout, hierarchy, pacing, and visual expression are yours. Sentences are not.

The remaining pages and blog posts should match the approved pages in voice: warm, unhurried, evidence-led, invitational rather than pushy. `content/sitemap.md` names each page and each blog post with its target query and the service or condition page it links up to.

## The section labels in the content files are hints, not requirements

Every approved page file carries structural annotations from the source document: labels like `HERO BANNER`, `SECTION 1, Welcome / positioning (H2)`, `Primary button: Book Now`, and so on. Those were the copywriter's rough map of one possible arrangement. They are not the layout.

Restructure freely. Reorder, split, combine, invent new section hierarchies, drop the notion of "sections" entirely, do whatever the design demands. The only thing that has to survive from those files is the sentences (in the same words) and the internal links (from and to the same URLs). Heading levels, section order, CTA placement, block groupings, and every other visual and structural choice is yours to make.

The meta title, meta description, primary keyword, and target search intent noted at the top of each file are the SEO deliverables and stay as written.

## Facts

Anything appearing on more than one page (fees, phone, address, qualifications) lives in `content/site-facts.md`. Read from there. If a value ends up different across pages, that is a misleading representation problem on a health site, not a typo.

## Hard rules

This is a regulated health service. Section 133 of the Health Practitioner Regulation National Law governs everything published. Three things are non-negotiable and Jacob personally carries the risk of a breach:

**No testimonials, reviews, ratings, or `aggregateRating` in structured data.** Not on pages, not in embedded widgets, not in the SERP. Testimonials about clinical care are prohibited for regulated health services. This includes Google review widgets and star ratings. If the existing Wix site displays reviews, they do not carry over.

**Jacob is a "registered psychologist" only.** Not "clinical psychologist" (protected title requiring an area-of-practice endorsement he doesn't hold), not "specialist" (implies status he doesn't hold). "Particular expertise in psychodynamic approaches" is the approved phrasing already used in the copy.

**"Bulk billed" is a DVA-only term.** Sage bulk bills DVA card holders only. The phrase appears in one place on the site, the DVA subsection of the fees page. Never in a meta title, meta description, H1, H2, or on any other page.

Beyond these three, the approved copy already handles the register correctly: no outcome guarantees, no cure claims, no inducements, no urgency. When you write the batch-two pages and the blog, match that register.

## Git and GitHub

Initialise a Git repo on the first session and create a private GitHub repo for it (ask me for the account or org name). Commit small units of work as you go, not one giant dump at the end. Small commits let me review diffs and roll a bad direction back cleanly.

Do not connect Hostinger's GitHub auto-deploy during the build. Once that connection is live, every push to `main` goes to production, and a broken commit during development becomes a broken production site. We'll turn auto-deploy on as part of the launch checklist, not before.

## Practical launch notes

The domain currently serves a Wix site with DNS at GoDaddy. Cutover is a DNS change plus a redirect map from every indexed Wix URL to the new equivalent. Build the redirect map before cutover, or the map-pack #1 position for "psychologist east fremantle" is at risk.

Booking is the primary conversion event. The practice is mid-migration from Power Diary to Zanda Health. Confirm which is live before wiring `/book`. Conversion events fire on `/book/thank-you` and `/contact/thank-you`, both noindex.

The phone number displayed on the site is replaced by dynamic number insertion on tracked traffic sources, so render it in a way that a script can swap. Read the number from `content/site-facts.md` rather than hardcoding it.

## Progress

Show me a working home page and one condition page (`/trauma-therapy-perth` is a good gut check because the content is heavy and you'll see the design direction under pressure) before building the rest. That is when I want to see the design direction and course-correct if needed. Then carry on.
