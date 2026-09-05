import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techs = [
  { name: "Python", desc: "Core toolkit", color: "#3776AB" },
  { name: "TypeScript", desc: "Web platform", color: "#3178C6" },
  { name: "Next.js", desc: "Learner app", color: "#FFFFFF" },
  { name: "FastAPI", desc: "REST API", color: "#009688" },
  { name: "Tauri", desc: "Desktop app", color: "#FFC131" },
  { name: "Rust", desc: "System layer", color: "#CE422B" },
  { name: "Prisma", desc: "Database ORM", color: "#2D3748" },
  { name: "Hono", desc: "Edge API", color: "#FF6B35" },
  { name: "Tailwind", desc: "UI styling", color: "#06B6D4" },
  { name: "Cloudflare", desc: "Edge deploy", color: "#F48120" },
  { name: "HuggingFace", desc: "Model hub", color: "#FFD21E" },
  { name: "Ollama", desc: "Local LLM", color: "#FFFFFF" },
];

export function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by <span className="gradient-text">Modern Stack</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            From Python NLP to Cloudflare edge — every layer optimized for performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                {tech.name.slice(0, 2)}
              </div>
              <span className="text-sm font-medium text-white">{tech.name}</span>
              <span className="text-xs text-white/40">{tech.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
