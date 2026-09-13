/* import type { Technology } from "../../types/technology";
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
    <aside className="bg-white border-2 border-border-subtle p-5 rounded-2xl shadow-brand-soft">
      <div className="font-jakarta flex flex-col justify-between">
        <h2 className="pb-1 text-base/normal font-bold text-text-heading">
          Your Stack
        </h2>

        <span className="pb-3 text-xs/[1.33] text-text-faint">
          {count} Technology Selected
        </span>

        {count === 0 ? (
          <div className="py-10 text-center">
            <p className="text-sm text-slate-500 border-2 px-4 py-2.5 border-dashed border-slate-200">
              Nothing here yet. Add a technology from the list to start building
              your stack.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex flex-col gap-2">
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
              className="mt-4 font-inter text-sm/[1.14] text-text-danger font-semibold w-full px-4 py-2.5 rounded-lg bg-white border-2 border-border-danger transition-colors hover:border-rose-400/40 hover:text-rose-300"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
 */

import { Trash2 } from "lucide-react";
import type { Technology } from "../../types/technology";
import StackItem from "../Stack/StackItem";

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
      <div className="flex items-center justify-between gap-3 pb-4">
        <h2 className="text-base font-bold text-text-heading">Your Stack</h2>
        <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {count} {count === 1 ? "Technology" : "Technologies"}
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
