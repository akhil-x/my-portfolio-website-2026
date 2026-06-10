import { Github, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--color-surface)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © 2026 Akhil K B — Front-End Developer in Kerala, India. Built with passion, code, and AI-assisted creativity.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/akhil-x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akhil K B on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github size={16} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/akhil-kb-7a2330237"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Akhil K B on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin size={16} aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/917994035140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Akhil K B on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
