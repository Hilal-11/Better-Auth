"use client";
import Link from "next/link";

export default function Home() {

  


  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        body {
          font-family: 'DM Mono', monospace;
          background: #080808;
        }

        .font-display {
          font-family: 'Syne', sans-serif;
        }

        .noise::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .btn-primary {
          background: #fff;
          color: #080808;
          padding: 9px 22px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 500;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: -0.01em;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          background: #e8e8e8;
          transform: translateY(-1px);
        }

        .btn-ghost {
          background: transparent;
          color: rgba(255,255,255,0.65);
          padding: 9px 22px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 400;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: -0.01em;
          text-decoration: none;
          display: inline-block;
        }

        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.3);
          color: #fff;
          background: rgba(255,255,255,0.05);
        }

        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .feature-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.02em;
          margin-bottom: 28px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
        }

        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #fff;
        }

        .hero-heading span {
          color: rgba(255,255,255,0.25);
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #fff;
        }

        .divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 0;
        }

        .code-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 10px 16px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }

        .code-pill .cmd {
          color: rgba(255,255,255,0.35);
          user-select: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUp { animation: fadeUp 0.7s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.35s; opacity: 0; }
        .delay-4 { animation-delay: 0.5s; opacity: 0; }

        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        nav {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(8,8,8,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
      `}</style>

      {/* Background */}
      <div className="noise grid-bg fixed inset-0 z-0" />
      <div
        className="glow-orb"
        style={{ width: 600, height: 600, background: 'rgba(99,102,241,0.12)', top: -200, left: '50%', transform: 'translateX(-50%)' }}
      />
      <div
        className="glow-orb"
        style={{ width: 400, height: 400, background: 'rgba(20,184,166,0.07)', top: 300, right: -100 }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="#080808" />
              </svg>
            </div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '-0.02em' }}>
              authkit
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', gap: 28 }}>
              {['dashboard'].map((item) => (
                <Link
                  key={item}
                  href="/dashboard"
                  style={{ fontFamily: 'DM Mono, monospace', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Link href="/signin" className="btn-ghost">sign in</Link>
              <Link href="/signup" className="btn-primary">sign up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '160px 32px 100px', textAlign: 'center' }}>
          <div className="animate-fadeUp delay-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="badge">
              <span className="badge-dot" />
              built on better-auth &nbsp;·&nbsp; v1.0 beta
            </div>
          </div>

          <h1 className="animate-fadeUp delay-2 text-8xl font-sans font-bold">
            Auth that<br />
            <span>doesnt</span> get<br />
            in the way
          </h1>

          <p
            className="animate-fadeUp delay-3"
            style={{ fontFamily: 'DM Mono, monospace', fontSize: 15, color: 'rgba(255,255,255,0.4)', maxWidth: 480, margin: '28px auto 40px', lineHeight: 1.75, letterSpacing: '-0.01em' }}
          >
            a minimal, type-safe auth kit powered by better-auth.
            drop it in and ship faster — sessions, oauth, and magic links, handled.
          </p>

          <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/sign-up" className="btn-primary" style={{ padding: '11px 28px', fontSize: 14 }}>
              get started →
            </Link>
            <div className="code-pill">
              <span className="cmd">$</span> npx create-authkit@latest
            </div>
          </div>

          {/* Stats */}
          <div
            className="animate-fadeUp delay-4"
            style={{ display: 'flex', gap: 0, justifyContent: 'center', marginTop: 80, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48 }}
          >
            {[
              { val: '< 5min', label: 'setup time' },
              { val: '100%', label: 'type-safe' },
              { val: '0 deps', label: 'bloat-free' },
              { val: 'MIT', label: 'licensed' },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: '0 32px',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  textAlign: 'center',
                }}
              >
                <div className="stat-num">{s.val}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 6, letterSpacing: '0.04em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 120px' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
              whats included
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
              everything you need,<br />nothing you dont
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="2" width="12" height="14" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                    <path d="M6 6h6M6 9h6M6 12h3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Session management',
                desc: 'Secure JWT sessions with refresh token rotation. Server-side invalidation. Works edge-first.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="6" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                    <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: 'OAuth providers',
                desc: 'Google, GitHub, Discord, and more — one-line setup per provider via better-auth adapters.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L11 7H16L12 10.5L13.5 16L9 12.5L4.5 16L6 10.5L2 7H7L9 2Z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Magic links',
                desc: 'Passwordless sign-in out of the box. Bring your own email adapter or use Resend.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3v12M3 9h12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Type-safe API',
                desc: 'Full TypeScript inference from route to client. No casting, no surprises, no any.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="9" width="12" height="7" rx="1.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                    <path d="M6 9V6a3 3 0 016 0v3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: 'RBAC ready',
                desc: 'Role-based access control baked in. Protect pages and API routes with a single utility.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 14L14 4M4 4l10 10" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Middleware hooks',
                desc: 'Intercept the auth lifecycle — onSignIn, onSignOut, onError — fully customisable.',
              },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="icon-box">{f.icon}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
                  {f.title}
                </h3>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 120px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '72px 48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}
            />
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              ready to ship?
            </p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 20px', lineHeight: 1.05 }}>
              stop reinventing<br />auth
            </h2>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 36, lineHeight: 1.7 }}>
              create a free account and have auth running in minutes.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link href="/sign-up" className="btn-primary" style={{ padding: '12px 32px', fontSize: 14 }}>
                create account
              </Link>
              <Link href="/docs" className="btn-ghost" style={{ padding: '12px 32px', fontSize: 14 }}>
                read the docs
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '28px 32px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
              © 2025 authkit — mit license
            </span>
            <div style={{ display: 'flex', gap: 24 }}>
              {['dashboard', 'docs', 'changelog'].map(l => (
                <Link
                  key={l}
                  href="#"
                  style={{ fontFamily: 'DM Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}