import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { LanguageSelector } from "~/components/LanguageSelector";
import { logisticsCasePt } from "~/i18n/caseTranslations";
import { useI18n } from "~/i18n/I18nProvider";
import { localizeContent } from "~/i18n/LocalizeContent";

export const meta: MetaFunction = () => [
  { title: "Agilex Flex | Eduarda de Souza" },
  {
    name: "description",
    content:
      "Helping independent drivers and businesses connect through a frictionless last-mile logistics platform.",
  },
];

const roleResponsibilities = [
  "Facilitating Product Discovery workshops",
  "Leading Lean Inception sessions",
  "Conducting qualitative and quantitative research",
  "Synthesizing research findings",
  "Creating user journeys",
  "Designing navigation flows",
  "Collaborating on interface design",
  "Supporting stakeholders throughout the project",
];

const questions = [
  "Why do drivers abandon logistics platforms?",
  "What motivates them to join a new platform?",
  "What makes them trust a company?",
  "Which moments generate the most friction?",
];

const alignmentTopics = [
  "Product Vision",
  "User Segments",
  "Assumptions",
  "Business Goals",
  "Risks",
];

const insights = [
  {
    icon: "⏱",
    title: "Time",
    body: "Drivers experienced long waiting times during registration, customer support and delivery confirmation.",
  },
  {
    icon: "🤝",
    title: "Belonging",
    body: "Drivers wanted stronger relationships with logistics companies, recognition and respectful communication.",
  },
  {
    icon: "🔒",
    title: "Trust & Security",
    body: "Lack of payment transparency and unclear platform rules reduced confidence in logistics platforms.",
  },
];

const principles = [
  "Reduce onboarding friction",
  "Increase transparency",
  "Give drivers more autonomy",
  "Simplify task management",
];

const platformFeatures = [
  "Complete registration faster",
  "Manage their profile independently",
  "Browse available deliveries",
  "Choose which jobs to accept",
  "Track opportunities in one place",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

export default function LogisticsCase() {
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
            WEB · Mobile · B2C
          </p>
          <p className="mb-5 text-sm font-semibold text-secondary/60">
            Ideativo Design · 2023
          </p>
          <h1 className="text-5xl font-black leading-tight text-secondary md:text-7xl">
            Agilex Flex
          </h1>
          <p className="mt-6 max-w-[700px] text-lg leading-relaxed text-secondary/80 md:text-xl">
            Helping independent drivers and businesses connect through a
            frictionless last-mile logistics platform.
          </p>
        </div>
        <div className="rounded-[32px] bg-secondary p-7 md:p-10">
          <img
            src="/images/logistica.png"
            alt=""
            width={266}
            height={218}
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
        <SectionLabel>The Opportunity</SectionLabel>
        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-relaxed text-secondary/75">
          <p>
            Independent delivery drivers often rely on multiple logistics
            platforms to find work. However, complicated onboarding processes,
            poor communication, and a lack of trust frequently lead to
            abandonment before drivers even complete registration.
          </p>
          <p>
            My challenge was to design a platform that would reduce onboarding
            friction while creating a better experience for both businesses and
            independent drivers.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] bg-secondary p-8 text-white md:p-14">
        <SectionLabel>Understanding the Problem</SectionLabel>
        <p className="mt-6 max-w-4xl text-xl font-semibold leading-relaxed md:text-3xl">
          Before designing any solution, I needed to understand:
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {questions.map((question, index) => (
            <article
              key={question}
              className="rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <span className="text-sm font-black text-primary">
                0{index + 1}
              </span>
              <p className="mt-3 leading-relaxed text-white/90">{question}</p>
            </article>
          ))}
        </div>
        <p className="mt-9 max-w-4xl text-lg leading-relaxed text-white/75">
          To answer these questions, I led a discovery process combining
          collaborative workshops with quantitative and qualitative research.
        </p>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-[.85fr_1.15fr] md:items-center md:py-14">
        <div>
          <SectionLabel>Discovery</SectionLabel>
          <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
            Aligning the business
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-secondary/75">
            I facilitated Lean Inception workshops to help stakeholders define:
          </p>
          <ul className="mt-6 space-y-3">
            {alignmentTopics.map((item) => (
              <li key={item} className="flex gap-3 text-secondary/80">
                <span className="font-black text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-lg leading-relaxed text-secondary/75">
            These workshops aligned the team around a shared understanding
            before moving into research.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px] bg-[#ECE8FF] p-4 md:p-6">
          <img
            src="/images/agilex-lean-inception.webp"
            alt=""
            width={1400}
            height={841}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Research</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Quantitative Research
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-[.8fr_.6fr_.6fr]">
          <article className="rounded-3xl border border-secondary/10 bg-white p-7">
            <h3 className="text-xl font-black text-secondary">Goal</h3>
            <p className="mt-4 leading-relaxed text-secondary/70">
              Validate assumptions and recruit participants for interviews.
            </p>
          </article>
          <article className="rounded-3xl bg-primary p-7 text-white">
            <p className="text-5xl font-black">206</p>
            <p className="mt-3 font-semibold">Survey responses</p>
          </article>
          <article className="rounded-3xl bg-secondary p-7 text-white">
            <p className="text-5xl font-black">131</p>
            <p className="mt-3 font-semibold">Interview volunteers</p>
          </article>
        </div>
        <div className="mt-8 overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
          <img
            src="/images/agilex-quantitative-research.webp"
            alt=""
            width={1400}
            height={822}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-contain"
          />
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Those responses helped me understand demographics, work routines,
          technology usage, and delivery habits.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <h2 className="text-3xl font-black text-secondary md:text-5xl">
          Qualitative Research
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            { value: "18", label: "remote interviews" },
            { value: "40", label: "minutes each" },
            { label: "Semi-structured interviews" },
            { label: "Google Meet" },
          ].map((item, index) => (
            <article
              key={item.label}
              className={`rounded-3xl p-7 ${
                index === 1
                  ? "bg-primary text-white"
                  : index === 2
                    ? "bg-secondary text-white"
                    : "border border-secondary/10 bg-white text-secondary"
              }`}
            >
              {item.value ? (
                <>
                  <p className="text-5xl font-black">{item.value}</p>
                  <p className="mt-3 font-semibold leading-relaxed">
                    {item.label}
                  </p>
                </>
              ) : (
                <p className="font-semibold leading-relaxed">{item.label}</p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg leading-relaxed text-secondary/75">
          The interviews uncovered recurring patterns across three themes.
        </p>

        <h3 className="mt-14 text-2xl font-black text-secondary md:text-3xl">
          Key Insights
        </h3>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="rounded-3xl border border-secondary/10 bg-white p-7"
            >
              <span className="text-3xl">{insight.icon}</span>
              <h4 className="mt-5 text-xl font-black text-secondary">
                {insight.title}
              </h4>
              <p className="mt-3 leading-relaxed text-secondary/70">
                {insight.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-2 md:items-center md:py-14">
        <div>
          <SectionLabel>Design Principles</SectionLabel>
          <p className="mt-6 text-xl font-semibold leading-relaxed text-secondary md:text-3xl">
            Based on the research findings, I established four principles to
            guide the design decisions.
          </p>
        </div>
        <div className="space-y-4">
          {principles.map((principle) => (
            <div
              key={principle}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-black text-white">
                ✓
              </span>
              <span className="font-bold text-secondary">{principle}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-[.85fr_1.15fr] md:items-center md:py-14">
        <div>
          <SectionLabel>Solution</SectionLabel>
          <p className="mt-6 text-lg leading-relaxed text-secondary/75">
            The solution focused on simplifying the driver's experience from
            the very first interaction.
          </p>
          <p className="mt-6 text-lg font-semibold text-secondary">
            The platform allows drivers to:
          </p>
          <ul className="mt-5 space-y-3">
            {platformFeatures.map((item) => (
              <li key={item} className="flex gap-3 text-secondary/80">
                <span className="font-black text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div className="overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
            <img
              src="/images/agilex-navigation-flow-registration.webp"
              alt=""
              width={1400}
              height={811}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-contain"
            />
            <p className="px-2 pb-1 pt-3 text-xs font-medium text-secondary/50">
              Driver registration flow
            </p>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
            <img
              src="/images/agilex-navigation-flow-offers.webp"
              alt=""
              width={1400}
              height={859}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-contain"
            />
            <p className="px-2 pb-1 pt-3 text-xs font-medium text-secondary/50">
              Driver offer management flow
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-2xl font-black text-secondary md:text-3xl">
            Prototypes
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                src: "/videos/agilex-management.mov",
                label: "Mobile registration",
              },
              {
                src: "/videos/agilex-management-2.mov",
                label: "Offer management",
              },
            ].map(({ src, label }) => (
              <figure
                key={src}
                className="overflow-hidden rounded-3xl border border-secondary/10 bg-white p-3"
              >
                <video
                  controls
                  muted
                  playsInline
                  preload="none"
                  className="mx-auto aspect-[9/16] max-h-[620px] w-auto max-w-full rounded-2xl bg-secondary object-contain"
                >
                  <source src={src} />
                </video>
                <figcaption className="px-2 pb-1 pt-3 text-xs font-medium text-secondary/50">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
          <figure className="mt-5 overflow-hidden rounded-3xl border border-secondary/10 bg-white p-3">
            <video
              controls
              muted
              playsInline
              preload="none"
              className="aspect-video w-full rounded-2xl bg-secondary object-contain"
            >
              <source src="/videos/agilex-web.mov" />
            </video>
            <figcaption className="px-2 pb-1 pt-3 text-xs font-medium text-secondary/50">
              Web registration
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="rounded-[32px] bg-primary p-8 text-white md:p-14">
        <h2 className="text-3xl font-black md:text-5xl">What I Learned</h2>
        <div className="mt-6 max-w-4xl space-y-5 text-lg leading-relaxed text-white/90">
          <p>
            This project reinforced the importance of validating assumptions
            before designing solutions.
          </p>
          <p>
            Although stakeholders had clear expectations about the product, user
            research revealed motivations that went far beyond financial
            incentives. Trust, transparency, and belonging became essential
            design drivers and significantly influenced the final solution.
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
    logisticsCasePt,
  );
}
