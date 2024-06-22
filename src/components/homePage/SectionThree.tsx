import * as React from "react";
import SectionThreeBlock from "@/components/homePage/SectionThreeBlock";
import { donationData } from "@/mock/leviesMockData";

function SectionThree() {
  return (
    <div className="pb-40">
      <h1 className="text-6xl">Збори</h1>

      <div className="grid grid-cols-3 gap-10">
        {donationData.map((donation, index) => (
          <SectionThreeBlock
            key={index}
            title={donation.title}
            imageUrl={donation.imageUrl}
            currentDonation={donation.currentDonation}
            allDonation={donation.allDonation}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="w-[226px] h-[55px] flex items-center justify-center rounded-2xl font-bold text-lg leading-7 text-black hover:bg-slate-200 border border-black bg-transparent">
          Дивитися більше
        </button>
      </div>
    </div>
  );
}

export default SectionThree;
