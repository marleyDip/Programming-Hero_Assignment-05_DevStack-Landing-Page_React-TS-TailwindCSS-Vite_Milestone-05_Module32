import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  isInStack: (id: string) => boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyGrid({
  technologies,
  isInStack,
  onAdd,
}: TechnologyGridProps) {
  if (technologies.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-slate-400">
        No technologies found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3.5 md:gap-5 sm:grid-cols-2 md:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={isInStack(technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
