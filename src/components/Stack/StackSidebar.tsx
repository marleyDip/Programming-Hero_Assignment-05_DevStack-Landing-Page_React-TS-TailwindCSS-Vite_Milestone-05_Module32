import { Trash2 } from "lucide-react";
import type { Technology } from "../../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function StackSidebar({
  stack,
  onRemove,
  onClear,
}: StackSidebarProps) {
  const count = stack.length;

  return (
    <aside className="rounded-2xl border border-border-subtle bg-white p-5 shadow-brand-soft font-jakarta">
      <div className="flex flex-col justify-between gap-1 pb-4">
        <h2 className="text-base font-bold text-text-heading">Your Stack</h2>
        <span className="text-xs text-text-faint">
          {count === 0
            ? "No technologies selected yet."
            : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
        </span>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-border-subtle to-transparent" />

      {count === 0 ? (
        <div className="mt-4 flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 px-4 py-8 text-center">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f8fafc]">
            <span className="text-lg">🧩</span>
          </div>
          <p className="text-sm leading-relaxed text-text-secondary">
            Nothing here yet. Add a technology from the list to start building
            your stack.
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </ul>

          <button
            type="button"
            onClick={onClear}
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-border-danger bg-white px-4 py-2.5 text-sm font-semibold text-text-danger transition-all duration-200 hover:bg-text-danger hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(216,44,32,0.5)] active:scale-[0.98] cursor-pointer"
          >
            <Trash2
              size={16}
              className="transition-transform duration-200 group-hover:-rotate-6"
            />
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
