# Ecopulse Group Website

Institutional-grade landing page for Ecopulse, positioned as a thermal infrastructure platform for Thailand and Southeast Asia.

## Positioning

- Cooling resilience infrastructure for a volatile energy world
- PCM-based Thermal Energy Storage (TES)
- BOCA International as the technology backbone
- Ecopulse as the Thailand/ASEAN execution, localisation, commercial structuring, MRV and lifecycle-operations layer

Technology specifications and external reference projects are attributed to BOCA International / Green Circle Decarbonize Technology. The site intentionally avoids generic savings promises; project performance must be established through site-specific engineering, baselining and measurement & verification.

## Local development

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run build
npm run build:pages
```

## GitHub Pages

The included workflow exports the site as static HTML and publishes it through GitHub Pages on every push to `main`. In the repository, set **Settings → Pages → Source** to **GitHub Actions**.

The build automatically detects whether it is deployed as a user site (`username.github.io`) or a project site (`username.github.io/repository-name`) and applies the correct base path.

## Verified public sources

- Ecopulse: https://ecopulsegroup.com/
- BOCA International: https://pcm-tes.com/boca/
- Green Circle Decarbonize Technology SEC filings: https://www.sec.gov/edgar/browse/?CIK=1926293
