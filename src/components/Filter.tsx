import * as React from "react";
import { VolunteerFilterProps } from "@/types/props/VolunteerFilterProps";

function Filter({
  type,
  text,
  categories,
  selectedFilters,
  onFilterChange,
}: VolunteerFilterProps) {
  return (
    <div className="mb-16">
      <h2 className="text-lg font-semibold my-6">{text}</h2>

      <div className="flex flex-wrap items-center justify-start gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(type, category)}
            className={`px-4 py-1 rounded-xl ${
              (
                Array.isArray(selectedFilters)
                  ? selectedFilters.includes(category)
                  : selectedFilters === category
              )
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
