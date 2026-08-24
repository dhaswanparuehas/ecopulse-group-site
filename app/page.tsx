"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "en" | "th";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrandMark = () => (
  <Image aria-hidden="true" className="brand-mark" src="/ecopulse-mark.png" alt="" width={512} height={512} priority />
);

const copy = {
  en: {
    nav: ["Platform", "PCM-TES", "Applications", "Delivery"],
    contact: "Start a conversation",
    eyebrow: "THAILAND · ASEAN · THERMAL INFRASTRUCTURE",
    heroTitle: <>Cooling resilience<br />for a <em>volatile</em><br />energy world.</>,
    heroLead: "Ecopulse develops PCM-based thermal energy infrastructure that helps mission-critical buildings manage peak demand, grid stress and operational uncertainty.",
    explore: "Understand PCM-TES",
    investors: "Investor relations",
    visual: [["01", "STORE", "available thermal energy"], ["02", "BALANCE", "plant and demand"], ["03", "DISPATCH", "cooling when needed"]],
    scroll: "Scroll to explore",
    backbone: "TECHNOLOGY BACKBONE",
    bocaCopy: <>Proprietary phase-change thermal storage<br />and thermal engineering capability.</>,
    gcdtCopy: <>BOCA International operates as the Hong Kong<br />subsidiary of Green Circle Decarbonize Technology.</>,
    pcm: {
      kicker: "PCM-TES — EXPLAINED SIMPLY",
      headline: <>A battery that stores<br /><em>cooling—not electricity.</em></>,
      intro: "Think of the ice cubes in your drink. You make them before you need them, store the cold, then use that cold at the right moment. PCM-TES applies the same simple idea at building scale—with engineered Phase Change Material instead of ordinary ice.",
      wow: "Cooling can be produced when conditions are favourable, stored inside compact PCM panels, then released when the building needs it most.",
      steps: [["01", "CHARGE", "The chiller cools the PCM until it changes phase, locking thermal energy into the material."], ["02", "STORE", "Hundreds of sealed PCM panels form a high-capacity thermal bank inside an insulated tank."], ["03", "RELEASE", "Stored cooling is dispatched during demand peaks, load spikes or resilience events."]],
      callout: "THE 8°C DIFFERENCE",
      calloutTitle: "Engineered to freeze where a chilled-water system works.",
      calloutCopy: "BOCA states that its cooling PCM can freeze at approximately 8°C—rather than requiring water to become ice at 0°C. This allows thermal storage to work closer to normal chilled-water temperatures, subject to project engineering and product selection.",
      caption: "PCM panels shown beside a thermal energy storage tank. Image supplied by Ecopulse.",
      source: "Technology explanation adapted from BOCA PCM-TES",
    },
    platform: {
      kicker: "02 — THE PLATFORM", title: <>Cooling is no longer<br />a utility expense.</>, big: "It is an infrastructure decision.",
      copy: "Electrification, climate volatility and always-on operations are making cooling a strategic constraint. Ecopulse reframes thermal storage as an operating asset—built around resilience, controllability and verifiable performance.",
      risks: [["01", "Peak exposure", "Cooling demand often rises when electricity systems are under the most pressure."], ["02", "Energy volatility", "Tariffs, grid congestion and intermittent generation make timing as important as consumption."], ["03", "Resilience gap", "Mission-critical facilities need thermal continuity—not simply more installed cooling capacity."]],
    },
    technology: {
      kicker: "03 — HOW IT WORKS", title: <>A thermal battery<br />for the built world.</>,
      copy: "Phase Change Material stores and releases thermal energy at a defined temperature. Integrated with a central chiller plant, it creates a controllable buffer between cooling production and cooling demand.",
      processes: [["01 / CHARGE", "Store thermal energy", "Capture available cooling capacity when plant conditions and energy timing are more favourable."], ["02 / OPTIMISE", "Balance the system", "Coordinate chiller output, storage state and real-time load through the system control layer."], ["03 / DISCHARGE", "Release on demand", "Dispatch stored cooling during peak periods, load spikes or resilience events."]],
      band: "BOCA PCM-TES TECHNOLOGY", bandTitle: <>Proven technology layer.<br />Local execution intelligence.</>,
      facts: [["20+", "PCM formulations developed by the technology provider"], ["−86°—600°C", "Published temperature range across BOCA’s PCM portfolio"], ["MODULAR", "Tank architecture for retrofit and new-build configurations"]],
      note: "Technology specifications shown are published by BOCA International / Green Circle Decarbonize Technology and are subject to project engineering and product selection.",
    },
    applications: {
      kicker: "04 — APPLICATIONS", title: <>Where cooling<br />becomes critical.</>, copy: "Built for energy-intensive environments where reliability, peak management and expansion capacity have direct operational value.", discuss: "Discuss application",
      items: [["01", "Data Centres", "Thermal buffering and uninterrupted cooling architecture for facilities where every minute matters.", "Mission critical"], ["02", "Healthcare & Life Sciences", "More resilient cooling for hospitals, laboratories and temperature-sensitive operations.", "Continuity"], ["03", "Commercial Campuses", "Peak-load management for large buildings, mixed-use estates and high-density urban assets.", "Portfolio scale"], ["04", "Industry & Infrastructure", "Modular thermal storage for facilities balancing production loads, grid constraints and expansion.", "Operational control"]],
    },
    architecture: {
      kicker: "05 — PLATFORM ARCHITECTURE", title: <>Global technology.<br /><em>Thailand execution.</em></>,
      copy: "BOCA provides the proven PCM-TES technology layer. Ecopulse builds the Thailand and ASEAN execution layer around it—from local customer conversion and technical localisation to commercial structuring, performance measurement and lifecycle operations.", link: "Explore BOCA technology",
      labels: ["TECHNOLOGY LAYER", "PCM · SYSTEM DESIGN · CONTROL", "INTEGRATED DELIVERY", "EXECUTION LAYER", "THAILAND · ASEAN"], chips: ["LOCALISATION", "STRUCTURING", "MRV", "O&M"],
    },
    delivery: {
      kicker: "06 — DELIVERY", title: <>From site reality<br />to operating asset.</>, copy: "Every deployment begins with the load—not a generic savings promise. Technical and commercial decisions are anchored to site data and an agreed measurement framework.",
      items: [["01", "Diagnose", "Map the cooling load, operating profile, tariff exposure and resilience requirement."], ["02", "Engineer", "Configure the storage architecture with BOCA PCM-TES technology and site-specific controls."], ["03", "Structure", "Align engineering scope, commercial model, measurement plan and delivery responsibilities."], ["04", "Operate", "Track performance through disciplined monitoring, verification and lifecycle support."]],
    },
    references: {
      kicker: "07 — TECHNOLOGY REFERENCES", title: <>A foundation built<br />beyond the laboratory.</>, copy: "BOCA’s public project portfolio shows PCM-TES applied across cooling resilience, energy management and thermal storage use cases.",
      items: [["HONG KONG", "IBM Data Centre", "130 RT-hr uninterrupted cooling supply", "https://pcm-tes.com/ibm-2/"], ["ITALY", "Turin Geothermal TES", "Cooling and heating energy storage", "https://pcm-tes.com/italy/"], ["HONG KONG", "HAECO Chiller Plant", "Published BOCA reference project", "https://pcm-tes.com/most-energy-efficient-hvac-system-2/"]],
      note: "Reference projects are attributed to BOCA International and do not represent Ecopulse deployments. Performance varies by site and must be established through project-specific engineering, baselining and measurement & verification.",
    },
    cta: { eyebrow: "BUILD THE NEXT THERMAL ASSET", title: <>Make cooling<br /><em>strategic.</em></>, copy: "For infrastructure owners, operators, energy partners and investors building resilient assets across Thailand and Southeast Asia.", primary: "Start a project assessment", secondary: "Request investor deck" },
    footer: { explore: "EXPLORE", connect: "CONNECT", business: "Business enquiries", investor: "Investor relations" },
  },
  th: {
    nav: ["แพลตฟอร์ม", "PCM-TES", "การใช้งาน", "การส่งมอบ"], contact: "เริ่มต้นพูดคุย", eyebrow: "ประเทศไทย · อาเซียน · โครงสร้างพื้นฐานพลังงานความร้อน",
    heroTitle: <>ระบบความเย็นที่มั่นคง<br />สำหรับโลกพลังงาน<br /><em>ที่ผันผวน</em></>,
    heroLead: "Ecopulse พัฒนาโครงสร้างพื้นฐานพลังงานความร้อนด้วย PCM เพื่อช่วยอาคารและกิจการที่หยุดไม่ได้ รับมือช่วงพีก ความตึงตัวของระบบไฟฟ้า และความไม่แน่นอนในการดำเนินงาน",
    explore: "รู้จัก PCM-TES", investors: "ข้อมูลสำหรับนักลงทุน",
    visual: [["01", "เก็บ", "พลังงานความเย็นไว้ล่วงหน้า"], ["02", "สมดุล", "กำลังผลิตกับความต้องการ"], ["03", "จ่าย", "ความเย็นเมื่อจำเป็น"]], scroll: "เลื่อนเพื่อดูเพิ่มเติม", backbone: "เทคโนโลยีหลัก",
    bocaCopy: <>เทคโนโลยีกักเก็บพลังงานด้วยวัสดุเปลี่ยนสถานะ<br />และความเชี่ยวชาญด้านวิศวกรรมความร้อน</>,
    gcdtCopy: <>BOCA International เป็นบริษัทย่อยในฮ่องกง<br />ของ Green Circle Decarbonize Technology</>,
    pcm: {
      kicker: "PCM-TES — อธิบายให้เข้าใจง่าย", headline: <>แบตเตอรี่ที่ไม่ได้เก็บไฟ<br /><em>แต่เก็บ “ความเย็น”</em></>,
      intro: "ลองนึกถึงน้ำแข็งในแก้ว เราทำน้ำแข็งเก็บไว้ก่อน ไม่ได้รอทำตอนกำลังจะดื่ม แล้วจึงนำความเย็นนั้นมาใช้ในเวลาที่ต้องการ PCM-TES ใช้แนวคิดเดียวกันในระดับอาคาร แต่แทนน้ำแข็งธรรมดาด้วยวัสดุเปลี่ยนสถานะที่ออกแบบทางวิศวกรรม",
      wow: "ระบบสามารถผลิตความเย็นในช่วงเวลาที่เหมาะสม เก็บไว้ในแผง PCM ขนาดกะทัดรัด แล้วปล่อยออกมาในช่วงที่อาคารต้องการมากที่สุด",
      steps: [["01", "ชาร์จ", "ชิลเลอร์ทำให้ PCM เย็นจนเปลี่ยนสถานะ และกักเก็บพลังงานความเย็นไว้ในเนื้อวัสดุ"], ["02", "เก็บ", "แผง PCM แบบปิดผนึกจำนวนมากประกอบเป็นคลังพลังงานความเย็นภายในถังหุ้มฉนวน"], ["03", "ปล่อย", "จ่ายความเย็นที่เก็บไว้ในช่วงพีก เมื่อโหลดพุ่งสูง หรือเมื่อระบบต้องการความต่อเนื่อง"]],
      callout: "ความต่างที่ 8°C", calloutTitle: "ออกแบบให้แข็งตัวในช่วงอุณหภูมิที่ระบบน้ำเย็นทำงาน",
      calloutCopy: "BOCA ระบุว่า PCM สำหรับระบบความเย็นสามารถแข็งตัวที่ประมาณ 8°C โดยไม่ต้องทำให้น้ำกลายเป็นน้ำแข็งที่ 0°C จึงสามารถกักเก็บพลังงานใกล้เคียงช่วงอุณหภูมิทำงานปกติของระบบน้ำเย็น ทั้งนี้ขึ้นอยู่กับการออกแบบโครงการและการเลือกผลิตภัณฑ์",
      caption: "แผง PCM ข้างถังกักเก็บพลังงานความร้อน ภาพประกอบจาก Ecopulse", source: "เรียบเรียงคำอธิบายจาก BOCA PCM-TES",
    },
    platform: {
      kicker: "02 — แพลตฟอร์ม", title: <>ระบบความเย็นไม่ใช่<br />แค่ค่าใช้จ่ายสาธารณูปโภค</>, big: "แต่คือการตัดสินใจด้านโครงสร้างพื้นฐาน",
      copy: "การใช้ไฟฟ้าที่เพิ่มขึ้น ความผันผวนของสภาพภูมิอากาศ และการดำเนินงานตลอด 24 ชั่วโมง ทำให้ระบบความเย็นกลายเป็นข้อจำกัดเชิงกลยุทธ์ Ecopulse จึงออกแบบการกักเก็บพลังงานความร้อนให้เป็นสินทรัพย์ปฏิบัติการที่ควบคุมได้ มีความมั่นคง และวัดผลได้",
      risks: [["01", "ความเสี่ยงช่วงพีก", "ความต้องการความเย็นมักเพิ่มขึ้นในช่วงเดียวกับที่ระบบไฟฟ้ารับภาระสูงที่สุด"], ["02", "ความผันผวนด้านพลังงาน", "ค่าไฟ ความแออัดของโครงข่าย และพลังงานหมุนเวียน ทำให้ ‘เวลาใช้พลังงาน’ สำคัญไม่แพ้ปริมาณ"], ["03", "ช่องว่างด้านความต่อเนื่อง", "สถานที่สำคัญต้องการความเย็นที่ต่อเนื่อง ไม่ใช่เพียงเพิ่มขนาดเครื่องทำความเย็น"]],
    },
    technology: {
      kicker: "03 — หลักการทำงาน", title: <>แบตเตอรี่พลังงานความร้อน<br />สำหรับโลกกายภาพ</>, copy: "วัสดุเปลี่ยนสถานะจะรับและปล่อยพลังงานความร้อน ณ อุณหภูมิที่กำหนด เมื่อนำมาทำงานร่วมกับระบบชิลเลอร์ส่วนกลาง จะเกิดเป็นตัวกลางที่ควบคุมได้ระหว่างการผลิตและการใช้ความเย็น",
      processes: [["01 / ชาร์จ", "เก็บพลังงานความเย็น", "ใช้กำลังความเย็นที่มีอยู่ในช่วงที่สภาวะการเดินเครื่องและเวลาการใช้พลังงานเหมาะสมกว่า"], ["02 / ปรับสมดุล", "บริหารทั้งระบบ", "ประสานการทำงานของชิลเลอร์ สถานะพลังงานในถัง และโหลดแบบเรียลไทม์ผ่านระบบควบคุม"], ["03 / ปล่อย", "จ่ายตามความต้องการ", "นำความเย็นที่เก็บไว้ออกใช้ในช่วงพีก เมื่อโหลดพุ่งสูง หรือเมื่อจำเป็นต้องรักษาความต่อเนื่อง"]],
      band: "เทคโนโลยี BOCA PCM-TES", bandTitle: <>เทคโนโลยีที่ผ่านการใช้งานจริง<br />ผสานความสามารถในการดำเนินการในพื้นที่</>,
      facts: [["20+", "สูตร PCM ที่ผู้ให้บริการเทคโนโลยีพัฒนาขึ้น"], ["−86°—600°C", "ช่วงอุณหภูมิที่เผยแพร่สำหรับกลุ่มผลิตภัณฑ์ PCM ของ BOCA"], ["MODULAR", "สถาปัตยกรรมถังแบบโมดูลาร์ รองรับทั้งอาคารเดิมและอาคารใหม่"]],
      note: "ข้อมูลจำเพาะมาจากข้อมูลเผยแพร่ของ BOCA International / Green Circle Decarbonize Technology และต้องยืนยันตามการออกแบบและผลิตภัณฑ์ที่เลือกสำหรับแต่ละโครงการ",
    },
    applications: {
      kicker: "04 — การประยุกต์ใช้", title: <>เมื่อระบบความเย็น<br />คือภารกิจสำคัญ</>, copy: "เหมาะกับสถานที่ใช้พลังงานสูง ซึ่งความเชื่อถือได้ การบริหารช่วงพีก และขีดความสามารถในการขยายระบบ มีคุณค่าต่อการดำเนินงานโดยตรง", discuss: "ปรึกษาการประยุกต์ใช้",
      items: [["01", "ศูนย์ข้อมูล", "ระบบสำรองและบริหารความเย็นสำหรับสถานที่ที่ทุกนาทีของการทำงานมีความหมาย", "ภารกิจสำคัญ"], ["02", "สาธารณสุขและชีววิทยาศาสตร์", "ระบบความเย็นที่มั่นคงขึ้นสำหรับโรงพยาบาล ห้องปฏิบัติการ และงานที่ไวต่ออุณหภูมิ", "ความต่อเนื่อง"], ["03", "อาคารและโครงการขนาดใหญ่", "บริหารโหลดช่วงพีกสำหรับอาคารขนาดใหญ่ โครงการมิกซ์ยูส และสินทรัพย์เมืองความหนาแน่นสูง", "ระดับพอร์ตโฟลิโอ"], ["04", "อุตสาหกรรมและโครงสร้างพื้นฐาน", "ระบบกักเก็บแบบโมดูลาร์สำหรับโรงงานที่ต้องสมดุลโหลดการผลิต ข้อจำกัดโครงข่าย และการขยายกำลัง", "ควบคุมการปฏิบัติการ"]],
    },
    architecture: {
      kicker: "05 — สถาปัตยกรรมแพลตฟอร์ม", title: <>เทคโนโลยีระดับโลก<br /><em>การดำเนินการในประเทศไทย</em></>,
      copy: "BOCA เป็นชั้นเทคโนโลยี PCM-TES ส่วน Ecopulse สร้างชั้นการดำเนินงานในไทยและอาเซียน ตั้งแต่การพัฒนาลูกค้า การปรับเทคโนโลยีให้เหมาะกับพื้นที่ การวางโครงสร้างเชิงพาณิชย์ การวัดผล ไปจนถึงการดูแลตลอดอายุระบบ", link: "ดูเทคโนโลยี BOCA",
      labels: ["ชั้นเทคโนโลยี", "PCM · ออกแบบระบบ · ควบคุม", "การส่งมอบแบบบูรณาการ", "ชั้นดำเนินการ", "ไทย · อาเซียน"], chips: ["ปรับใช้ในพื้นที่", "วางโครงสร้าง", "วัดและทวนสอบ", "เดินระบบและบำรุงรักษา"],
    },
    delivery: {
      kicker: "06 — การส่งมอบ", title: <>จากข้อมูลจริงของสถานที่<br />สู่สินทรัพย์ที่ใช้งานได้จริง</>, copy: "ทุกโครงการเริ่มจากข้อมูลโหลดจริง ไม่ใช่คำสัญญาประหยัดพลังงานแบบกว้าง ๆ การตัดสินใจด้านเทคนิคและพาณิชย์ยึดโยงกับข้อมูลหน้างานและกรอบการวัดผลที่ตกลงร่วมกัน",
      items: [["01", "วิเคราะห์", "ทำแผนที่โหลดความเย็น รูปแบบการเดินระบบ ความเสี่ยงค่าไฟ และความต้องการด้านความต่อเนื่อง"], ["02", "ออกแบบ", "กำหนดสถาปัตยกรรมการกักเก็บด้วย BOCA PCM-TES และระบบควบคุมเฉพาะพื้นที่"], ["03", "วางโครงสร้าง", "จัดแนวขอบเขตวิศวกรรม โมเดลเชิงพาณิชย์ แผนวัดผล และความรับผิดชอบของทุกฝ่าย"], ["04", "เดินระบบ", "ติดตามผลด้วยการตรวจวัด การทวนสอบ และการสนับสนุนตลอดอายุโครงการ"]],
    },
    references: {
      kicker: "07 — โครงการอ้างอิงของเทคโนโลยี", title: <>รากฐานที่พิสูจน์แล้ว<br />นอกห้องทดลอง</>, copy: "โครงการที่ BOCA เผยแพร่แสดงการประยุกต์ PCM-TES ทั้งด้านความต่อเนื่องของระบบความเย็น การจัดการพลังงาน และการกักเก็บพลังงานความร้อน",
      items: [["ฮ่องกง", "ศูนย์ข้อมูล IBM", "ความเย็นต่อเนื่องขนาด 130 RT-hr", "https://pcm-tes.com/ibm-2/"], ["อิตาลี", "Turin Geothermal TES", "กักเก็บพลังงานทั้งความเย็นและความร้อน", "https://pcm-tes.com/italy/"], ["ฮ่องกง", "โรงงานชิลเลอร์ HAECO", "โครงการอ้างอิงที่ BOCA เผยแพร่", "https://pcm-tes.com/most-energy-efficient-hvac-system-2/"]],
      note: "โครงการอ้างอิงเป็นผลงานที่ BOCA International ระบุไว้ และไม่ใช่โครงการของ Ecopulse ผลลัพธ์จริงขึ้นอยู่กับแต่ละสถานที่ และต้องยืนยันด้วยการออกแบบ การกำหนดค่าฐาน และการวัดและทวนสอบเฉพาะโครงการ",
    },
    cta: { eyebrow: "สร้างสินทรัพย์พลังงานความร้อนแห่งอนาคต", title: <>เปลี่ยนระบบความเย็น<br />ให้เป็นเรื่อง<em>เชิงกลยุทธ์</em></>, copy: "สำหรับเจ้าของโครงสร้างพื้นฐาน ผู้ดำเนินงาน พันธมิตรพลังงาน และนักลงทุนที่กำลังสร้างสินทรัพย์ที่ยืดหยุ่นในประเทศไทยและเอเชียตะวันออกเฉียงใต้", primary: "เริ่มประเมินโครงการ", secondary: "ขอเอกสารสำหรับนักลงทุน" },
    footer: { explore: "สำรวจ", connect: "ติดต่อ", business: "สอบถามด้านธุรกิจ", investor: "ข้อมูลสำหรับนักลงทุน" },
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = copy[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("ecopulse-language");
    const preferred: Language = saved === "th" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("th") ? "th" : "en";
    setLang(preferred);
    document.documentElement.lang = preferred;
  }, []);

  const changeLanguage = (next: Language) => {
    setLang(next);
    window.localStorage.setItem("ecopulse-language", next);
    document.documentElement.lang = next;
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ecopulse Technology home"><BrandMark /><span className="brand-wordmark"><strong>Ecopulse</strong><small>TECHNOLOGY</small></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#platform">{t.nav[0]}</a><a href="#pcm-tes">{t.nav[1]}</a><a href="#applications">{t.nav[2]}</a><a href="#delivery">{t.nav[3]}</a></nav>
        <div className="header-tools"><div className="language-switch" role="group" aria-label="Choose language"><button type="button" className={lang === "th" ? "active" : ""} onClick={() => changeLanguage("th")} aria-pressed={lang === "th"}>TH</button><span>/</span><button type="button" className={lang === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={lang === "en"}>EN</button></div><a className="header-cta" href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">{t.contact} <Arrow /></a></div>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy"><div className="eyebrow"><span /> {t.eyebrow}</div><h1>{t.heroTitle}</h1><p className="hero-lead">{t.heroLead}</p><div className="hero-actions"><a className="button button-primary" href="#pcm-tes">{t.explore} <Arrow /></a><a className="button button-quiet" href="https://ecopulsegroup.com/investors" target="_blank" rel="noreferrer">{t.investors}</a></div></div>
        <div className="system-visual" aria-label="Integrated thermal energy storage illustration"><div className="visual-label visual-label-top"><span /> THERMAL NETWORK / ACTIVE</div><div className="building-shell"><div className="building-topline" /><div className="building-grid">{Array.from({ length: 24 }).map((_, i) => <i key={i} />)}</div><div className="energy-line energy-line-a" /><div className="energy-line energy-line-b" /><div className="pcm-bank"><span className="pcm-title">PCM · TES</span><div className="pcm-cells">{Array.from({ length: 12 }).map((_, i) => <b key={i} />)}</div><small>THERMAL CAPACITY BANK</small></div></div>{t.visual.map(([number, title, label], index) => <div className={`visual-stat stat-${["one", "two", "three"][index]}`} key={number}><span>{number}</span><strong>{title}</strong><small>{label}</small></div>)}</div>
        <div className="hero-bottom"><p>THERMAL INFRASTRUCTURE COMPANY OF SOUTHEAST ASIA</p><div><span>{t.scroll}</span><i /></div></div>
      </section>

      <section className="partner-ribbon" aria-label="Technology partnership"><span className="ribbon-label">{t.backbone}</span><strong>BOCA<small>PCM—TES</small></strong><p>{t.bocaCopy}</p><span className="ribbon-divider" /><strong>GCDT<small>NYSE LISTED</small></strong><p>{t.gcdtCopy}</p></section>

      <section id="pcm-tes" className="section pcm-explainer">
        <div className="pcm-story"><div className="section-kicker">01 — {t.pcm.kicker}</div><h2>{t.pcm.headline}</h2><p className="pcm-intro">{t.pcm.intro}</p><blockquote>{t.pcm.wow}</blockquote><a className="source-link" href="https://pcm-tes.com/pcm-tes/" target="_blank" rel="noreferrer">{t.pcm.source} <Arrow /></a></div>
        <figure className="pcm-photo"><Image src="/pcm-tes-industrial-enhanced.jpg" alt={lang === "th" ? "แผง PCM และถังกักเก็บพลังงานความร้อน" : "PCM panels and a thermal energy storage tank"} width={1451} height={1084} sizes="(max-width: 900px) 100vw, 50vw" /><figcaption>{t.pcm.caption}</figcaption><span className="photo-badge">REAL SYSTEM / PCM PANELS</span></figure>
        <div className="pcm-steps">{t.pcm.steps.map(([number, title, body]) => <article key={number}><span>{number}</span><strong>{title}</strong><p>{body}</p></article>)}</div>
        <aside className="temperature-callout"><div><span>{t.pcm.callout}</span><strong>8°C</strong></div><div><h3>{t.pcm.calloutTitle}</h3><p>{t.pcm.calloutCopy}</p></div></aside>
      </section>

      <section id="platform" className="section dark-section platform-section"><div className="section-kicker">{t.platform.kicker}</div><div className="split-heading"><h2>{t.platform.title}</h2><div><p className="big-copy">{t.platform.big}</p><p>{t.platform.copy}</p></div></div><div className="risk-grid">{t.platform.risks.map(([number, title, body], index) => <article key={number}><span className="risk-index">{number}</span><div className={`risk-icon ${index === 1 ? "ring-icon" : index === 2 ? "shield-icon" : ""}`}><i /><i /><i /></div><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section id="technology" className="section light-section technology-section"><div className="section-kicker">{t.technology.kicker}</div><div className="technology-intro"><div><h2>{t.technology.title}</h2><p>{t.technology.copy}</p></div><div className="temperature-orbit" aria-hidden="true"><div className="orbit outer"><span /></div><div className="orbit inner"><span /></div><div className="temperature-core"><b>PCM</b><small>PHASE CHANGE<br />MATERIAL</small></div></div></div><div className="process-grid">{t.technology.processes.map(([label, title, body]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="technical-band"><div className="technical-heading"><span>{t.technology.band}</span><h3>{t.technology.bandTitle}</h3></div><div className="technical-facts">{t.technology.facts.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div><p className="fact-note">{t.technology.note}</p></div></section>

      <section id="applications" className="section applications-section"><div className="section-heading-row"><div><div className="section-kicker">{t.applications.kicker}</div><h2>{t.applications.title}</h2></div><p>{t.applications.copy}</p></div><div className="industry-grid">{t.applications.items.map(([number, title, body, tag]) => <article key={title}><div className="industry-top"><span>{number}</span><i /></div><div><small>{tag}</small><h3>{title}</h3><p>{body}</p></div><a href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">{t.applications.discuss} <Arrow /></a></article>)}</div></section>

      <section className="section partner-section"><div className="partner-copy"><div className="section-kicker">{t.architecture.kicker}</div><h2>{t.architecture.title}</h2><p>{t.architecture.copy}</p><a className="text-link" href="https://pcm-tes.com/boca/" target="_blank" rel="noreferrer">{t.architecture.link} <Arrow /></a></div><div className="architecture-map" aria-label="BOCA and Ecopulse delivery architecture"><div className="map-node boca-node"><span>{t.architecture.labels[0]}</span><strong>BOCA</strong><small>{t.architecture.labels[1]}</small></div><div className="map-flow"><i /><span>{t.architecture.labels[2]}</span><i /></div><div className="map-node ecopulse-node"><span>{t.architecture.labels[3]}</span><strong>ECOPULSE</strong><small>{t.architecture.labels[4]}</small></div><div className="execution-chips">{t.architecture.chips.map((chip) => <span key={chip}>{chip}</span>)}</div></div></section>

      <section id="delivery" className="section delivery-section"><div className="section-heading-row"><div><div className="section-kicker">{t.delivery.kicker}</div><h2>{t.delivery.title}</h2></div><p>{t.delivery.copy}</p></div><div className="delivery-list">{t.delivery.items.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p><i /></article>)}</div></section>

      <section className="reference-section"><div className="reference-intro"><div className="section-kicker">{t.references.kicker}</div><h2>{t.references.title}</h2><p>{t.references.copy}</p></div><div className="reference-list">{t.references.items.map(([place, title, body, href]) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>{place}</span><strong>{title}</strong><small>{body}</small><Arrow /></a>)}</div><p className="reference-note">{t.references.note}</p></section>

      <section className="cta-section"><div className="cta-glow" aria-hidden="true" /><div className="eyebrow"><span /> {t.cta.eyebrow}</div><h2>{t.cta.title}</h2><p>{t.cta.copy}</p><div className="hero-actions"><a className="button button-primary" href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">{t.cta.primary} <Arrow /></a><a className="button button-quiet" href="https://ecopulsegroup.com/investors" target="_blank" rel="noreferrer">{t.cta.secondary}</a></div></section>

      <footer><div className="footer-brand"><BrandMark /><span className="brand-wordmark"><strong>Ecopulse</strong><small>TECHNOLOGY</small></span><span className="brand-tagline">The Pulse of Clean Power.</span></div><div className="footer-links"><div><span>{t.footer.explore}</span><a href="#platform">{t.nav[0]}</a><a href="#pcm-tes">{t.nav[1]}</a><a href="#applications">{t.nav[2]}</a></div><div><span>{t.footer.connect}</span><a href="https://ecopulsegroup.com/contact" target="_blank" rel="noreferrer">{t.footer.business}</a><a href="https://ecopulsegroup.com/investors" target="_blank" rel="noreferrer">{t.footer.investor}</a><a href="https://pcm-tes.com/boca/" target="_blank" rel="noreferrer">BOCA International</a></div></div><div className="footer-bottom"><span>© 2026 ECOPULSE. ALL RIGHTS RESERVED.</span><span>THAILAND · SOUTHEAST ASIA</span></div></footer>
    </main>
  );
}
