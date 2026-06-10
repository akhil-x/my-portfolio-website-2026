import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Akhil,\n\nName: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\n${form.message}`;
    window.open(`https://wa.me/917994035140?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // Contact
          </span>
          <h2 id="contact-heading" className="mt-3 text-3xl font-bold md:text-4xl">Let's Build Your Website</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Looking for a front-end developer in Kerala, India? I can help you build responsive
            portfolio websites, landing pages, business websites, and SEO-friendly front-end
            projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <div className="space-y-3 md:col-span-2">
            <a
              href="tel:+917994035140"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone size={16} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Call Me</p>
                <p className="text-sm font-medium">+91 79940 35140</p>
              </div>
            </a>
            <a
              href="mailto:369akhilkb@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Email Me</p>
                <p className="text-sm font-medium">369akhilkb@gmail.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/917994035140"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MessageCircle size={16} />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="text-sm font-medium">Chat instantly</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div>
              <label htmlFor="projectType" className="text-xs font-medium text-muted-foreground">
                Project Type
              </label>
              <input
                id="projectType"
                placeholder="Landing page, portfolio, brand site…"
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Send Message on WhatsApp <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
