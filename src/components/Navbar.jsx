import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const navItems = [
  { name: "Home", href: "#Hero" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skill" },
  { name: "Projects", href: "#Project" },
  { name: "Contact", href: "#Contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        " fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/30 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#Home"
        >
          <span className="relative z-10">
            <span className="text-glow text-pink-400"> Welcome to my</span>{" "}
            Portfolio Website
          </span>
        </a>
        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="group inline-flex flex-col text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
              <span className=" block h-0.5 w-full group-hover:w-100% bg-primary transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100 mt-1"></span>
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden px-6 py-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center border:background-blue-199",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className=" flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
