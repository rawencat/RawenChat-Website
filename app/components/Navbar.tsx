"use client";

import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Locale } from "../i18n/dictionary";
export default function Navbar({ onDownloadClick }: { onDownloadClick?: () => void }) {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#showcase", label: t.nav.showcase },
    { href: "#download", label: t.nav.download },
  ];

  const toggleLocale = (next: Locale) => {
    setLocale(next);
  };

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div
      className={`inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["es", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => toggleLocale(code)}
            className={`rounded-lg px-2.5 py-1.5 uppercase tracking-wide transition ${
              active
                ? "bg-accent text-[#0d0d0d]"
                : "text-muted hover:text-foreground"
            }`}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
      <nav className="nav-glass flex w-full max-w-4xl items-center justify-between rounded-2xl px-5 py-3 shadow-2xl shadow-black/40">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/30 transition group-hover:bg-accent/25">
            <img src="/logo.png" alt="RawenChat Logo" className="h-4 w-4" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Rawen<span className="text-accent">Chat</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LangToggle />
          <button
            type="button"
            onClick={onDownloadClick}
            className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-[#0d0d0d] transition hover:bg-accent-hover glow-accent-sm cursor-pointer"
          >
            {t.nav.download}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-foreground transition hover:bg-white/5"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-glass absolute top-[4.5rem] left-4 right-4 mx-auto max-w-4xl rounded-2xl p-4 shadow-2xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => { onDownloadClick?.(); setOpen(false); }}
                className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-[#0d0d0d] transition hover:bg-accent-hover"
              >
                {t.nav.download}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
