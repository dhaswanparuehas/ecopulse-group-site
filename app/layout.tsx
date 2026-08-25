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
  title: "Ecopulse | AI-Assisted PCM-TES Cooling Infrastructure",
  description: "PCM-TES stores cooling. AI-assisted control helps sense demand, predict load and coordinate dispatch for mission-critical buildings across Southeast Asia.",
  openGraph: { title: "Ecopulse | Thermal storage, orchestrated by AI", description: "Store cooling with BOCA PCM-TES. Use AI-assisted control to help predict demand and coordinate when that cooling is charged and dispatched.", type: "website", images: [{ url: `${siteUrl}/og-ecopulse.jpg`, width: 1200, height: 630, alt: "Ecopulse AI-assisted PCM-TES cooling infrastructure" }] },
  twitter: { card: "summary_large_image", title: "Ecopulse | Thermal storage, orchestrated by AI", description: "PCM-TES stores cooling. AI-assisted control helps predict demand and coordinate dispatch.", images: [`${siteUrl}/og-ecopulse.jpg`] },
  icons: { icon: `${basePath}/ecopulse-mark.png`, shortcut: `${basePath}/ecopulse-mark.png`, apple: `${basePath}/ecopulse-mark.png` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
