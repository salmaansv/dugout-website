import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [
    { title: "Visit us — Dugout Café" },
    { name: "description", content: "Find Dugout café — opening hours, address and contact." },
  ] }),
});

function ContactPage() {
  return (
    <Layout>
      <section className="bg-hero grain">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center animate-fade-up">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">— Visit Us</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] sm:text-8xl">
            Experience our <span className="text-gradient">sanctuary.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Modern luxury and exceptional coffee in the heart of Kottakkal. 
            No reservation needed—just walk in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info column */}
          <div className="space-y-12">
            {[
              { t: "Address", v: "Changuvetty, Kottakkal\nMalappuram, Kerala", sub: "Premium Coffee Sanctuary" },
              { t: "Hours", v: "Mon — Sun · 7:30 — 21:00", sub: "Open daily for your ritual" },
              { t: "Connect", v: "hello@dugout.cafe\n+91 8138 830 004", sub: "Drop us a line" },
            ].map((c) => (
              <div key={c.t} className="group">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary">— {c.t}</p>
                <p className="mt-4 whitespace-pre-line font-display text-4xl leading-tight text-foreground group-hover:text-primary transition-colors">{c.v}</p>
                <p className="mt-3 text-sm text-muted-foreground">{c.sub}</p>
              </div>
            ))}

            <div className="flex gap-8 pt-8 border-t border-border">
              {["Instagram", "Google Maps", "TripAdvisor"].map((s) => (
                <a key={s} href="#" className="link-underline text-[11px] uppercase tracking-[0.22em] text-foreground">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Large Image / Map Placeholder */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-3d border border-border/50">
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                {/* Placeholder for map / lifestyle image */}
                <div className="text-center p-12">
                  <p className="font-display text-3xl opacity-20">Map Coming Soon</p>
                  <p className="mt-4 text-sm text-muted-foreground opacity-40">Kottakkal, Malappuram</p>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md p-8 rounded-xl shadow-soft border border-border/50">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary">Location</p>
                <p className="mt-3 text-sm text-foreground">
                  Located at Changuvetty, NH 66. 
                  Ample parking available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
