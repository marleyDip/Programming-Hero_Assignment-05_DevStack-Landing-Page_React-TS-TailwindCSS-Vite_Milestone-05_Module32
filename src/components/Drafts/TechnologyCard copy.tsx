import { Star } from "lucide-react";
import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (Technology: Technology) => void;
}

// Fixed: was Record<Technology["badge"], string> — keys here are difficulty levels, not badges
const DIFFICULTY_STYLES: Record<Technology["difficulty"], string> = {
  "Beginner-Friendly": "text-emerald-600 border-emerald-200 bg-emerald-50",
  Intermediate: "text-amber-600 border-amber-200 bg-amber-50",
  Advanced: "text-rose-600 border-rose-200 bg-rose-50",
};

// A fixed palette of text/border/bg combos for badges (Popular, Essential, Fast, etc.)
// — there are too many distinct badge strings across the dataset to hand-map each one,
// so instead each item deterministically "rolls" one of these based on its own id.
const BADGE_COLOR_PALETTE: string[] = [
  "text-primary border-primary/25 bg-primary/10",
  "text-accent border-accent/25 bg-accent/10",
  "text-foreground border-foreground/25 bg-foreground/10",
  "text-emerald-600 border-emerald-200 bg-emerald-50",
  "text-amber-600 border-amber-200 bg-amber-50",
  "text-sky-600 border-sky-200 bg-sky-50",
  "text-orange-600 border-orange-200 bg-orange-50",
];

/**
 * Deterministic "random" index from a string — same input always produces
 * the same output, so a given technology's badge color stays stable across
 * re-renders, sorts, and filters, instead of flickering on every render
 * the way a plain Math.random() call would.
 */
function hashToIndex(seed: string, paletteLength: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0; // keep it a 32-bit int
  }
  return Math.abs(hash) % paletteLength;
}

function getBadgeStyle(id: string): string {
  return BADGE_COLOR_PALETTE[hashToIndex(id, BADGE_COLOR_PALETTE.length)];
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <article className="flex flex-col h-full p-5 bg-white/20 border-2 border-border-subtle rounded-2xl shadow-card-soft hover:border-border-danger">
      <div className="flex items-start justify-between gap-3">
        <div className="grid w-12 h-12 shrink-0 place-items-center ">
          <img src={icon} alt="" loading="lazy" className="w-9 h-9" />
        </div>

        <span
          className={`rounded-full px-2.5 py-o.5 text-xs/normal font-semibold bg-gray-200 ${getBadgeStyle(technology.id)}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="pt-2 text-lg/[1.56] font-bold text-text-heading">
        {name}
      </h3>

      <p className="text-xs/[1.63] text-text-muted pt-1">{description}</p>

      <div className="mt-4 flex flex-wrap items-center justify-between">
        <span className="px-2 py-0.5 rounded-sm bg-border-subtle/80 text-[11px]/normal font-medium">
          {category}
        </span>

        <span className="text-[11px]/normal font-medium text-text-muted px-2 py-1">
          {difficulty}
        </span>

        <span className="text-[11px]/normal font-semibold text-text-body flex items-center gap-2">
          <Star size={16} className="fill-[#fbbf24] text-[#fbbf24]" />
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        aria-pressed={isAdded}
        className={`mt-5 w-full rounded-lg px-4 py-2.5 text-xs/[1.33] font-medium transition-colors ${isAdded ? "cursor-default border border-border-danger text-text-danger bg-transparent" : "bg-surface-button text-white hover:opacity-90"}`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

/*  

className={`group relative flex h-full flex-col rounded-2xl bg-white p-5 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-soft ${
    isAdded ? "" : "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-linear-to-r before:from-[#ff5722] before:via-[#ec4899] before:to-[#8b5cf6] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
  }`}
  style={{ border: "2px solid transparent", backgroundClip: "padding-box" }}

*/

/*  
className={`group flex h-full flex-col rounded-2xl border-2 bg-white p-5 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-soft ${
        isAdded
          ? "border-primary/40"
          : "border-2 border-border-subtle hover:border-transparent hover:[border-image:linear-gradient(to_right,#ff5722,#ec4899,#8b5cf6)_1]"
      }`}

*/
