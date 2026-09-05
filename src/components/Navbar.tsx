import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Brain } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Repos", href: "#repos" },
  { label: "Stack", href: "#stack" },
  { label: "Docs", href: "https://github.com/Zolai-AI/.github/blob/main/docs/ECOSYSTEM_AUDIT.md" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Brain className="h-6 w-6 text-zolai-400" />
          <span className="text-lg font-bold">Zolai-AI</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}
          <Button size="sm" asChild>
            <a href="https://github.com/Zolai-AI" target="_blank" rel="noopener">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="text-white/70 hover:text-white" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
