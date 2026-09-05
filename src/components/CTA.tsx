import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="animated-border rounded-2xl p-px">
          <div className="rounded-2xl bg-gray-950 p-12 md:p-16 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-zolai-600/10 via-transparent to-cyan-600/10" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build the Future of{" "}
                <span className="gradient-text">Zolai</span>?
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8">
                Join the community. Contribute code, datasets, or knowledge.
                Every contribution helps preserve Tedim Zolai for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://github.com/Zolai-AI" target="_blank" rel="noopener">
                    <Github className="h-5 w-5" /> Star on GitHub <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/Zolai-AI/.github/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">
                    Contributing Guide
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
