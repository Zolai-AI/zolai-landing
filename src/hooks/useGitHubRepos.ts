import { useQuery } from "@tanstack/react-query";

export interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

const ORG = "Zolai-AI";
const REPOS = [
  "zolai-core",
  "zolai-web",
  "zolai-tauri",
  "zolai-datasets",
  "zolai-training",
  "zolai-wiki",
  "zolai-ai.github.io",
  ".github",
  "zolai-mcp-server",
  "zolai-landing",
];

const DESCRIPTIONS: Record<string, string> = {
  "zolai-core": "Python toolkit + RAG Knowledge Brain — embeddings, n-gram prediction, FastAPI",
  "zolai-web": "Learner platform — Next.js + Hono + Prisma, dictionary, AI tutor, chat",
  "zolai-tauri": "Offline desktop app — Tauri 2 + bundled Ollama + GGUF models",
  "zolai-datasets": "Bilingual corpora & datasets — build scripts, HF/Kaggle export",
  "zolai-training": "LoRA/QLoRA fine-tuning + GGUF export for small Zolai LLMs",
  "zolai-wiki": "Knowledge base — grammar, vocabulary, curriculum, ZVS 2018",
  "zolai-ai.github.io": "GitHub Pages org landing site",
  ".github": "Org profile + community files + workflows",
  "zolai-mcp-server": "MCP server for ChatGPT/Gemini/Claude — EdgeFastMCP on Cloudflare Workers",
  "zolai-landing": "Org landing page — React 19 + Vite + Three.js + Tailwind v4",
};

const ICONS: Record<string, string> = {
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

async function fetchRepo(name: string): Promise<Repo> {
  const res = await fetch(`https://api.github.com/repos/${ORG}/${name}`);
  if (!res.ok) throw new Error(`Failed to fetch ${name}`);
  return res.json();
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos"],
    queryFn: async () => {
      const results = await Promise.allSettled(REPOS.map(fetchRepo));
      return results
        .filter((r): r is PromiseFulfilledResult<Repo> => r.status === "fulfilled")
        .map((r) => ({
          ...r.value,
          _description: DESCRIPTIONS[r.value.name] || r.value.description,
          _icon: ICONS[r.value.name] || "📦",
        }));
    },
    staleTime: 10 * 60 * 1000,
  });
}
