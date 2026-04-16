"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
export default function SignUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await authClient.signUp.email({
        name: form.username, // required
        email: form.email, // required
        password: form.password, // required
        callbackURL: "/dashboard",
},
{
        onRequest: (ctx) => {
            //show loading
            console.log("Signing up...");
        },
        onSuccess: (ctx) => {
            redirect("/dashboard");
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
    setTimeout(() => setLoading(false), 1500);
  };


  const googleSignup = async () => { 
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data);
  }

  const passwordStrength = (pw: string) => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strength = passwordStrength(form.password);
  const strengthLabel = ["", "weak", "fair", "good", "strong"][strength];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#84cc16", "#22c55e"][strength];

  return (
    <div className="auth-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .auth-root {
          min-height: 100vh;
          background: #080808;
          font-family: 'DM Mono', monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
        }

        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
        }

        .card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 40px 36px;
          margin: 24px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .logo-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
          text-decoration: none;
        }

        .logo-icon {
          width: 26px; height: 26px;
          background: #fff;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 28px;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .subheading {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 11px 14px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .social-btn:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.2);
          color: #fff;
          transform: translateY(-1px);
        }

        .social-btn:active { transform: scale(0.98); }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        .divider-text {
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .field {
          margin-bottom: 16px;
        }

        .field label {
          display: block;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.04em;
          margin-bottom: 7px;
        }

        .input-wrap {
          position: relative;
        }

        .field input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 11px 14px;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          -webkit-appearance: none;
        }

        .field input::placeholder {
          color: rgba(255,255,255,0.18);
        }

        .field input:hover {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
        }

        .field input:focus {
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.07);
        }

        .show-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.3);
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }

        .show-btn:hover { color: rgba(255,255,255,0.7); }

        .strength-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .strength-bars {
          display: flex;
          gap: 4px;
        }

        .strength-bar {
          height: 3px;
          width: 32px;
          border-radius: 99px;
          background: rgba(255,255,255,0.1);
          transition: background 0.3s;
        }

        .strength-label {
          font-size: 11px;
          letter-spacing: 0.04em;
          transition: color 0.3s;
        }

        .submit-btn {
          width: 100%;
          background: #fff;
          color: #080808;
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          letter-spacing: -0.01em;
        }

        .submit-btn:hover:not(:disabled) {
          background: #e8e8e8;
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) { transform: scale(0.99); }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #080808;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .footer-text {
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          margin-top: 24px;
        }

        .footer-text a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          transition: color 0.2s, border-color 0.2s;
        }

        .footer-text a:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.5);
        }

        .terms {
          text-align: center;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          margin-top: 16px;
          line-height: 1.7;
        }

        .terms a {
          color: rgba(255,255,255,0.35);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card { animation: fadeUp 0.5s ease forwards; }
      `}</style>

      {/* Background layers */}
      <div className="grid-bg" />
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(99,102,241,0.1)', top: -150, left: '50%', transform: 'translateX(-50%)' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(20,184,166,0.06)', bottom: -100, right: -50 }} />

      <div className="card">
        {/* Logo */}
        <Link href="/" className="logo-row">
          <div className="logo-icon">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="#080808" />
            </svg>
          </div>
          <span className="logo-text">authkit</span>
        </Link>

        <h1 className="heading">create account</h1>
        <p className="subheading">sign up to get started in seconds.</p>

        {/* Social logins */}
        <div className="social-row">
          <button  className="social-btn" type="button" onClick={googleSignup}>
            {/* Google icon */}
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            google
          </button>

          <button className="social-btn" type="button" onClick={googleSignup}>
            {/* GitHub icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            github
          </button>
        </div>

        <div className="divider">
          <div className="divider-line" />
          <span className="divider-text">or continue with</span>
          <div className="divider-line" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">username</label>
            <div className="input-wrap">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="yourname"
                autoComplete="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">email</label>
            <div className="input-wrap">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="password">password</label>
            <div className="input-wrap">
              <input
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="min. 8 characters"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                style={{ paddingRight: 42 }}
                required
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPass(!showPass)}
                aria-label={showPass ? "hide password" : "show password"}
              >
                {showPass ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            {/* Password strength */}
            {form.password && (
              <div className="strength-row">
                <div className="strength-bars">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="strength-bar"
                      style={{ background: i <= strength ? strengthColor : 'rgba(255,255,255,0.1)' }}
                    />
                  ))}
                </div>
                <span className="strength-label" style={{ color: strengthColor }}>{strengthLabel}</span>
              </div>
            )}
          </div>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner" />
                creating account...
              </>
            ) : (
              "create account →"
            )}
          </button>
        </form>

        <p className="footer-text">
          already have an account? <Link href="/signin">sign in</Link>
        </p>

        <p className="terms">
          by signing up, you agree to our{" "}
          <Link href="/terms">terms</Link> and{" "}
          <Link href="/privacy">privacy policy</Link>.
        </p>
      </div>
    </div>
  );
}