"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkle, ArrowClockwise, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import {
  aiSummarySteps,
  aiSummaryText,
  aiSummaryHighlights,
} from "@/lib/ai-summary";

type Phase = "idle" | "thinking" | "typing" | "done";

const TYPE_SPEED_MS = 14;
const STEP_DELAY_MS = 420;

export function AiSummary() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  useEffect(() => clearTimers, []);

  const run = () => {
    clearTimers();
    setVisibleSteps(0);
    setTypedLength(0);
    setPhase("thinking");

    aiSummarySteps.forEach((_, i) => {
      timeouts.current.push(
        setTimeout(() => setVisibleSteps(i + 1), STEP_DELAY_MS * (i + 1)),
      );
    });

    timeouts.current.push(
      setTimeout(
        () => setPhase("typing"),
        STEP_DELAY_MS * aiSummarySteps.length + 300,
      ),
    );
  };

  useEffect(() => {
    if (phase !== "typing") return;
    if (typedLength >= aiSummaryText.length) {
      const t = setTimeout(() => setPhase("done"), 200);
      timeouts.current.push(t);
      return;
    }
    const t = setTimeout(
      () => setTypedLength((l) => l + 1),
      TYPE_SPEED_MS,
    );
    timeouts.current.push(t);
    return () => clearTimeout(t);
  }, [phase, typedLength]);

  const close = () => {
    clearTimers();
    setPhase("idle");
  };

  const isOpen = phase !== "idle";

  return (
    <div className="mb-6">
      {!isOpen && (
        <button
          onClick={run}
          className="group inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-muted active:scale-[0.98]"
        >
          <Sparkle
            size={13}
            weight="fill"
            className="text-muted-foreground transition-colors group-hover:text-foreground"
          />
          AI Summary
        </button>
      )}

      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-1 rounded-lg border border-border bg-muted/20 p-4 duration-300">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Sparkle size={13} weight="fill" />
              AI Summary
              <span className="text-muted-foreground/50">
                · runs entirely client-side
              </span>
            </div>
            <div className="flex items-center gap-1">
              {phase === "done" && (
                <button
                  onClick={run}
                  aria-label="Regenerate"
                  className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowClockwise size={13} weight="regular" />
                </button>
              )}
              <button
                onClick={close}
                aria-label="Close"
                className="rounded p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X size={13} weight="regular" />
              </button>
            </div>
          </div>

          {(phase === "thinking" || phase === "typing" || phase === "done") && (
            <div className="mb-2 space-y-1.5">
              {aiSummarySteps.slice(0, visibleSteps).map((step, i) => (
                <p
                  key={step}
                  className="animate-in fade-in slide-in-from-left-1 flex items-center gap-1.5 text-xs text-muted-foreground/70 duration-300"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/50" />
                  {step}
                </p>
              ))}
            </div>
          )}

          {(phase === "typing" || phase === "done") && (
            <>
              <p className="text-sm leading-relaxed text-foreground">
                {aiSummaryText.slice(0, typedLength)}
                {phase === "typing" && (
                  <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-foreground/60 align-middle" />
                )}
              </p>

              {phase === "done" && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {aiSummaryHighlights.map((h) => (
                    <span
                      key={h}
                      className={cn(
                        "animate-in fade-in rounded-md border border-border bg-background px-2 py-1 text-[11px] text-muted-foreground duration-500",
                      )}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
