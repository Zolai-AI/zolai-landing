import { Brain, Heart } from "lucide-react";
import { Separator } from "./ui/separator";

const links = [
  { label: "Core", href: "https://github.com/Zolai-AI/zolai-core" },
  { label: "Web", href: "https://github.com/Zolai-AI/zolai-web" },
  { label: "Desktop", href: "https://github.com/Zolai-AI/zolai-tauri" },
  { label: "Datasets", href: "https://github.com/Zolai-AI/zolai-datasets" },
  { label: "Training", href: "https://github.com/Zolai-AI/zolai-training" },
  { label: "Wiki", href: "https://github.com/Zolai-AI/zolai-wiki" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-zolai-400" />
            <span className="font-bold text-white">Zolai-AI</span>
            <span className="text-xs text-white/30 ml-2">MIT License</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <p className="text-xs text-white/30">
            © 2026 Zolai-AI Organization. Preserving Tedim Zolai (ZVS 2018).
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-rose-400" /> for the Zomi people
          </p>
        </div>
      </div>
    </footer>
  );
}
