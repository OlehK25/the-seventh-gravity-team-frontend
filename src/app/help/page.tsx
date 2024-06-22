"use client";

import * as React from "react";
import { useState } from "react";
import AppLayout from "@/components/layouts/AppLayout";
import { filterData } from "@/mock/filterData";
import Filter from "@/components/Filter";
import { helpPlacesData } from "@/mock/helpPlacesData";
import HelpPlaceBlock from "@/components/HelpPlaceBlock";
import { FilterType } from "@/types/FilterType";

export default function HelpPlacesPage() {
  const [selectedFilters, setSelectedFilters] = useState<FilterType>({
    help_mode: [],
    help_types: [],
    location: [],
    specialization: "",
    experience_level: [],
  });

  const handleFilterChange = (type: keyof FilterType, category: string) => {
    setSelectedFilters((prevFilters) => {
      if (type === "specialization") {
        return {
          ...prevFilters,
          [type]: prevFilters[type] === category ? "" : category,
        };
      }
      if (prevFilters[type].includes(category)) {
        return {
          ...prevFilters,
          [type]: prevFilters[type].filter((item) => item !== category),
        };
      } else {
        return {
          ...prevFilters,
          [type]: [...prevFilters[type], category],
        };
      }
    });
  };

  const filteredHelpPlaces = helpPlacesData.filter((place) => {
    const matchesHelpMode =
      selectedFilters.help_mode.length === 0 ||
      selectedFilters.help_mode
        .map((mode) => mode.toLowerCase())
        .includes(place.help_mode.toLowerCase());

    const matchesHelpTypes =
      selectedFilters.help_types.length === 0 ||
      selectedFilters.help_types.some((type) =>
        place.help_types.includes(type),
      );

    const matchesLocation =
      selectedFilters.location.length === 0 ||
      selectedFilters.location.some((city) => place.location.includes(city));

    const matchesSpecialization =
      selectedFilters.specialization === "" ||
      selectedFilters.specialization.toLowerCase() ===
        place.specialization.toLowerCase();

    const matchesExperienceLevel =
      selectedFilters.experience_level.length === 0 ||
      selectedFilters.experience_level.includes(place.experience_level);

    return (
      matchesHelpMode &&
      matchesHelpTypes &&
      matchesLocation &&
      matchesSpecialization &&
      matchesExperienceLevel
    );
  });

  return (
    <AppLayout>
      <div className="px-16 flex gap-56 pb-14">
        <div className="max-w-[825px] w-full">
          <h1 className="text-3xl my-6 font-medium">
            Місця де потрібна допомога
          </h1>

          <div className="flex flex-col gap-6">
            {filteredHelpPlaces.map((place) => (
              <HelpPlaceBlock key={place.address} {...place} />
            ))}
          </div>

          {filteredHelpPlaces && filteredHelpPlaces.length === 0 && (
            <div className="text-black text-lg py-2 px-6 rounded-xl bg-gray-50">
              За вибраними параметрами подій не знайдено :(
            </div>
          )}
        </div>

        <div className="max-w-[350px] w-full">
          <h1 className="text-3xl my-6 font-medium">Пошук по категоріях</h1>

          {filterData.map((filter) => (
            <Filter
              key={filter.type}
              {...filter}
              selectedFilters={selectedFilters[filter.type as keyof FilterType]}
              onFilterChange={handleFilterChange}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
