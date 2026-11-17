import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { LanguageSelector } from "~/components/LanguageSelector";
import { copilotCasePt } from "~/i18n/caseTranslations";
import { useI18n } from "~/i18n/I18nProvider";
import { localizeContent } from "~/i18n/LocalizeContent";

export const meta: MetaFunction = () => [
  {
    title: "Copilot – The AI for HR | Eduarda de Souza",
  },
  {
    name: "description",
    content:
      "A case study about shaping a new AI product for HR managers: reading product data, running a cross-functional discovery and turning it into a concise roadmap.",
  },
];

const roleResponsibilities = [
  "Helping shape the business model with product leadership",
  "Finding opportunities for a product that was just starting",
  "Reading the product data to understand how people were using it",
  "Leading a discovery with every area of the company",
  "Turning what we learned into a roadmap",
  "Getting business, product, technology and sales on the same page",
];

const promises = [
  {
    title: "Strategic data, faster",
    description:
      "Instead of digging through reports and dashboards, the manager just asks.",
  },
  {
    title: "Faster decisions",
    description:
      "The answer comes with context, right when the decision needs to be made.",
  },
  {
    title: "Closer to the team",
    description:
      "More information about each person on the team, so the manager can lead people, not just processes.",
  },
];

const adoptionReading = [
  {
    label: "Activation",
    status: "Happening",
    description:
      "Managers find Copilot and give it a try. The curiosity is there.",
    tone: "bg-primary text-white",
  },
  {
    label: "Retention",
    status: "Not yet",
    description:
      "That first use doesn't become a habit. They try it once and don't come back.",
    tone: "bg-secondary text-white",
  },
  {
    label: "Our reading",
    status: "Shallow value",
    description:
      "We believe what we deliver today is still too shallow to become part of a manager's day.",
    tone: "border border-secondary/10 bg-white text-secondary",
  },
];

const discoveryAreas = [
  {
    area: "Business",
    lens: "Viability",
    contribution:
      "The business model, the positioning and what makes the product sustainable.",
    color: "bg-pink-500",
  },
  {
    area: "Product",
    lens: "Value",
    contribution:
      "The managers' real problems and where Copilot actually helps.",
    color: "bg-sky-500",
  },
  {
    area: "Technology",
    lens: "Feasibility",
    contribution:
      "What we can really do with AI and the data inside the platforms.",
    color: "bg-orange-400",
  },
  {
    area: "Sales",
    lens: "Market",
    contribution:
      "What customers ask for, what makes them hesitate and what sells.",
    color: "bg-emerald-500",
  },
];

const discoverySteps = [
  {
    title: "Reading the data together",
    description:
      "First, everyone looked at the same diagnosis: activation without retention.",
  },
  {
    title: "Mapping opportunities",
    description:
      "Then each area shared where it saw Copilot creating real value.",
  },
  {
    title: "Defining the north",
    description:
      "Together we decided what the product is, who it serves first and what it shouldn't try to be.",
  },
  {
    title: "Building the roadmap",
    description:
      "Finally, that direction became a short roadmap with clear priorities, not a wish list of features.",
  },
];

const impacts = [
  {
    title: "A clear north",
    description:
      "A vision everyone shares, which helps us decide and say no to what doesn't fit.",
  },
  {
    title: "A concise roadmap",
    description:
      "Fewer bets, but deeper ones, focused on the value that brings managers back.",
  },
  {
    title: "More integrated teams",
    description:
      "Business, product, technology and sales speaking the same language and rowing in the same direction.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

export default function CopilotCase() {
  const { locale } = useI18n();

  return localizeContent(
    <main className="mx-auto max-w-[1200px] px-5 pb-20 md:px-20">
      <nav className="flex items-center justify-between py-8 md:py-10">
        <Link
          to="/"
          className="text-sm font-semibold text-secondary underline underline-offset-4"
        >
          ← Back
        </Link>
        <LanguageSelector />
      </nav>

      <header className="grid gap-10 pb-10 pt-8 md:grid-cols-[1.05fr_.95fr] md:items-center md:pb-14 md:pt-12">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">
            B2B · AI · HR Technology
          </p>
          <p className="mb-5 text-sm font-semibold text-secondary/60">
            TOTVS · 2026
          </p>
          <h1 className="text-4xl font-black leading-tight text-secondary md:text-6xl">
            Copilot – The AI for HR
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-secondary/75">
            Here I share how I helped a brand-new AI product find its
            direction, and how that turned into a clear roadmap and teams
            working together.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="rounded-[32px] bg-secondary p-7 md:p-10"
        >
          <div className="space-y-4">
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-white px-5 py-3 text-sm font-semibold text-secondary">
              How is my team doing this month?
            </div>
            <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-md bg-primary px-5 py-4 text-sm leading-relaxed text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                Copilot
              </p>
              <p className="mt-2">
                Here is an overview of your team, with the points that need
                your attention first.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80">
                Strategic data
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80">
                Faster decisions
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80">
                Team insights
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10 md:py-14">
        <SectionLabel>My Role</SectionLabel>
        <p className="mt-5 text-lg leading-relaxed text-secondary/75">
          In this project, my work was:
        </p>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {roleResponsibilities.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-secondary/10 bg-white px-5 py-4 text-sm font-semibold text-secondary"
            >
              <span className="text-primary">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Overview</SectionLabel>
        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-relaxed text-secondary/75">
          <p>
            Let me start with what Copilot is. It&apos;s an AI that lives
            inside HR platforms and helps managers in their day-to-day. Think
            of a manager who needs to understand how their team is doing, or
            make a decision about someone, and doesn&apos;t have time to go
            through a bunch of reports. That&apos;s where Copilot comes in.
          </p>
          <p>
            When I joined, the product was very new and a lot was still open:
            who it should serve first, which problem it solves best and how it
            becomes a business. So my work started right there: helping model
            the business, understanding the opportunities and looking at what
            the data was telling us.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <h2 className="text-3xl font-black text-secondary md:text-5xl">
          What Copilot does for managers
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {promises.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-3xl p-7 text-white ${
                index === 1 ? "bg-secondary" : "bg-primary"
              }`}
            >
              <span className="text-sm font-black opacity-60">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-black leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-secondary p-8 text-white md:p-14">
        <SectionLabel>The Challenge</SectionLabel>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/50">
          The question that guided me
        </p>
        <p className="mt-4 max-w-4xl text-2xl font-black leading-snug md:text-4xl">
          How do we turn a manager&apos;s first try into a habit they
          don&apos;t want to give up?
        </p>
        <p className="mt-9 max-w-4xl text-lg leading-relaxed text-white/75">
          People were already trying Copilot. What I needed to understand was
          why they weren&apos;t staying, and help the whole company agree on
          what the product had to become to earn a place in a manager&apos;s
          routine.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>What the data showed</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Activation without retention
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          When I looked at the product data, one thing stood out right away:
          people were finding Copilot and trying it, but they weren&apos;t
          coming back.
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {adoptionReading.map((item) => (
            <article key={item.label} className={`rounded-3xl p-7 ${item.tone}`}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-black">{item.status}</h3>
              <p className="mt-3 leading-relaxed opacity-85">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-secondary/75">
          That changed the question for us. The problem wasn&apos;t getting
          managers to try Copilot. It was giving them a reason to come back.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Discovery</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Bringing every area to the table
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          A new product can&apos;t find its way inside just one team. So I led
          a discovery with business, product, technology and sales, so we
          could decide together where Copilot should go.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {discoveryAreas.map((item) => (
            <article
              key={item.area}
              className="flex flex-col rounded-3xl border border-secondary/10 bg-white p-6"
            >
              <span className={`h-1.5 w-12 rounded-full ${item.color}`} />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-secondary/50">
                {item.lens}
              </p>
              <h3 className="mt-2 text-xl font-black text-secondary">
                {item.area}
              </h3>
              <p className="mt-3 leading-relaxed text-secondary/70">
                {item.contribution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Method</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          How we went from diagnosis to direction
        </h2>
        <ol className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {discoverySteps.map((item, index) => (
            <li
              key={item.title}
              className="rounded-3xl bg-secondary/[0.04] p-6 text-secondary"
            >
              <span className="text-sm font-black text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-black">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-secondary/70">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Impact</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          What changed
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          This discovery had a direct impact on business decisions and on the
          product roadmap. In practice, we came out with:
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {impacts.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-secondary/10 bg-white p-7 text-secondary"
            >
              <span className="block h-1.5 w-12 rounded-full bg-primary" />
              <h3 className="mt-5 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-secondary/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-primary p-8 text-white md:p-14">
        <h2 className="text-3xl font-black md:text-5xl">Outcome</h2>
        <div className="mt-6 max-w-4xl space-y-5 text-lg leading-relaxed text-white/90">
          <p>
            Copilot is still at the beginning of its story, and honestly,
            that&apos;s the most exciting part. Instead of piling on features
            to chase usage, we now have a shared north and a roadmap focused
            on depth: delivering value strong enough to bring managers back.
          </p>
          <p>
            For me, this project made one thing clear: in a new product, my
            work goes way beyond screens. It&apos;s about reading the signals,
            bringing the right people together and helping the company decide
            what to build, and what not to.
          </p>
        </div>
      </section>

      <footer className="flex justify-end pt-12">
        <Link
          to="/cases/dataanalysis"
          className="text-lg font-bold text-secondary underline underline-offset-4"
        >
          Next Case →
        </Link>
      </footer>
    </main>,
    locale,
    copilotCasePt,
  );
}
