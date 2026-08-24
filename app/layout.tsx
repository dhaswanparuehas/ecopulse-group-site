import type { Metadata } from "next";
import "./globals.css";

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubPages = process.env.GITHUB_PAGES === "true" && Boolean(githubOwner && githubRepository);
const customDomain = process.env.CUSTOM_DOMAIN?.trim() ?? "";
const basePath = isGitHubPages && !customDomain ? `/${githubRepository}` : "";
const siteUrl = customDomain
  ? `https://${customDomain}`
  : isGitHubPages
  ? `https://${githubOwner}.github.io/${githubRepository}`
  : "https://ecopulsegroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ecopulse Group | Cooling Resilience Infrastructure",
  description: "PCM-based thermal energy infrastructure for mission-critical buildings across Thailand and Southeast Asia.",
  openGraph: { title: "Ecopulse Group | Cooling Resilience Infrastructure", description: "Thermal infrastructure for a volatile energy world—powered by BOCA PCM-TES technology.", type: "website", images: [{ url: `${siteUrl}/og-ecopulse.jpg`, width: 1200, height: 630, alt: "Ecopulse cooling resilience infrastructure" }] },
  twitter: { card: "summary_large_image", title: "Ecopulse Group | Cooling Resilience Infrastructure", description: "Thermal infrastructure for a volatile energy world—powered by BOCA PCM-TES technology.", images: [`${siteUrl}/og-ecopulse.jpg`] },
  icons: { icon: `${basePath}/ecopulse-mark.png`, shortcut: `${basePath}/ecopulse-mark.png`, apple: `${basePath}/ecopulse-mark.png` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
