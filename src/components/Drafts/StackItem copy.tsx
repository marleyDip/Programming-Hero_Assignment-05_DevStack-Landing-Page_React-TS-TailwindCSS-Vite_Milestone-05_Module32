/* import { X } from "lucide-react";
import type { Technology } from "../../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export default function StackItem({ technology, onRemove }: StackItemProps) {
  return (
    <li className="flex items-center gap-1.5 rounded-lg border-2 border-[#e2e8f0] px-3 py-2.5">
      <div className="grid w-9 h-9 place-items-center shrink-0">
        <img src={technology.icon} alt="" loading="lazy" className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px]/[2.8] font-bold text-text-heading">
          {technology.name}
        </p>

        <p className="truncate text-[6px]/[4.67] font-bold text-text-faint">
          {technology.category}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        aria-label={`Remove ${technology.name} from your stack`}
        className="grid w-7 h-7 shrink-0 place-items-center rounded-full transition-colors hover:bg-rose-50 hover:text-text-danger cursor-pointer"
      >
        <X size={16} />
      </button>
    </li>
  );
}
 */

/* import { X } from "lucide-react";
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
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-text-faint opacity-0 transition-all duration-200 hover:bg-rose-50 hover:text-text-danger group-hover:opacity-100 cursor-pointer"
      >
        <X size={16} />
      </button>
    </li>
  );
}
 */
