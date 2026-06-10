import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { WhyMe } from "@/components/WhyMe";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


const SITE_URL = "https://akhil-x.vercel.app";
const TITLE = "Akhil K B | Front-End Developer in Kerala, India";
const DESC =
  "Explore the portfolio of Akhil K B, a front-end developer from Kerala, India, building modern, responsive, SEO-friendly websites using clean code, GitHub, Vercel, Netlify, and AI-assisted workflows.";
const TWITTER_DESC =
  "Explore Akhil K B's portfolio — modern, responsive, SEO-friendly websites built with front-end technologies, GitHub, Vercel, Netlify, and AI-assisted workflows.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Akhil K B" },
      {
        name: "keywords",
        content:
          "Akhil K B, front-end developer Kerala, front-end developer India, best front-end developer, freelance front-end developer, web developer Kerala, web developer India, AI web developer, AI-assisted developer, GitHub developer, Vercel developer, Netlify developer, responsive website developer, SEO-friendly website developer, modern web developer, portfolio website developer, HTML CSS JavaScript developer, React developer Kerala, freelance web designer Kerala",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Akhil K B Portfolio" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: TWITTER_DESC },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Akhil K B",
          jobTitle: "Front-End Developer",
          description:
            "Front-end developer from Kerala, India building modern, responsive, and SEO-friendly websites using HTML, CSS, JavaScript, React, GitHub, Vercel, Netlify, and AI-assisted workflows.",
          url: "SITE_URL",
          email: "mailto:369akhilkb@gmail.com",
          telephone: "+917994035140",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/akhil-x",
            "https://linkedin.com/in/akhil-kb-7a2330237",
          ],
          knowsAbout: [
            "Front-End Development",
            "Responsive Web Design",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "GitHub",
            "Vercel",
            "Netlify",
            "SEO",
            "AI-assisted web development",
            "Prompt Engineering",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Akhil K B Portfolio",
          url: "SITE_URL",
          description:
            "Portfolio website of Akhil K B, a front-end developer from Kerala, India.",
          inLanguage: "en-IN",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
