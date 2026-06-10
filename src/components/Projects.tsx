import { ExternalLink, Github } from "lucide-react";
import sampleResponsive from "@/assets/sample-responsive-website.png";
import curls from "@/assets/curlswithakhil.png";
import johnDoe from "@/assets/johndoe-portfolio-website.png";
import ecoBottle from "@/assets/ecobottle.png";
import cremeFrost from "@/assets/cremefrost.png";
import arjun from "@/assets/arjun-ananya-wedding-invitation.png";
import sneakPeak from "@/assets/sneakpeak.png";
import smirnoph from "@/assets/smirnophmedia.png";

const projects = [
  {
    title: "Sample Responsive Site",
    desc: "A responsive sample website built to demonstrate clean layout structure, mobile-first design, and front-end fundamentals.",
    tag: "Responsive Design",
    image: sampleResponsive,
    alt: "Sample Responsive Site front-end website project by Akhil K B",
    demo: "https://sampleresponsivesite.netlify.app/",
    repo: "https://github.com/akhil-x/SampleResponsiveSite",
  },
  {
    title: "Curls With Akhil",
    desc: "A fitness-focused personal brand website created to showcase coaching, transformation content, and online presence.",
    tag: "Brand Site",
    image: curls,
    alt: "Curls With Akhil fitness website project by Akhil K B",
    demo: "https://curlswithakhil.netlify.app",
    repo: "https://github.com/akhil-x/CurlsWithAkhil",
  },
  {
    title: "John Doe Portfolio",
    desc: "A minimal portfolio concept focused on clean structure, professional presentation, and simple personal branding.",
    tag: "Portfolio",
    image: johnDoe,
    alt: "John Doe Portfolio website design by Akhil K B",
    demo: "https://day1-portfolio.netlify.app/",
    repo: "#",
  },
  {
    title: "EcoBottle",
    desc: "A modern product landing page for an eco-friendly bottle brand with strong CTAs and clean product-focused visuals.",
    tag: "Landing Page",
    image: ecoBottle,
    alt: "EcoBottle product landing page website by Akhil K B",
    demo: "https://day2-product-landing-page.netlify.app/",
    repo: "#",
  },
  {
    title: "SneakPeak",
    desc: "An eCommerce product page concept for a sneaker brand with a stylish product showcase and conversion-focused layout.",
    tag: "eCommerce",
    image: sneakPeak,
    alt: "SneakPeak ecommerce product page by Akhil K B",
    demo: "https://day4-ecommerce-product-page.netlify.app/",
    repo: "#",
  },
  {
    title: "Smirnoph Media",
    desc: "A creative agency portfolio website built to showcase services, projects, and brand identity with a modern digital presence.",
    tag: "Agency",
    image: smirnoph,
    alt: "Smirnoph Media creative agency website by Akhil K B",
    demo: "https://smirnoph.vercel.app",
    repo: "https://github.com/akhil-x/Smirnoph-Media",
  },
  {
    title: "Creme Frost",
    desc: "A premium dessert and ice cream website concept designed with attractive product sections and a modern food-brand experience.",
    tag: "Brand Site",
    image: cremeFrost,
    alt: "Creme Frost dessert website by Akhil K B",
    demo: "https://creme-frost.vercel.app/",
    repo: "https://github.com/akhil-x/Creme-Frost",
  },
  {
    title: "Arjun & Ananya Wedding Invitation",
    desc: "A digital wedding invitation website with elegant event sections, gallery-style visuals, and a personal celebration theme.",
    tag: "Event Site",
    image: arjun,
    alt: "Arjun & Ananya Wedding Invitation website by Akhil K B",
    demo: "https://arjun-ananya-wedding-invitation.vercel.app/",
    repo: "https://github.com/akhil-x/Arjun-Ananya-Wedding-Invitation",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border bg-[var(--color-surface)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // Projects
          </span>
          <h2 id="projects-heading" className="mt-3 text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A collection of front-end builds focused on clean design and responsive experiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated hover:[transform:perspective(1000px)_translateY(-4px)_rotateX(1.5deg)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width="800"
                  height="500"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-primary">{p.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${p.title} by Akhil K B`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ExternalLink size={13} aria-hidden="true" /> Live Demo
                  </a>
                  {p.repo !== "#" && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${p.title} by Akhil K B`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      <Github size={13} aria-hidden="true" /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
