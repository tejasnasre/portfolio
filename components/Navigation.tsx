"use client";

import SwitchButton from "@/components/SwitchButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/links", label: "Links" },
  ];

  return (
    <nav className="mb-10 flex items-center justify-between text-sm text-muted-foreground">
      <div className="flex items-center gap-x-5">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-foreground",
                isActive
                  ? "font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <SwitchButton />
    </nav>
  );
}
