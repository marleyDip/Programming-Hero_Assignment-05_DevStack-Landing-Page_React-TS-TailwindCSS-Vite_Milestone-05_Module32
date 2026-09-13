/**
 *
 * Owns the "Your Stack" state: Which technologies the visitor has picked.
 *
 * the add / remove / clear actions and their toast feedback.
 * persists to localStorage so the stack survive a page refresh.
 *
 */

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

interface UseStackResult {
  stack: Technology[];
  addToStack: (tech: Technology) => void;
  removeFromStack: (id: string) => void;
  clearStack: () => void;
  isInStack: (id: string) => boolean;
}

const STORAGE_KEY = "your-stack";

function loadStack(): Technology[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.log("Failed to load stack from localStorage:", err);
    return [];
  }
}

export function useStack(): UseStackResult {
  const [stack, setStack] = useState<Technology[]>(() => loadStack());

  // Keep localStorage in sync whenever the stack changes
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stack));
    } catch (err) {
      console.log("Failed to save stack to localStorage:", err);
    }
  }, [stack]);

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
