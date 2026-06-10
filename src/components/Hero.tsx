import { ArrowRight, Mail, Sparkles } from "lucide-react";

const tags = ["HTML", "CSS", "JavaScript", "React", "GitHub", "Vercel", "Netlify", "SEO", "AI Tools"];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20"
    >
      {/* Subtle grid + gradient backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-surface),_transparent_60%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.92 0.01 256) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.92 0.01 256) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-[var(--gradient-primary)] opacity-20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 md:grid-cols-2 md:gap-12">
        <div className="min-w-0">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={12} className="shrink-0 text-primary" aria-hidden="true" />
            <span className="truncate">Front-End Developer • Kerala, India</span>
          </span>

          <h1
            id="hero-heading"
            className="mt-5 max-w-3xl break-words font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Front-End Developer
            <span className="block break-words text-gradient">
              Building Modern Websites
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            I&apos;m Akhil K B, a front-end developer from Kerala, India. I build fast,
            responsive, and SEO-friendly websites with clean code, modern UI, and
            AI-assisted workflows that improve speed without replacing developer skill.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Mail size={16} /> Hire Me
            </a>
          </div>

          <div className="mt-7 flex max-w-full flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Code card visual */}
        <div className="group relative min-w-0">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-[var(--gradient-primary)] opacity-10 blur-2xl" />
          <div className="w-full max-w-full overflow-hidden rounded-2xl border border-border bg-card shadow-elevated transition-transform duration-500 group-hover:-translate-y-1 group-hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)]">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400/80" />
              <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                akhil.dev — developer.tsx
              </span>
            </div>
            <pre className="max-w-full overflow-x-auto p-4 font-mono text-xs leading-relaxed text-foreground sm:p-6 sm:text-[13px]">
{`const akhil = {
  role: "Front-End Developer",
  location: "Kerala, India",
  stack: ["HTML5", "CSS3", "JavaScript",
          "React.js", "Tailwind CSS",
          "GitHub", "Vercel"],
  focus: ["Responsive UI", "SEO", "Performance"],
  workflow: "AI-assisted, developer-led",
};

ship(akhil); // 🚀`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}