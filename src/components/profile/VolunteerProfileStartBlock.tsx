import * as React from "react";

function VolunteerProfileStartBlock({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 w-full bg-white rounded-xl">
      <p className="font-semibold text-2xl">{title}</p>

      <div>{icon}</div>
    </div>
  );
}

export default VolunteerProfileStartBlock;
