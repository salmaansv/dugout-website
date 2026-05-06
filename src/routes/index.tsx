import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useRef, useState } from "react";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import pastries from "@/assets/pastries.jpg";
import espresso from "@/assets/espresso.jpg";

export const Route = createFileRoute("/")({ component: Index });

const marqueeItems = [
  "Single origin",
  "Hand roasted",
  "Baked daily",
  "Slow brewed",
  "Specialty grade",
  "Ethically sourced",
];

function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const latestProducts = [
    {
      name: "Veg Shashik Koshari Rice Bowl",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
      desc: "Explore our latest arrivals, handpicked for your delight. Elevate your culinaire experience."
    },
    {
      name: "Signature Cream Coffee",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
      desc: "Our master brewers' latest creation. A velvety smooth experience with every single sip."
    },
    {
      name: "Artisan Pastry Platter",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
      desc: "Freshly baked morning delights from our master pâtissier. Perfect for sharing."
    }
  ];

  const nextProduct = () => setActiveIndex((prev) => (prev + 1) % latestProducts.length);
  const prevProduct = () => setActiveIndex((prev) => (prev - 1 + latestProducts.length) % latestProducts.length);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left"
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* HERO ─────────────────────────────── */}
      <section className="relative -mt-24 min-h-[100svh] overflow-hidden bg-hero grain pt-32">
        <div className="pointer-events-none absolute -left-40 top-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-primary-glow/15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-32">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-8">— MÉS QUE UN CAFÈ</p>

            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight">
              <span className="block">Crafted Coffee,</span>
              <span className="block text-gradient">Perfect Moments</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Specialty coffee and artisan pastries. Dugout is your premium neighborhood sanctuary.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link to="/menu" className="btn-premium inline-flex items-center gap-3 rounded-full px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em]">
                The menu
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/contact" className="link-underline text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground">
                Contact us →
              </Link>
            </div>

            <div className="mt-20 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {[["12+", "house blends"], ["100%", "fresh daily"], ["4.9★", "guest rating"]].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-foreground">{n}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial image composition */}
          <div className="lg:col-span-5 perspective animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="relative">
              <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-primary-glow/20 via-transparent to-primary/10 blur-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-3d">
                <img
                  src={heroCoffee}
                  alt="Caramel latte in a ceramic cup"
                  width={1536}
                  height={1920}
                  className="h-full w-full object-cover"
                  decoding="async"
                  fetchpriority="high"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">No. 01</p>
                    <p className="mt-2 font-display text-2xl">Honey Caramelo</p>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">today's pour</p>
                </div>
              </div>
              <img
                src={espresso}
                alt=""
                width={400}
                height={400}
                className="absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-sm object-cover shadow-3d md:block"
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border/60 bg-cream/40 py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="mx-10 inline-flex items-center gap-10 font-display text-2xl text-foreground/70">
                {m}
                <span className="inline-block h-1 w-1 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TASTE THE LATEST ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-24" style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-up">
              <h2 className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] tracking-tighter text-ink uppercase">
                Taste the <br /> <span className="text-primary">Latest</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md min-h-[5rem]">
                {latestProducts[activeIndex].desc}
              </p>


            </div>

            <div className="relative">
              <div key={activeIndex} className="relative z-10 animate-fade-up">
                {/* The Product Image Container with Brush Effect */}
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 scale-125 bg-primary opacity-30 blur-[80px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[85%] w-[85%] rounded-full shadow-3d border-[12px] border-white overflow-hidden bg-white">
                      <img
                        src={latestProducts[activeIndex].image}
                        alt={latestProducts[activeIndex].name}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h3 className="font-display text-3xl font-bold">{latestProducts[activeIndex].name}</h3>
                  <div className="mt-8 flex justify-center gap-3">
                    {latestProducts.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-primary w-6 shadow-sm" : "bg-border shadow-inner"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4 animate-fade-up">
            <button
              onClick={prevProduct}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white active:scale-95 shadow-sm"
              aria-label="Previous product"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              onClick={nextProduct}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white transition-all hover:opacity-90 active:scale-95 shadow-sm"
              aria-label="Next product"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED SCROLL ─────────────────────────────── */}
      <section className="py-24 bg-background overflow-hidden" style={{ contentVisibility: "auto", containIntrinsicSize: "0 600px" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">— Featured Specialties</p>
            <h2 className="mt-6 font-display text-5xl leading-[1] sm:text-6xl">
              Local <span className="text-gradient">favorites.</span>
            </h2>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {[
              { t: "Special Sulaimani", d: "Spiced Kerala tea", i: heroCoffee },
              { t: "Chicken Club", d: "Triple-decker delight", i: pastries },
              { t: "Bubble Tea", d: "Fresh strawberry mix", i: cafeInterior },
              { t: "Veg Burger", d: "Spicy chipotle patty", i: espresso },
              { t: "Iced Sulaimani", d: "Refreshing citrus kick", i: heroCoffee },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[280px] sm:min-w-[320px] snap-start group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-soft">
                  <img src={item.i} alt={item.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-2xl leading-tight group-hover:text-primary transition-colors">{item.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.d}</p>
                  <Link to="/menu" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:underline">
                    View in menu
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-border p-4 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-full bg-primary p-4 text-primary-foreground hover:bg-primary/90 transition-all shadow-soft active:scale-95"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* SHOWCASE ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream/50 py-32 grain" style={{ contentVisibility: "auto", containIntrinsicSize: "0 900px" }}>
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="perspective order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[5/6] overflow-hidden rounded-2xl shadow-3d border border-border/50">
                <img src={cafeInterior} alt="Dugout café interior" width={1536} height={1840} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden aspect-square w-56 overflow-hidden rounded-2xl shadow-3d border border-border/50 md:block">
                <img src={pastries} alt="" width={400} height={400} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 hidden h-28 w-28 items-center justify-center rounded-full bg-ink text-cream shadow-3d md:flex">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold">est.</p>
                  <p className="font-mono text-[10px] tracking-widest text-primary-glow">2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">— The Experience</p>
            <h2 className="mt-6 font-display text-5xl leading-[1] sm:text-7xl">
              Luxury in every <br /><span className="text-gradient">detail.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Modern luxury meets industrial charm. Meticulously designed for focus and connection in Malappuram.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-12 gap-y-6">
              {[
                { t: "Specialty Beans", d: "Sourced from high-altitude estates" },
                { t: "Artisan Bakery", d: "Baked fresh every single morning" },
                { t: "Modern Workspace", d: "Premium Wi-Fi and power outlets" },
                { t: "Late Opening", d: "Your midnight coffee sanctuary" },
                { t: "Signature Brews", d: "Traditional Sulaimani with a twist" },
                { t: "Outdoor Lounge", d: "A breezy terrace for slow afternoons" }
              ].map((x) => (
                <li key={x.t} className="space-y-1 border-b border-border/60 pb-4">
                  <p className="font-display text-base text-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {x.t}
                  </p>
                  <p className="text-[12px] text-muted-foreground leading-tight pl-3">{x.d}</p>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-premium mt-12 inline-flex items-center gap-3 rounded-full px-10 py-4 text-[12px] font-bold uppercase tracking-[0.25em]">
              Read our story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-32" style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}>
        <div className="relative overflow-hidden rounded-sm bg-ink p-12 text-cream shadow-3d md:p-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />

          <div className="relative grid items-end gap-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary-glow">— Visit us</p>
              <h2 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl">
                Your table <br /> is <span className="text-gold animate-shimmer">waiting.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
                Pop in for a flat white, stay for the croissants. Open every day from sunrise.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-cream px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-transform hover:scale-105">
                Reserve a table
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/menu" className="link-underline text-[12px] font-semibold uppercase tracking-[0.22em] text-cream">
                See full menu →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
