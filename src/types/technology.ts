// String Literal Union Type
export type Category =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "Devops"
  | "Tools";

export type Difficulty = "Beginner-Friendly" | "Intermediate" | "Advanced";

export interface Technology {
  id: string;
  name: string;
  category: Category;
  description: string;
  icon: string;
  rating: number;
  difficulty: Difficulty;
  badge: string;
}
