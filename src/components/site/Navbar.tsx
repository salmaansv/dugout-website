import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/dugout-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Story" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div
        className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 ${scrolled ? "max-w-6xl glass rounded-full shadow-soft" : "max-w-7xl"
          }`}
      >
        <Link to="/" onClick={scrollToTop} className="group flex items-center gap-4 py-2.5">
          <img
            src={logo}
            alt="Dugout Logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <p className="font-display text-2xl font-bold tracking-[0.2em] text-ink">DUGOUT</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={scrollToTop}
              className="link-underline text-[13px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "link-underline text-[13px] font-bold uppercase tracking-[0.18em] text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>



        <Link
          to="/contact"
          onClick={scrollToTop}
          className="btn-premium hidden md:inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em]"
        >
          Contact Us
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-full p-2 text-foreground" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 8h16M4 16h16"} strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-3 glass rounded-3xl p-3 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={scrollToTop}
              className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary bg-primary/5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
