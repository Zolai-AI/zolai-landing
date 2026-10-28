import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Bot, KeyRound, Plug, Sparkles, Terminal } from "lucide-react";
import { CopyButton } from "./ui/copy-button";
import { Card, CardContent } from "./ui/card";

const ENDPOINT = "https://mcp.zolai.space/mcp";

const genericJson = `{
  "mcpServers": {
    "zolai": {
      "type": "http",
      "url": "${ENDPOINT}"
    }
  }
}`;

type Client = {
  id: string;
  label: string;
  icon: typeof Bot;
  where: string;
  steps: string[];
  snippet: string;
  snippetLang: "json" | "shell" | "url";
};

const clients: Client[] = [
  {
    id: "chatgpt",
    label: "ChatGPT",
    icon: Bot,
    where: "Settings → Apps and Connectors",
    steps: [
      "Add a custom connector and paste the MCP URL below.",
      "Sign in with Zolai when prompted (OAuth 2.1) — or leave it public for the free tools.",
    ],
    snippet: ENDPOINT,
    snippetLang: "url",
  },
  {
    id: "claude",
    label: "Claude",
    icon: Sparkles,
    where: "claude.ai → Customize → Connectors, or Claude Desktop config",
    steps: [
      "claude.ai: add a connector with the MCP URL.",
      "Claude Desktop: drop this into claude_desktop_config.json (bridges the remote server over stdio):",
    ],
    snippet: `{
  "mcpServers": {
    "zolai": {
      "command": "npx",
      "args": ["mcp-remote", "${ENDPOINT}"]
    }
  }
}`,
    snippetLang: "json",
  },
  {
    id: "cursor",
    label: "Cursor",
    icon: Terminal,
    where: ".cursor/mcp.json or Settings → MCP",
    steps: [
      "Add the server to your project or global MCP config:",
    ],
    snippet: genericJson,
    snippetLang: "json",
  },
  {
    id: "gemini",
    label: "Gemini CLI",
    icon: Bot,
    where: ".gemini/settings.json or one command",
    steps: [
      "Register the server from your terminal:",
      "Loopback redirects are supported, so OAuth sign-in works headless.",
    ],
    snippet: `gemini mcp add --transport http zolai ${ENDPOINT}`,
    snippetLang: "shell",
  },
  {
    id: "vscode",
    label: "VS Code",
    icon: Plug,
    where: "GitHub Copilot Chat → MCP",
    steps: [
      "Quick add from the command line:",
    ],
    snippet: `code --add-mcp '{"name":"zolai","type":"http","url":"${ENDPOINT}"}'`,
    snippetLang: "shell",
  },
];

const tiers = [
  {
    icon: KeyRound,
    title: "8 free tools",
    body: "Dictionary, grammar, Bible, RAG search and analysis — no account, no key.",
  },
  {
    icon: Sparkles,
    title: "30+ with sign-in",
    body: "OAuth 2.1 unlocks member and admin tools, per-user scopes and rate limits.",
  },
  {
    icon: Plug,
    title: "Two-way",
    body: "Your assistant can also contribute corrections and usage examples back to the corpus.",
  },
];

export function Connect() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(clients[0].id);
  const current = clients.find((c) => c.id === active) ?? clients[0];

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = clients.findIndex((c) => c.id === active);
    const next =
      e.key === "ArrowRight"
        ? clients[(i + 1) % clients.length]
        : clients[(i - 1 + clients.length) % clients.length];
    setActive(next.id);
    document.getElementById(`connect-tab-${next.id}`)?.focus();
  };

  return (
    <section id="connect" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zolai-500/30 bg-zolai-500/10 px-4 py-1.5 text-xs font-medium text-zolai-400 mb-6">
            <Plug className="h-3.5 w-3.5" /> MCP SERVER • OAUTH 2.1
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect <span className="gradient-text">any AI</span> to Zolai
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            One URL for ChatGPT, Claude, Cursor, Gemini CLI, VS Code — or any MCP
            client. No model training needed: your assistant reads the real corpus.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Endpoint + tiers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-white/10 bg-white/[0.03]">
              <CardContent className="p-6 md:p-8 space-y-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-3">
                    Endpoint
                  </p>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-3">
                    <code className="flex-1 min-w-0 truncate font-mono text-sm text-zolai-400">
                      {ENDPOINT}
                    </code>
                    <CopyButton
                      value={ENDPOINT}
                      ariaTarget="Endpoint URL"
                      className="shrink-0"
                    />
                  </div>
                  <p className="mt-3 text-xs text-white/40">
                    Streamable HTTP • same server at{" "}
                    <code className="font-mono text-white/60">api.zolai.space/mcp</code>
                  </p>
                </div>

                <ul className="space-y-5">
                  {tiers.map((t) => (
                    <li key={t.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zolai-500/10">
                        <t.icon className="h-5 w-5 text-zolai-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{t.title}</p>
                        <p className="text-sm text-white/50 leading-relaxed">{t.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Client tabs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="h-full border-white/10 bg-white/[0.03]">
              <CardContent className="p-6 md:p-8">
                <div
                  role="tablist"
                  aria-label="MCP client setup instructions"
                  onKeyDown={onTabKeyDown}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {clients.map((c) => {
                    const selected = c.id === active;
                    return (
                      <button
                        key={c.id}
                        id={`connect-tab-${c.id}`}
                        role="tab"
                        aria-selected={selected}
                        aria-controls={`connect-panel-${c.id}`}
                        tabIndex={selected ? 0 : -1}
                        onClick={() => setActive(c.id)}
                        className={`inline-flex items-center gap-2 rounded-lg px-4 h-10 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zolai-500 ${
                          selected
                            ? "bg-zolai-500/15 text-zolai-400 border border-zolai-500/30"
                            : "text-white/50 border border-transparent hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <c.icon className="h-4 w-4" />
                        {c.label}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    id={`connect-panel-${current.id}`}
                    role="tabpanel"
                    aria-labelledby={`connect-tab-${current.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs text-white/40 mb-4">
                      {current.where}
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-6">
                      {current.steps.map((s) => (
                        <li key={s} className="text-sm text-white/70 leading-relaxed">
                          {s}
                        </li>
                      ))}
                    </ol>
                    <div className="relative rounded-xl border border-white/10 bg-black/40">
                      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-white/30">
                          {current.snippetLang}
                        </span>
                        <CopyButton
                          value={current.snippet}
                          compact
                          ariaTarget={`${current.label} config`}
                        />
                      </div>
                      <pre className="overflow-x-auto p-4">
                        <code className="font-mono text-xs md:text-sm leading-relaxed text-white/80">
                          {current.snippet}
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <p className="mt-6 text-xs text-white/40">
                  Public tools need nothing at all. Member and admin tools ask you
                  to sign in once — the client handles OAuth 2.1 (dynamic
                  registration, PKCE, refresh) automatically.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
