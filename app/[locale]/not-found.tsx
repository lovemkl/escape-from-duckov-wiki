import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-banana">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-4 text-muted">
        That page is not on this unofficial Escape From Duckov wiki. Try the Raid
        Loadout + Hideout Planner or head home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full border border-banana px-4 py-2 text-sm font-semibold text-banana"
        >
          Home
        </Link>
        <Link
          href="/tools/raid-loadout"
          className="rounded-full bg-banana px-4 py-2 text-sm font-semibold text-background"
        >
          Raid loadout
        </Link>
      </div>
    </div>
  );
}
