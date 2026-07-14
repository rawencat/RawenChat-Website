"use client";

import Navbar from "./Navbar";
import ShowcaseImage from "./ShowcaseImage";
import HeroScreenshot from "./HeroScreenshot";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../i18n/LanguageContext";
import { getLatestRelease } from "../utils/release";
import type { ReleaseInfo } from "../utils/release";
import { useEffect, useState } from "react";
import DownloadModal from "./DownloadModal";

const featureIcons = [
  <svg
    key="chat"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>,
  <svg
    key="cmd"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-1.464a5 5 0 010-7.072M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 000 12.728"
    />
  </svg>,
  <svg
    key="time"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
  <svg
    key="user"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>,
  <svg
    key="mic"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>,
  <svg
    key="obs"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>,
  <svg
    key="code"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>,
];

export default function HomePage() {
  const { t } = useLanguage();
  const [release, setRelease] = useState<ReleaseInfo>({ url: null, size: null });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getLatestRelease().then((info) => {
      setRelease(info);
    });
  }, []);

  const handleDownloadClick = () => {
    if (!release.url) return;
    setShowModal(true);
  };
  return (
    <div className="relative min-h-full overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-50" />
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,154,92,0.22) 0%, transparent 70%)",
        }}
      />

      <Navbar onDownloadClick={handleDownloadClick} />

      <main className="relative">
        <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-8 pt-32 lg:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-component px-3.5 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.hero.badge}
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.titleBefore}{" "}
              <span className="text-gradient">{t.hero.titleAccent}</span>
            </h1>

            <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.description}
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={handleDownloadClick}
                className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent px-7 text-sm font-semibold text-[#0d0d0d] transition hover:bg-accent-hover glow-accent"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {t.hero.ctaDownload}
              </button>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-component px-7 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/5"
              >
                {t.hero.ctaFeatures}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted">
              {t.hero.tags.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-component px-3 py-1.5"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <HeroScreenshot />
        </section>

        <section
          id="features"
          className="scroll-mt-28 mx-auto max-w-6xl px-6 py-24"
        >
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium text-accent">
              {t.features.label}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.features.title}
            </h2>
            <p className="mt-4 text-muted">{t.features.subtitle}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature, i) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-component p-6 transition hover:border-accent/30 hover:bg-[#111]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent/15">
                  {featureIcons[i]}
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="showcase"
          className="scroll-mt-28 mx-auto max-w-6xl px-6 py-24"
        >
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium text-accent">
              {t.showcase.label}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.showcase.title}
            </h2>
            <p className="mt-4 text-muted">{t.showcase.subtitle}</p>
          </div>

          <div className="flex flex-col gap-24">
            {t.showcase.sections.map((section, index) => {
              const reverse = index % 2 === 1;
              return (
                <ScrollReveal key={section.id} delay={index * 40}>
                  <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div className={reverse ? "lg:order-2" : undefined}>
                      <span className="inline-flex rounded-lg bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/20">
                        {section.tag}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted">
                        {section.description}
                      </p>
                      <ul className="mt-6 flex flex-col gap-2.5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-center gap-2.5 text-sm text-foreground/90"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                              <svg
                                className="h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={reverse ? "lg:order-1" : undefined}>
                      <ShowcaseImage src={section.image} alt={section.title} />
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-component p-2 sm:grid-cols-3 sm:p-0 sm:divide-x sm:divide-white/5">
            {t.values.map((item) => (
              <div key={item.title} className="px-6 py-8 text-center sm:py-10">
                <p className="text-sm font-semibold text-accent">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="download"
          className="scroll-mt-28 mx-auto max-w-6xl px-6 py-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-component px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,154,92,0.2) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/30">
                <img src="/logo.png" alt="RawenChat Logo" className="h-9 w-9" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.download.titleBefore}{" "}
                <span className="text-gradient">RawenChat</span>{" "}
                {t.download.titleAfter}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted">
                {t.download.description}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={handleDownloadClick}
                  className="inline-flex h-12 min-w-[200px] cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-accent px-6 text-sm font-semibold text-[#0d0d0d] transition hover:bg-accent-hover glow-accent"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {t.download.ctaWindows}
                </button>
                <a
                  href="#showcase"
                  className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-background px-6 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/5"
                >
                  {t.download.ctaShowcase}
                </a>
              </div>

              <p className="mt-6 text-xs text-muted/60">{t.download.note}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
              <img src="/logo.png" alt="RawenChat Logo" className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">
              Rawen<span className="text-accent">Chat</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <a href="#features" className="transition hover:text-foreground">
              {t.footer.features}
            </a>
            <a href="#showcase" className="transition hover:text-foreground">
              {t.footer.showcase}
            </a>
            <a
              href="#download"
              target="_blank"
              className="transition hover:text-foreground"
            >
              {t.footer.download}
            </a>
          </nav>

          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} RawenChat. {t.footer.rights}
          </p>
        </div>
      </footer>
      {showModal && (
        <DownloadModal release={release} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
