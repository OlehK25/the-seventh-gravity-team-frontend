import * as React from "react";

import AppLayout from "@/components/layouts/AppLayout";
import { volunteerFilter } from "@/mock/volunteerFilter";
import VolunteerFilter from "@/components/VolunteerFilter";
import { helpPlacesData } from "@/mock/helpPlacesData";
import HelpPlaceBlock from "@/components/HelpPlaceBlock";

export default function HelpPlacesPage() {
  return (
    <AppLayout>
      <div className="px-16 flex gap-56 pb-14">
        <div className="max-w-[825px] w-full">
          <h1 className="text-3xl my-6 font-medium">
            Місця де потрібна допомога
          </h1>

          <div className="flex flex-col gap-6">
            {helpPlacesData.map((place) => (
              <HelpPlaceBlock key={place.address} {...place} />
            ))}
          </div>
        </div>

        <div className="max-w-[350px] w-full">
          <h1 className="text-3xl my-6 font-medium">Пошук по категоріях</h1>

          {volunteerFilter.map((filter) => (
            <VolunteerFilter key={filter.type} {...filter} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
