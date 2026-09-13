import { X } from "lucide-react";
import type { Technology } from "../../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export default function StackItem({ technology, onRemove }: StackItemProps) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-border-subtle bg-white px-3 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f8fafc] ring-1 ring-inset ring-border-subtle transition-colors group-hover:bg-accent/5">
        <img
          src={technology.icon}
          alt=""
          loading="lazy"
          className="h-5 w-5 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold leading-tight text-text-heading">
          {technology.name}
        </p>
        <p className="truncate text-xs font-medium leading-tight text-text-faint">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        aria-label={`Remove ${technology.name} from your stack`}
        className="group/btn relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f8fafc] text-text-faint opacity-0 ring-1 ring-inset ring-border-subtle transition-all duration-200 hover:bg-rose-50 hover:text-text-danger hover:ring-rose-200 hover:scale-110 active:scale-95 group-hover:opacity-100 cursor-pointer"
      >
        <X
          size={14}
          className="transition-transform duration-200 group-hover/btn:rotate-90"
        />
      </button>
    </li>
  );
}
