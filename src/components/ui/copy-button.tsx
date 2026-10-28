import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the textarea path (e.g. non-secure context) */
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } finally {
    document.body.removeChild(ta);
  }
  return ok;
}

type CopyButtonProps = {
  value: string;
  /** Shown instead of the default "Copy" label (icon-only mode when omitted with `compact`). */
  label?: string;
  copiedLabel?: string;
  /** Icon-only 40px square — for code-block headers. */
  compact?: boolean;
  className?: string;
  ariaTarget?: string;
};

export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied!",
  compact = false,
  className,
  ariaTarget,
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    const ok = await copyText(value);
    setCopied(ok);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel(label, copied, ariaTarget, compact)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 font-medium text-white/70 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zolai-500",
        compact ? "h-10 w-10" : "h-11 min-w-11 px-4 text-sm",
        copied && "border-zolai-500/30 bg-zolai-500/10 text-zolai-400",
        className,
      )}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {!compact && <span>{copied ? copiedLabel : label}</span>}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}

function ariaLabel(
  label: string,
  copied: boolean,
  target: string | undefined,
  compact: boolean,
): string {
  if (compact) return copied ? `${target ?? "Snippet"} copied` : `Copy ${target ?? "snippet"}`;
  return label;
}
