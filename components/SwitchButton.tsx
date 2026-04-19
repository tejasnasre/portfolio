"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

interface SwitchButtonProps {
  className?: string;
}

const subscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true, // client snapshot
    () => false, // server snapshot
  );
}

export default function SwitchButton({ className }: SwitchButtonProps) {
  const { setTheme, theme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <button
      onClick={() => isMounted && setTheme(theme === "dark" ? "light" : "dark")}
      disabled={!isMounted}
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors",
        className,
      )}
      aria-label="Toggle theme"
    >
      {isMounted && theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
