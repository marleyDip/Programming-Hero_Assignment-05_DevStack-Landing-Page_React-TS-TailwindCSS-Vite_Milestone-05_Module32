import { Check, Plus, Star } from "lucide-react";
import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
  badgeStyle: string;
}

const DIFFICULTY_STYLES: Record<Technology["difficulty"], string> = {
  "Beginner-Friendly": "text-emerald-600 border-emerald-200 bg-emerald-50",
  Intermediate: "text-amber-600 border-amber-200 bg-amber-50",
  Advanced: "text-rose-600 border-rose-200 bg-rose-50",
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
  badgeStyle,
}: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border-2 bg-white p-5 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-soft ${
        isAdded
          ? "border-primary/40"
          : "border-border-subtle hover:border-primary/30"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#f8fafc] ring-1 ring-inset ring-border-subtle transition-colors group-hover:bg-accent/5">
          <img
            src={icon}
            alt=""
            loading="lazy"
            className="h-7 w-7 object-contain"
          />
        </div>

        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badgeStyle}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="pt-3 text-lg/snug font-bold text-text-heading">{name}</h3>

      <p className="line-clamp-2 pt-1 text-xs/relaxed text-text-muted">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-border-subtle/80 px-2 py-1 text-[11px] font-medium text-text-body">
          {category}
        </span>

        <span
          className={`rounded-md border px-2 py-1 text-[11px] font-medium ${DIFFICULTY_STYLES[difficulty]}`}
        >
          {difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-text-body">
          <Star size={14} className="fill-[#fbbf24] text-[#fbbf24]" />
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        aria-pressed={isAdded}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
          isAdded
            ? "cursor-not-allowed border border-primary/30 bg-primary/10 text-primary"
            : "bg-linear-to-r from-orange-light to-accent text-white shadow-brand-soft hover:-translate-y-0.5 hover:shadow-pink-glow-hover active:translate-y-0 active:scale-[0.98] cursor-pointer"
        }`}
      >
        {isAdded ? (
          <>
            <Check size={14} /> Added to Stack
          </>
        ) : (
          <>
            <Plus size={14} /> Add to Stack
          </>
        )}
      </button>
    </article>
  );
}
