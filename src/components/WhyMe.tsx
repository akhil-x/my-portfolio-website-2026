import { Smartphone, Layout, Bot, Search } from "lucide-react";

const items = [
  {
    icon: Smartphone,
    title: "Responsive First",
    desc: "Your website will look and work smoothly across mobile, tablet, and desktop.",
  },
  {
    icon: Layout,
    title: "Clean & Modern UI",
    desc: "I design simple, professional interfaces that feel modern and easy to use.",
  },
  {
    icon: Bot,
    title: "AI-Adaptive Workflow",
    desc: "I use AI to plan faster, debug better, and improve development speed without replacing real developer thinking.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    desc: "I build with semantic HTML, optimized metadata, fast loading, and search visibility in mind.",
  },
];

export function WhyMe() {
  return (
    <section aria-labelledby="whyme-heading" className="border-t border-border bg-[var(--color-surface)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // Why Me
          </span>
          <h2 id="whyme-heading" className="mt-3 text-3xl font-bold md:text-4xl">Why Work With Me</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title} className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <it.icon size={18} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
