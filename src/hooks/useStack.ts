/**
 *
 * Owns the "Your Stack" state: Which technologies the visitor has picked.
 *
 * the add / remove / clear actions and their toast feedback.
 *
 */

import { useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

interface UseStackResult {
  stack: Technology[];
  addToStack: (tech: Technology) => void;
  removeFromStack: (id: string) => void;
  clearStack: () => void;
  isInStack: (id: string) => boolean;
}

export function useStack(): UseStackResult {
  const [stack, setStack] = useState<Technology[]>([]);

  const isInStack = (id: string) => stack.some((item) => item.id === id);

  const addToStack = (tech: Technology) => {
    if (isInStack(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    const tech = stack.find((item) => item.id === id);

    setStack((prev) => prev.filter((item) => item.id !== id));

    if (tech) {
      toast.info(`${tech.name} removed from your stack.`);
    }
  };

  const clearStack = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return { stack, addToStack, removeFromStack, clearStack, isInStack };
}
