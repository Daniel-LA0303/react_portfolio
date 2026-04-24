import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCode, faExternalLinkAlt, faXmark, faExpand } from "@fortawesome/free-solid-svg-icons";

// ─── GIF MODAL ───────────────────────────────────────────────────────────────

const GifModal = ({ modal, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (modal.open) {
      window.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [modal.open, onClose]);

  if (!modal.open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, cursor: "zoom-out",
        animation: "hpFadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          animation: "hpScaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: -14, right: -14, zIndex: 1,
            width: 32, height: 32, borderRadius: "50%",
            background: "#1c1c1c",
            border: "0.5px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer", fontSize: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#2a2a2a";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1c1c1c";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Image */}
        <div style={{
          borderRadius: 14, overflow: "hidden",
          border: "0.5px solid rgba(255,255,255,0.1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          background: "#0a0a0a",
        }}>
          <img
            src={modal.src}
            alt={modal.caption}
            style={{
              display: "block",
              maxWidth: "82vw",
              maxHeight: "72vh",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Caption */}
        {modal.caption && (
          <p style={{
            textAlign: "center", fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 560, lineHeight: 1.6, margin: 0,
          }}>
            {modal.caption}
          </p>
        )}

        <span style={{
          fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)",
        }}>
          ESC or click outside to close
        </span>
      </div>

      <style>{`
        @keyframes hpFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hpScaleIn { from { opacity: 0; transform: scale(0.93); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    badge: "Backend · Microservices",
    accentColor: "var(--accent)",
    accentSoft: "var(--accent-soft)",
    accentBorder: "rgba(41,151,255,0.25)",
    title: "Lorem Ipsum\nPlatform",
    subtitle:
      "Event-driven microservices architecture handling 50k+ daily transactions with zero-downtime deploys.",
    highlights: [
      "Distributed tracing with Grafana + Prometheus for real-time observability",
      "JWT + OAuth 2.0 security layer across all service boundaries",
      "Resilience4j circuit breaker reducing cascading failure rate by 94%",
    ],
    techs: ["Java 17", "Spring Cloud", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "Grafana", "AWS EKS"],
    preview: "/images/backend1.png",
    github: "https://github.com/Daniel-LA0303",
    demo: null,
    problem: {
      title: "Monolith hitting its ceiling",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A single deployable unit was causing 40-minute release cycles and cascading failures across unrelated features. The team needed to move fast without breaking production.",
    },
    solution: {
      title: "Event-driven decomposition",
      body: "Decomposed the monolith into 7 bounded contexts using Domain-Driven Design. Each service owns its data, communicates asynchronously via Kafka, and deploys independently on Kubernetes with rolling update strategies.",
    },
    demos: [
      { caption: "Service mesh routing — requests flowing through API Gateway to downstream services in real time.", gif: "/images/backend1.png" },
      { caption: "Grafana dashboard showing live throughput, error rate, and p95 latency per microservice.", gif: "/images/backend1.png" },
      { caption: "Circuit breaker tripping and self-healing during a simulated downstream outage.", gif: "/images/backend1.png" },
    ],
    arch: ["Client", "API Gateway", "Kafka Bus", "Services ×7", "Postgres / Mongo"],
    archSubs: ["React / Mobile", "JWT / Rate limit", "Event streaming", "DDD bounded ctx", "Per-service DB"],
    results: [
      "Release cycle cut from 40 min → 4 min with independent deployments",
      "p99 latency dropped 60% after removing synchronous inter-service calls",
      "Zero cascading failures since circuit breaker rollout in Q3",
      "Horizontal autoscaling handles 3× traffic spikes with no manual intervention",
    ],
  },
  {
    id: 2,
    badge: "Full Stack · AI",
    accentColor: "#a855f7",
    accentSoft: "rgba(168,85,247,0.1)",
    accentBorder: "rgba(168,85,247,0.25)",
    title: "Dolor Sit\nAmet System",
    subtitle:
      "NestJS + Angular platform with OpenAI agents automating 80% of manual data-entry workflows.",
    highlights: [
      "OpenAI function-calling agents processing natural-language task creation",
      "Sequelize ORM on MySQL with optimistic locking for concurrent writes",
      "Dockerised deploy on AWS EC2 with automated CI/CD via GitHub Actions",
    ],
    techs: ["NestJS", "Angular", "MySQL", "Sequelize", "OpenAI", "Docker", "AWS EC2", "TypeScript"],
    preview: "/images/backend1.png",
    github: "https://github.com/Daniel-LA0303",
    demo: null,
    problem: {
      title: "Hours lost to manual entry",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Operations teams were spending 6+ hours daily copying data between three disconnected legacy systems, introducing human error at every handoff and delaying downstream processes.",
    },
    solution: {
      title: "AI-orchestrated automation layer",
      body: "Built an OpenAI agent pipeline that interprets free-text instructions, maps them to structured database operations, and executes cross-system syncs automatically. Angular dashboard gives operators full visibility and override control.",
    },
    demos: [
      { caption: "Agent receiving a plain-text instruction and generating the corresponding DB transaction sequence.", gif: "/images/backend1.png" },
      { caption: "Angular dashboard showing live sync status, conflict detection, and operator override panel.", gif: "/images/backend1.png" },
      { caption: "Metrics view: task throughput per hour before and after the automation layer went live.", gif: "/images/backend1.png" },
    ],
    arch: ["Angular UI", "NestJS API", "OpenAI Agent", "MySQL", "AWS EC2"],
    archSubs: ["Operator dashboard", "REST + Guards", "Function calling", "Sequelize ORM", "Docker container"],
    results: [
      "80% reduction in manual data-entry time — from 6 hrs/day to under 1 hr",
      "Human error rate dropped from 3.2% to near-zero on automated flows",
      "Optimistic locking eliminated all write conflicts under concurrent load testing",
      "Zero-downtime deploys via rolling Docker updates on EC2 since launch",
    ],
  },
];

// ─── SINGLE CARD ─────────────────────────────────────────────────────────────

const FeaturedCard = ({ project, onOpenModal }) => {
  const [open, setOpen] = useState(false);
  const p = project;

  return (
    <div className="hp-card">
      <div className="hp-collapsed">
        <div className="hp-left">
          <div
            className="hp-badge"
            style={{ color: p.accentColor, background: p.accentSoft, borderColor: p.accentBorder }}
          >
            <div className="hp-badge-dot" style={{ background: p.accentColor }} />
            {p.badge}
          </div>

          <h3 className="hp-title">
            {p.title.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h3>

          <p className="hp-subtitle">{p.subtitle}</p>

          <ul className="hp-highlights">
            {p.highlights.map((hl, i) => (
              <li className="hp-hl" key={i}>
                <span className="hp-hl-icon" style={{ background: p.accentSoft, color: p.accentColor }}>
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>

          <div className="hp-techs">
            {p.techs.map((t) => (
              <span className="hp-tech" key={t}>{t}</span>
            ))}
          </div>

          <button
            className="hp-btn"
            style={{ background: p.accentColor }}
            onClick={() => setOpen(!open)}
          >
            {open ? "Collapse" : "Explore project"}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`hp-btn-icon${open ? " rotated" : ""}`}
              style={{ fontSize: 12 }}
            />
          </button>
        </div>

        {/* Right — preview clickable */}
        <div className="hp-right">
          {p.preview ? (
            <div
              className="hp-preview-clickable"
              onClick={() => onOpenModal(p.preview, p.title)}
            >
              <img src={p.preview} alt={p.title} className="hp-preview-img" />
              <div className="hp-preview-overlay">
                <FontAwesomeIcon icon={faExpand} style={{ fontSize: 18, color: "#fff" }} />
              </div>
            </div>
          ) : (
            <div className="hp-preview-placeholder">
              <span className="hp-placeholder-label">GIF / Video here</span>
            </div>
          )}
        </div>
      </div>

      <div className={`hp-expand${open ? " open" : ""}`}>
        <div className="hp-expand-inner">

          <div className="hp-expand-grid">
            <div>
              <span className="hp-sec-label" style={{ color: p.accentColor }}>The problem</span>
              <h4 className="hp-sec-title">{p.problem.title}</h4>
              <p className="hp-sec-body">{p.problem.body}</p>
            </div>
            <div>
              <span className="hp-sec-label" style={{ color: p.accentColor }}>The solution</span>
              <h4 className="hp-sec-title">{p.solution.title}</h4>
              <p className="hp-sec-body">{p.solution.body}</p>
            </div>
          </div>

          <div className="hp-divider" />
          <span className="hp-sec-label" style={{ display: "block", marginTop: 28, color: p.accentColor }}>
            Demo visual
          </span>
          <div className="hp-demos">
            {p.demos.map((d, i) => (
              <div
                key={i}
                className={`hp-demo-block${d.gif ? " hp-demo-clickable" : ""}`}
                onClick={() => d.gif && onOpenModal(d.gif, d.caption)}
              >
                {d.gif ? (
                  <>
                    <img src={d.gif} alt={d.caption} className="hp-demo-media" />
                    <div className="hp-demo-expand-icon">
                      <FontAwesomeIcon icon={faExpand} style={{ fontSize: 10 }} />
                    </div>
                  </>
                ) : (
                  <div className="hp-demo-media-placeholder">GIF here</div>
                )}
                <div className="hp-demo-caption">{d.caption}</div>
              </div>
            ))}
          </div>

          <div className="hp-divider" />
          <span className="hp-sec-label" style={{ display: "block", marginTop: 28, color: p.accentColor }}>
            Architecture
          </span>
          <div className="hp-arch">
            <div className="hp-arch-nodes">
              {p.arch.map((node, i) => (
                <React.Fragment key={i}>
                  <div className="hp-arch-node">
                    <div
                      className={`hp-arch-box${i >= 2 ? " neutral" : ""}`}
                      style={
                        i < 2
                          ? { color: p.accentColor, background: p.accentSoft, borderColor: p.accentBorder }
                          : {}
                      }
                    >
                      {node}
                    </div>
                    <span className="hp-arch-sub">{p.archSubs[i]}</span>
                  </div>
                  {i < p.arch.length - 1 && (
                    <div className="hp-arch-arrow">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="hp-divider" />
          <span className="hp-sec-label" style={{ display: "block", marginTop: 28, color: p.accentColor }}>
            Results &amp; impact
          </span>
          <div className="hp-results">
            {p.results.map((r, i) => (
              <div className="hp-result-item" key={i}>
                <div className="hp-result-dot" style={{ background: p.accentColor }} />
                <div className="hp-result-text">{r}</div>
              </div>
            ))}
          </div>

          <div className="hp-links">
            <a
              className="hp-link-btn hp-link-primary"
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: p.accentColor }}
            >
              <FontAwesomeIcon icon={faCode} style={{ fontSize: 12 }} /> View code
            </a>
            {p.demo && (
              <a
                className="hp-link-btn hp-link-ghost"
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: 12 }} /> Live demo
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

// ─── SECTION ─────────────────────────────────────────────────────────────────

const FeaturedProjects = () => {
  const [modal, setModal] = useState({ open: false, src: "", caption: "" });

  const openModal = (src, caption) => setModal({ open: true, src, caption });
  const closeModal = () => setModal({ open: false, src: "", caption: "" });

  return (
    <section className="section" id="featured">
      <div className="section-inner">
        <span className="section-label animate-reveal">Featured projects</span>
        <h2 className="section-title animate-reveal" style={{ transitionDelay: "0.05s" }}>
          Main work
        </h2>
        <p
          className="section-body animate-reveal"
          style={{ transitionDelay: "0.1s", marginBottom: 48 }}
        >
          Two projects that showcase the full depth of the stack — from architecture decisions to deployment.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PROJECTS.map((p) => (
            <div
              className="animate-reveal"
              key={p.id}
              style={{ transitionDelay: `${0.1 + p.id * 0.07}s` }}
            >
              <FeaturedCard project={p} onOpenModal={openModal} />
            </div>
          ))}
        </div>
      </div>

      <GifModal modal={modal} onClose={closeModal} />
    </section>
  );
};

export default FeaturedProjects;