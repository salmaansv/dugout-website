import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import cafeInterior from "@/assets/cafe-interior.jpg";
import pastries from "@/assets/pastries.jpg";
import espresso from "@/assets/espresso.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Our story — Dugout Café" },
      { name: "description", content: "Dugout was born from a love of slow mornings, great coffee and warm community." },
    ]
  }),
});

function AboutPage() {
  return (
    <Layout>
      <section className="relative bg-hero grain overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-20 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">— Our Story</p>
              <h1 className="mt-6 font-display text-7xl leading-[0.95] sm:text-8xl">
                Comfort in every <br /><span className="text-gradient">connection.</span>
              </h1>
              <p className="mt-10 text-lg leading-relaxed text-muted-foreground max-w-lg">
                Dugout started as a passion project with a big vision—to create a space where people can enjoy more than just a cup of coffee. We believe in blending great flavors with a warm, welcoming atmosphere.
              </p>
            </div>
            <div className="lg:col-span-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-3d border border-border/50">
                <img src={cafeInterior} alt="Dugout café interior" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img src={espresso} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-soft mt-12">
                <img src={pastries} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">— Our Mission</p>
            <h2 className="mt-6 font-display text-5xl leading-tight">
              Innovation at the heart <br /> of everything we do.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              At Dugout, innovation drives our approach to hospitality, food, and the entire experience. We serve an array of continental cuisine, embracing creative twists on classic dishes, and we're always experimenting to elevate our menu.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our ambition is to offer a global culinary journey, combining modern luxury and a five-star experience to make every visit memorable for our guests in Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-ink py-32 text-cream grain overflow-hidden relative">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center relative">
          <span className="font-display text-6xl text-primary-glow">"</span>
          <p className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            We don't just serve coffee. We serve the few quiet minutes you give yourself in the morning.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-primary-glow/30" />
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary-glow">Founded 2024</p>
            <span className="h-px w-10 bg-primary-glow/30" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
