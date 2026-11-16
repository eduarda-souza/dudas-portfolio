import { Link } from "@remix-run/react";

import { LanguageSelector } from "~/components/LanguageSelector";
import { useI18n } from "~/i18n/I18nProvider";

type CaseCopy = {
  eyebrow: string;
  title: string;
  summary: string;
  year: string;
  company: string;
  tags: string[];
  challengesTitle: string;
  challenges: string[];
  roleTitle: string;
  role: string[];
  contextTitle: string;
  context: string;
  processTitle: string;
  process: Array<{ title: string; body: string }>;
  solutionTitle: string;
  solution: string;
  outcomeTitle: string;
  outcome: string;
  back: string;
  next: string;
};

export function CaseStudyPage({
  copy,
  heroImage,
  detailImage,
  nextHref,
}: {
  copy: { en: CaseCopy; pt: CaseCopy };
  heroImage: string;
  detailImage: string;
  nextHref: string;
}) {
  const { locale } = useI18n();
  const content = copy[locale];

  return (
    <main className="mx-auto max-w-[1200px] px-5 pb-20 md:px-20">
      <nav className="flex items-center justify-between py-8 md:py-10">
        <Link
          to="/"
          className="text-sm font-semibold text-secondary underline underline-offset-4"
        >
          ← {content.back}
        </Link>
        <LanguageSelector />
      </nav>

      <header className="grid gap-10 pb-16 pt-8 md:grid-cols-[1.05fr_.95fr] md:items-center md:pb-24 md:pt-14">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">
            {content.eyebrow}
          </p>
          <h1 className="max-w-[760px] text-4xl font-black leading-tight text-secondary md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-[700px] text-lg leading-relaxed text-secondary/80 md:text-xl">
            {content.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-secondary/15 px-4 py-2 text-xs font-semibold text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-secondary/10 pt-6 text-secondary">
            <div>
              <dt className="text-xs uppercase tracking-wider text-secondary/50">
                Year
              </dt>
              <dd className="mt-1 font-semibold">{content.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-secondary/50">
                Company
              </dt>
              <dd className="mt-1 font-semibold">{content.company}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-[32px] bg-secondary p-7 md:p-10">
          <img
            src={heroImage}
            alt=""
            className="mx-auto max-h-[500px] w-full object-contain"
          />
        </div>
      </header>

      <section className="grid gap-6 py-10 md:grid-cols-2 md:py-16">
        <article className="rounded-3xl bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-2xl font-black text-secondary">
            {content.challengesTitle}
          </h2>
          <ul className="mt-6 space-y-4 text-secondary/80">
            {content.challenges.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="text-primary">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl bg-secondary p-7 text-white md:p-10">
          <h2 className="text-2xl font-black">{content.roleTitle}</h2>
          <ul className="mt-6 space-y-4 text-white/80">
            {content.role.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="text-primary">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="py-14 md:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {content.contextTitle}
        </p>
        <p className="mt-5 max-w-4xl text-2xl font-semibold leading-relaxed text-secondary md:text-4xl">
          {content.context}
        </p>
      </section>

      <section className="py-10 md:py-16">
        <h2 className="text-3xl font-black text-secondary md:text-5xl">
          {content.processTitle}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-secondary/10 bg-white p-7"
            >
              <span className="text-sm font-black text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-secondary">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-secondary/70">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-14 md:grid-cols-[.85fr_1.15fr] md:items-center md:py-24">
        <div>
          <h2 className="text-3xl font-black text-secondary md:text-5xl">
            {content.solutionTitle}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-secondary/75">
            {content.solution}
          </p>
        </div>
        <div className="rounded-[32px] bg-[#ECE8FF] p-7 md:p-10">
          <img
            src={detailImage}
            alt=""
            className="mx-auto max-h-[520px] w-full object-contain"
          />
        </div>
      </section>

      <section className="rounded-[32px] bg-primary p-8 text-white md:p-14">
        <h2 className="text-3xl font-black md:text-5xl">
          {content.outcomeTitle}
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/90">
          {content.outcome}
        </p>
      </section>

      <footer className="flex justify-end pt-12">
        <Link
          to={nextHref}
          className="text-lg font-bold text-secondary underline underline-offset-4"
        >
          {content.next} →
        </Link>
      </footer>
    </main>
  );
}
