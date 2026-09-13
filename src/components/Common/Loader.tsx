export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 py-24"
    >
      <div className="relative h-12 w-12">
        {/* soft pulsing glow behind the spinner */}
        <span className="absolute inset-0 animate-pulse rounded-full bg-accent/20 blur-md" />

        {/* base ring */}
        <span className="absolute inset-0 rounded-full border-4 border-border-subtle" />

        {/* spinning brand-gradient arc */}
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-accent" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-text-heading">
          Loading technologies
        </p>
        <p className="text-xs text-text-faint">
          Fetching the latest stack options…
        </p>
      </div>
    </div>
  );
}

/* export default function Loader() {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400"
    >
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-[#232840] border-t-accent" />

      <p className="text-sm">Loading technologies...</p>
    </div>
  );
}
 */
