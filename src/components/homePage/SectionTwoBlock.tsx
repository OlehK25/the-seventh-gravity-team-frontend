import * as React from "react";
import Image from "next/image";

function SectionTwoBlock({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 h-[254px] bg-[#f5f9fe] p-4 rounded-xl">
      <div className="flex-none relative w-[40px] h-[40px] sm:w-[65px] sm:h-[55px]">
        <Image
          src={icon}
          alt={title}
          fill={true}
          priority
          style={{ objectFit: "contain", borderRadius: "10px" }}
          sizes="(max-width: 640px) 40px, 55px"
        />
      </div>

      <h3 className="text-lg text-center font-semibold">{title}</h3>

      <p className="text-base text-center">{description}</p>
    </div>
  );
}

export default SectionTwoBlock;
