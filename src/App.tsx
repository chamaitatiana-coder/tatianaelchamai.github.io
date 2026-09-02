import { useState, useEffect } from "react"
import tatianaPhoto from './tatiana.jpg'
import tatianaCV from './Tatiana-El-Chamai-CV.pdf'

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
]

const SKILLS: Record<string, string[]> = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Flutter",
    "Dart",
  ],

  Backend: [
    "Java",
    "Spring Boot",
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "REST APIs",
  ],

  "Workflow & Tools": [
    "Git & GitHub",
    "Postman",
    "VS Code",
    "Android Studio",
    "Camunda 8",
    "Zeebe",
    "BPMN",
    "DMN",
    "Jira",
    "slack",
    "Confluence",
    "Figma",
    "Eclipse"
  ],
};

const PROJECTS = [
  {
    title: "Baladiyati – Municipality Management Platform",
    description:
      "My final-year project: a multi-tenant digital platform developed to modernize municipal services in Lebanon. It connects citizens with municipalities and supports service requests, permits, violations, payments, document management, authentication, and automated workflows.",
    tags: [
      "Flutter",
      "Dart",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Camunda 8",
      "Zeebe",
      "BPMN",
      "DMN",
    ],
    github: "https://github.com"
  },
];

// ─── Icons ──────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 15, height: 15, flexShrink: 0 }}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 15, height: 15, flexShrink: 0 }}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 18, height: 18 }}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

// ─── Profile Photo Placeholder ───────────────────────────────────────────────
function ProfilePhoto({ size = "hero" }: { size?: "hero" | "about" }) {
  const dim = size === "hero" ? 280 : 220
  const radius = size === "hero" ? "1.75rem" : "50%"

  return (
    <div
      style={{
        position: "relative",
        width: dim,
        height: dim,
        maxWidth: "100%",
        flexShrink: 0,
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: -20,
          background:
            "radial-gradient(ellipse at 45% 55%, rgba(129,140,248,0.28) 0%, rgba(56,189,248,0.12) 45%, transparent 68%)",
          borderRadius: "50%",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: radius,
          overflow: "hidden",
          border: "1.5px solid rgba(129,140,248,0.38)",
          boxShadow:
            "0 0 0 5px rgba(129,140,248,0.07), 0 12px 56px rgba(129,140,248,0.18), 0 0 100px rgba(56,189,248,0.06)",
          background: "#0f1c38",
        }}
      >
        {/* Tatiana's photo */}
        <img
 src={tatianaPhoto} 
          alt="Tatiana El Chamai"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  )
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav({ onViewCV }: { onViewCV: () => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        background: scrolled ? "rgba(6,13,31,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(129,140,248,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#home"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          color: "#818cf8",
          textDecoration: "none",
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        {"<TC/>"}
      </a>

      <div className="nav-links" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: "rgba(226,232,240,0.72)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#818cf8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.72)")}
          >
            {link.label}
          </a>
        ))}
        <a
  href={tatianaCV}
  download="Tatiana-El-Chamai-CV.pdf"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.38rem 0.9rem",
            borderRadius: "0.5rem",
            background: "rgba(129,140,248,0.1)",
            border: "1px solid rgba(129,140,248,0.28)",
            color: "#818cf8",
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 600,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(129,140,248,0.2)"
            e.currentTarget.style.borderColor = "rgba(129,140,248,0.55)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(129,140,248,0.1)"
            e.currentTarget.style.borderColor = "rgba(129,140,248,0.28)"
          }}
        >
          <DownloadIcon /> CV
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

const TECH_BADGES: { label: string; pos: React.CSSProperties; delay: string }[] = [
  { label: "Laravel", pos: { top: "12%", left: -64 }, delay: "0s" },
  { label: "Spring boot", pos: { top: "5%", right: -20 }, delay: "0.6s" },
  { label: "flutter", pos: { bottom: "28%", left: -76 }, delay: "1.2s" },
  { label: "css/html/js", pos: { bottom: "12%", right: -22 }, delay: "0.9s" },
]

function Hero({ onViewCV }: { onViewCV: () => void }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 2rem 4rem",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* bg glow blob */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "5%",
          width: 640,
          height: 640,
          background:
            "radial-gradient(ellipse at center, rgba(129,140,248,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="hero-grid">
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Availability badge */}
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem 0.35rem 0.65rem",
              borderRadius: 999,
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.22)",
              width: "fit-content",
              fontSize: 13,
              color: "#34d399",
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#34d399",
                animation: "pulse-dot 2.2s ease infinite",
                flexShrink: 0,
              }}
            />
            Available for opportunities
          </div>

          {/* Heading */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                margin: 0,
                color: "#e2e8f0",
                letterSpacing: "-0.02em",
              }}
            >
              {"Hi, I'm "}
              <span
                style={{
                  background: "linear-gradient(130deg, #818cf8 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tatiana.
              </span>
            </h1>
            <h2
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                fontWeight: 600,
                margin: "0.6rem 0 0",
                color: "rgba(226,232,240,0.62)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              Junior Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p
            className="hero-desc"
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "rgba(226,232,240,0.6)",
              margin: 0,
              maxWidth: 450,
            }}
          >
            Business Computing graduate building modern, scalable, and user-focused
            applications. Passionate about clean code and great experiences.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}
          >
            <a
              href="#projects"
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "0.625rem",
                background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: "0 0 28px rgba(129,140,248,0.32)",
                transition: "box-shadow 0.2s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 48px rgba(129,140,248,0.5)"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 28px rgba(129,140,248,0.32)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              View My Work
            </a>
            <a
  href={tatianaCV}
download="Tatiana-El-Chamai-CV.pdf"             
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.625rem",
                background: "transparent",
                border: "1.5px solid rgba(129,140,248,0.38)",
                color: "#818cf8",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(129,140,248,0.08)"
                e.currentTarget.style.borderColor = "#818cf8"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "rgba(129,140,248,0.38)"
              }}
            >
              <DownloadIcon /> Download CV
            </a>
         
          </div>

          {/* Social icons */}
          <div className="hero-social" style={{ display: "flex", gap: "0.625rem" }}>
            {[
              { icon: <GitHubIcon />, href: "https://github.com/chamaitatiana-coder", label: "GitHub" },
              { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/tatiana-el-chammaii", label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "0.5rem",
                  background: "rgba(226,232,240,0.05)",
                  border: "1px solid rgba(226,232,240,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(226,232,240,0.55)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#818cf8"
                  e.currentTarget.style.borderColor = "rgba(129,140,248,0.4)"
                  e.currentTarget.style.background = "rgba(129,140,248,0.08)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(226,232,240,0.55)"
                  e.currentTarget.style.borderColor = "rgba(226,232,240,0.1)"
                  e.currentTarget.style.background = "rgba(226,232,240,0.05)"
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — photo */}
    <div
  style={{
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "460px",
    aspectRatio: "4 / 5",
    margin: "0 auto",
  }}
>
  {/* Subtil cadre lumineux en arrière-plan */}
  <div
    style={{
      position: "absolute",
      inset: "-4px",
      borderRadius: "1.25rem",
      background: "linear-gradient(135deg, rgba(129,140,248,0.3), rgba(99,102,241,0.05))",
      zIndex: 0,
      filter: "blur(8px)",
    }}
  />

  {/* Conteneur principal de l'image */}
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
      overflow: "hidden",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  >
    <img
src={tatianaPhoto}
      alt="Tatiana El Chamai"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  </div>

  {/* Badges technologiques flottants */}
  {TECH_BADGES.map((b) => (
    <div
      key={b.label}
      style={{
        position: "absolute",
        ...b.pos,
        padding: "0.4rem 0.85rem",
        borderRadius: "0.6rem",
        background: "rgba(10, 20, 44, 0.85)",
        border: "1px solid rgba(129, 140, 248, 0.3)",
        color: "#c7d2fe",
        fontSize: "0.75rem",
        fontWeight: 600,
        fontFamily: "'JetBrains Mono', monospace",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        whiteSpace: "nowrap",
        animation: `float-badge 4s ease-in-out ${b.delay} infinite`,
        zIndex: 2,
        letterSpacing: "0.02em",
      }}
    >
      {b.label}
    </div>
  ))}


          {/* Decorative code brackets */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 72,
              color: "rgba(129,140,248,0.1)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {"<"}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 72,
              color: "rgba(129,140,248,0.1)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {"/>"}
          </div>

          {/* Dotted grid decoration */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              opacity: 0.18,
              pointerEvents: "none",
            }}
            width="80"
            height="80"
            viewBox="0 0 80 80"
          >
            {Array.from({ length: 5 }, (_, row) =>
              Array.from({ length: 5 }, (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 16 + 8}
                  cy={row * 16 + 8}
                  r="1.5"
                  fill="#818cf8"
                />
              ))
            )}
          </svg>
        </div>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────

function About({ onViewCV }: { onViewCV: () => void }) {
  const stats = [
    { value: "2026", label: "BSc Graduate" },
    { value: "Full-Stack", label: "Focus" },
  ]
const handleViewCV = () => {
  window.open(tatianaCV, "_blank", "noopener,noreferrer");
};
  return (
    <section id="about" style={{ padding: "7rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div className="about-grid">
        {/* Photo */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ProfilePhoto size="about" />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#818cf8",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: "0.6rem",
              }}
            >
              About Me
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 900,
                margin: 0,
                color: "#e2e8f0",
                letterSpacing: "-0.02em",
              }}
            >
              Tatiana El Chamai
            </h2>
            <p
              style={{
                margin: "0.3rem 0 0",
                fontSize: 15,
                fontWeight: 600,
                color: "#818cf8",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Junior Full-Stack Developer
            </p>
          </div>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(226,232,240,0.72)",
              margin: 0,
            }}
          >
            Business Computing graduate and Junior Full-Stack Developer passionate about building
            modern, scalable, and user-focused applications.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.78,
              color: "rgba(226,232,240,0.55)",
              margin: 0,
            }}
          >
            I combine a solid foundation in business computing with hands-on development
            experience to build products that solve real problems. I care deeply about code
            quality, user experience, and continuous learning.
          </p>

          {/* Stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              padding: "1.25rem",
              borderRadius: "0.875rem",
              background: "rgba(14,24,48,0.7)",
              border: "1px solid rgba(129,140,248,0.12)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#818cf8",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(226,232,240,0.45)",
                    marginTop: 3,
                    lineHeight: 1.3,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CV actions */}
        
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
       \
            <a
  href={tatianaCV}
              download
              style={{
                padding: "0.65rem 1.35rem",
                borderRadius: "0.5rem",
                background: "rgba(129,140,248,0.1)",
                border: "1.5px solid rgba(129,140,248,0.25)",
                color: "#818cf8",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(129,140,248,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(129,140,248,0.1)")}
            >
              <DownloadIcon /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        background: "rgba(14,24,48,0.38)",
        borderTop: "1px solid rgba(129,140,248,0.08)",
        borderBottom: "1px solid rgba(129,140,248,0.08)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#818cf8",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Technical Skills
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#e2e8f0",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            My Tech Stack
          </h2>
        </div>

        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div
              key={category}
              style={{
                padding: "1.75rem",
                borderRadius: "1rem",
                background: "rgba(10,18,38,0.85)",
                border: "1px solid rgba(129,140,248,0.12)",
                boxShadow: "0 4px 28px rgba(0,0,0,0.18)",
              }}
            >
              <h3
                style={{
                  fontSize: 11,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#818cf8",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "0 0 1.25rem",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "0.375rem",
                      background: "rgba(129,140,248,0.07)",
                      border: "1px solid rgba(129,140,248,0.14)",
                      color: "rgba(226,232,240,0.75)",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#818cf8",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          My Work
        </div>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 900,
            color: "#e2e8f0",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Featured Projects
        </h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            style={{
              padding: "1.75rem",
              borderRadius: "1rem",
              background: "rgba(10,18,38,0.85)",
              border: "1px solid rgba(129,140,248,0.12)",
              boxShadow: "0 4px 28px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "all 0.25s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = "rgba(129,140,248,0.3)"
              el.style.transform = "translateY(-3px)"
              el.style.boxShadow = "0 12px 48px rgba(129,140,248,0.12)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement
              el.style.borderColor = "rgba(129,140,248,0.12)"
              el.style.transform = "translateY(0)"
              el.style.boxShadow = "0 4px 28px rgba(0,0,0,0.18)"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#e2e8f0",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {project.title}
              </h3>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {[
                  { href: project.github, icon: <GitHubIcon />, hover: "#818cf8" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(226,232,240,0.45)",
                      transition: "color 0.2s",
                      display: "flex",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = link.hover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.45)")}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.72,
                color: "rgba(226,232,240,0.58)",
                margin: 0,
                flex: 1,
              }}
            >
              {project.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "0.25rem",
                    background: "rgba(56,189,248,0.07)",
                    border: "1px solid rgba(56,189,248,0.15)",
                    color: "#38bdf8",
                    fontSize: 11,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── CV Preview ───────────────────────────────────────────────────────────────

function CVPreview({ onViewCV }: { onViewCV: () => void }) {
  return (
    <section
      id="cv"
      style={{
        padding: "6rem 2rem",
        background: "rgba(14,24,48,0.3)",
        borderTop: "1px solid rgba(129,140,248,0.08)",
        borderBottom: "1px solid rgba(129,140,248,0.08)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#818cf8",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Resume
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 900,
              color: "#e2e8f0",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Curriculum Vitae
          </h2>
        </div>

        <div className="cv-grid">
          {/* Document mockup */}
          <div style={{ position: "relative" }}>
            {/* Stacked page shadows */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "rotate(3deg) translate(6px, 8px)",
                background: "rgba(10,18,38,0.5)",
                borderRadius: "0.875rem",
                border: "1px solid rgba(129,140,248,0.06)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "rotate(1.5deg) translate(3px, 4px)",
                background: "rgba(12,20,40,0.65)",
                borderRadius: "0.875rem",
                border: "1px solid rgba(129,140,248,0.09)",
              }}
            />

            {/* Main card */}
            <div
              style={{
                position: "relative",
                background: "#0e1830",
                borderRadius: "0.875rem",
                border: "1px solid rgba(129,140,248,0.2)",
                boxShadow:
                  "0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(129,140,248,0.05)",
                overflow: "hidden",
              }}
            >
              {/* CV header */}
              <div
                style={{
                  background:
                    "linear-gradient(130deg, rgba(129,140,248,0.14) 0%, rgba(56,189,248,0.07) 100%)",
                  padding: "1.5rem 1.75rem 1.25rem",
                  borderBottom: "1px solid rgba(129,140,248,0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.01em" }}>
                    Tatiana El Chamai
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#818cf8",
                      fontFamily: "'JetBrains Mono', monospace",
                      marginTop: 3,
                    }}
                  >
                    Junior Full-Stack Developer
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(226,232,240,0.28)",
                    textAlign: "right",
                    lineHeight: 1.6,
                  }}
                >
                  https://github.com/chamaitatiana-coder
                  <br />
www.linkedin.com/in/tatiana-el-chammaii
                </div>
              </div>

              {/* CV body */}
              <div style={{ padding: "1.25rem 1.75rem 1.5rem" }}>
                {[
                  {
                    title: "Skills",
                    content: (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                        {["React", "Node.js", "TypeScript", "Python", "SQL", "Git"].map((s) => (
                          <span
                            key={s}
                            style={{
                              padding: "0.15rem 0.55rem",
                              background: "rgba(129,140,248,0.09)",
                              border: "1px solid rgba(129,140,248,0.14)",
                              borderRadius: "0.25rem",
                              fontSize: 10,
                              color: "rgba(226,232,240,0.68)",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Experience",
                    content: (
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                        {[
                          { role: "Development Intern", company: "Build 4 All SARL", date: "February 2026 – April 2026" },
                        ].map((exp) => (
                          <div key={exp.role}>
                            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(226,232,240,0.78)" }}>
                              {exp.role}
                            </div>
                            <div style={{ fontSize: 10, color: "rgba(226,232,240,0.4)", marginTop: 1 }}>
                              {exp.company} · {exp.date}
                            </div>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                  {
                    title: "Education",
                    content: (
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(226,232,240,0.78)" }}>
                         Bachelor’s Degree in Business Computing                        </div>
                        <div style={{ fontSize: 10, color: "rgba(226,232,240,0.4)", marginTop: 1 }}>
                         
                             Lebanese University – Faculty of Technology, Saida
                                2023 – 2026
                        </div>
                      </div>
                    ),
                  },
                ].map((section) => (
                  <div key={section.title} style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        fontSize: 9,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#818cf8",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                        paddingBottom: "0.3rem",
                        borderBottom: "1px solid rgba(129,140,248,0.1)",
                      }}
                    >
                      {section.title}
                    </div>
                    {section.content}
                  </div>
                ))}

                {/* Placeholder stamp */}
                <div
                  style={{
                    marginTop: "0.5rem",
                    textAlign: "right",
                    fontSize: 8,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(129,140,248,0.3)",
                  }}
                >
                  
                </div>
              </div>
            </div>
          </div>

          {/* CTA column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingTop: "0.5rem",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#e2e8f0",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Ready to Download
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.78,
                color: "rgba(226,232,240,0.58)",
                margin: 0,
              }}
            >
              My full CV details experience, education, technical skills, and project highlights.
              Available for immediate download.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
  href={tatianaCV}
download="Tatiana-El-Chamai-CV.pdf"
                style={{
                  padding: "0.875rem 1.5rem",
                  borderRadius: "0.625rem",
                  background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 0 28px rgba(129,140,248,0.3)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 48px rgba(129,140,248,0.48)"
                  e.currentTarget.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(129,140,248,0.3)"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <DownloadIcon /> Download CV ↓
              </a>
   
            </div>
  
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const inputStyle = {
    padding: "0.72rem 1rem",
    borderRadius: "0.5rem",
    background: "rgba(10,18,38,0.85)",
    border: "1px solid rgba(129,140,248,0.15)",
    color: "#e2e8f0",
    fontSize: 14,
    outline: "none",
    fontFamily: "'Outfit', sans-serif",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  } as React.CSSProperties

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const body = `Hello Tatiana,
${message},
Best regards,
${name}`

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=chamaitatiana@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, "_blank")
  }

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        maxWidth: 680,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#818cf8",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Get In Touch
        </div>

        <h2
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 900,
            color: "#e2e8f0",
            margin: "0 0 0.875rem",
            letterSpacing: "-0.02em",
          }}
        >
          Let's Work Together
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "rgba(226,232,240,0.55)",
            margin: 0,
          }}
        >
          Open to junior developer roles, internships, and freelance
          opportunities.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <label
            htmlFor="name"
            style={{
              fontSize: 13,
              color: "rgba(226,232,240,0.6)",
              fontWeight: 500,
            }}
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(129,140,248,0.5)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(129,140,248,0.15)")
            }
          />
        </div>

        {/* Subject */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <label
            htmlFor="subject"
            style={{
              fontSize: 13,
              color: "rgba(226,232,240,0.6)",
              fontWeight: 500,
            }}
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Role inquiry / Collaboration / Other"
            required
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(129,140,248,0.5)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(129,140,248,0.15)")
            }
          />
        </div>

        {/* Message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <label
            htmlFor="message"
            style={{
              fontSize: 13,
              color: "rgba(226,232,240,0.6)",
              fontWeight: 500,
            }}
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            required
            rows={5}
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(129,140,248,0.5)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor =
                "rgba(129,140,248,0.15)")
            }
          />
        </div>

        {/* Send Button */}
        <button
          type="submit"
          style={{
            padding: "0.9rem 2rem",
            borderRadius: "0.625rem",
            background:
              "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 28px rgba(129,140,248,0.28)",
            transition: "all 0.2s",
            fontFamily: "'Outfit', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)"
            e.currentTarget.style.boxShadow =
              "0 0 35px rgba(129,140,248,0.45)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow =
              "0 0 28px rgba(129,140,248,0.28)"
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

// function Contact() {
//   const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus("sending")
//     setTimeout(() => setStatus("sent"), 1500)
//   }

//   const inputStyle = {
//     padding: "0.72rem 1rem",
//     borderRadius: "0.5rem",
//     background: "rgba(10,18,38,0.85)",
//     border: "1px solid rgba(129,140,248,0.15)",
//     color: "#e2e8f0",
//     fontSize: 14,
//     outline: "none",
//     fontFamily: "'Outfit', sans-serif",
//     width: "100%",
//     transition: "border-color 0.2s",
//   } as React.CSSProperties

//   return (
//     <section id="contact" style={{ padding: "7rem 2rem", maxWidth: 680, margin: "0 auto" }}>
//       <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//         <div
//           style={{
//             fontFamily: "'JetBrains Mono', monospace",
//             fontSize: 11,
//             color: "#818cf8",
//             letterSpacing: "0.16em",
//             textTransform: "uppercase",
//             marginBottom: "0.5rem",
//           }}
//         >
//           Get In Touch
//         </div>
//         <h2
//           style={{
//             fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
//             fontWeight: 900,
//             color: "#e2e8f0",
//             margin: "0 0 0.875rem",
//             letterSpacing: "-0.02em",
//           }}
//         >
//           {"Let's Work Together"}
//         </h2>
//         <p style={{ fontSize: 15, color: "rgba(226,232,240,0.55)", margin: 0 }}>
//           Open to junior developer roles, internships, and freelance opportunities.
//         </p>
//       </div>

//       {status === "sent" ? (
//         <div
//           style={{
//             textAlign: "center",
//             padding: "3.5rem 2rem",
//             borderRadius: "1rem",
//             background: "rgba(52,211,153,0.05)",
//             border: "1px solid rgba(52,211,153,0.18)",
//           }}
//         >
//           <div
//             style={{
//               width: 52,
//               height: 52,
//               borderRadius: "50%",
//               background: "rgba(52,211,153,0.12)",
//               border: "1px solid rgba(52,211,153,0.25)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               margin: "0 auto 1rem",
//               fontSize: 22,
//               color: "#34d399",
//             }}
//           >
//             ✓
//           </div>
//           <div style={{ fontSize: 18, fontWeight: 700, color: "#34d399" }}>Message Sent!</div>
//           <div style={{ fontSize: 14, color: "rgba(226,232,240,0.5)", marginTop: "0.5rem" }}>
//             {"I'll get back to you as soon as possible."}
//           </div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           <div className="contact-name-row">
//             {[
//               { id: "name", label: "Name", type: "text", placeholder: "Your name" },
//               { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
//             ].map((f) => (
//               <div key={f.id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
//                 <label style={{ fontSize: 13, color: "rgba(226,232,240,0.6)", fontWeight: 500 }}>
//                   {f.label}
//                 </label>
//                 <input
//                   id={f.id}
//                   type={f.type}
//                   placeholder={f.placeholder}
//                   required
//                   style={inputStyle}
//                   onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.5)")}
//                   onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.15)")}
//                 />
//               </div>
//             ))}
//           </div>

//           <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
//             <label style={{ fontSize: 13, color: "rgba(226,232,240,0.6)", fontWeight: 500 }}>
//               Subject
//             </label>
//             <input
//               type="text"
//               placeholder="Role inquiry / Collaboration / Other"
//               required
//               style={inputStyle}
//               onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.5)")}
//               onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.15)")}
//             />
//           </div>

//           <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
//             <label style={{ fontSize: 13, color: "rgba(226,232,240,0.6)", fontWeight: 500 }}>
//               Message
//             </label>
//             <textarea
//               placeholder="Your message..."
//               required
//               rows={5}
//               style={{ ...inputStyle, resize: "vertical" }}
//               onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.5)")}
//               onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(129,140,248,0.15)")}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={status === "sending"}
//             style={{
//               padding: "0.9rem 2rem",
//               borderRadius: "0.625rem",
//               background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
//               color: "#fff",
//               fontWeight: 700,
//               fontSize: 15,
//               border: "none",
//               cursor: status === "sending" ? "not-allowed" : "pointer",
//               boxShadow: "0 0 28px rgba(129,140,248,0.28)",
//               transition: "all 0.2s",
//               fontFamily: "'Outfit', sans-serif",
//               opacity: status === "sending" ? 0.7 : 1,
//             }}
//           >
//             {status === "sending" ? "Sending…" : "Send Message"}
//           </button>
//         </form>
//       )}
//     </section>
//   )
// }

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(129,140,248,0.1)",
        padding: "1.75rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#818cf8" }}>
          {"<TC/>"}
        </div>
        <div style={{ fontSize: 12, color: "rgba(226,232,240,0.35)" }}>
          © 2026Tatiana El Chamai · Junior Full-Stack Developer
        </div>
        <div style={{ display: "flex", gap: "0.875rem" }}>
          {[
            { href: "https://github.com/chamaitatiana-coder", icon: <GitHubIcon />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/tatiana-el-chammaii", icon: <LinkedInIcon />, label: "LinkedIn" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{ color: "rgba(226,232,240,0.38)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#818cf8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.38)")}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── PDF Viewer Modal ─────────────────────────────────────────────────────────

function PDFViewerModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(6,13,31,0.93)",
        backdropFilter: "blur(16px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Toolbar */}
      <div
        style={{
          width: "100%",
          maxWidth: 820,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1rem",
          background: "#0e1830",
          border: "1px solid rgba(129,140,248,0.2)",
          borderBottom: "none",
          borderRadius: "0.875rem 0.875rem 0 0",
        }}
      >
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#818cf8" }}>
            href={tatianaCV}

        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <a
  href={tatianaCV}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.38rem 0.875rem",
              borderRadius: "0.4rem",
              background: "rgba(129,140,248,0.1)",
              border: "1px solid rgba(129,140,248,0.22)",
              color: "#818cf8",
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(129,140,248,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(129,140,248,0.1)")}
          >
            <DownloadIcon /> Download
          </a>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 32,
              height: 32,
              borderRadius: "0.4rem",
              background: "rgba(226,232,240,0.05)",
              border: "1px solid rgba(226,232,240,0.1)",
              color: "rgba(226,232,240,0.55)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = "rgba(239,68,68,0.1)"
              el.style.color = "#ef4444"
              el.style.borderColor = "rgba(239,68,68,0.28)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.background = "rgba(226,232,240,0.05)"
              el.style.color = "rgba(226,232,240,0.55)"
              el.style.borderColor = "rgba(226,232,240,0.1)"
            }}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* PDF area */}
      <div
        style={{
          width: "100%",
          maxWidth: 820,
          height: "76vh",
          background: "#0e1830",
          border: "1px solid rgba(129,140,248,0.2)",
          borderRadius: "0 0 0.875rem 0.875rem",
          overflow: "hidden",
        }}
      >
        <object
          data="/Tatiana-El-Chamai-CV.pdf"
          type="application/pdf"
          style={{ width: "100%", height: "100%" }}
        >
          {/* Fallback if PDF not in public/ */}
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "1rem",
                background: "rgba(129,140,248,0.1)",
                border: "1px solid rgba(129,140,248,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
              }}
            >
              📄
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#e2e8f0", marginBottom: "0.5rem" }}>
                PDF Preview
              </div>
              <div style={{ fontSize: 14, color: "rgba(226,232,240,0.48)", maxWidth: 360 }}>
                Place{" "}
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    padding: "0.1rem 0.4rem",
                    background: "rgba(129,140,248,0.1)",
                    borderRadius: "0.25rem",
                    fontSize: 12,
                  }}
                >
                  Tatiana-El-Chamai-CV.pdf
                </code>{" "}
                in the{" "}
                <code
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    padding: "0.1rem 0.4rem",
                    background: "rgba(129,140,248,0.1)",
                    borderRadius: "0.25rem",
                    fontSize: 12,
                  }}
                >
                  public/
                </code>{" "}
                folder to enable preview.
              </div>
            </div>
            <a
  href={tatianaCV}
              download
              style={{
                padding: "0.65rem 1.5rem",
                borderRadius: "0.5rem",
                background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 0 20px rgba(129,140,248,0.24)",
              }}
            >
              Download CV ↓
            </a>
          </div>
        </object>
      </div>
    </div>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [pdfOpen, setPdfOpen] = useState(false)

  return (
    <div
      style={{
        background: "#060d1f",
        color: "#e2e8f0",
        minHeight: "100vh",
        fontFamily: "'Outfit', system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Global top glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          background:
            "radial-gradient(ellipse 90% 45% at 50% -5%, rgba(129,140,248,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav onViewCV={() => setPdfOpen(true)} />
        <Hero onViewCV={() => setPdfOpen(true)} />
        <About onViewCV={() => setPdfOpen(true)} />
        <Skills />
        <Projects />
        <CVPreview onViewCV={() => setPdfOpen(true)} />
        <Contact />
        <Footer />
      </div>

      {pdfOpen && <PDFViewerModal onClose={() => setPdfOpen(false)} />}
    </div>
  )
}
