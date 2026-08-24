import Image from "next/image";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrandMark = () => (
  <Image aria-hidden="true" className="brand-mark" src="/ecopulse-mark.png" alt="" width={512} height={512} priority />
);

const industries = [
  ["01", "Data Centres", "Thermal buffering and uninterrupted cooling architecture for facilities where every minute matters.", "Mission critical"],
  ["02", "Healthcare & Life Sciences", "More resilient cooling for hospitals, laboratories and temperature-sensitive operations.", "Continuity"],
  ["03", "Commercial Campuses", "Peak-load management for large buildings, mixed-use estates and high-density urban assets.", "Portfolio scale"],
  ["04", "Industry & Infrastructure", "Modular thermal storage for facilities balancing production loads, grid constraints and expansion.", "Operational control"],
];

const delivery = [
  ["01", "Diagnose", "Map the cooling load, operating profile, tariff exposure and resilience requirement."],
  ["02", "Engineer", "Configure the storage architecture with BOCA PCM-TES technology and site-specific controls."],
  ["03", "Structure", "Align engineering scope, commercial model, measurement plan and delivery responsibilities."],
  ["04", "Operate", "Track performance through disciplined monitoring, verification and lifecycle support."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ecopulse Technology home"><BrandMark /><span className="brand-wordmark"><strong>Ecopulse</strong><small>TECHNOLOGY</small></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#platform">Platform</a><a href="#technology">Technology</a><a href="#applications">Applications</a><a href="#delivery">Delivery</a>
        </nav>
        <a className="header-cta" href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> THAILAND · ASEAN · THERMAL INFRASTRUCTURE</div>
          <h1>Cooling resilience<br />for a <em>volatile</em><br />energy world.</h1>
          <p className="hero-lead">Ecopulse develops PCM-based thermal energy infrastructure that helps mission-critical buildings manage peak demand, grid stress and operational uncertainty.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#platform">Explore the platform <Arrow /></a>
            <a className="button button-quiet" href="https://ecopulsegroup.com/investors" target="_blank" rel="noreferrer">Investor relations</a>
          </div>
        </div>

        <div className="system-visual" aria-label="Integrated thermal energy storage illustration">
          <div className="visual-label visual-label-top"><span /> THERMAL NETWORK / ACTIVE</div>
          <div className="building-shell">
            <div className="building-topline" />
            <div className="building-grid">{Array.from({ length: 24 }).map((_, i) => <i key={i} />)}</div>
            <div className="energy-line energy-line-a" /><div className="energy-line energy-line-b" />
            <div className="pcm-bank">
              <span className="pcm-title">PCM · TES</span>
              <div className="pcm-cells">{Array.from({ length: 12 }).map((_, i) => <b key={i} />)}</div>
              <small>THERMAL CAPACITY BANK</small>
            </div>
          </div>
          <div className="visual-stat stat-one"><span>01</span><strong>STORE</strong><small>available thermal energy</small></div>
          <div className="visual-stat stat-two"><span>02</span><strong>BALANCE</strong><small>plant and demand</small></div>
          <div className="visual-stat stat-three"><span>03</span><strong>DISPATCH</strong><small>cooling when needed</small></div>
        </div>
        <div className="hero-bottom"><p>THERMAL INFRASTRUCTURE COMPANY OF SOUTHEAST ASIA</p><div><span>Scroll to explore</span><i /></div></div>
      </section>

      <section className="partner-ribbon" aria-label="Technology partnership">
        <span className="ribbon-label">TECHNOLOGY BACKBONE</span>
        <strong>BOCA<small>PCM—TES</small></strong><p>Proprietary phase-change thermal storage<br />and thermal engineering capability.</p>
        <span className="ribbon-divider" />
        <strong>GCDT<small>NYSE LISTED</small></strong><p>BOCA International operates as the Hong Kong<br />subsidiary of Green Circle Decarbonize Technology.</p>
      </section>

      <section id="platform" className="section dark-section platform-section">
        <div className="section-kicker">01 — THE PLATFORM</div>
        <div className="split-heading">
          <h2>Cooling is no longer<br />a utility expense.</h2>
          <div><p className="big-copy">It is an infrastructure decision.</p><p>Electrification, climate volatility and always-on operations are making cooling a strategic constraint. Ecopulse reframes thermal storage as an operating asset—built around resilience, controllability and verifiable performance.</p></div>
        </div>
        <div className="risk-grid">
          <article><span className="risk-index">01</span><div className="risk-icon"><i /><i /><i /></div><h3>Peak exposure</h3><p>Cooling demand often rises when electricity systems are under the most pressure.</p></article>
          <article><span className="risk-index">02</span><div className="risk-icon ring-icon"><i /><i /><i /></div><h3>Energy volatility</h3><p>Tariffs, grid congestion and intermittent generation make timing as important as consumption.</p></article>
          <article><span className="risk-index">03</span><div className="risk-icon shield-icon"><i /><i /></div><h3>Resilience gap</h3><p>Mission-critical facilities need thermal continuity—not simply more installed cooling capacity.</p></article>
        </div>
      </section>

      <section id="technology" className="section light-section technology-section">
        <div className="section-kicker">02 — HOW IT WORKS</div>
        <div className="technology-intro">
          <div><h2>A thermal battery<br />for the built world.</h2><p>Phase Change Material stores and releases thermal energy at a defined temperature. Integrated with a central chiller plant, it creates a controllable buffer between cooling production and cooling demand.</p></div>
          <div className="temperature-orbit" aria-hidden="true"><div className="orbit outer"><span /></div><div className="orbit inner"><span /></div><div className="temperature-core"><b>PCM</b><small>PHASE CHANGE<br />MATERIAL</small></div></div>
        </div>
        <div className="process-grid">
          <article><span>01 / CHARGE</span><h3>Store thermal energy</h3><p>Capture available cooling capacity when plant conditions and energy timing are more favourable.</p></article>
          <article><span>02 / OPTIMISE</span><h3>Balance the system</h3><p>Coordinate chiller output, storage state and real-time load through the system control layer.</p></article>
          <article><span>03 / DISCHARGE</span><h3>Release on demand</h3><p>Dispatch stored cooling during peak periods, load spikes or resilience events.</p></article>
        </div>
        <div className="technical-band">
          <div className="technical-heading"><span>BOCA PCM-TES TECHNOLOGY</span><h3>Proven technology layer.<br />Local execution intelligence.</h3></div>
          <div className="technical-facts">
            <div><strong>20+</strong><span>PCM formulations developed by the technology provider</span></div>
            <div><strong>−86°—600°C</strong><span>Published temperature range across BOCA’s PCM portfolio</span></div>
            <div><strong>MODULAR</strong><span>Tank architecture for retrofit and new-build configurations</span></div>
          </div>
          <p className="fact-note">Technology specifications shown are published by BOCA International / Green Circle Decarbonize Technology and are subject to project engineering and product selection.</p>
        </div>
      </section>

      <section id="applications" className="section applications-section">
        <div className="section-heading-row"><div><div className="section-kicker">03 — APPLICATIONS</div><h2>Where cooling<br />becomes critical.</h2></div><p>Built for energy-intensive environments where reliability, peak management and expansion capacity have direct operational value.</p></div>
        <div className="industry-grid">
          {industries.map(([number, title, copy, tag]) => (
            <article key={title}><div className="industry-top"><span>{number}</span><i /></div><div><small>{tag}</small><h3>{title}</h3><p>{copy}</p></div><a href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">Discuss application <Arrow /></a></article>
          ))}
        </div>
      </section>

      <section className="section partner-section">
        <div className="partner-copy"><div className="section-kicker">04 — PLATFORM ARCHITECTURE</div><h2>Global technology.<br /><em>Thailand execution.</em></h2><p>BOCA provides the proven PCM-TES technology layer. Ecopulse builds the Thailand and ASEAN execution layer around it—from local customer conversion and technical localisation to commercial structuring, performance measurement and lifecycle operations.</p><a className="text-link" href="https://pcm-tes.com/boca/" target="_blank" rel="noreferrer">Explore BOCA technology <Arrow /></a></div>
        <div className="architecture-map" aria-label="BOCA and Ecopulse delivery architecture">
          <div className="map-node boca-node"><span>TECHNOLOGY LAYER</span><strong>BOCA</strong><small>PCM · SYSTEM DESIGN · CONTROL</small></div>
          <div className="map-flow"><i /><span>INTEGRATED DELIVERY</span><i /></div>
          <div className="map-node ecopulse-node"><span>EXECUTION LAYER</span><strong>ECOPULSE</strong><small>THAILAND · ASEAN</small></div>
          <div className="execution-chips"><span>LOCALISATION</span><span>STRUCTURING</span><span>MRV</span><span>O&amp;M</span></div>
        </div>
      </section>

      <section id="delivery" className="section delivery-section">
        <div className="section-heading-row"><div><div className="section-kicker">05 — DELIVERY</div><h2>From site reality<br />to operating asset.</h2></div><p>Every deployment begins with the load—not a generic savings promise. Technical and commercial decisions are anchored to site data and an agreed measurement framework.</p></div>
        <div className="delivery-list">{delivery.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i /></article>)}</div>
      </section>

      <section className="reference-section">
        <div className="reference-intro"><div className="section-kicker">06 — TECHNOLOGY REFERENCES</div><h2>A foundation built<br />beyond the laboratory.</h2><p>BOCA’s public project portfolio shows PCM-TES applied across cooling resilience, energy management and thermal storage use cases.</p></div>
        <div className="reference-list">
          <a href="https://pcm-tes.com/ibm-2/" target="_blank" rel="noreferrer"><span>HONG KONG</span><strong>IBM Data Centre</strong><small>130 RT-hr uninterrupted cooling supply</small><Arrow /></a>
          <a href="https://pcm-tes.com/italy/" target="_blank" rel="noreferrer"><span>ITALY</span><strong>Turin Geothermal TES</strong><small>Cooling and heating energy storage</small><Arrow /></a>
          <a href="https://pcm-tes.com/most-energy-efficient-hvac-system-2/" target="_blank" rel="noreferrer"><span>HONG KONG</span><strong>HAECO Chiller Plant</strong><small>Published BOCA reference project</small><Arrow /></a>
        </div>
        <p className="reference-note">Reference projects are attributed to BOCA International and do not represent Ecopulse deployments. Performance varies by site and must be established through project-specific engineering, baselining and measurement &amp; verification.</p>
      </section>

      <section className="cta-section">
        <div className="cta-glow" aria-hidden="true" /><div className="eyebrow"><span /> BUILD THE NEXT THERMAL ASSET</div><h2>Make cooling<br /><em>strategic.</em></h2><p>For infrastructure owners, operators, energy partners and investors building resilient assets across Thailand and Southeast Asia.</p>
        <div className="hero-actions"><a className="button button-primary" href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">Start a project assessment <Arrow /></a><a className="button button-quiet" href="https://ecopulsegroup.com/investors" target="_blank" rel="noreferrer">Request investor deck</a></div>
      </section>

      <footer>
        <div className="footer-brand"><BrandMark /><span className="brand-wordmark"><strong>Ecopulse</strong><small>TECHNOLOGY</small></span><span className="brand-tagline">The Pulse of Clean Power.</span></div>
        <div className="footer-links"><div><span>EXPLORE</span><a href="#platform">Platform</a><a href="#technology">Technology</a><a href="#applications">Applications</a></div><div><span>CONNECT</span><a href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">Business enquiries</a><a href="https://ecopulsegroup.com/investors" target="_blank" rel="noreferrer">Investor relations</a><a href="https://pcm-tes.com/boca/" target="_blank" rel="noreferrer">BOCA International</a></div></div>
        <div className="footer-bottom"><span>© 2026 ECOPULSE. ALL RIGHTS RESERVED.</span><span>THAILAND · SOUTHEAST ASIA</span></div>
      </footer>
    </main>
  );
}
