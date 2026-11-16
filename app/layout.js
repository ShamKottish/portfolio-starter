import { Amiri, Fraunces, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Instrument_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/components/I18n";
import { cv } from "@/data/cv";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
// Arabic faces only download when an Arabic glyph is actually on screen
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: `${cv.name} · ${cv.title}`,
  description: cv.summary,
  openGraph: {
    title: `${cv.name} · ${cv.title}`,
    description: cv.about.lead,
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1418" },
  ],
};

// Runs before first paint so the page never flashes the wrong theme.
// It also flags that scroll-reveal may hide things until they are seen (`js-motion`); if React
// has not started within 6s the flag is dropped so nothing can stay hidden.
const bootTheme = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}var h=document.documentElement;h.classList.add("js-motion");setTimeout(function(){if(!window.__motionReady)h.classList.remove("js-motion")},6000);`;

export default function RootLayout({ children }) {
  const fonts = [fraunces, instrument, plexMono, amiri, plexArabic].map((f) => f.variable).join(" ");

  return (
    <html lang="en" dir="ltr" data-theme="light" className={fonts} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootTheme }} suppressHydrationWarning />
      </head>
      <body className="flex min-h-screen flex-col">
        <I18nProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
