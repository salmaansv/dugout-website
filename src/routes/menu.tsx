import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import pastries from "@/assets/pastries.jpg";
import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import espresso from "@/assets/espresso.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({ meta: [
    { title: "Menu — Dugout Café" },
    { name: "description", content: "Explore our curated menu of specialty coffees, Kerala sulaimani, bubble teas, and gourmet bites." },
  ] }),
});

const categories = ["All", "Starter", "Burger", "Sandwich", "Pasta", "Wrap", "Special Sulaimani", "Milk Tea", "ICED Tea", "Dessert", "Bubble Tea"];

const menuItems = [
  {
    id: 1,
    name: "Strawberry Bubble Tea",
    description: "A delightful bubble tea with the sweet, fruity flavor of fresh strawberries.",
    category: "Bubble Tea",
    image: heroCoffee,
  },
  {
    id: 2,
    name: "Tender Chicken Club Sandwich",
    description: "Tender chicken layered with fresh veggies and creamy sauce in a toasted club.",
    category: "Sandwich",
    image: pastries,
  },
  {
    id: 3,
    name: "Pina Colda Bubble Tea",
    description: "Blend of creamy coconut and juicy pineapple with chewy tapioca pearls.",
    category: "Bubble Tea",
    image: cafeInterior,
  },
  {
    id: 4,
    name: "Chipotle veg burger",
    description: "Spicy chipotle veg patty with crisp lettuce, juicy veggies, and a flavorful sauce.",
    category: "Burger",
    image: espresso,
  },
  {
    id: 5,
    name: "Special Sulaimani",
    description: "Traditional Kerala spiced tea with lemon and a hint of cardamom.",
    category: "Special Sulaimani",
    image: heroCoffee,
  },
  {
    id: 6,
    name: "Chicken Pasta",
    description: "Creamy white sauce pasta with tender chicken and herbs.",
    category: "Pasta",
    image: cafeInterior,
  },
];

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <section className="bg-hero grain">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center animate-fade-up">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">— The Menu</p>
          <h1 className="mt-6 font-display text-6xl leading-[1] sm:text-8xl">
            Crafted with <span className="text-gradient">passion.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            From traditional Kerala Sulaimani to modern Bubble Teas and gourmet burgers. Every dish tells a story.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        {/* Category Filter */}
        <div className="mb-12 flex items-center justify-between border-b border-border pb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all relative ${
                  activeCategory === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary animate-fade-in" />
                )}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex gap-3 ml-8">
            <button className="rounded-full border border-border p-2.5 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="rounded-full bg-primary p-2.5 text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="group animate-fade-up">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-soft border border-border/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-2xl leading-tight group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-muted-foreground">No items found in this category yet. Stay tuned!</p>
          </div>
        )}

        <div className="divider-ornament mt-32">
          <span className="font-display text-2xl">✦</span>
        </div>
        <p className="mt-8 text-center font-display text-lg text-muted-foreground">
          "A taste of Kerala, served with love."
        </p>
      </section>
    </Layout>
  );
}
