import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { LanguageSelector } from "~/components/LanguageSelector";
import { hrTechnologyCasePt } from "~/i18n/caseTranslations";
import { useI18n } from "~/i18n/I18nProvider";
import { localizeContent } from "~/i18n/LocalizeContent";

export const meta: MetaFunction = () => [
  {
    title:
      "Reducing Enterprise Customer Onboarding from Weeks to Minutes | Eduarda de Souza",
  },
  {
    name: "description",
    content:
      "A B2B SaaS case study about automating a critical enterprise customer implementation workflow.",
  },
];

const roleResponsibilities = [
  "Leading discovery activities",
  "Conducting qualitative research with implementation specialists",
  "Mapping business requirements",
  "Facilitating discussions with Product and Engineering",
  "Designing navigation flows",
  "Creating the final user experience",
];

const duplicatedWorkProblems = [
  "Long onboarding times",
  "Manual data transfer",
  "High risk of configuration errors",
  "Increased implementation costs",
  "Slower Time to Value (TTV)",
];

const discoveryQuestions = [
  "Why are we solving this problem?",
  "Who are we designing for?",
  "What needs to be accomplished?",
  "Which data do we already have?",
  "How can we summarize the problem?",
];

const mappedConfigurations = [
  "Access profiles",
  "Labor union rules",
  "Cost centers",
  "Work schedules",
  "Overtime rules",
  "Employee data",
  "Accounting codes",
  "Custom fields",
  "Company configurations",
];

const solutionSteps = [
  "Select which configuration groups should be transferred",
  "Review the selected items",
  "Execute the transfer automatically",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

export default function OnboardingCase() {
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
            B2B · SaaS · HR Technology
          </p>
          <p className="mb-5 text-sm font-semibold text-secondary/60">
            TOTVS · 2026
          </p>
          <h1 className="text-4xl font-black leading-tight text-secondary md:text-6xl">
            Reducing Enterprise Customer Onboarding from Weeks to Minutes
          </h1>
        </div>
        <div className="rounded-[32px] bg-secondary p-7 md:p-10">
          <img
            src="/images/reducing.webp"
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
            This project was developed for an enterprise HR platform used to
            manage employee time tracking and payroll rules.
          </p>
          <p>
            One of the biggest bottlenecks affecting the product&apos;s revenue
            wasn&apos;t inside the software itself—it was the implementation
            process.
          </p>
          <p>
            Enterprise customers required a highly customized environment
            before going live, and implementation specialists were spending one
            to two weeks manually configuring customer environments before
            clients could start using the product.
          </p>
          <p>
            Our goal was to dramatically reduce implementation time while
            minimizing manual work and human error.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] bg-secondary p-8 text-white md:p-14">
        <SectionLabel>The Challenge</SectionLabel>
        <p className="mt-6 max-w-4xl text-xl font-semibold leading-relaxed md:text-3xl">
          The implementation process relied on two different environments:
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <span className="text-sm font-black text-primary">01</span>
            <p className="mt-3 leading-relaxed text-white/90">
              A staging environment, where implementation specialists
              configured all customer-specific business rules.
            </p>
          </article>
          <article className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <span className="text-sm font-black text-primary">02</span>
            <p className="mt-3 leading-relaxed text-white/90">
              A production environment, where those same configurations had to
              be recreated manually.
            </p>
          </article>
        </div>
        <p className="mt-9 max-w-4xl text-lg leading-relaxed text-white/75">
          The challenge was to design a solution capable of automating this
          transition while respecting the platform&apos;s complex business
          rules.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <h2 className="text-3xl font-black text-secondary md:text-5xl">
          Duplicated work created several problems
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {duplicatedWorkProblems.map((item, index) => (
            <article
              key={item}
              className={`rounded-3xl p-7 ${
                index === 1
                  ? "bg-primary text-white"
                  : index === 3
                    ? "bg-secondary text-white"
                    : "border border-secondary/10 bg-white text-secondary"
              }`}
            >
              <span className="text-sm font-black opacity-60">
                0{index + 1}
              </span>
              <p className="mt-4 font-semibold leading-relaxed">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-[.85fr_1.15fr] md:items-center md:py-14">
        <div>
          <SectionLabel>Discovery</SectionLabel>
          <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
            Understanding the existing workflow
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-secondary/75">
            <p>
              I started by working closely with the Product Owner and senior
              implementation specialists to fully understand the existing
              workflow.
            </p>
            <p>
              To structure the investigation, I used two internal discovery
              frameworks that I developed over the years, together with a CSD
              Matrix (Certainties, Assumptions and Doubts).
            </p>
          </div>
        </div>
        <div className="rounded-[32px] bg-[#ECE8FF] p-6 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            The first framework helped answer
          </p>
          <div className="mt-6 space-y-3">
            {discoveryQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-4 rounded-2xl bg-white/70 p-4 text-secondary"
              >
                <span className="font-black text-primary">
                  0{index + 1}
                </span>
                <span className="font-semibold">{question}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg leading-relaxed text-secondary/75 md:col-span-2">
          This process allowed the team to clearly define the business objective
          before exploring solutions.
        </p>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Initial Findings</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Implementation had become a major bottleneck
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-primary p-7 text-white md:p-10">
            <p className="text-5xl font-black">1–2</p>
            <p className="mt-3 font-semibold">weeks configuring each enterprise customer</p>
          </article>
          <article className="rounded-3xl bg-secondary p-7 text-white md:p-10">
            <p className="text-3xl font-black">Time to Value</p>
            <p className="mt-3 leading-relaxed text-white/80">
              Implementation was delaying customer onboarding and increasing
              operational costs.
            </p>
          </article>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>Organizing Assumptions</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          CSD Matrix
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Using the CSD Matrix, I organized everything the team already knew,
          what we believed could be true, and which questions still needed
          validation.
        </p>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-secondary/10 bg-white p-7">
            <h3 className="text-xl font-black text-secondary">We knew</h3>
            <ul className="mt-5 space-y-4 text-secondary/75">
              <li>Parameters had to be manually recreated in production.</li>
              <li>Manual configuration generated frequent customer complaints.</li>
              <li>
                The implementation team spent significant time repeating the
                same work.
              </li>
            </ul>
          </article>
          <article className="rounded-3xl bg-primary p-7 text-white">
            <h3 className="text-xl font-black">We assumed</h3>
            <p className="mt-5 leading-relaxed text-white/85">
              Most configuration parameters could be transferred automatically
              between environments.
            </p>
          </article>
          <article className="rounded-3xl bg-secondary p-7 text-white">
            <h3 className="text-xl font-black">We needed to validate</h3>
            <ul className="mt-5 space-y-4 text-white/80">
              <li>Which parameters were actually transferred?</li>
              <li>Could they be grouped?</li>
              <li>Did they require transformation?</li>
              <li>How much time was being spent on manual transfers?</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <SectionLabel>User Research</SectionLabel>
        <h2 className="mt-5 text-3xl font-black text-secondary md:text-5xl">
          Understanding internal workflows
        </h2>
        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-relaxed text-secondary/75">
          <p>
            To answer these questions, I conducted qualitative research with
            implementation specialists.
          </p>
          <p>
            The goal wasn&apos;t to understand end users—it was to deeply
            understand the workflow of the internal teams responsible for
            customer onboarding.
          </p>
          <p>
            This research allowed me to map every configuration currently
            transferred between environments, including:
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {mappedConfigurations.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-secondary/10 bg-white px-5 py-4 font-semibold text-secondary"
            >
              <span className="mr-3 text-primary">✓</span>
              {item}
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-secondary/75">
          Rather than treating every parameter equally, I also classified them
          according to implementation complexity.
        </p>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-secondary/75">
          This prioritization became the roadmap for incremental delivery,
          allowing Engineering to automate the highest-impact configurations
          first.
        </p>
        <div className="mt-8 overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
          <img
            src="/images/onboarding-research.webp"
            alt=""
            width={1800}
            height={1059}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-2 md:items-center md:py-14">
        <div>
          <SectionLabel>From Research to Requirements</SectionLabel>
          <p className="mt-6 text-xl font-semibold leading-relaxed text-secondary md:text-3xl">
            Once the research was complete, every mapped configuration became a
            functional requirement.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-secondary/75">
            These findings served as the foundation for collaborative ideation
            sessions with Product and Engineering.
          </p>
        </div>
        <div className="space-y-4">
          {[
            "Technical feasibility",
            "Processing costs",
            "User efficiency",
            "Business impact",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-black text-white">
                ✓
              </span>
              <span className="font-bold text-secondary">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-lg leading-relaxed text-secondary/75 md:col-span-2">
          Together, we explored different information architectures until
          arriving at a solution capable of balancing:
        </p>
      </section>

      <section className="grid gap-10 py-10 md:grid-cols-[.85fr_1.15fr] md:items-center md:py-14">
        <div>
          <SectionLabel>Solution</SectionLabel>
          <p className="mt-6 text-lg leading-relaxed text-secondary/75">
            The final solution introduced an automated parameter transfer flow
            between staging and production environments.
          </p>
          <p className="mt-6 text-lg font-semibold text-secondary">
            Instead of manually recreating every configuration, implementation
            specialists could simply:
          </p>
          <ul className="mt-5 space-y-3">
            {solutionSteps.map((item) => (
              <li key={item} className="flex gap-3 text-secondary/80">
                <span className="font-black text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:p-5">
          <img
            src="/images/onboarding-navigation-flow.webp"
            alt=""
            width={1800}
            height={1655}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl object-contain"
          />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-secondary/75 md:col-span-2">
          <p>
            The solution eliminated repetitive copy-and-paste work while
            significantly reducing configuration errors.
          </p>
          <p>
            I designed both the navigation flow and the product interface that
            supported this new workflow.
          </p>
        </div>
        <figure className="overflow-hidden rounded-[32px] border border-secondary/10 bg-white p-3 md:col-span-2">
          <video
            controls
            muted
            playsInline
            preload="none"
            className="aspect-video w-full rounded-2xl bg-secondary object-contain"
          >
            <source src="/videos/onboarding.mp4" type="video/mp4" />
          </video>
        </figure>
        <div className="grid w-full gap-4 md:col-span-2 md:grid-cols-2">
          <article className="rounded-2xl border border-secondary/10 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary/50">
              Before
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-secondary/75">
              {[
                "1–2 weeks to complete customer implementation",
                "Manual configuration",
                "High risk of human error",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="pt-1.5 text-[8px] text-primary">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl bg-secondary p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              After
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {[
                "Configuration completed in minutes",
                "Automated parameter transfer",
                "Significantly fewer manual errors",
                "Faster customer onboarding",
                "Reduced operational effort for the implementation team",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="pt-1.5 text-[8px] text-primary">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="rounded-[32px] bg-primary p-8 text-white md:p-14">
        <h2 className="text-3xl font-black md:text-5xl">Outcome</h2>
        <div className="mt-6 max-w-4xl text-lg leading-relaxed text-white/90">
          <p>
            This project reinforced that great product design isn&apos;t only
            about improving the user experience—it can also transform business
            operations. By reducing implementation time from weeks to minutes,
            we accelerated customer Time to Value, increased the implementation
            team&apos;s operational capacity, reduced operational costs, and
            improved productivity. It also demonstrated the value of combining
            structured discovery, user research, and close collaboration with
            Engineering to simplify highly complex enterprise workflows.
          </p>
        </div>
      </section>

      <footer className="flex justify-end pt-12">
        <Link
          to="/cases/logistics"
          className="text-lg font-bold text-secondary underline underline-offset-4"
        >
          Next Case →
        </Link>
      </footer>
    </main>,
    locale,
    hrTechnologyCasePt,
  );
}
