import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { LanguageSelector } from "~/components/LanguageSelector";
import { dataAnalysisCasePt } from "~/i18n/caseTranslations";
import { useI18n } from "~/i18n/I18nProvider";
import { localizeContent } from "~/i18n/LocalizeContent";

export const meta: MetaFunction = () => [
  {
    title:
      "From Raw Data to Product Hypotheses | Eduarda de Souza",
  },
  {
    name: "description",
    content:
      "A B2B SaaS case study about cross-referencing five product data sources to turn scattered numbers into diagnoses, hypotheses and a prioritized discovery roadmap.",
  },
];

type Priority = "High" | "Medium" | "Low";

const roleResponsibilities = [
  "Proposing and leading the data exploration",
  "Defining the guiding question and the analysis method",
  "Cross-referencing five independent data sources",
  "Synthesizing signals, patterns and diagnoses",
  "Writing testable hypotheses and strategic theses",
  "Presenting a prioritized discovery roadmap to Product leadership",
];

const motivations = [
  "Listen to what the product data was saying",
  "Find real problems based on existing data",
  "Position design as a generator of user-based demands",
];

const dataSources = [
  {
    lens: "Satisfaction",
    source: "NPS",
    question: "What do users say they feel?",
    content: "Scores and open comments from the last cycle",
    color: "bg-sky-400",
  },
  {
    lens: "Retention",
    source: "Churn",
    question: "Why are customers leaving?",
    content: "Cancellations and declared reasons",
    color: "bg-primary",
  },
  {
    lens: "Bottlenecks",
    source: "Tickets",
    question: "Where are users getting stuck?",
    content: "Volume and subject of support requests",
    color: "bg-orange-400",
  },
  {
    lens: "Behavior",
    source: "Clarity",
    question: "What do users actually do?",
    content: "Sessions, clicks and navigation flows",
    color: "bg-pink-500",
  },
  {
    lens: "Internal view",
    source: "Product management",
    question: "What does leadership believe are the biggest offenders?",
    content: "Operational and systemic bottlenecks",
    color: "bg-secondary",
  },
];

const methodStages = [
  { stage: "Evidence", description: "Facts extracted from a single source", count: "9" },
  { stage: "Signals", description: "Evidence pointing to the same place", count: "6" },
  { stage: "Patterns", description: "Signals that combine across sources", count: "3" },
  { stage: "Diagnoses", description: "The consolidated reading of the problem", count: "3" },
  { stage: "Hypotheses", description: "Testable bets with an expected result", count: "4" },
  { stage: "Theses", description: "Strategic positions about the product", count: "3" },
];

const churnReasons = [
  { value: "52", label: "Dissatisfaction with implementation", share: "29%", width: "100%", color: "bg-pink-500" },
  { value: "33", label: "Problems with the product", share: "18%", width: "63%", color: "bg-primary" },
  { value: "21", label: "Financial difficulty", share: "12%", width: "40%", color: "bg-sky-400" },
  { value: "18", label: "Dissatisfaction with support", share: "10%", width: "35%", color: "bg-orange-400" },
];

const npsWords = [
  { word: "Support", count: "18×", strong: true },
  { word: "Chat", count: "9×", strong: true },
  { word: "Service", count: "9×", strong: true },
  { word: "Complicated", count: "6×", strong: false },
  { word: "Delay", count: "5×", strong: false },
  { word: "Slowness", count: "4×", strong: false },
];

const behaviorStats = [
  { value: "91%", label: "of sessions are returning users: operational use, not exploratory" },
  { value: "12.4 min", label: "average time per session" },
  { value: "96%", label: "access through Chrome or Edge" },
  { value: "28.9%", label: "of sessions have dead clicks on elements that look like buttons but don't work" },
  { value: "38.8%", label: "of sessions have right-clicks: users trying to copy data or open a new tab" },
];

const managementBottlenecks = {
  operational: [
    {
      title: "Overloaded support",
      description: "Demand concentrated in a few people who know the business rules",
    },
    {
      title: "Difficult onboarding and implementation",
      description: "Initial configuration requires intensive hands-on support",
    },
    {
      title: "Knowledge concentrated in four people",
      description: "A human bottleneck in the support team",
    },
  ],
  systemic: [
    {
      title: "A product that doesn't explain itself",
      description: "The interface doesn't guide the user, so every action becomes a support request",
    },
    {
      title: "Too many steps in each task",
      description: "Long flows without a defined journey",
    },
    {
      title: "Technology and platform",
      description: "A perceived UX regression and loss of automations after the platform migration",
    },
  ],
};

const signals: { id: string; priority: Priority; title: string; description: string }[] = [
  {
    id: "S01",
    priority: "High",
    title: "High drop-off during implementation",
    description: "52 of 179 cancellations happen before the customer reaches full use",
  },
  {
    id: "S02",
    priority: "High",
    title: "Overloaded and hard-to-reach support",
    description: "7,082 lost conversations and NPS dominated by complaints about delays and queues",
  },
  {
    id: "S03",
    priority: "High",
    title: "Structural dependence on human support",
    description: "45.8% of tickets are everyday configuration questions",
  },
  {
    id: "S04",
    priority: "Medium",
    title: "Perceived regression after migration",
    description: "Long-time users report a more complex product and worse support after the transition",
  },
  {
    id: "S05",
    priority: "Medium",
    title: "Dependence on a single feature",
    description: "Users who don't reach time-punch calculation rarely perceive value in the product",
  },
  {
    id: "S06",
    priority: "Medium",
    title: "Confusing layout and no defined journey",
    description: "Dead clicks, constant right-clicks and long flows without finding information",
  },
];

const patterns = [
  {
    id: "P01",
    title: "Unmanaged complexity drives customers away before they reach value",
    description:
      "Complex implementation, a product that doesn't explain itself and the lack of a defined journey converge: customers can't reach value without intensive help. Signals S01 + S03 + S06.",
  },
  {
    id: "P02",
    title: "The support channel amplifies every product flaw",
    description:
      "With support hard to reach, any friction that used to be solved quickly now turns into churn or NPS detraction. Signals S02 + S04.",
  },
  {
    id: "P03",
    title: "The product retains those who activate, but fails to activate",
    description:
      "91% of returning sessions show real value. But dependence on a single feature and a high entry barrier create a funnel with a bottleneck at activation. Signals S01 + S05.",
  },
];

const diagnoses = [
  {
    id: "D01",
    title: "Churn is concentrated in adoption, not retention",
    description:
      "52 cancellations due to implementation and 91% returning sessions among those who activated. The product works for those who get to use it. The problem is getting customers there.",
  },
  {
    id: "D02",
    title: "Support has become the main driver of detraction",
    description:
      "\"Support\" is the most frequent word in the NPS, 21.6% of tickets go unanswered, and the perceived decline after the migration is tied to the service channel, not the product.",
  },
  {
    id: "D03",
    title: "The UX was designed for specialists, not for HR operators",
    description:
      "45.8% of tickets are usage questions, the layout generates dead clicks, and operational knowledge is concentrated in four people.",
  },
];

const hypotheses: { id: string; priority: Priority; title: string; description: string }[] = [
  {
    id: "H01",
    priority: "High",
    title: "Reducing implementation friction retains the largest share of avoidable churn",
    description:
      "Simplify the initial configuration with contextual guidance and a test environment before production. Expected: fewer of the 52 implementation-related cancellations.",
  },
  {
    id: "H02",
    priority: "High",
    title: "Self-service reduces tickets and improves NPS without increasing headcount",
    description:
      "A more self-explanatory UX, a knowledge base inside the flow and guided onboarding. Expected: fewer of the 14,989 configuration tickets.",
  },
  {
    id: "H03",
    priority: "High",
    title: "Fixing the support channel bottleneck stops detraction",
    description:
      "Investigate the root cause of the 7,082 lost conversations and rebalance channels. Expected: fewer detractors and fewer of the 18 support-related cancellations.",
  },
  {
    id: "H04",
    priority: "Medium",
    title: "Customers who don't activate time-punch calculation churn significantly more",
    description:
      "Cross-reference churn data with feature usage. Expected: an actionable predictive signal for Customer Success and onboarding.",
  },
];

const theses = [
  {
    id: "T01",
    title: "If the adoption barrier is the right diagnosis, churn can drop by up to 29% without changing the core product",
    description:
      "52 of 179 cancellations have implementation as their declared cause. Improving onboarding targets the biggest source of loss with operational changes.",
    accent: "border-pink-500 text-pink-500",
  },
  {
    id: "T02",
    title: "Without working support, tolerable product flaws become unbearable",
    description:
      "In operational B2B software, support isn't a differentiator: it's a minimum requirement. Fixing it is a prerequisite for product initiatives to have any impact on NPS.",
    accent: "border-pink-500 text-pink-500",
  },
  {
    id: "T03",
    title: "Operational complexity is systemic: a specialist's product in a generalist's market",
    description:
      "If the target market includes companies without that profile, the complexity gap will keep generating support requests and churn structurally.",
    accent: "border-orange-400 text-orange-400",
  },
];

const priorityStyles: Record<Priority, string> = {
  High: "bg-pink-500 text-white",
  Medium: "bg-orange-400 text-secondary",
  Low: "bg-secondary/10 text-secondary",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function PriorityBadge({
  priority,
  children,
}: {
  priority: Priority;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`rounded-md px-2.5 py-1 text-xs font-black uppercase tracking-wider ${priorityStyles[priority]}`}
    >
      {children}
    </span>
  );
}

export default function DataAnalysisCase() {
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
            B2B · UX Strategy · HR Technology
          </p>
          <p className="mb-5 text-sm font-semibold text-secondary/60">
            TOTVS · 2026
          </p>
          <h1 className="text-4xl font-black leading-tight text-secondary md:text-6xl">
            From Raw Data to Product Hypotheses
          </h1>
        </div>
        <div className="rounded-[32px] bg-secondary p-7 md:p-10">
          <img
            src="/images/dataanalisys.webp"
            alt=""
            width={1000}
            height={810}
            decoding="async"
            fetchPriority="high"
            className="mx-auto max-h-[500px] w-full object-contain"
          />
        </div>
      </header>

      <section className="py-10 md:py-14">
        <SectionLabel>My Role</SectionLabel>
        <p className="mt-5 text-lg leading-relaxed text-secondary/75">
          Throughout the project I was responsible for:
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
            This project was developed for a B2B SaaS platform that companies
            use to manage employee time tracking.
          </p>
          <p>
            The product already generated a lot of data: NPS surveys,
            cancellation records, support tickets and usage sessions. But each
            source lived with a different team, and nobody was reading them
            together.
          </p>
          <p>
            Instead of waiting for demands to arrive from stakeholders, I
            proposed an exploration of the existing data so that design could
            generate its own demands, grounded in what users were actually
            experiencing.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <h2 className="text-3xl font-black text-secondary md:text-5xl">
          What motivated the investigation
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {motivations.map((item, index) => (
            <article
              key={item}
              className={`rounded-3xl p-7 ${
                index === 1
                  ? "bg-secondary text-white"
                  : "bg-primary text-white"
              }`}
            >
              <span className="text-sm font-black opacity-60">
                0{index + 1}
              </span>
              <p className="mt-4 text-xl font-bold leading-snug">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-secondary p-8 text-white md:p-14">
        <SectionLabel>The Challenge</SectionLabel>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/50">
          Guiding question
        </p>
        <p className="mt-4 max-w-4xl text-2xl font-black leading-snug md:text-4xl">
          Which product problems are impacting the user experience and deserve
          investigation?
        </p>
        <p className="mt-9 max-w-4xl text-lg leading-relaxed text-white/75">
          The challenge wasn&apos;t a lack of data. It was turning scattered,
          contradictory numbers into a clear and defensible reading of the
          product, one that Product leadership could act on.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Discovery</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Five data sources, five questions
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Each data source entered the process to answer a question of its
          own. Together, they covered what users say, what they do, why they
          leave, where they get stuck and what the company believes.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dataSources.map((item) => (
            <article
              key={item.source}
              className="flex flex-col rounded-3xl border border-secondary/10 bg-white p-6"
            >
              <span className={`h-1.5 w-12 rounded-full ${item.color}`} />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-secondary/50">
                {item.lens}
              </p>
              <h3 className="mt-2 text-xl font-black text-secondary">
                {item.source}
              </h3>
              <p className="mt-3 font-semibold leading-relaxed text-secondary/80">
                {item.question}
              </p>
              <p className="mt-auto pt-6 text-sm leading-relaxed text-secondary/60">
                {item.content}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-secondary/75">
          The Product management view was collected before cross-referencing
          the data, so it could work as a counterpoint instead of a bias.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Method</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          From raw data to thesis
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          To avoid jumping from a single number to a conclusion, I structured
          the analysis in six stages. Each stage reduced volume and increased
          confidence.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {methodStages.map((item, index) => (
            <article
              key={item.stage}
              className={`flex flex-col rounded-3xl p-7 ${
                index >= 4
                  ? "bg-secondary text-white"
                  : "bg-[#ECE8FF] text-secondary"
              }`}
            >
              <span className="text-sm font-black text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-xl font-black">{item.stage}</h3>
              <p className="mt-2 leading-relaxed opacity-75">
                {item.description}
              </p>
              <p className="mt-6 text-5xl font-black">{item.count}</p>
            </article>
          ))}
        </div>
        <figure className="mt-8 overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
          <img
            src="/images/dataanalysis-investigation-board.jpg"
            alt=""
            width={1400}
            height={532}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-contain"
          />
          <figcaption className="px-2 pt-4 text-sm text-secondary/60">
            The initial investigation board: five reading columns, one per
            data source, and one synthesis column.
          </figcaption>
        </figure>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Evidence</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          What each source showed
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Data from January to May 2026.
        </p>

        <div className="mt-10 rounded-[32px] border border-secondary/10 bg-white p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Retention
          </p>
          <h3 className="mt-2 text-2xl font-black text-secondary">
            The size of churn
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-5xl font-black text-secondary">179</p>
              <p className="mt-2 text-secondary/60">cancellations in the period</p>
            </div>
            <div>
              <p className="text-5xl font-black text-primary">29.8</p>
              <p className="mt-2 text-secondary/60">cancellations per month on average</p>
            </div>
          </div>
          <p className="mt-8 rounded-2xl bg-secondary/5 p-5 font-semibold text-secondary">
            Churn was split similarly between the two business segments, so
            the reason didn&apos;t seem to be the customer profile.
          </p>
          <p className="mt-10 font-bold text-secondary">
            Four reasons account for most cancellations
          </p>
          <div className="mt-5 space-y-4">
            {churnReasons.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="w-10 shrink-0 text-2xl font-black text-secondary">
                  {item.value}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-secondary">
                    {item.label}
                  </p>
                  <div className="mt-2 h-3 rounded-full bg-secondary/5">
                    <div
                      className={`h-3 rounded-full ${item.color}`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
                <span className="w-12 shrink-0 self-end text-right text-sm text-secondary/60">
                  {item.share}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-secondary/60">
            Together, implementation, product and support account for 103 of
            the 179 cancellations.
          </p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="rounded-[32px] border border-secondary/10 bg-white p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Satisfaction
            </p>
            <h3 className="mt-2 text-2xl font-black text-secondary">
              The score is good. The comments are not.
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-5xl font-black text-secondary">56</p>
                <p className="mt-2 text-secondary/60">product NPS</p>
              </div>
              <div>
                <p className="text-5xl font-black text-secondary">72.8%</p>
                <p className="mt-2 text-secondary/60">promoters</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-secondary p-6 text-white">
              <p className="text-4xl font-black text-pink-400">61.5%</p>
              <p className="mt-2 text-white/80">
                of comments have a predominantly critical or negative tone
              </p>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-secondary/50">
              Most repeated words in comments
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {npsWords.map((item) => (
                <span
                  key={item.word}
                  className={`flex gap-1.5 rounded-lg px-3 py-2 text-sm font-bold ${
                    item.strong
                      ? "bg-secondary text-white"
                      : "bg-secondary/5 text-secondary"
                  }`}
                >
                  <span>{item.word}</span>
                  <span className="opacity-60">{item.count}</span>
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[32px] border border-secondary/10 bg-white p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Bottlenecks
            </p>
            <h3 className="mt-2 text-2xl font-black text-secondary">
              Where support tickets pile up
            </h3>
            <p className="mt-2 text-secondary/60">
              32,751 support requests analyzed in the period
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-orange-400 p-6 text-white">
                <p className="text-4xl font-black">45.8%</p>
                <p className="mt-2 font-semibold">
                  are configuration and setup questions
                </p>
                <p className="mt-2 text-sm text-white/85">
                  The product needs human support to be configured.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary p-6 text-white">
                <p className="text-4xl font-black text-sky-400">21.6%</p>
                <p className="mt-2 font-semibold">
                  are lost or abandoned conversations
                </p>
              </div>
              <div className="rounded-2xl bg-secondary/5 p-6 text-secondary">
                <p className="text-4xl font-black">4,500</p>
                <p className="mt-2 font-semibold">
                  chat tickets have no category
                </p>
                <p className="mt-2 text-sm text-secondary/60">
                  A signal source the analysis couldn&apos;t capture yet.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-5 rounded-[32px] border border-secondary/10 bg-white p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Behavior
          </p>
          <h3 className="mt-2 text-2xl font-black text-secondary">
            Real usage sessions, without opinions in between
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {behaviorStats.map((item) => (
              <div key={item.value} className="border-t-4 border-pink-500 pt-4">
                <p className="text-4xl font-black text-secondary">
                  {item.value}
                </p>
                <p className="mt-2 leading-relaxed text-secondary/60">
                  {item.label}
                </p>
              </div>
            ))}
            <div className="border-t-4 border-sky-400 pt-4">
              <p className="text-2xl font-black leading-tight text-secondary">
                Home → Time-punch calculation
              </p>
              <p className="mt-2 leading-relaxed text-secondary/60">
                The main flow. The Home page adds no value: users go straight
                past it.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[32px] bg-[#ECE8FF] p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Internal view
          </p>
          <h3 className="mt-2 text-2xl font-black text-secondary">
            The bottlenecks according to Product management
          </h3>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-black text-primary">Operational bottlenecks</p>
              <div className="mt-4 space-y-3">
                {managementBottlenecks.operational.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/70 p-5">
                    <p className="font-bold text-secondary">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-secondary/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-black text-pink-500">Systemic bottlenecks</p>
              <div className="mt-4 space-y-3">
                {managementBottlenecks.systemic.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/70 p-5">
                    <p className="font-bold text-secondary">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-secondary/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Signals</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Six signals detected
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          A signal appeared when evidence from different sources pointed to
          the same place.
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {signals.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-secondary/10 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-secondary/50">
                  {item.id}
                </span>
                <PriorityBadge priority={item.priority}>
                  {item.priority}
                </PriorityBadge>
              </div>
              <h3 className="mt-4 text-lg font-black leading-snug text-secondary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Patterns</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Three convergence patterns
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Combinations of signals that held up across independent sources.
        </p>
        <div className="mt-9 space-y-4">
          {patterns.map((item) => (
            <article
              key={item.id}
              className="grid gap-3 rounded-3xl bg-[#ECE8FF] p-7 md:grid-cols-[80px_1fr] md:p-9"
            >
              <span className="text-2xl font-black text-primary">
                {item.id}
              </span>
              <div>
                <h3 className="text-xl font-black text-secondary md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-secondary/70">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-secondary p-8 text-white md:p-14">
        <SectionLabel>Diagnoses</SectionLabel>
        <h2 className="mt-5 text-3xl font-black md:text-5xl">
          The consolidated reading of the problem
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/75">
          Before proposing any solution, the patterns were translated into
          three diagnoses.
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {diagnoses.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <span className="text-sm font-black tracking-widest text-sky-400">
                {item.id}
              </span>
              <h3 className="mt-3 text-xl font-black leading-snug">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Hypotheses</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Four hypotheses to explore
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Each one with a direction for investigation and an expected result.
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {hypotheses.map((item) => (
            <article
              key={item.id}
              className={`rounded-3xl border-l-4 bg-white p-7 shadow-sm ${
                item.priority === "High"
                  ? "border-pink-500"
                  : "border-orange-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-secondary/50">
                  {item.id}
                </span>
                <PriorityBadge priority={item.priority}>
                  {item.priority}
                </PriorityBadge>
              </div>
              <h3 className="mt-4 text-xl font-black leading-snug text-secondary">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-secondary/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Strategic Theses</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Positions that guide prioritization
        </h2>
        <div className="mt-9 space-y-4">
          {theses.map((item) => (
            <article
              key={item.id}
              className={`grid gap-3 rounded-3xl border-l-4 bg-white p-7 shadow-sm md:grid-cols-[80px_1fr] md:p-9 ${item.accent}`}
            >
              <span className="text-2xl font-black">{item.id}</span>
              <div>
                <h3 className="text-xl font-black text-secondary md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-secondary/65">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <figure className="mt-8 overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
          <img
            src="/images/dataanalysis-synthesis-board.jpg"
            alt=""
            width={1400}
            height={649}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-contain"
          />
          <figcaption className="px-2 pt-4 text-sm text-secondary/60">
            The synthesis board: every hypothesis carries the trail of
            evidence that originated it.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-[32px] bg-primary p-8 text-white md:p-14">
        <h2 className="text-3xl font-black md:text-5xl">Outcome</h2>
        <div className="mt-6 max-w-4xl space-y-5 text-lg leading-relaxed text-white/90">
          <p>
            This project showed that design can do more than respond to
            requests: it can help set the product agenda. By reading five
            scattered data sources together, we turned a pile of numbers into
            three diagnoses, four testable hypotheses and a prioritized
            discovery roadmap.
          </p>
          <p>
            One of the strongest findings was that the biggest driver of churn
            wasn&apos;t the product itself, but the path to reach it. That
            shifted the conversation from adding features to reducing
            friction in implementation, support and the first steps of use.
          </p>
        </div>
      </section>

      <footer className="flex justify-end pt-12">
        <Link
          to="/cases/hrtechnology"
          className="text-lg font-bold text-secondary underline underline-offset-4"
        >
          Next Case →
        </Link>
      </footer>
    </main>,
    locale,
    dataAnalysisCasePt,
  );
}
