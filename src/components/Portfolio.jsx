import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, faClose, faServer, faDesktop, faCloud, faDatabase,
  faShield, faAward, faMailBulk, faPhone, faArrowRight,
  faCode, faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
import { projectsAPI } from "../helpers/projectsAPI";

// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #000;
      --bg-surface: #0a0a0a;
      --bg-card: #111;
      --bg-card-hover: #161616;
      --border: rgba(255,255,255,0.08);
      --border-hover: rgba(255,255,255,0.18);
      --accent: #2997ff;
      --accent-soft: rgba(41,151,255,0.12);
      --text-primary: #f5f5f7;
      --text-secondary: #a1a1a6;
      --text-tertiary: #6e6e73;
      --font-display: 'Syne', sans-serif;
      --font-body: 'DM Sans', sans-serif;
      --radius: 18px;
      --radius-sm: 12px;
      --nav-h: 60px;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--bg); color: var(--text-primary);
      font-family: var(--font-body); font-size: 16px;
      line-height: 1.7; -webkit-font-smoothing: antialiased;
    }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 99px; }
    ::selection { background: rgba(41,151,255,0.25); color: #fff; }

    /* ── Navbar ── */
    .nav-root {
      position: fixed; top: 0; left: 0; right: 0; z-index: 999;
      height: var(--nav-h);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 32px;
      background: rgba(0,0,0,0.72);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 0.5px solid var(--border);
    }
    .nav-logo { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.3px; }
    .nav-logo span { color: var(--accent); }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-link-item { font-size: 13px; color: var(--text-secondary); cursor: pointer; transition: color 0.2s; text-decoration: none; }
    .nav-link-item:hover { color: var(--text-primary); }
    .nav-cta { font-size: 13px; font-weight: 500; padding: 7px 18px; border-radius: 99px; background: var(--accent); color: #fff; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.15s; }
    .nav-cta:hover { opacity: 0.85; transform: scale(1.03); }
    .nav-mobile-btn { display: none; background: none; border: none; color: var(--text-primary); font-size: 18px; cursor: pointer; }
    .nav-mobile-menu { display: none; position: fixed; top: var(--nav-h); left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.97); flex-direction: column; align-items: center; justify-content: center; gap: 32px; z-index: 998; }
    .nav-mobile-menu.open { display: flex; }
    .nav-mobile-link { font-family: var(--font-display); font-size: 32px; font-weight: 600; color: var(--text-primary); cursor: pointer; text-decoration: none; transition: color 0.2s; }
    .nav-mobile-link:hover { color: var(--accent); }
    @media (max-width: 768px) { .nav-links, .nav-cta { display: none; } .nav-mobile-btn { display: block; } }

    /* ── Hero ── */
    .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0 24px; padding-top: var(--nav-h); position: relative; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; z-index: 0; background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(41,151,255,0.12) 0%, transparent 70%); pointer-events: none; }
    .hero-grid { position: absolute; inset: 0; z-index: 0; background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
    .hero-eyebrow { font-size: 13px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 24px; z-index: 1; animation: fadeUp 0.8s ease both; }
    .hero-title { font-family: var(--font-display); font-size: clamp(48px, 8vw, 96px); font-weight: 800; line-height: 1.0; letter-spacing: -2px; color: var(--text-primary); z-index: 1; animation: fadeUp 0.8s 0.1s ease both; }
    .hero-title .accent { color: var(--accent); }
    .hero-typed { font-size: clamp(20px, 3vw, 32px); font-weight: 500; color: var(--text-primary); margin-top: 12px; z-index: 1; animation: fadeUp 0.8s 0.2s ease both; min-height: 44px; }
    .hero-typed .cursor { color: var(--accent); animation: blink 1s step-end infinite; }
    .hero-subtitle { font-size: clamp(15px, 2vw, 19px); font-weight: 300; color: var(--text-secondary); max-width: 520px; margin: 20px auto 0; z-index: 1; animation: fadeUp 0.8s 0.25s ease both; }
    .hero-actions { display: flex; gap: 16px; margin-top: 40px; z-index: 1; animation: fadeUp 0.8s 0.35s ease both; flex-wrap: wrap; justify-content: center; }
    .btn-primary { padding: 14px 32px; border-radius: 99px; background: var(--accent); color: #fff; font-size: 15px; font-weight: 500; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.15s; display: flex; align-items: center; gap: 8px; text-decoration: none; }
    .btn-primary:hover { opacity: 0.85; transform: scale(1.03); }
    .btn-ghost { padding: 14px 32px; border-radius: 99px; background: transparent; color: var(--text-primary); font-size: 15px; font-weight: 500; border: 0.5px solid var(--border-hover); cursor: pointer; transition: background 0.2s, transform 0.15s; text-decoration: none; }
    .btn-ghost:hover { background: rgba(255,255,255,0.06); transform: scale(1.03); }
    .hero-scroll { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--text-tertiary); font-size: 11px; letter-spacing: 1px; text-transform: uppercase; z-index: 1; animation: fadeIn 1s 1s ease both; }
    .hero-scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--text-tertiary), transparent); animation: scrollLine 2s ease-in-out infinite; }

    /* ── Sections ── */
    .section { padding: 120px 24px; }
    .section-inner { max-width: 1100px; margin: 0 auto; }
    .section-label { font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; display: block; }
    .section-title { font-family: var(--font-display); font-size: clamp(36px, 5vw, 64px); font-weight: 700; letter-spacing: -1.5px; line-height: 1.05; color: var(--text-primary); margin-bottom: 24px; }
    .section-body { font-size: 18px; font-weight: 300; line-height: 1.8; color: var(--text-secondary); max-width: 640px; }

    /* ── About ── */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 80px; }
    .about-card { background: var(--bg-card); border: 0.5px solid var(--border); border-radius: var(--radius); padding: 24px; transition: border-color 0.3s, background 0.3s; display: flex; align-items: flex-start; gap: 16px; }
    .about-card:hover { border-color: var(--border-hover); background: var(--bg-card-hover); }
    .about-card-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--accent-soft); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 17px; flex-shrink: 0; }
    .about-card-title { font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
    .about-card-body { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }
    .about-cards-grid { display: flex; flex-direction: column; gap: 12px; }
    @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 48px; } }

    /* ── Timeline ── */
    .timeline { position: relative; padding-left: 32px; margin-top: 64px; }
    .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: linear-gradient(to bottom, var(--accent), transparent); }
    .tl-item { position: relative; margin-bottom: 60px; }
    .tl-item::before { content: ''; position: absolute; left: -37px; top: 6px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px rgba(41,151,255,0.2); }
    .tl-date { font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
    .tl-role { font-family: var(--font-display); font-size: 20px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; letter-spacing: -0.3px; }
    .tl-project { font-size: 13px; color: var(--text-tertiary); margin-bottom: 12px; }
    .tl-body { font-size: 14px; color: var(--text-secondary); line-height: 1.8; }
    .tl-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
    .tl-tag { font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 99px; background: rgba(41,151,255,0.08); color: var(--accent); border: 0.5px solid rgba(41,151,255,0.2); }
    .edu-item { display: flex; align-items: flex-start; gap: 16px; padding: 24px; background: var(--bg-card); border: 0.5px solid var(--border); border-radius: var(--radius-sm); margin-bottom: 12px; }
    .edu-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--text-tertiary); flex-shrink: 0; margin-top: 8px; }

    /* ── Skills ── */
    .skills-wrap { background: var(--bg-surface); border-top: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); }

    /* ── Slider ── */
    .ps-root { position: relative; overflow: hidden; border-radius: 24px; background: #0a0a0a; border: 0.5px solid rgba(255,255,255,0.08); }
    .ps-track { display: flex; transition: transform 0.65s cubic-bezier(0.77, 0, 0.175, 1); will-change: transform; }
    .ps-slide { flex: 0 0 100%; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; }
    .ps-slide-img { position: relative; overflow: hidden; min-height: 420px; }
    .ps-slide-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
    .ps-root:hover .ps-slide-img img { transform: scale(1.04); }
    .ps-slide-img-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, transparent 50%, #0a0a0a 100%); }
    .ps-slide-content { padding: 48px 40px; display: flex; flex-direction: column; justify-content: center; }
    .ps-slide-num { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: rgba(41,151,255,0.5); margin-bottom: 16px; }
    .ps-slide-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #2997ff; background: rgba(41,151,255,0.1); border: 0.5px solid rgba(41,151,255,0.2); padding: 4px 12px; border-radius: 99px; margin-bottom: 20px; width: fit-content; }
    .ps-slide-title { font-family: 'Syne', sans-serif; font-size: clamp(22px, 3vw, 36px); font-weight: 700; letter-spacing: -1px; line-height: 1.1; color: #f5f5f7; margin-bottom: 14px; }
    .ps-slide-desc { font-size: 14px; color: #a1a1a6; line-height: 1.8; margin-bottom: 24px; font-weight: 300; }
    .ps-slide-techs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
    .ps-tech { font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 6px; background: rgba(255,255,255,0.05); color: #6e6e73; border: 0.5px solid rgba(255,255,255,0.08); }
    .ps-slide-actions { display: flex; gap: 12px; flex-wrap: wrap; }
    .ps-btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 99px; background: #2997ff; color: #fff; font-size: 13px; font-weight: 500; border: none; cursor: pointer; text-decoration: none; transition: opacity 0.2s, transform 0.15s; }
    .ps-btn-primary:hover { opacity: 0.85; transform: scale(1.03); }
    .ps-btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 99px; background: transparent; color: #f5f5f7; font-size: 13px; font-weight: 500; border: 0.5px solid rgba(255,255,255,0.15); cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; }
    .ps-btn-ghost:hover { background: rgba(255,255,255,0.06); transform: scale(1.03); }
    .ps-nav { display: flex; align-items: center; justify-content: space-between; padding: 18px 28px; border-top: 0.5px solid rgba(255,255,255,0.06); }
    .ps-dots { display: flex; gap: 8px; align-items: center; }
    .ps-dot { height: 3px; border-radius: 99px; background: rgba(255,255,255,0.15); cursor: pointer; transition: width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s; width: 20px; }
    .ps-dot.active { width: 40px; background: #2997ff; }
    .ps-arrows { display: flex; gap: 8px; }
    .ps-arrow { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 0.5px solid rgba(255,255,255,0.1); color: #a1a1a6; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; transition: background 0.2s, color 0.2s, transform 0.15s; }
    .ps-arrow:hover { background: rgba(255,255,255,0.1); color: #f5f5f7; transform: scale(1.08); }
    .ps-progress { position: absolute; bottom: 0; left: 0; height: 2px; background: #2997ff; border-radius: 0 99px 99px 0; pointer-events: none; }
    @media (max-width: 768px) {
      .ps-slide { grid-template-columns: 1fr; }
      .ps-slide-img { min-height: 200px; }
      .ps-slide-img-overlay { background: linear-gradient(180deg, transparent 30%, #0a0a0a 100%); }
      .ps-slide-content { padding: 24px 20px; }
    }

    /* ── Collage ── */
    .cg-root { margin-top: 80px; }
    .cg-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 260px; gap: 12px; }
    .cg-item { position: relative; overflow: hidden; border-radius: 18px; cursor: pointer; border: 0.5px solid rgba(255,255,255,0.06); }
    .cg-item.span2 { grid-column: span 2; }
    .cg-item.span2v { grid-row: span 2; }
    .cg-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
    .cg-item:hover img { transform: scale(1.06); }
    .cg-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%); opacity: 0.7; transition: opacity 0.3s; }
    .cg-item:hover .cg-overlay { opacity: 1; }
    .cg-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; transform: translateY(8px); transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94); }
    .cg-item:hover .cg-info { transform: translateY(0); }
    .cg-info-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 600; color: #fff; margin-bottom: 4px; }
    .cg-info-desc { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5; margin-bottom: 12px; opacity: 0; transform: translateY(6px); transition: opacity 0.3s 0.05s, transform 0.3s 0.05s; }
    .cg-item:hover .cg-info-desc { opacity: 1; transform: translateY(0); }
    .cg-info-btns { display: flex; gap: 8px; opacity: 0; transform: translateY(8px); transition: opacity 0.3s 0.1s, transform 0.3s 0.1s; }
    .cg-item:hover .cg-info-btns { opacity: 1; transform: translateY(0); }
    .cg-btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 99px; font-size: 11px; font-weight: 500; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); text-decoration: none; cursor: pointer; border: none; transition: background 0.2s, transform 0.15s; }
    .cg-btn-code { background: rgba(255,255,255,0.15); color: #fff; }
    .cg-btn-demo { background: #2997ff; color: #fff; }
    .cg-btn:hover { transform: scale(1.05); }
    .cg-btn-code:hover { background: rgba(255,255,255,0.25); }
    .cg-btn-demo:hover { opacity: 0.85; }
    @media (max-width: 768px) {
      .cg-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
      .cg-item.span2, .cg-item.span2v { grid-column: span 1; grid-row: span 1; }
      .cg-info-desc, .cg-info-btns { opacity: 1; transform: none; }
    }

    /* ── Contact ── */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 64px; }
    .contact-link { display: flex; align-items: center; gap: 16px; padding: 20px 24px; border-radius: var(--radius-sm); background: var(--bg-card); border: 0.5px solid var(--border); text-decoration: none; transition: border-color 0.25s, background 0.25s, transform 0.2s; margin-bottom: 12px; cursor: pointer; }
    .contact-link:hover { border-color: var(--border-hover); background: var(--bg-card-hover); transform: translateX(6px); }
    .contact-link-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--accent-soft); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 16px; flex-shrink: 0; }
    .contact-link-label { font-size: 13px; color: var(--text-tertiary); }
    .contact-link-value { font-size: 15px; font-weight: 500; color: var(--text-primary); }
    .contact-arrow { margin-left: auto; color: var(--text-tertiary); font-size: 14px; transition: transform 0.2s; }
    .contact-link:hover .contact-arrow { transform: translateX(4px); color: var(--accent); }
    @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 48px; } }

    /* ── Footer / Social ── */
    .footer { border-top: 0.5px solid var(--border); padding: 32px 24px; text-align: center; color: var(--text-tertiary); font-size: 13px; }
    .fixed-social { position: fixed; bottom: 0; right: 32px; z-index: 100; display: flex; flex-direction: column; align-items: center; gap: 16px; }
    .fixed-social a { color: var(--text-tertiary); transition: color 0.2s; }
    .fixed-social a:hover { color: var(--text-primary); }
    .fixed-social-line { width: 1px; height: 80px; background: var(--border-hover); }
    @media (max-width: 768px) { .fixed-social { display: none; } }

    /* ── Keyframes ── */
    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
    @keyframes blink   { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    @keyframes scrollLine { 0%, 100% { opacity: 1; transform: scaleY(1); } 50% { opacity: 0.3; transform: scaleY(0.6); } }
    .animate-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .animate-reveal.visible { opacity: 1; transform: translateY(0); }
  `}</style>
);

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useTyped(strings) {
  const [text, setText] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIdx];
    const speed = deleting ? 40 : 90;
    const pause = deleting ? 400 : 1800;
    let t;
    if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setStrIdx(i => (i + 1) % strings.length);
    } else {
      t = setTimeout(() => {
        setText(current.slice(0, charIdx + (deleting ? -1 : 1)));
        setCharIdx(c => c + (deleting ? -1 : 1));
      }, speed);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, strIdx, strings]);

  return text;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-reveal");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const backendProjects = projectsAPI.map(p => ({
  title: p.name,
  description: p.description,
  image: p.img,
  imgPosition: "center top",
  tag: (p.skills?.[0]?.name || "") + " · " + (p.linksRepo?.[0]?.type || ""),
  techs: p.skills?.map(s => s.name) || [],
  github: p.linksRepo?.find(l => l.type === "Backend")?.link || p.linksRepo?.[0]?.link || "#",
  demo: p.linksRepo?.find(l => l.type === "Frontend")?.link || null,
  icon: faServer,
}));

const frontendProjects = [
  { title: "App Restaurant", desc: "Dashboard for a coffee shop with full CRUD on products and orders.", image: "/images/project_frontend3.png", github: "https://github.com/Daniel-LA0303/coffe_app", demo: "https://magnificent-lamington-969efd.netlify.app", span: "span2v" },
  { title: "Weather App", desc: "City weather queries powered by the OpenWeather API.", image: "/images/project_frontend5.png", github: "https://github.com/Daniel-LA0303/weather", demo: "https://dulcet-muffin-eeabc4.netlify.app/", span: "" },
  { title: "My first CRUD", desc: "First static CRUD built with ReactJS and Bootstrap.", image: "/images/project_frontend4.png", github: "https://github.com/Daniel-LA0303/siempe-CRUD", demo: "https://glittering-heliotrope-f4aeee.netlify.app/", span: "" },
  { title: "FFMI Calculator", desc: "Fat-Free Mass Index calculator with a clean, user-friendly UI.", image: "/images/project_frontend1.png", github: "https://github.com/Daniel-LA0303/FFMI", demo: "https://kaleidoscopic-blini-48082b.netlify.app/", span: "" },
  { title: "App Movies", desc: "Movie browser built on a movie API with sliders and CSS animations.", image: "/images/project_frontend2.png", github: "https://github.com/Daniel-LA0303/appMovies", demo: "https://stellular-marigold-be1330.netlify.app/", span: "span2" },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["about-me", "experience", "projects", "contact"];
  const labels = ["About", "Experience", "Projects", "Contact"];
  return (
    <>
      <nav className="nav-root">
        <div className="nav-logo">Daniel<span>.</span>LA</div>
        <ul className="nav-links">
          {links.map((to, i) => (
            <li key={to}>
              <Link className="nav-link-item" to={to} spy smooth offset={-70} duration={600}>{labels[i]}</Link>
            </li>
          ))}
        </ul>
        <Link to="contact" spy smooth offset={-70} duration={600}>
          <button className="nav-cta">Hire me</button>
        </Link>
        <button className="nav-mobile-btn" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faClose : faBars} />
        </button>
      </nav>
      <div className={`nav-mobile-menu ${open ? "open" : ""}`}>
        {links.map((to, i) => (
          <Link key={to} className="nav-mobile-link" to={to} spy smooth offset={-70} duration={600} onClick={() => setOpen(false)}>
            {labels[i]}
          </Link>
        ))}
      </div>
    </>
  );
};

// ─── HERO ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const typed = useTyped(["NodeJS Developer", "Java Developer", "Backend Engineer", "Microservices Architect"]);
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <span className="hero-eyebrow">Available for opportunities</span>
      <h1 className="hero-title">Luis Alberto<br /><span className="accent">Zacarias</span></h1>
      <div className="hero-typed">{typed}<span className="cursor">|</span></div>
      <p className="hero-subtitle">Computer Science graduate building high-performance backend systems, microservices, and cloud-native applications.</p>
      <div className="hero-actions">
        <Link to="projects" spy smooth offset={-70} duration={600}>
          <button className="btn-primary">View Projects <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 14 }} /></button>
        </Link>
        <Link to="contact" spy smooth offset={-70} duration={600}>
          <button className="btn-ghost">Get in touch</button>
        </Link>
      </div>
      <div className="hero-scroll"><span>scroll</span><div className="hero-scroll-line" /></div>
    </section>
  );
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
const About = () => {
  const cards = [
    { icon: faServer, title: "Backend", body: "REST APIs & microservices with Java (Spring Boot) and Node.js (NestJS/Express)." },
    { icon: faDesktop, title: "Frontend", body: "React with responsive UI — clean, fast, and accessible interfaces." },
    { icon: faCloud, title: "Cloud — AWS", body: "Deployments on EC2, Docker containers, and cloud-native architecture at scale." },
    { icon: faDatabase, title: "Databases", body: "MySQL, PostgreSQL, MongoDB. ORM expertise with JPA, Sequelize, Mongoose." },
  ];
  return (
    <section className="section" id="about-me">
      <div className="section-inner">
        <span className="section-label animate-reveal">About me</span>
        <div className="about-grid">
          <div>
            <h2 className="section-title animate-reveal" style={{ transitionDelay: "0.05s" }}>Crafting systems<br />that scale.</h2>
            <p className="section-body animate-reveal" style={{ transitionDelay: "0.1s" }}>
              I'm a <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Computer Science graduate</strong> with hands-on professional experience in backend development — from REST and SOAP services in Java to containerised microservices on AWS. I care about clean architecture, testable code, and systems that last.
            </p>
            <div className="animate-reveal" style={{ marginTop: 32, transitionDelay: "0.15s" }}>
              <a href="https://www.credly.com/badges/41369fc0-6569-4f0f-b940-07e436d0671b/public_url" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 99, background: "linear-gradient(135deg,#f59e0b,#ef4444)", color: "#fff", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
                <FontAwesomeIcon icon={faAward} style={{ fontSize: 13 }} />
                AWS Academy Certificate
              </a>
            </div>
          </div>
          <div className="about-cards-grid">
            {cards.map((c, i) => (
              <div className="about-card animate-reveal" key={c.title} style={{ transitionDelay: `${0.08 + i * 0.07}s` }}>
                <div className="about-card-icon"><FontAwesomeIcon icon={c.icon} /></div>
                <div>
                  <div className="about-card-title">{c.title}</div>
                  <div className="about-card-body">{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
const Experience = () => {
  const jobs = [
    { date: "Jan 2025 — May 2025", role: "Full Stack Developer", body: "Led end-to-end development with NestJS microservices and Spring Framework APIs. Integrated OpenAI agents, managed MySQL with Sequelize ORM, and deployed Docker containers on AWS via MobaXterm.", tags: ["NestJS", "Angular", "Java", "Spring", "MySQL", "Docker", "AWS", "OpenAI"] },
    { date: "Jan 2024 — Jun 2024", role: "Backend Developer Jr", project: "Project: Citas", body: "Built REST and SOAP services in Java. Wrote JUnit5 unit tests, created sequence & use-case diagrams, optimised SQL queries, and managed concurrency with JPA on WebLogic / OracleDB.", tags: ["Java 8", "JPA", "JUnit5", "OracleDB", "WebLogic", "Jenkins", "SonarQube"] },
    { date: "May 2023 — Sep 2023", role: "Java Microservices Developer", project: "Project: E-commerce", body: "Designed an event-driven microservices platform with API Gateway, Eureka, Circuit Breaker (Resilience4j), JWT security, OpenFeign communication, and monitoring via Grafana + Prometheus.", tags: ["Java 17", "Spring Cloud", "Docker", "Eureka", "JWT", "Grafana", "Prometheus"] },
    { date: "Aug 2023", role: "MERN Stack Developer", project: "Project: Blog System", body: "Built a full blog platform with ExpressJS, MongoDB, ReactJS, Socket.IO real-time chat, JWT auth, Cloudinary image uploads, and deployed on AWS EC2.", tags: ["React", "Express", "MongoDB", "Socket.IO", "Redux", "AWS EC2", "Cloudinary"] },
    { date: "May 2022 — Dec 2022", role: "JavaEE & GraphQL Developer", project: "Projects: Project Manager + CRM", body: "Task management system in JavaEE / JDBC on Apache Tomcat, and a GraphQL CRM API with Apollo Server, MongoDB, and JWT authentication.", tags: ["JavaEE", "JDBC", "JSP", "GraphQL", "Apollo", "MongoDB", "Mongoose"] },
  ];
  const edu = [
    { date: "Aug 2018 — Dec 2023", title: "B.Sc. Computer Science Engineering", org: "Benemérita Universidad Autónoma de Puebla, MX" },
    { date: "Aug 2014 — Jul 2017", title: "Technical Bachelor in Programming", org: "CETis No. 67 Daniel Cabrera Rivera, MX" },
  ];
  return (
    <section className="section" id="experience" style={{ background: "var(--bg-surface)" }}>
      <div className="section-inner">
        <span className="section-label animate-reveal">Experience</span>
        <h2 className="section-title animate-reveal" style={{ transitionDelay: "0.05s" }}>Work history</h2>
        <div className="timeline">
          {jobs.map((j, i) => (
            <div className="tl-item animate-reveal" key={i} style={{ transitionDelay: `${0.05 + i * 0.08}s` }}>
              <div className="tl-date">{j.date}</div>
              <div className="tl-role">{j.role}</div>
              {j.project && <div className="tl-project">{j.project}</div>}
              <p className="tl-body">{j.body}</p>
              <div className="tl-tags">{j.tags.map(t => <span className="tl-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 80 }}>
          <h3 className="animate-reveal" style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--text-primary)", marginBottom: 24, letterSpacing: -0.5 }}>Education</h3>
          {edu.map((e, i) => (
            <div className="edu-item animate-reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="edu-dot" />
              <div>
                <div style={{ fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>{e.date}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>{e.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>{e.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────
const Sphere = () => {
  const tagCanvasOptions = { imageScale: 2, initial: [0.1, -0.1], reverse: true, tooltip: "native", tooltipDelay: 0, wheelZoom: false };
  const iconSlugs = ["java", "spring", "react", "html5", "nodedotjs", "express", "amazonaws", "postgresql", "docker", "git", "github", "visualstudiocode", "mysql", "mongodb", "linux", "typescript", "javascript", "css3", "kubernetes", "junit5"];
  const iconTags = iconSlugs.map(slug => ({ id: slug, simpleIcon: allIcons.Get(slug) }));
  return (
    <div className="skills-wrap section">
      <div className="section-inner">
        <span className="section-label animate-reveal" style={{ textAlign: "center", display: "block" }}>Skills</span>
        <h2 className="section-title animate-reveal" style={{ textAlign: "center", transitionDelay: "0.05s" }}>Tech stack</h2>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <IconCloud key={v4()} id="icon-cloud" minContrastRatio={1} iconSize={40} backgroundHexColor="#0a0a0a" fallbackHexColor="#2997ff" tags={iconTags} tagCanvasOptions={tagCanvasOptions} />
        </div>
      </div>
    </div>
  );
};

// ─── PROJECT SLIDER ──────────────────────────────────────────────────────────
const ProjectSlider = ({ data, autoplaySpeed = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedAtRef = useRef(0);
  const total = data.length;

  const goTo = useCallback((idx) => {
    setCurrent((idx + total) % total);
    startTimeRef.current = performance.now();
    setProgress(0);
    pausedAtRef.current = 0;
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    const tick = (now) => {
      if (paused) {
        startTimeRef.current = now - (pausedAtRef.current / 100) * autoplaySpeed;
        progressRef.current = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - (startTimeRef.current || now);
      const pct = Math.min((elapsed / autoplaySpeed) * 100, 100);
      setProgress(pct);
      pausedAtRef.current = pct;
      if (pct >= 100) {
        setCurrent(c => (c + 1) % total);
        startTimeRef.current = performance.now();
        setProgress(0);
        pausedAtRef.current = 0;
      }
      progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [autoplaySpeed, total, paused]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const p = data[current];

  return (
    <>
      {/* ── Modal ── */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, cursor: "zoom-out",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              animation: "scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              flexShrink: 0,
            }}
          >
            {/* X pegado a la esquina superior derecha */}
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute", top: -14, right: -14, zIndex: 1,
                width: 30, height: 30, borderRadius: "50%",
                background: "#1c1c1c",
                border: "0.5px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#2a2a2a"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#1c1c1c"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>

            {/* imagen con dimensiones fijas */}
            <div style={{
              width: 760, height: 480,
              borderRadius: 14, overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              background: "#0a0a0a",
            }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: p.imgPosition || "center top",
                  display: "block",
                }}
              />
            </div>

            {/* label */}
            <div style={{
              marginTop: 10, textAlign: "center",
              color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: 1,
            }}>
              {p.title} — Esc to close
            </div>
          </div>
        </div>
      )}

      {/* ── Slider ── */}
      <div
        className="ps-root"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          startTimeRef.current = performance.now() - (pausedAtRef.current / 100) * autoplaySpeed;
          setPaused(false);
        }}
      >
        <div style={{ position: "relative", height: 440, overflow: "hidden" }}>

          {/* capas con crossfade */}
          {data.map((slide, i) => (
            <div
              key={i}
              style={{
                position: "absolute", inset: 0,
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.7s ease",
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: slide.imgPosition || "center top",
                  display: "block",
                  transform: i === current ? "scale(1.03)" : "scale(1)",
                  transition: "transform 6s ease",
                }}
              />
            </div>
          ))}

          {/* gradientes */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.1) 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 60%)", pointerEvents: "none" }} />

          {/* badge paused */}
          {paused && (
            <div style={{
              position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)",
              fontSize: 10, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(8px)", padding: "4px 12px", borderRadius: 99,
              border: "0.5px solid rgba(255,255,255,0.1)",
            }}>
              ⏸ paused
            </div>
          )}

          {/* botón ver screenshot */}
          <button
            onClick={() => setModalOpen(true)}
            style={{
              position: "absolute", top: 20, right: 20,
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 16px", borderRadius: 99,
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              border: "0.5px solid rgba(255,255,255,0.18)",
              color: "#fff", fontSize: 11, fontWeight: 500, letterSpacing: 0.5,
              cursor: "pointer", transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 10 }} />
            View screenshot
          </button>

          {/* número */}
          <div style={{
            position: "absolute", top: 24, left: 24,
            fontSize: 11, fontWeight: 500, letterSpacing: 2,
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
          }}>
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

          {/* contenido */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 32px 28px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 500, letterSpacing: 1, textTransform: "uppercase",
              color: "#2997ff", background: "rgba(41,151,255,0.15)",
              border: "0.5px solid rgba(41,151,255,0.3)",
              padding: "4px 12px", borderRadius: 99, marginBottom: 12,
            }}>
              <FontAwesomeIcon icon={p.icon} style={{ fontSize: 10 }} /> {p.tag}
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px,3vw,34px)", fontWeight: 700,
              letterSpacing: -0.8, color: "#fff",
              marginBottom: 10, lineHeight: 1.15,
            }}>
              {p.title}
            </h3>

            <p style={{
              fontSize: 13, color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75, marginBottom: 16,
              maxWidth: 580, fontWeight: 300,
            }}>
              {p.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {p.techs.map(t => (
                <span key={t} style={{
                  fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 6,
                  background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="ps-btn-primary" href={p.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCode} style={{ fontSize: 12 }} /> View Code
              </a>
              {p.demo && (
                <a className="ps-btn-ghost" href={p.demo} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 12 }} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* nav */}
        <div className="ps-nav">
          <div className="ps-dots">
            {data.map((_, i) => (
              <div key={i} className={`ps-dot ${i === current ? "active" : ""}`} onClick={() => goTo(i)} />
            ))}
          </div>
          <div className="ps-arrows">
            <button className="ps-arrow" onClick={prev}>
              <FontAwesomeIcon icon={faArrowRight} style={{ transform: "rotate(180deg)" }} />
            </button>
            <button className="ps-arrow" onClick={next}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="ps-progress" style={{ width: `${progress}%` }} />
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};
// ─── COLLAGE GRID ────────────────────────────────────────────────────────────
const AREAS = ["a", "b", "c", "d", "e"];

const CollageGrid = ({ items }) => (
  <div className="cg-root">
    <span className="section-label" style={{ marginBottom: 12 }}>Frontend work</span>
    <h3 style={{
      fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,44px)",
      fontWeight: 700, letterSpacing: -1, color: "var(--text-primary)", marginBottom: 32
    }}>
      UI projects
    </h3>
    <div className="cg-grid-5">
      {items.slice(0, 5).map((p, i) => (
        <div className={`cg-item cg-area-${AREAS[i]}`} key={i}>
          <img src={p.image} alt={p.title} loading="lazy" />
          <div className="cg-overlay" />
          <div className="cg-info">
            <div className="cg-info-title">{p.title}</div>
            <div className="cg-info-desc">{p.desc}</div>
            <div className="cg-info-btns">
              <a className="cg-btn cg-btn-code" href={p.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCode} style={{ fontSize: 10 }} /> Code
              </a>
              {p.demo && (
                <a className="cg-btn cg-btn-demo" href={p.demo} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 10 }} /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CgCard = ({ p }) => (
  <div className="cg-item" style={{ height: 260 }}>
    <img src={p.image} alt={p.title} loading="lazy" />
    <div className="cg-overlay" />
    <div className="cg-info">
      <div className="cg-info-title">{p.title}</div>
      <div className="cg-info-desc">{p.desc}</div>
      <div className="cg-info-btns">
        <a className="cg-btn cg-btn-code" href={p.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCode} style={{ fontSize: 10 }} /> Code
        </a>
        {p.demo && (
          <a className="cg-btn cg-btn-demo" href={p.demo} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 10 }} /> Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// ─── PROJECTS ────────────────────────────────────────────────────────────────
const Projects = () => (
  <section className="section" id="projects">
    <div className="section-inner">
      <span className="section-label animate-reveal">Projects</span>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 12 }}>
        <h2 className="section-title animate-reveal" style={{ marginBottom: 0, transitionDelay: "0.05s" }}>Selected work</h2>
        <p className="animate-reveal" style={{ fontSize: 15, color: "var(--text-secondary)", maxWidth: 380, lineHeight: 1.7, fontWeight: 300, transitionDelay: "0.1s" }}>
          Backend-first developer — from enterprise Java to Node.js microservices and everything in between.
        </p>
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "32px 0 40px" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-tertiary)", whiteSpace: "nowrap" }}>Backend & full-stack</span>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
      </div>
      <div className="animate-reveal" style={{ transitionDelay: "0.1s" }}>
        <ProjectSlider data={backendProjects} autoplaySpeed={6000} />
      </div>
      <div className="animate-reveal" style={{ transitionDelay: "0.15s" }}>
        <CollageGrid items={frontendProjects} />
      </div>
    </div>
  </section>
);

// ─── CONTACT ─────────────────────────────────────────────────────────────────
const Contact = () => {
  const links = [
    { icon: "in", label: "LinkedIn", value: "Luis Alberto Zacarias Daniel", href: "https://www.linkedin.com/in/luis-alberto-zacarias-daniel-137118209/" },
    { icon: "gh", label: "GitHub", value: "Daniel-LA0303", href: "https://github.com/Daniel-LA0303" },
    { icon: faMailBulk, label: "Email", value: "03lazd030399@gmail.com", href: "mailto:03lazd030399@gmail.com", fa: true },
    { icon: faPhone, label: "WhatsApp", value: "+52 221 239 4323", href: "https://wa.me/2212394323", fa: true },
  ];
  return (
    <section className="section" id="contact" style={{ background: "var(--bg-surface)" }}>
      <div className="section-inner">
        <span className="section-label animate-reveal">Contact</span>
        <div className="contact-grid">
          <div>
            <h2 className="section-title animate-reveal" style={{ transitionDelay: "0.05s" }}>Let's build<br />something great.</h2>
            <p className="section-body animate-reveal" style={{ fontSize: 16, transitionDelay: "0.1s" }}>
              I'm open to full-time positions, freelance projects, and interesting collaborations. Drop me a message — I reply fast.
            </p>
          </div>
          <div className="animate-reveal" style={{ transitionDelay: "0.1s" }}>
            {links.map((l, i) => (
              <a key={i} className="contact-link" href={l.href} target="_blank" rel="noopener noreferrer">
                <div className="contact-link-icon">
                  {l.fa
                    ? <FontAwesomeIcon icon={l.icon} style={{ fontSize: 16 }} />
                    : <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13 }}>{l.icon}</span>
                  }
                </div>
                <div>
                  <div className="contact-link-label">{l.label}</div>
                  <div className="contact-link-value">{l.value}</div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" style={{ fontSize: 14 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FIXED SOCIAL ────────────────────────────────────────────────────────────
const ContactFixed = () => (
  <div className="fixed-social">
    <a href="https://github.com/Daniel-LA0303" target="_blank" rel="noopener noreferrer">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
    <a href="https://www.linkedin.com/in/luis-alberto-zacarias-daniel-137118209/" target="_blank" rel="noopener noreferrer">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
    <div className="fixed-social-line" />
  </div>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    Designed & built by{" "}
    <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Luis Alberto Zacarias Daniel</span>
    {" "}— {new Date().getFullYear()}
  </footer>
);

// ─── ROOT ────────────────────────────────────────────────────────────────────
const Portfolio = () => {
  useReveal();
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Sphere />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ContactFixed />
    </>
  );
};

export default Portfolio;