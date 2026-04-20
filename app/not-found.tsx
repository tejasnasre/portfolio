import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tighter sm:text-9xl">404</h1>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Page not found
      </h2>
      <p className="mt-4 max-w-[600px] text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
