import { Award, ExternalLink } from "lucide-react";
import fcc from "@/assets/freecodecamp-responsive-webdesign.pdf";
import prompt from "@/assets/prompt-engineering-workshop.pdf";
import internship from "@/assets/ai-internship.pdf";
import google from "@/assets/ai-google-bootcamp.pdf";

const certs = [
  { title: "Responsive Web Design", org: "freeCodeCamp", url: fcc, alt: "Responsive Web Design certificate by freeCodeCamp awarded to Akhil K B" },
  { title: "Prompt Engineering Workshop", org: "AccelerateX", url: prompt, alt: "Prompt Engineering Workshop certificate by AccelerateX awarded to Akhil K B" },
  { title: "AI Internship", org: "AccelerateX", url: internship, alt: "AI Internship certificate by AccelerateX awarded to Akhil K B" },
  { title: "AI Google Bootcamp", org: "Google", url: google, alt: "AI Google Bootcamp certificate awarded to Akhil K B" },
];

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certs-heading" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // Certifications
          </span>
          <h2 id="certs-heading" className="mt-3 text-3xl font-bold md:text-4xl">Certifications</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.alt}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-elevated"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award size={18} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Issued by {c.org}</p>
              <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                View Certificate <ExternalLink size={12} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
