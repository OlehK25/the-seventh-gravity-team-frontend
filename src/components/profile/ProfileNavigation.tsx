"use client";

import * as React from "react";
import Image from "next/image";
import { TfiHome } from "react-icons/tfi";
import { GoStar, GoGift } from "react-icons/go";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

import ProfileNavigationItemList from "@/components/profile/ProfileNavigationItemList";

function ProfileNavigation({ isOrg = false }: { isOrg?: boolean }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-start gap-6 p-8 bg-[#C5D7E2] rounded-xl h-[650px] w-[310px]">
      <div className="flex flex-col items-center gap-3">
        <div
          className="flex-none relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] hover:cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={"/Profile_logo.jpg"}
            alt={"Profile Logo"}
            fill={true}
            priority
            style={{ objectFit: "contain", borderRadius: "50%" }}
            sizes="(max-width: 640px) 0px, 80px"
          />

          {hover && (
            <div className="text-center absolute bottom-0 left-1/2 h-10 w-[80px] transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-b-full">
              Змінити
            </div>
          )}
        </div>

        <p className="font-semibold text-xl">
          {isOrg ? `"Назва Організації"` : "Олег"}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <ProfileNavigationItemList
          icon={<TfiHome className="h-5 w-5" />}
          name={"Особисті дані"}
          path={"/profile/personal-details"}
        />

        <ProfileNavigationItemList
          icon={<GoStar className="h-5 w-5" />}
          name={"Відгуки"}
        />

        <ProfileNavigationItemList
          icon={<PiTelegramLogoLight className="h-5 w-5" />}
          name={"@olegvolonter"}
        />

        <ProfileNavigationItemList
          icon={<IoSettingsOutline className="h-5 w-5" />}
          name={"Редагувати профіль"}
        />

        {!isOrg && (
          <ProfileNavigationItemList
            icon={<GoGift className="h-5 w-5" />}
            name={"Бонуси"}
          />
        )}

        <ProfileNavigationItemList
          icon={<MdOutlineLogout className="h-5 w-5" />}
          name={"Вихід"}
        />
      </div>
    </div>
  );
}

export default ProfileNavigation;
