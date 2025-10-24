// src/components/Navbar.jsx
import React from "react";

/* 🔧 CHANGE => LOGO TEXT here if you want a different logo string */
const LOGO_TEXT = "YAAR"; // 🔧 CHANGE

export default function Navbar({ theme, onLogoClick }) {
  const isDark = theme === "dark";

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo (click to toggle theme) */}
        <div
          role="button"
          onClick={onLogoClick}
          onKeyDown={(e) => (e.key === "Enter" ? onLogoClick() : null)}
          tabIndex={0}
          className="logo flex items-center gap-3 cursor-pointer select-none"
          title="Click logo to toggle theme"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
            style={{
              background: isDark
                ? "linear-gradient(135deg,#5C6CFF,#7B61FF)"
                : "linear-gradient(135deg,#c7b3ff,#e2e8ff)",
              color: "white",
            }}
          >
            {LOGO_TEXT}
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              Vinayak Tiwari
            </div>
            <div className="text-xs muted">Developer • Maker</div>
          </div>
        </div>

        {/* Simple nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="muted hover:text-[var(--accent)]">About</a>
          <a href="#skills" className="muted hover:text-[var(--accent)]">Skills</a>
          <a href="#projects" className="muted hover:text-[var(--accent)]">Projects</a>
          <a href="#contact" className="muted hover:text-[var(--accent)]">Contact</a>
        </nav>
      </div>
    </header>
  );
}
