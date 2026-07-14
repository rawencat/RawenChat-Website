import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rawencat.tech"),
  title: "RawenChat — Interactividad para streams en Twitch y Kick",
  description:
    "App de escritorio para creadores de contenido. Chat multiplataforma, comandos interactivos, TTS, avatar 2D reactivo y overlays para OBS. Sin necesidad de puntos de canal.",
  keywords: [
    "RawenChat",
    "Twitch",
    "Kick",
    "stream tools",
    "chat overlay",
    "OBS",
    "TTS",
    "comandos chat",
    "VTuber",
  ],
  openGraph: {
    title: "RawenChat — Interactividad para streams en Twitch y Kick",
    description:
      "App de escritorio para creadores de contenido. Chat multiplataforma, comandos interactivos, TTS, avatar 2D reactivo y overlays para OBS. Sin necesidad de puntos de canal.",
    url: "https://rawencat.tech",
    siteName: "RawenChat",
    images: [
      {
        url: "https://cdn.rawencat.tech/Embed.png",
        width: 1280,
        height: 720,
        alt: "RawenChat — Chat interactivo, TTS y overlays para Twitch y Kick",
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RawenChat — Interactividad para streams en Twitch y Kick",
    description:
      "App de escritorio para creadores de contenido. Chat multiplataforma, comandos interactivos, TTS, avatar 2D reactivo y overlays para OBS.",
    images: ["https://cdn.rawencat.tech/Embed.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
