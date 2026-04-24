import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faLanguage,
  faRobot,
  faInbox,
  faCalendarAlt,
  faComments,
  faGauge,
  faFolder,
  faClipboardList,
  faTableColumns,
  faTags,
  faUsers,
  faAddressBook,
  faSitemap,
  faFlag,
  faBell,
  faBolt,
  faShop,
  faBullhorn,
  faMobileScreenButton,
  faEnvelopesBulk,
  faLink,
  faArrowUpRightFromSquare,
  faCode,
  faXmark,
  faChevronDown,
  faExpand,
  faCircleCheck,
  faCircleHalfStroke,
  faSliders
} from "@fortawesome/free-solid-svg-icons";

// ─── FALLBACK IMAGE (se usa cuando el item no tiene `media` definido) ─────────
const FALLBACK_IMG = "/images/backend4.png";

// ─── GIF / IMAGE PLACEHOLDER ──────────────────────────────────────────────────
// `media`  → ruta al gif/imagen real del feature (opcional)
// `label`  → texto descriptivo que se muestra sobre la imagen
// `icon`   → icono FontAwesome de respaldo
// `onClick`→ abre el modal
const GifPlaceholder = ({ media, label, icon, onClick }) => (
  <div
    onClick={onClick}
    className={`relative w-full aspect-video bg-white/[0.025] flex flex-col items-center justify-center gap-3 overflow-hidden ${onClick ? "cursor-zoom-in" : ""
      }`}
  >
    {/* imagen / gif del feature — usa FALLBACK si no se pasa media */}
    <img
      src={media || FALLBACK_IMG}
      alt={label}
      className="absolute inset-0 w-full h-full object-cover object-top"
      style={{ opacity: media ? 0.85 : 0.18 }}
    />

    {/* overlay más oscuro cuando es fallback para que no distraiga */}
    <div
      className="absolute inset-0"
      style={{
        background: media
          ? "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.65) 100%)",
      }}
    />

    {/* icono + label — siempre visible encima */}
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/30 flex items-center justify-center text-[#2997ff]">
        <FontAwesomeIcon icon={icon} className="text-base" />
      </div>
      <span className="text-[10px] tracking-[1.5px] uppercase text-white/40 font-medium">
        {/* aqui va gif: {label} */}
        {label}
      </span>
    </div>

    {/* badge "Preview" */}
    {onClick && (
      <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 bg-black/50 border border-white/15 rounded-md px-2 py-1 text-white/50 text-[10px] tracking-wide">
        <FontAwesomeIcon icon={faExpand} className="text-[9px]" />
        Preview
      </div>
    )}
  </div>
);

// ─── MODAL ────────────────────────────────────────────────────────────────────
const Modal = ({ item, onClose }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl"
        style={{ animation: "scaleIn 0.28s cubic-bezier(0.34,1.46,0.64,1)" }}
      >
        {/* botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-3.5 -right-3.5 z-10 w-7 h-7 rounded-full bg-[#1c1c1c] border border-white/15 text-white/60 hover:text-white hover:bg-[#2a2a2a] transition-colors flex items-center justify-center text-xs cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
          {/* área de imagen — muestra el gif/img real si existe, si no el fallback */}
          <div className="relative w-full aspect-video bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
            <img
              src={item.media || FALLBACK_IMG}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ opacity: item.media ? 0.9 : 0.45 }}
            />
            {/* icono centrado solo cuando no hay gif real */}
            {!item.media && (
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#2997ff]/15 border border-[#2997ff]/40 flex items-center justify-center text-[#2997ff]">
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </div>
                <span className="text-[10px] tracking-[2px] uppercase text-white/30">
                  {/* aqui va gif: {item.gifLabel} */}
                  {item.gifLabel}
                </span>
              </div>
            )}
          </div>

          {/* info del feature */}
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                {item.num && (
                  <div className="text-[11px] tracking-[2px] uppercase text-[#2997ff] font-medium mb-1.5">
                    {item.num}
                  </div>
                )}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-lg font-light">
                  {item.desc}
                </p>
              </div>

              {item.status === "done" ? (
                <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[1px] uppercase text-[#30d158] bg-[#30d158]/10 border border-[#30d158]/25 px-3.5 py-1.5 rounded-full whitespace-nowrap">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[10px]" />
                  Complete
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[1px] uppercase text-[#ffd60a] bg-[#ffd60a]/10 border border-[#ffd60a]/20 px-3.5 py-1.5 rounded-full whitespace-nowrap">
                  <FontAwesomeIcon icon={faCircleHalfStroke} className="text-[10px]" />
                  {item.progress}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-2.5 text-center text-[10px] tracking-[1px] text-white/20">
          {item.title} — press Esc to close
        </p>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.93) } to { opacity:1; transform:scale(1) } }
      `}</style>
    </div>
  );
};

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status, progress }) =>
  status === "done" ? (
    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[1px] uppercase text-[#30d158] bg-[#30d158]/10 border border-[#30d158]/25 px-2.5 py-1 rounded-full mt-3">
      <FontAwesomeIcon icon={faCircleCheck} className="text-[10px]" />
      Complete
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[1px] uppercase text-[#ffd60a] bg-[#ffd60a]/10 border border-[#ffd60a]/20 px-2.5 py-1 rounded-full mt-3">
      <FontAwesomeIcon icon={faCircleHalfStroke} className="text-[10px]" />
      {progress}
    </span>
  );

// ─── FEATURE CARD ─────────────────────────────────────────────────────────────
const FeatureCard = ({ item, onOpen }) => (
  <div className="border border-white/[0.09] rounded-2xl overflow-hidden bg-white/[0.025] transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-0.5">
    <div className="border-b border-white/[0.06]">
      <GifPlaceholder
        media={item.media}
        label={item.gifLabel}
        icon={item.icon}
        onClick={() => onOpen(item)}
      />
    </div>
    <div className="p-5">
      {item.num && (
        <div className="text-[11px] tracking-[2px] uppercase text-[#2997ff] font-medium mb-2">
          {item.num}
        </div>
      )}
      <h4 className="text-base font-semibold text-white tracking-tight mb-2">{item.title}</h4>
      <p className="text-[13px] text-white/45 leading-relaxed font-light">{item.desc}</p>
      <StatusBadge status={item.status} progress={item.progress} />
    </div>
  </div>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
// `media` → ruta al gif/img del feature dentro de /public
//           dejar undefined (o no poner la key) = usa el fallback
const PRIMARY_FEATURES = [
  {
    num: "01 — Theming",
    title: "Seamless dark / light mode",
    desc: "Instant theme switching with system-aware defaults. Every component adapts — no flicker, no broken styles.",
    icon: faPalette,
    gifLabel: "Theme Switching",
    status: "done",
    media: "/images/agents-ia/themes.gif", // ej: "/images/gifs/theme-switch.gif"
  },
  {
    num: "02 — i18n",
    title: "Full internationalization",
    desc: "Multi-language support baked in at the core. Switch locales live, including RTL-aware layouts and date formats.",
    icon: faLanguage,
    gifLabel: "Language Switching",
    status: "done",
    media: "/images/agents-ia/language.gif", // ej: "/images/gifs/i18n.gif"
  },
  {
    num: "03 — Agents",
    title: "Visual AI agent builder",
    desc: "React Flow-based canvas to design, connect, and deploy AI agents. Node types for triggers, LLM calls, conditions, and outputs.",
    icon: faRobot,
    gifLabel: "Build Agent",
    status: "prog",
    progress: "70–80%",
    media: "/images/agents-ia/build-agent.gif", // ej: "/images/gifs/agent-builder.gif"
  },
  {
    num: "04 — Inbox",
    title: "Unified messaging hub",
    desc: "Centralized inbox aggregating messages from all connected channels. Real-time delivery via WebSockets.",
    icon: faInbox,
    gifLabel: "Inbox",
    status: "prog",
    progress: "In development",
    media: "/images/agents-ia/inbox.gif", // ej: "/images/gifs/inbox.gif"
  },
  {
    num: "05 — Calendar",
    title: "Appointments & scheduling",
    desc: "Full calendar view with appointment booking, reminders, and availability management integrated with the CRM.",
    icon: faCalendarAlt,
    gifLabel: "Calendar",
    status: "done",
    media: "/images/agents-ia/calendar.gif", // ej: "/images/gifs/calendar.gif"
  },
  {
    num: "06 — Chat",
    title: "Real-time team collaboration",
    desc: "Internal messaging with channels, threads, and file sharing. Powered by WebSockets for zero-latency delivery.",
    icon: faComments,
    gifLabel: "Internal Chat",
    status: "done",
    media: "/images/agents-ia/chat.gif", // ej: "/images/gifs/chat.gif"
  },
];

const SECONDARY_FEATURES = [
  {
    title: "Dynamic dashboard",
    desc: "Widget-based layout that adapts to each organization's plan tier. Metrics, charts, and shortcuts in one view.",
    icon: faGauge,
    gifLabel: "Dashboard",
    status: "prog",
    progress: "~50%",
    media: "/images/agents-ia/dashboard.gif", // ej: "/images/gifs/dashboard.gif"
  },
  {
    title: "Projects — Kanban & table",
    desc: "Dual-view project management. Drag-and-drop kanban for visual workflows, table view for data-heavy operations.",
    icon: faTableColumns,
    gifLabel: "Projects",
    status: "done",
    media: "/images/agents-ia/projects.gif", // ej: "/images/gifs/projects.gif"
  },
  {
    title: "Files & folder management",
    desc: "Hierarchical file system with drag-and-drop, previews, and permission-aware sharing across teams.",
    icon: faFolder,
    gifLabel: "Folders",
    status: "prog",
    progress: "~90%",
    media: "/images/agents-ia/folders.gif", // ej: "/images/gifs/folders.gif"
  },
  {
    title: "Form builder + embed",
    desc: "Visual drag-and-drop form builder. Generate embeddable snippets and capture responses directly into the CRM.",
    icon: faClipboardList,
    gifLabel: "Form Builder",
    status: "done",
    media: "/images/agents-ia/form.gif", // ej: "/images/gifs/form-builder.gif"
  },
  {
    title: "Organizations & teams",
    desc: "Multi-org support with role-based access, departments, and permission scoping per workspace.",
    icon: faUsers,
    gifLabel: "Team Management",
    status: "done",
    media: "/images/agents-ia/team.gif", // ej: "/images/gifs/teams.gif"
  },
  {
    title: "Tags & classification",
    desc: "Flexible tagging system across contacts, tickets, and assets — with color coding and bulk operations.",
    icon: faTags,
    gifLabel: "Tags",
    status: "done",
    media: "/images/agents-ia/tags.gif", // ej: "/images/gifs/tags.gif"
  },
  {
    title: "Widget customization",
    desc: "Drag, resize, and configure dashboard widgets per organization plan. Each team gets a tailored view of what matters most.",
    icon: faSliders,
    gifLabel: "Widget Customization",
    status: "done",
    media: "/images/agents-ia/widget.gif", // ej: "/images/agents-ia/widget-customization.gif"
  },
  {
    title: "Departments",
    desc: "Org-level department structure with scoped permissions, member assignment, and visibility rules per module.",
    icon: faSitemap,
    gifLabel: "Departments",
    status: "done",
    media: "/images/agents-ia/new-department.gif", // ej: "/images/agents-ia/departments.gif"
  },
];

const TEXT_CARDS = [
  { icon: faAddressBook, title: "CRM", desc: "Contacts, products, leads, and form responses. Unified customer data for every team." },
  { icon: faSitemap, title: "Departments", desc: "Org-level groupings with scoped access and visibility rules per module." },
  { icon: faFlag, title: "Status & priorities", desc: "Global status system shared across projects, tickets, and conversations." },
  { icon: faBell, title: "Notifications", desc: "System-wide notification layer with read/unread state and delivery channels." },
];

const IN_PROGRESS = [
  { icon: faBolt, title: "Automations", desc: "n8n-style visual workflow builder for event-driven automation across channels, CRM, and agents." },
  { icon: faShop, title: "Marketplaces", desc: "Native integration with Amazon, Walmart, and Mercado Libre. Sync orders, products, and inventory." },
  { icon: faBullhorn, title: "Meta Ads Manager", desc: "Centralize Meta campaign management. Create, monitor, and optimize ads without leaving the platform." },
  { icon: faMobileScreenButton, title: "Advanced channels", desc: "WhatsApp Business, Instagram DMs, and Facebook Messenger — all routed through the unified inbox." },
  { icon: faEnvelopesBulk, title: "Campaigns", desc: "Broadcast campaigns with segmentation, scheduling, and performance analytics per channel." },
  { icon: faLink, title: "Webhooks & integrations", desc: "Developer-facing webhook system and third-party integration layer for external tool connectivity." },
];

// ─── ROOT ─────────────────────────────────────────────────────────────────────
// `heroMedia` → imagen/gif para el hero (prop opcional, default = FALLBACK_IMG)
const AIAgentsProject = () => {
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(null);

  return (
    <section id="ai-agents-project" className="bg-[#0a0a0a] text-white py-20">
      <Modal item={modal} onClose={() => setModal(null)} />

      <div className="max-w-[1100px] mx-auto px-6 md:px-6 lg:px-0">

        {/* ── HERO ── */}
        <span className="block text-[11px] tracking-[2px] uppercase text-[#2997ff] font-medium mb-3">
          Featured Project
        </span>

        <div
          className="relative border border-white/10 rounded-3xl overflow-hidden p-6 sm:p-12 mb-4"
          style={{ background: "linear-gradient(135deg,rgba(41,151,255,0.06) 0%,rgba(0,0,0,0) 60%)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* left */}
            <div>
              <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-1.5px] leading-[1.1] text-white mb-4">
                AI Agents<br />
                <span className="text-[#2997ff]">Platform</span>
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-7 font-light">
                A full-scale SaaS ecosystem for building, deploying, and managing AI agents —
                combining CRM, team collaboration, visual workflow builders, and multi-channel
                communication in a single platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {["Next.js 15", "Go", "PostgreSQL", "WebSockets", "SQLX", "Tailwind CSS", "Ant Design", "React Flow"].map((t) => {
                  const hi = ["Next.js 15", "Go", "PostgreSQL"].includes(t);
                  return (
                    <span
                      key={t}
                      className={`text-[11px] font-medium px-3 py-1.5 rounded-full border ${hi
                          ? "border-[#2997ff]/40 text-[#2997ff] bg-[#2997ff]/10"
                          : "border-white/15 text-white/60 bg-white/5"
                        }`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* right — hero gif/img */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <GifPlaceholder
                media="/images/agents-ia/home.gif"
                label="Dashboard Overview"
                icon={faGauge}
                onClick={() =>
                  setModal({
                    num: "Hero",
                    title: "Dashboard Overview",
                    desc: "Widget-based home dashboard that adapts to each organization's plan tier. Metrics, charts, and quick-access shortcuts all in one view.",
                    icon: faGauge,
                    gifLabel: "Dashboard Overview",
                    status: "prog",
                    progress: "~50%",
                    media: "/images/agents-ia/home.gif",
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-white/[0.07] my-12" />

        {/* ── KEY FEATURES ── */}
        <span className="block text-[11px] tracking-[2px] uppercase text-[#2997ff] font-medium mb-3">
          Core features
        </span>
        <h3 className="text-[clamp(22px,3vw,34px)] font-bold tracking-tight text-white mb-2">
          High-impact capabilities
        </h3>
        <p className="text-sm text-white/40 font-light mb-7">
          GIF-driven walkthrough of the platform&apos;s most powerful modules
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {PRIMARY_FEATURES.map((item) => (
            <FeatureCard key={item.title} item={item} onOpen={setModal} />
          ))}
        </div>

        {/* ── EXPAND BUTTON ── */}
        <div className="flex justify-center my-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2.5 bg-white/5 border border-white/[0.12] text-white/70 hover:border-white/25 hover:text-white text-[13px] font-medium px-7 py-3 rounded-full cursor-pointer transition-all"
          >
            <span>{expanded ? "Show less" : "Show more features"}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>
        </div>

        {/* ── COLLAPSIBLE ── */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: expanded ? 9999 : 0, opacity: expanded ? 1 : 0 }}
        >
          <div className="h-px bg-white/[0.07] mb-8" />
          <span className="block text-[11px] tracking-[2px] uppercase text-[#2997ff] font-medium mb-3">
            Additional modules
          </span>
          <h3 className="text-[clamp(20px,2.5vw,28px)] font-bold tracking-tight text-white mb-7">
            More platform coverage
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECONDARY_FEATURES.map((item) => (
              <FeatureCard key={item.title} item={item} onOpen={setModal} />
            ))}
          </div>

          {/* text-only cards */}
          <div className="mt-9">
            <span className="block text-[11px] tracking-[2px] uppercase text-[#2997ff] font-medium mb-4">
              No GIF yet
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {TEXT_CARDS.map((c) => (
                <div
                  key={c.title}
                  className="border border-white/[0.09] rounded-2xl p-5 bg-white/[0.025]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2997ff]/10 border border-[#2997ff]/20 flex items-center justify-center text-[#2997ff] mb-3">
                    <FontAwesomeIcon icon={c.icon} className="text-sm" />
                  </div>
                  <h5 className="text-sm font-semibold text-white mb-1.5">{c.title}</h5>
                  <p className="text-xs text-white/40 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── IN PROGRESS ── */}
        <div
          className="border border-[#ffd60a]/20 rounded-3xl p-6 sm:p-10 mt-12"
          style={{ background: "rgba(255,214,10,0.018)" }}
        >
          <span className="block text-[11px] tracking-[2px] uppercase text-[#ffd60a] font-medium mb-3">
            Roadmap
          </span>
          <h3 className="text-[clamp(22px,3vw,32px)] font-bold tracking-tight text-white mb-2">
            In progress features
          </h3>
          <p className="text-sm text-white/40 font-light mb-7">
            Actively being built — UI scaffolded, core logic in development
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {IN_PROGRESS.map((item) => (
              <div
                key={item.title}
                className="border border-white/[0.07] rounded-2xl p-5 bg-white/[0.02] opacity-[0.88] hover:opacity-100 transition-opacity"
              >
                <div className="w-9 h-9 rounded-xl bg-[#ffd60a]/10 border border-[#ffd60a]/20 flex items-center justify-center text-[#ffd60a] mb-3">
                  <FontAwesomeIcon icon={item.icon} className="text-[15px]" />
                </div>
                <h5 className="text-sm font-semibold text-white/85 mb-1.5">{item.title}</h5>
                <p className="text-xs text-white/40 leading-relaxed mb-3.5">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[1px] uppercase text-[#ffd60a] bg-[#ffd60a]/10 border border-[#ffd60a]/20 px-2.5 py-1 rounded-full">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#ffd60a] inline-block"
                    style={{ animation: "ipPulse 1.6s ease infinite" }}
                  />
                  In development
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`@keyframes ipPulse { 0%,100%{opacity:1} 50%{opacity:.3} }`}</style>
    </section>
  );
};

export default AIAgentsProject;