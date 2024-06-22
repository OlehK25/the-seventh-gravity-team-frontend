import * as React from "react";
import Image from "next/image";

import { Volunteer } from "@/types/Volunteer";

function VolunteerCard({
  id,
  icon,
  name,
  specialization,
  exp,
  helpMode,
  helpTypes,
  cities,
}: Volunteer) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-4 bg-[#D9D9D9] hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
      <div className="flex-none relative w-[190px] h-[190px]">
        <Image
          src={icon}
          alt={`${name} Logo`}
          fill={true}
          priority
          style={{ objectFit: "contain", borderRadius: "12px" }}
          sizes="190px"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm text-gray-600">{exp}</p>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        <p className="py-0.5 px-2 bg-gray-100 rounded-xl text-sm text-gray-600">
          {specialization}
        </p>
        <p className="py-0.5 px-2 bg-gray-100 rounded-xl text-sm text-gray-600">
          {cities.join(", ")}
        </p>
        <p className="py-0.5 px-2 bg-gray-100 rounded-xl text-sm text-gray-600">
          {helpMode}
        </p>
        <p className="py-0.5 px-2 bg-gray-100 rounded-xl text-sm text-gray-600">
          {helpTypes.join(", ")}
        </p>
      </div>

      <button className="text-center w-full h-[37px] rounded-2xl font-bold leading-7 text-base text-black hover:bg-slate-200 border border-black bg-transparent">
        Зв`язатися
      </button>
    </div>
  );
}

export default VolunteerCard;
