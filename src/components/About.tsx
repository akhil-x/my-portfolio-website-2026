import { Monitor, Code2, Sparkles, Search, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Monitor, title: "Responsive Web Design", desc: "Pixel-perfect layouts across mobile, tablet, and desktop." },
  { icon: Code2, title: "Front-End Development", desc: "Modern HTML, CSS, JavaScript, and React workflows." },
  { icon: Sparkles, title: "AI-Assisted Workflow", desc: "Using AI to plan, debug, and ship faster." },
  { icon: Search, title: "SEO-Friendly", desc: "Semantic markup, metadata, and performance built in." },
  { icon: Palette, title: "Clean UI Design", desc: "Minimal interfaces with strong visual hierarchy." },
  { icon: Zap, title: "Fast & Optimized", desc: "Lightweight code, lazy loading, and fast load times." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border bg-[var(--color-surface)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              // About
            </span>
            <h2 id="about-heading" className="mt-3 text-3xl font-bold md:text-4xl">
              Building clean websites with code, creativity, <span className="text-gradient">and AI</span>.
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I specialize in front-end development, responsive web design, and modern website
              experiences for clients, brands, and personal projects. I use HTML, CSS, JavaScript,
              React, GitHub, Netlify, Vercel, and AI tools to plan, build, debug, and improve
              websites efficiently.
            </p>
            <p>
              AI does not replace my skills — it strengthens my workflow and helps me deliver
              better results faster. Based in Kerala, India, I'm available for freelance and
              remote front-end development projects.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <article key={h.title} className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:[transform:perspective(800px)_translateY(-4px)_rotateX(1.5deg)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <h.icon size={18} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
