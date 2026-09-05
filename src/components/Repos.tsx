import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork, Star, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useGitHubRepos } from "@/hooks/useGitHubRepos";

function timeAgo(date: string) {
  const days = Math.floor((Date.now() - new Date(date).getTime()) / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

const REPO_DESCRIPTIONS: Record<string, string> = {
  "zolai-core": "Python toolkit + RAG Knowledge Brain — embeddings, n-gram prediction, FastAPI",
  "zolai-web": "Learner platform — Next.js + Hono + Prisma, dictionary, AI tutor",
  "zolai-tauri": "Offline desktop app — Tauri 2 + bundled Ollama + GGUF",
  "zolai-datasets": "Bilingual corpora — build scripts, HF/Kaggle export",
  "zolai-training": "LoRA/QLoRA fine-tuning + GGUF export",
  "zolai-wiki": "Knowledge base — grammar, vocabulary, curriculum",
  "zolai-ai.github.io": "GitHub Pages org landing site",
  ".github": "Org profile + community files + workflows",
  "zolai-mcp-server": "MCP server for ChatGPT/Gemini/Claude — EdgeFastMCP on Cloudflare Workers",
  "zolai-landing": "Org landing page — React 19 + Vite + Three.js + Tailwind v4",
};

const REPO_ICONS: Record<string, string> = {
  "zolai-core": "🧠",
  "zolai-web": "🌐",
  "zolai-tauri": "💻",
  "zolai-datasets": "📊",
  "zolai-training": "🔬",
  "zolai-wiki": "📖",
  "zolai-ai.github.io": "🏠",
  ".github": "⚙️",
  "zolai-mcp-server": "🤖",
  "zolai-landing": "🌐",
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Rust: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  HTML: "bg-red-500/10 text-red-400 border-red-500/30",
  CSS: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export function Repos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { data: repos, isLoading } = useGitHubRepos();

  return (
    <section id="repos" className="py-24 px-6 bg-white/[0.02]" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            10 Repos, <span className="gradient-text">One Ecosystem</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Live stats from GitHub — all repos on main, MIT licensed, CI passing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-5">
                    <div className="h-4 bg-white/5 rounded w-3/4 mb-3" />
                    <div className="h-3 bg-white/5 rounded w-full mb-2" />
                    <div className="h-3 bg-white/5 rounded w-2/3" />
                  </CardContent>
                </Card>
              ))
            : repos?.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05 }}
                >
                  <a href={repo.html_url} target="_blank" rel="noopener" className="block h-full">
                    <Card className="h-full hover:border-white/20 transition-all duration-300 hover:glow group cursor-pointer">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-2xl">{REPO_ICONS[repo.name] || "📦"}</span>
                          <ExternalLink className="h-4 w-4 text-white/20 group-hover:text-white/60 transition-colors" />
                        </div>
                        <h3 className="font-semibold text-white mb-1 group-hover:text-zolai-400 transition-colors">
                          {repo.name}
                        </h3>
                        <p className="text-xs text-white/40 mb-3 line-clamp-2 leading-relaxed">
                          {REPO_DESCRIPTIONS[repo.name] || repo.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          {repo.language && (
                            <Badge className={LANG_COLORS[repo.language] || "secondary"}>
                              {repo.language}
                            </Badge>
                          )}
                          <span className="flex items-center gap-1 text-xs text-white/30">
                            <Star className="h-3 w-3" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-white/30">
                            <Clock className="h-3 w-3" /> {timeAgo(repo.updated_at)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
