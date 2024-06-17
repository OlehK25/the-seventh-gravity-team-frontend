"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SectionOne() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between gap-24 pb-48">
      <div className="flex flex-col gap-6 max-w-[550px]">
        <h2 className="text-6xl">
          Твоя допомога потрібна{" "}
          <span className="text-[#2214e1]">тут і зараз</span>
        </h2>

        <p className="text-2xl">
          Ваша допомога може бути вирішальною для тих, хто потребує підтримки у
          складні моменти життя. Тож об’єднаймося,щоб відбудувати Україну разом
        </p>

        <div className="flex items-center justify-between mt-10">
          <button
            onClick={() => router.push("/register?type=volunteer")}
            className="inline-flex w-[227px] h-[55px] items-center justify-center rounded-2xl font-normal leading-7 text-black hover:bg-slate-200 border border-black bg-transparent"
          >
            Стати волонтером
          </button>

          <button
            onClick={() => router.push("/register?type=organization")}
            className="inline-flex w-[227px] h-[55px] items-center justify-center rounded-2xl font-normal leading-7 text-black hover:bg-slate-200 border border-black bg-transparent"
          >
            Ми організація
          </button>
        </div>
      </div>

      <div className="flex-none relative w-[40px] h-[40px] sm:w-[658px] sm:h-[694px]">
        <Image
          src={"/Section_1.jpg"}
          alt={"Section_1 Logo"}
          fill={true}
          priority
          style={{ objectFit: "contain", borderRadius: "10px" }}
          sizes="(max-width: 640px) 40px, 658px"
        />
      </div>
    </div>
  );
}

export default SectionOne;
