import { Link } from "@tanstack/react-router";
import logo from "@/assets/dugout-logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-cream grain">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Dugout" width={56} height={56} className="h-14 w-14 object-contain" />
              <div>
                <p className="font-display text-3xl font-bold tracking-[0.2em]">DUGOUT</p>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-cream/60">
              A warm corner where great coffee meets community. Hand-crafted brews, fresh pastries, every day.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary-glow">Explore</h4>
            <ul className="mt-6 space-y-3 font-display text-lg">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li><Link to="/menu" className="link-underline">Menu</Link></li>
              <li><Link to="/about" className="link-underline">Story</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary-glow">Hours</h4>
            <ul className="mt-6 space-y-3 text-sm text-cream/70">
              <li>Mon — Fri<br /><span className="text-cream">7:30 — 20:00</span></li>
              <li>Sat — Sun<br /><span className="text-cream">8:30 — 21:00</span></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary-glow">Find us</h4>
            <p className="mt-6 font-display text-lg leading-snug">
              Changuvetty, Kottakkal<br />Malappuram, Kerala
            </p>
            <p className="mt-4 text-sm text-cream/70">hello@dugout.cafe</p>
          </div>
        </div>
      </div>

      {/* Giant brand mark */}
      <div className="overflow-hidden border-t border-cream/10">
        <p className="block w-full text-center font-display text-[18vw] font-bold leading-[0.85] tracking-[0.05em] text-cream/[0.04] py-4 select-none">
          DUGOUT
        </p>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Dugout Café</p>
          <p>Crafted in Kerala</p>
        </div>
      </div>
    </footer>
  );
}
