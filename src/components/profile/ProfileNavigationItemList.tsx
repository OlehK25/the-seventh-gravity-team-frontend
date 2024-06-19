import * as React from "react";

function ProfileNavigationItemList({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex items-center justify-start gap-4 p-2 px-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
      {icon}

      <div>{name}</div>
    </div>
  );
}

export default ProfileNavigationItemList;
