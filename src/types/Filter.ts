import { FilterType } from "@/types/FilterType";

export interface Filter {
  type: keyof FilterType;
  text: string;
  categories: string[];
}
