import { FilterType } from "@/types/FilterType";

export interface VolunteerFilterProps {
  type: keyof FilterType;
  text: string;
  categories: string[];
  selectedFilters: string[] | string;
  onFilterChange: (type: keyof FilterType, category: string) => void;
}
