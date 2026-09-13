export const BADGE_COLOR_PALETTE: string[] = [
  "text-primary border-primary/25 bg-primary/10",
  "text-accent border-accent/25 bg-accent/10",
  "text-foreground border-foreground/25 bg-foreground/10",
  "text-emerald-600 border-emerald-200 bg-emerald-50",
  "text-amber-600 border-amber-200 bg-amber-50",
  "text-sky-600 border-sky-200 bg-sky-50",
  "text-orange-600 border-orange-200 bg-orange-50",
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function hashToIndex(seed: string, paletteLength: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % paletteLength;
}

/** Shuffled once per page load — same as before. */
const SHUFFLED_BADGE_PALETTE = shuffle(BADGE_COLOR_PALETTE);

/**
 * Builds an id -> color-class map for a full list of items, guaranteeing
 * the first 3 items each get a distinct color (assigned directly from the
 * shuffled palette, in order — no collision possible since they're 3
 * different indices, 0/1/2). Every item after that falls back to the
 * hash-based assignment, which *can* collide with earlier items or each
 * other, but that's fine once you're past the "first impression" row.
 */
export function buildBadgeColorMap(ids: string[]): Map<string, string> {
  const map = new Map<string, string>();

  ids.forEach((id, index) => {
    if (index < 3) {
      // guaranteed distinct: index 0, 1, 2 of the shuffled palette
      map.set(
        id,
        SHUFFLED_BADGE_PALETTE[index % SHUFFLED_BADGE_PALETTE.length],
      );
    } else {
      map.set(
        id,
        SHUFFLED_BADGE_PALETTE[hashToIndex(id, SHUFFLED_BADGE_PALETTE.length)],
      );
    }
  });

  return map;
}
