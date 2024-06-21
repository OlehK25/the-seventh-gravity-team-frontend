import * as React from "react";

import AppLayout from "@/components/layouts/AppLayout";
import VolunteerCard from "@/components/VolunteerCard";
import { volunteerData } from "@/mock/volunteerData";
import { volunteerFilter } from "@/mock/volunteerFilter";
import VolunteerFilter from "@/components/VolunteerFilter";

export default function VolunteersPage() {
  return (
    <AppLayout>
      <div className="px-16 flex gap-56 pb-14">
        <div className="max-w-[700px] w-full">
          <h1 className="text-3xl my-6 font-medium">
            Волонтери які співпрацюють з нами
          </h1>

          <div className="grid grid-cols-3 gap-6 ">
            {volunteerData.map((volunteer) => (
              <VolunteerCard
                key={volunteer.id}
                icon={volunteer.icon}
                name={volunteer.name}
                specialization={volunteer.specialization}
                exp={volunteer.exp}
              />
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
