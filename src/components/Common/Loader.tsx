export default function Loader() {
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
