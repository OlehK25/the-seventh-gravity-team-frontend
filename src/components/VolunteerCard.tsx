import * as React from "react";
import Image from "next/image";

function VolunteerCard({
  icon,
  name,
  specialization,
  exp,
}: {
  icon: string;
  name: string;
  specialization: string;
  exp: string;
}) {
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

      <p className="text-lg font-medium">{name}</p>

      <button className="text-center w-full h-[37px] rounded-2xl font-bold leading-7 text-base text-black hover:bg-slate-200 border border-black bg-transparent">
        Зв`язатися
      </button>
    </div>
  );
}

export default VolunteerCard;
