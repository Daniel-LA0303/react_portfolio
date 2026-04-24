import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faXmark,
  faExpand,
  faServer,
  faShieldHalved,
  faCubesStacked,
  faChartLine,
  faArrowRightArrowLeft,
  faRotate,
  faBell,
  faCartShopping,
  faCreditCard,
  faMagnifyingGlass,
  faBoxOpen,
  faUserTag,
  faChevronRight,
  faChevronDown,
  faPlugCircleBolt,
} from "@fortawesome/free-solid-svg-icons";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const BASE = "/images/ecommerce";
const FALLBACK = `${BASE}/home.png`;

// accent — azul igual que el resto del portfolio
const A = "#2997ff";
const A_BG  = "rgba(41,151,255,0.08)";
const A_BD  = "rgba(41,151,255,0.25)";

// ─── MEDIA BLOCK ─────────────────────────────────────────────────────────────
const MediaBlock = ({ src, alt, label, icon, onClick }) => {
  const has = !!src;
  return (
    <div
      onClick={onClick}
      className={`relative w-full overflow-hidden ${onClick ? "cursor-zoom-in" : ""}`}
      style={{ aspectRatio: "16/9", background: "#0d0d0d" }}
    >
      <img
        src={src || FALLBACK}
        alt={alt || label}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
        style={{ opacity: has ? 1 : 0.14 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: has ? "linear-gradient(to bottom,rgba(0,0,0,0) 55%,rgba(0,0,0,0.45) 100%)" : "linear-gradient(to bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.7))" }}
      />
      {!has && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-11 h-11 rounded-full flex items-center justify-center border" style={{ background: A_BG, borderColor: A_BD, color: A }}>
            <FontAwesomeIcon icon={icon || faServer} className="text-base" />
          </div>
          <span className="text-[10px] tracking-[1.8px] uppercase font-medium" style={{ color: "rgba(255,255,255,0.28)" }}>
            {/* aqui va media: {label} */}
            {label}
          </span>
        </div>
      )}
      {onClick && (
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 px-2 py-1 rounded text-[10px] tracking-wide border" style={{ background: "rgba(0,0,0,0.55)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}>
          <FontAwesomeIcon icon={faExpand} className="text-[9px]" />
          Preview
        </div>
      )}
    </div>
  );
};

// ─── MODAL ────────────────────────────────────────────────────────────────────
const Modal = ({ item, onClose }) => {
  React.useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 cursor-zoom-out"
      style={{ background: "rgba(0,0,0,0.9)", animation: "smFade .2s ease" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
        style={{ animation: "smScale .28s cubic-bezier(.34,1.46,.64,1)" }}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs border cursor-pointer"
          style={{ background: "#1a1a1a", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="rounded-2xl overflow-hidden" style={{ border: "0.5px solid rgba(255,255,255,0.1)", background: "#111" }}>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={item.media || FALLBACK}
              alt={item.title}
              className="w-full h-full object-cover object-top"
              style={{ opacity: item.media ? 1 : 0.25 }}
            />
            {!item.media && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center border" style={{ background: A_BG, borderColor: A_BD, color: A }}>
                  <FontAwesomeIcon icon={item.icon || faServer} className="text-2xl" />
                </div>
                <span className="text-[10px] tracking-[2px] uppercase text-white/30">
                  {/* aqui va media: {item.mediaLabel} */}
                  {item.mediaLabel}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8" style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <div className="text-[11px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color: A }}>
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed font-light max-w-xl text-white/50">{item.desc}</p>
              </div>
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 max-w-xs justify-end">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded border" style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-[10px] tracking-[1px] text-white/20">
          {item.title} — press Esc to close
        </p>
      </div>

      <style>{`
        @keyframes smFade  { from{opacity:0} to{opacity:1} }
        @keyframes smScale { from{opacity:0;transform:scale(.93)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </div>
  );
};

// ─── SMALL COMPONENTS ────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <span className="block text-[11px] tracking-[2px] uppercase font-medium mb-3" style={{ color: A }}>
    {children}
  </span>
);

const Divider = () => <div className="h-px my-12 bg-white/[0.07]" />;

const FlowCard = ({ item, onOpen }) => (
  <div
    className="rounded-2xl overflow-hidden border border-white/[0.09] bg-white/[0.025] transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-0.5"
  >
    <div className="border-b border-white/[0.06]">
      <MediaBlock src={item.media} alt={item.title} label={item.mediaLabel} icon={item.icon} onClick={() => onOpen(item)} />
    </div>
    <div className="p-5">
      <div className="text-[11px] tracking-[2px] uppercase font-medium mb-2" style={{ color: A }}>{item.category}</div>
      <h4 className="text-base font-semibold text-white tracking-tight mb-2">{item.title}</h4>
      <p className="text-[13px] text-white/45 leading-relaxed font-light">{item.desc}</p>
      {item.tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.tags.map((t) => (
            <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded border border-white/10 text-white/38 bg-white/[0.03]">{t}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const ServiceCard = ({ svc }) => (
  <div className="p-5 rounded-xl border border-white/[0.09] bg-white/[0.025] transition-all duration-200 hover:border-white/[0.18] hover:-translate-y-0.5">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: A_BG, color: A }}>
        <FontAwesomeIcon icon={svc.icon} className="text-sm" />
      </div>
      <div>
        <h5 className="text-sm font-bold text-white tracking-tight">{svc.name}</h5>
        <span className="text-[10px] tracking-[1.5px] uppercase font-medium text-white/35">{svc.tech}</span>
      </div>
    </div>
    <ul className="space-y-1.5">
      {svc.points.map((p) => (
        <li key={p} className="flex items-start gap-2 text-[12px] text-white/45">
          <FontAwesomeIcon icon={faChevronRight} className="text-[9px] mt-1 shrink-0" style={{ color: A }} />
          {p}
        </li>
      ))}
    </ul>
  </div>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const TECH = [
  { l: "Spring Boot", hi: true }, { l: "Microservices", hi: true },
  { l: "Apache Kafka", hi: true }, { l: "Stripe", hi: true },
  { l: "PostgreSQL" }, { l: "MongoDB" }, { l: "AWS S3" },
  { l: "AWS Cognito" }, { l: "Angular 17" }, { l: "Resilience4j" },
  { l: "Prometheus" }, { l: "Zipkin" },
  { l: "Eureka" }, { l: "Spring Gateway" },
];

const SERVICES = [
  { name: "Auth Service",         tech: "Spring Boot · AWS Cognito", icon: faShieldHalved,     points: ["JWT auth & authorization", "Seller / Customer roles", "User addresses & account data", "AWS Cognito integration"] },
  { name: "Product Service",      tech: "Spring Boot · AWS S3",      icon: faBoxOpen,          points: ["Product & category management", "Inventory / stock tracking", "Seller-owned product scoping", "Image uploads via AWS S3"] },
  { name: "Order Service",        tech: "OpenFeign · Resilience4j",  icon: faCartShopping,     points: ["Core orchestration layer", "Stock validation via OpenFeign", "Circuit Breaker (Resilience4j)", "Payment service coordination"] },
  { name: "Payment Service",      tech: "Stripe · Webhooks",         icon: faCreditCard,       points: ["Payment intents & methods", "Revenue split (seller/platform)", "Stripe webhook processing", "Order & stock status sync"] },
  { name: "Notification Service", tech: "Kafka · MongoDB · Mailtrap",icon: faBell,             points: ["Event-driven via Apache Kafka", "MongoDB notification storage", "Email delivery via Mailtrap", "Triggered on order/payment events"] },
  { name: "API Gateway",          tech: "Spring Cloud Gateway",      icon: faServer,           points: ["Single entry point for all clients", "Request routing & load balancing", "Cross-cutting concerns (auth, logging)", "Rate limiting & filters"] },
  { name: "Service Discovery",    tech: "Spring Eureka",             icon: faRotate,           points: ["Dynamic service registration", "Client-side load balancing", "Health check & deregistration", "Zero-config inter-service lookup"] },
  { name: "Infrastructure",       tech: "Prometheus · Grafana · Zipkin", icon: faChartLine,    points: ["Metrics with Prometheus", "Dashboards via Grafana", "Distributed tracing (Zipkin)", "PostgreSQL + MongoDB databases"] },
];

const FLOWS = [
  { category: "Payment flow",         title: "Stripe-powered order processing",  desc: "Payment intent created → pending state. Stripe webhook confirms → order, stock, and payment status updated atomically.",                                 icon: faCreditCard,           mediaLabel: "order.gif",          media: `${BASE}/order.gif`,          tags: ["Stripe", "Webhooks", "Order Service"] },
  { category: "Product flow",         title: "Seller product creation",           desc: "Seller creates product with category assignment. Images uploaded directly to AWS S3 and associated to the product record.",                               icon: faBoxOpen,               mediaLabel: "product-seller.gif", media: `${BASE}/product-seller.gif`, tags: ["AWS S3", "Product Service", "Seller role"] },
  { category: "Shopping experience",  title: "Search & cart interactions",         desc: "Full product browsing with search, filters, and cart management. Stock availability validated in real time via Product Service.",                        icon: faMagnifyingGlass,       mediaLabel: "search.gif",         media: `${BASE}/search.gif`,         tags: ["Angular 17", "Cart", "Real-time stock"] },
  { category: "Payment methods",      title: "Saved payment methods",              desc: "Customers create and manage Stripe payment methods. Reusable across orders with secure tokenization.",                                                    icon: faPlugCircleBolt,        mediaLabel: "methods.gif",        media: `${BASE}/method.gif`,        tags: ["Stripe", "Tokenization"] },
];

const ROLES = [
  { category: "Seller view",    title: "Order management for sellers",    desc: "Sellers see only their own orders, update fulfillment status, and track revenue splits per transaction.", icon: faUserTag,            mediaLabel: "order-sellers.png",  media: `${BASE}/orders-seller.png`,  tags: ["Seller role", "Order tracking", "Revenue split"] },
  { category: "Dual role view", title: "Customer vs Seller capabilities", desc: "Same account, two roles. JWT claims drive which UI surfaces — no re-authentication required.",            icon: faArrowRightArrowLeft, mediaLabel: "customer-seller.png", media: `${BASE}/customers-seller.png`, tags: ["Role-based UI", "JWT claims", "Angular 17"] },
];

// ─── ROOT ─────────────────────────────────────────────────────────────────────
const EcommerceProject = ({ heroMedia }) => {
  const [modal,    setModal]    = useState(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="ecommerce-project" className="bg-[#0a0a0a] text-white py-20">
      <Modal item={modal} onClose={() => setModal(null)} />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-0">

        {/* ── HERO ── */}
        <SectionLabel>Featured Project</SectionLabel>

        <div
          className="relative border border-white/10 rounded-3xl overflow-hidden p-6 sm:p-12 mb-4"
          style={{ background: "linear-gradient(135deg,rgba(41,151,255,0.05) 0%,transparent 60%)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-[clamp(28px,4vw,50px)] font-black tracking-[-2px] leading-[1.05] text-white mb-4">
                ShopModern
                <br />
                <span style={{ color: A }}>Microservices</span>
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.85] mb-7 font-light">
                Distributed e-commerce platform built with Spring Boot microservices —
                event-driven via Kafka, payments via Stripe, cloud storage on AWS S3,
                and full observability through Prometheus, Grafana, and Zipkin.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {TECH.map(({ l, hi }) => (
                  <span
                    key={l}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-full border"
                    style={hi ? { borderColor: A_BD, color: A, background: A_BG } : { borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.04)" }}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <MediaBlock
                src={heroMedia || `${BASE}/home.png`}
                alt="ShopModern homepage"
                label="home.png"
                icon={faCartShopping}
                onClick={() => setModal({ category: "Homepage", title: "ShopModern — Homepage", desc: "Full e-commerce storefront with product listings, search, and category navigation powered by the Product Service.", icon: faCartShopping, mediaLabel: "home.png", media: heroMedia || `${BASE}/home.png` })}
              />
            </div>
          </div>
        </div>

        <Divider />

        {/* ── ARCHITECTURE ── */}
        <SectionLabel>Backend architecture</SectionLabel>
        <h3 className="text-[clamp(22px,3vw,36px)] font-black tracking-[-1.5px] text-white mb-2">
          Five independent services.
        </h3>
        <p className="text-sm text-white/40 font-light mb-8">
          Synchronous via OpenFeign · Asynchronous via Kafka · Fault tolerance via Resilience4j
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SERVICES.map((s) => <ServiceCard key={s.name} svc={s} />)}
        </div>

        {/* architecture diagram */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.09]">
          <div className="px-5 py-3 flex items-center gap-2 border-b border-white/[0.07] text-[12px] font-semibold text-white/40" style={{ background: "rgba(255,255,255,0.025)" }}>
            <FontAwesomeIcon icon={faCubesStacked} className="text-[11px]" style={{ color: A }} />
            System architecture diagram
          </div>
          <MediaBlock
            src={`${BASE}/architecture.png`}
            alt="System architecture"
            label="architecture.png"
            icon={faCubesStacked}
            onClick={() => setModal({ category: "Architecture", title: "System architecture diagram", desc: "Full microservices topology: Auth, Product, Order, Payment, and Notification services communicating via OpenFeign (sync) and Kafka (async), with Resilience4j circuit breakers.", icon: faCubesStacked, mediaLabel: "architecture.png", media: `${BASE}/architecture.png`, tags: ["OpenFeign", "Kafka", "Resilience4j"] })}
          />
        </div>

        <Divider />

        {/* ── BACKEND FLOWS ── */}
        <SectionLabel>Backend flows</SectionLabel>
        <h3 className="text-[clamp(22px,3vw,36px)] font-black tracking-[-1.5px] text-white mb-2">
          Key engineering flows
        </h3>
        <p className="text-sm text-white/40 font-light mb-8">
          GIF walkthroughs of the platform's most complex interactions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FLOWS.map((item) => <FlowCard key={item.title} item={item} onOpen={setModal} />)}
        </div>

        {/* ── SHOW MORE / LESS ── */}
        <div className="flex justify-center my-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2.5 bg-white/5 border border-white/[0.12] text-white/70 hover:border-white/25 hover:text-white text-[13px] font-medium px-7 py-3 rounded-full cursor-pointer transition-all"
          >
            <span>{expanded ? "Show less" : "Show more"}</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
            />
          </button>
        </div>

        {/* ── COLLAPSIBLE ── */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: expanded ? 9999 : 0, opacity: expanded ? 1 : 0 }}
        >
          <Divider />

          {/* observability — full width, no image */}
          <SectionLabel>Observability</SectionLabel>
          <h3 className="text-[clamp(20px,2.5vw,30px)] font-black tracking-[-1px] text-white mb-2">
            Full-stack observability
          </h3>
          <p className="text-sm text-white/45 leading-relaxed mb-6 font-light max-w-2xl">
            Prometheus scrapes metrics from all services, Grafana renders dashboards per service,
            and Zipkin provides end-to-end distributed tracing across all service boundaries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {[
              { icon: faChartLine, label: "Prometheus + Grafana", desc: "Real-time metrics & custom dashboards per service" },
              { icon: faRotate,    label: "Zipkin tracing",        desc: "Distributed trace visualization across all service calls" },
              { icon: faServer,    label: "AWS S3 + Cognito",      desc: "Cloud-native storage and identity management" },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.07] bg-white/[0.025]">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: A_BG, color: A }}>
                  <FontAwesomeIcon icon={row.icon} className="text-sm" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{row.label}</div>
                  <div className="text-[12px] text-white/40 leading-relaxed">{row.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* frontend */}
          <SectionLabel>Frontend</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="rounded-2xl overflow-hidden border border-white/[0.09]">
              <MediaBlock
                src={`${BASE}/dashboard.gif`}
                alt="Frontend dashboard"
                label="dashboard.gif"
                icon={faChartLine}
                onClick={() => setModal({ category: "Frontend", title: "Angular 17 frontend", desc: "SPA built with Angular 17, Angular Material, and Tailwind CSS. JWT-based auth with role-aware routing.", icon: faChartLine, mediaLabel: "dashboard.gif", media: `${BASE}/dashboard.gif`, tags: ["Angular 17", "Angular Material", "Tailwind CSS"] })}
              />
            </div>
            <div>
              <h3 className="text-[clamp(20px,2.5vw,30px)] font-black tracking-[-1px] text-white mb-4">
                Angular 17 SPA
              </h3>
              <p className="text-sm text-white/45 leading-relaxed font-light mb-5">
                Frontend built with Angular 17, Angular Material, and Tailwind CSS.
                JWT claims drive role-based routing — a single account switches between
                Customer and Seller without re-authentication.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Angular 17", "Angular Material", "Tailwind CSS", "JWT Auth", "Role-based routing"].map((t) => (
                  <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/12 text-white/45 bg-white/[0.04]">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* role-based — text only */}
          <SectionLabel>Role-based views</SectionLabel>
          <p className="text-sm text-white/40 font-light mb-6">
            JWT role claims control what each user sees. Sellers manage inventory; customers browse and buy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                icon: faUserTag,
                category: "Seller view",
                title: "Order management for sellers",
                desc: "Sellers see only their own orders, update fulfillment status, and track revenue splits per transaction.",
                tags: ["Seller role", "Order tracking", "Revenue split"],
              },
              {
                icon: faArrowRightArrowLeft,
                category: "Dual role view",
                title: "Customer vs Seller capabilities",
                desc: "Same account, two roles. JWT claims drive which UI surfaces — no re-authentication required.",
                tags: ["Role-based UI", "JWT claims", "Angular 17"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: A_BG, color: A }}>
                    <FontAwesomeIcon icon={item.icon} className="text-xs" />
                  </div>
                  <span className="text-[11px] tracking-[2px] uppercase font-medium" style={{ color: A }}>
                    {item.category}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white tracking-tight mb-2">{item.title}</h4>
                <p className="text-[13px] text-white/45 leading-relaxed font-light mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded border border-white/10 text-white/38 bg-white/[0.03]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* role-based — gif cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ROLES.map((item) => (
              <FlowCard key={item.title} item={item} onOpen={setModal} />
            ))}
          </div>
        </div>

      </div>

      <style>{`@keyframes smPulse { 0%,100%{opacity:1} 50%{opacity:.35} }`}</style>
    </section>
  );
};

export default EcommerceProject;