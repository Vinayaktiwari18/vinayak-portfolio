// src/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

/* DEFAULT THEME:
   "dark" = default galaxy (we will apply body.dark-bg),
   "light" = light theme. */
const DEFAULT = "dark";

export default function App() {
  const [theme, setTheme] = useState(DEFAULT);

  // on first load, read saved theme (if any)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // whenever theme changes, update html/body classes and persist
  useEffect(() => {
    const isLight = theme === "light";
    if (isLight) {
      document.documentElement.classList.add("light");
      document.body.classList.remove("dark-bg");
    } else {
      document.documentElement.classList.remove("light");
      document.body.classList.add("dark-bg");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen">
      {/* pass toggle to Navbar so logo can toggle */}
      <Navbar theme={theme} onLogoClick={toggleTheme} />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
