"use client";

import * as React from "react";
import { useState } from "react";
import AppLayout from "@/components/layouts/AppLayout";
import VolunteerCard from "@/components/VolunteerCard";
import Filter from "@/components/Filter";
import { volunteerData } from "@/mock/volunteerData";
import { filterData } from "@/mock/filterData";
import { FilterType } from "@/types/FilterType";

export default function VolunteersPage() {
  const [selectedFilters, setSelectedFilters] = useState<FilterType>({
    help_mode: [],
    help_types: [],
    specialization: "",
    experience_level: [],
    location: [],
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

  const filteredVolunteers = volunteerData.filter((volunteer) => {
    const volunteerHelpModes = volunteer.helpMode.includes("та")
      ? volunteer.helpMode.split("та").map((mode) => mode.trim().toLowerCase())
      : [volunteer.helpMode.toLowerCase()];

    const matchesHelpMode =
      selectedFilters.help_mode.length === 0 ||
      selectedFilters.help_mode
        .map((mode) => mode.toLowerCase())
        .some((mode) => volunteerHelpModes.includes(mode));

    const matchesHelpTypes =
      selectedFilters.help_types.length === 0 ||
      selectedFilters.help_types.some((type) =>
        volunteer.helpTypes
          .map((ht) => ht.toLowerCase())
          .includes(type.toLowerCase()),
      );

    const matchesSpecialization =
      selectedFilters.specialization === "" ||
      selectedFilters.specialization.toLowerCase() ===
        volunteer.specialization.toLowerCase();

    const matchesExperienceLevel =
      selectedFilters.experience_level.length === 0 ||
      selectedFilters.experience_level.includes(volunteer.exp);

    const matchesLocation =
      selectedFilters.location.length === 0 ||
      selectedFilters.location.some((city) =>
        volunteer.cities
          .map((c) => c.toLowerCase())
          .includes(city.toLowerCase()),
      );

    return (
      matchesHelpMode &&
      matchesHelpTypes &&
      matchesSpecialization &&
      matchesExperienceLevel &&
      matchesLocation
    );
  });

  return (
    <AppLayout>
      <div className="px-16 flex gap-56 pb-14">
        <div className="max-w-[700px] w-full">
          <h1 className="text-3xl my-6 font-medium">
            Волонтери які співпрацюють з нами
          </h1>

          <div className="grid grid-cols-3 gap-6 ">
            {filteredVolunteers.map((volunteer) => (
              <VolunteerCard
                id={volunteer.id}
                key={volunteer.id}
                icon={volunteer.icon}
                name={volunteer.name}
                specialization={volunteer.specialization}
                exp={volunteer.exp}
                helpMode={volunteer.helpMode}
                helpTypes={volunteer.helpTypes}
                cities={volunteer.cities}
              />
            ))}
          </div>

          {filteredVolunteers && filteredVolunteers.length === 0 && (
            <div className="text-black text-lg py-2 px-6 rounded-xl bg-gray-50">
              За вибраними параметрами волонтерів не знайдено :(
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
