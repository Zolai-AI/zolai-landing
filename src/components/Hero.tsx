import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Languages } from "lucide-react";
import { Button } from "./ui/button";
import { HeroScene } from "./HeroScene";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Three.js 3D scene */}
      <HeroScene />

      {/* CSS particle overlay */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-zolai-500/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-zolai-500/30 bg-zolai-500/10 px-4 py-1.5 mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-zolai-400" />
          <span className="text-xs font-medium text-zolai-400">ZVS 2018 Standard • RAG-First AI</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Preserving{" "}
          <span className="gradient-text">Tedim Zolai</span>
          <br />
          with AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A RAG-first bilingual AI toolkit for the Zomi people — so the language thrives in the AI era.
          Learn, work, and interact with technology entirely in Tedim Zolai.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <a href="https://zolai-web.vercel.app" target="_blank" rel="noopener">
              <Globe className="h-5 w-5" /> Try Zolai Web <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/Zolai-AI" target="_blank" rel="noopener">
              <Languages className="h-5 w-5" /> Explore Ecosystem
            </a>
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "10", label: "Repos" },
            { value: "152K+", label: "Dict Entries" },
            { value: "105K+", label: "Parallel Pairs" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
