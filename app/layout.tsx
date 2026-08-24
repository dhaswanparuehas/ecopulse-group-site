import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecopulsegroup.com"),
  title: "Ecopulse Group | Cooling Resilience Infrastructure",
  description: "PCM-based thermal energy infrastructure for mission-critical buildings across Thailand and Southeast Asia.",
  openGraph: { title: "Ecopulse Group | Cooling Resilience Infrastructure", description: "Thermal infrastructure for a volatile energy world—powered by BOCA PCM-TES technology.", type: "website", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ecopulse cooling resilience infrastructure" }] },
  twitter: { card: "summary_large_image", title: "Ecopulse Group | Cooling Resilience Infrastructure", description: "Thermal infrastructure for a volatile energy world—powered by BOCA PCM-TES technology.", images: ["/og.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
