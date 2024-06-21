"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

function VolunteerProfileStartBlock({
  icon,
  title,
  patch,
}: {
  icon: React.ReactNode;
  title: string;
  patch?: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => (patch ? router.push(patch) : null)}
      className="flex flex-col items-center justify-center gap-4 p-6 w-full bg-white rounded-xl hover:cursor-pointer "
    >
      <p className="font-semibold text-2xl">{title}</p>

      <div>{icon}</div>
    </div>
  );
}

export default VolunteerProfileStartBlock;
