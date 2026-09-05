import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, BookOpen, Monitor, Database, MessageSquare, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const features = [
  {
    icon: Brain,
    title: "RAG Knowledge Brain",
    description: "Embeddings over wiki + PDF with cosine retrieval. No raw fine-tuning — knowledge is injected as context.",
    color: "text-zolai-400",
    bg: "bg-zolai-500/10",
  },
  {
    icon: MessageSquare,
    title: "Bilingual AI Tutor",
    description: "Socratic tutor with CEFR A1–C2 levels. Grammar guides, practice modes, all in Tedim Zolai.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Monitor,
    title: "Offline Desktop",
    description: "Tauri 2 app with bundled Ollama + GGUF models. Full functionality without internet.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Database,
    title: "Bilingual Datasets",
    description: "152K dictionary entries, 105K+ parallel pairs, published on HuggingFace & Kaggle.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: BookOpen,
    title: "ZVS 2018 Standard",
    description: "Automated orthography compliance. SOV word order, ergative 'in' enforced across all output.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: Shield,
    title: "Open Source MIT",
    description: "All 8 repos MIT-licensed. Community-driven, transparent, built for the Zomi people.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Zolai</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Everything needed to preserve, teach, and advance the Tedim Zolai language in the AI era.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <Card className="h-full hover:border-white/20 transition-all duration-300 hover:glow group">
                <CardHeader>
                  <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <f.icon className={`h-5 w-5 ${f.color}`} />
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{f.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
