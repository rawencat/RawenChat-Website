"use client";

import { useEffect, useRef } from "react";
import { formatFileSize } from "../utils/utils";
import { useLanguage } from "../i18n/LanguageContext";
import type { ReleaseInfo } from "../utils/release";

type DownloadModalProps = {
  release: ReleaseInfo;
  onClose: () => void;
};

export default function DownloadModal({ release, onClose }: DownloadModalProps) {
  const { t } = useLanguage();
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-up px-4"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-background p-8 text-center shadow-2xl animate-fade-up-delay-1"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full text-muted transition hover:bg-white/10 hover:text-foreground"
          aria-label="Cerrar"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/30">
          <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold tracking-tight">{t.downloadModal.title}</h3>
        <p className="mt-2 text-sm text-muted">{t.downloadModal.subtitle}</p>

        {release.size && (
          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-component px-4 py-2 text-xs text-muted">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.downloadModal.size}: {formatFileSize(release.size)}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href={release.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-accent px-6 text-sm font-semibold text-[#0d0d0d] transition hover:bg-accent-hover glow-accent-sm"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.downloadModal.downloadNow}
          </a>
          <button
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-component px-6 text-sm font-medium text-muted transition hover:border-white/20 hover:text-foreground"
          >
            {t.downloadModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
