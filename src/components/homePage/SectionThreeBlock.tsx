import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 50,
  border: "1px solid",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "black",
  },
}));

function SectionThreeBlock({
  imageUrl,
  title,
  currentDonation,
  allDonation,
}: {
  imageUrl: string;
  title: string;
  currentDonation: string;
  allDonation: string;
}) {
  const currentDonationNumber = parseInt(currentDonation.replace(/\D/g, ""));
  const allDonationNumber = parseInt(allDonation.replace(/\D/g, ""));
  const progress = (currentDonationNumber / allDonationNumber) * 100;

  return (
    <div className="py-8">
      <div className="flex-none relative w-[40px] h-[40px] sm:w-[437px] sm:h-[286px]">
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          priority
          style={{ objectFit: "fill" }}
          sizes="(max-width: 640px) 40px, 286px"
        />
      </div>

      <p className="text-3xl font-[500] py-4">{title}</p>

      <div>
        <div className="flex items-center justify-between text-base">
          <span>{currentDonation}</span>
          <span>{allDonation}</span>
        </div>
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>

      <div className="flex items-center justify-between mt-10 gap-8">
        <button className="flex-1 inline-flex w-[227px] h-[55px] items-center justify-center rounded-2xl font-normal leading-7 text-black hover:bg-slate-200 border border-black bg-transparent">
          Задонантити
        </button>

        <button className="flex-1 inline-flex w-[195px] h-[55px] items-center justify-center rounded-2xl font-normal leading-7 text-black hover:bg-slate-200 border border-black bg-transparent">
          Дізнатися більше
        </button>
      </div>
    </div>
  );
}

export default SectionThreeBlock;
