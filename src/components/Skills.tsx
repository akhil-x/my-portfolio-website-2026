const groups = [
  {
    title: "Core Front-End",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Tools & Deployment",
    items: ["VS Code", "Git", "GitHub", "Netlify", "Vercel"],
  },
  {
    title: "Workflow",
    items: ["SEO Basics", "UI Design", "AI Tools", "Prompt Engineering"],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // Skills
          </span>
          <h2 id="skills-heading" className="mt-3 text-3xl font-bold md:text-4xl">
            Front-End Development Skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A stack tuned for fast, responsive, and SEO-friendly web experiences.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s}>
                    <span className="inline-block rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
