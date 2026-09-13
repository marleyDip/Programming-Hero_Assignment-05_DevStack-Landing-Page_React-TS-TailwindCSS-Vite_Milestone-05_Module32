import type { Technology } from "../types/technology";

// Check whether a technology is already selected
const isInStack = (stack: Technology[], technologyId: string): boolean => {
  return stack.some((technology) => technology.id === technologyId);
};

// Add a technology to the stack
export const addToStack = (
  stack: Technology[],
  technology: Technology,
): Technology[] => {
  if (isInStack(stack, technology.id)) {
    return stack;
  }

  return [...stack, technology];
};

// Remove a technology from the stack
export const removeFromStack = (
  stack: Technology[],
  technologyId: string,
): Technology[] => {
  return stack.filter((technology) => technology.id !== technologyId);
};
