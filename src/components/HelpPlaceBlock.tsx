import * as React from "react";
import Image from "next/image";

function HelpPlaceBlock({
  image_url,
  address,
  description,
  date_time,
}: {
  image_url: string;
  address: string;
  description: string;
  date_time: string;
}) {
  return (
    <div className="flex gap-4 h-[174px] bg-transparent hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
      <div className="flex-none relative w-[208px] h-[174px]">
        <Image
          src={image_url}
          alt={`${address} Image`}
          fill={true}
          priority
          style={{ objectFit: "contain" }}
          sizes="174px"
        />
      </div>

      <div className="flex flex-col justify-between gap-4 w-full px-4">
        <div>
          <h2 className="text-2xl font-demium">{address}</h2>

          <p className="text-base py-6">{description}</p>
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <button className="text-blue-500 hover:underline">Долучитися</button>

          <p>{date_time}</p>
        </div>
      </div>
    </div>
  );
}

export default HelpPlaceBlock;
