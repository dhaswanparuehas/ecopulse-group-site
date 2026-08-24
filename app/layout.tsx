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
  title: "Ecopulse | PCM-TES Cooling Resilience Infrastructure",
  description: "A thermal battery that stores cooling—not electricity. PCM-TES infrastructure for mission-critical buildings across Thailand and Southeast Asia.",
  openGraph: { title: "Ecopulse | The thermal battery for cooling", description: "Store cooling when conditions are favourable. Release it when the building needs it most—powered by BOCA PCM-TES technology.", type: "website", images: [{ url: `${siteUrl}/og-ecopulse.jpg`, width: 1200, height: 630, alt: "Ecopulse PCM-TES cooling resilience infrastructure" }] },
  twitter: { card: "summary_large_image", title: "Ecopulse | The thermal battery for cooling", description: "Store cooling when conditions are favourable. Release it when the building needs it most—powered by BOCA PCM-TES technology.", images: [`${siteUrl}/og-ecopulse.jpg`] },
  icons: { icon: `${basePath}/ecopulse-mark.png`, shortcut: `${basePath}/ecopulse-mark.png`, apple: `${basePath}/ecopulse-mark.png` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
