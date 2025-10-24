// src/components/Projects.jsx
import React from "react";

/* 🔧 CHANGE: Add or remove project objects below.
   Fields:
   - title: project's display name
   - desc: short description
   - live: Render URL (https://projectname.onrender.com) OR leave '#' if not published yet
   - code: GitHub repo URL
*/
const PROJECTS = [
  {
    title: "My Portfolio (this site)",
    desc: "Personal React + Tailwind portfolio — theme toggle included.",
    live: "https://vinayak-portfolio.onrender.com", // 🔧 CHANGE -> your Render URL for portfolio
    code: "https://github.com/YOURUSERNAME/vinayak-portfolio", // 🔧 CHANGE -> repo URL
  },
  {
    title: "Stylesence-AI",
    desc: "AI-powered body type and skin tone analysis web app.",
    live: "https://Stylesence-ai.onrender.com", // 🔧 CHANGE -> project's Render URL
    code: "https://github.com/Vinayaktiwari18/stylesense-ai", // 🔧 CHANGE -> repo URL
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="card p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 muted">{p.desc}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent inline-flex items-center gap-2"
                >
                  🌐 View Live
                </a>

                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold underline"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
