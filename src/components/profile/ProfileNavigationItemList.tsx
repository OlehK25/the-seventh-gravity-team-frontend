"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

function ProfileNavigationItemList({
  icon,
  name,
  path,
}: {
  icon: React.ReactNode;
  name: string;
  path?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <div
      onClick={() => (path ? router.push(path) : null)}
      className={`${isActive ? "bg-slate-100 font-semibold" : ""} flex items-center justify-start gap-4 p-2 px-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out`}
    >
      {icon}

      <div>{name}</div>
    </div>
  );
}

export default ProfileNavigationItemList;
