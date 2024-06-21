import * as React from "react";
import { FaPrayingHands } from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";

import AppLayout from "@/components/layouts/AppLayout";
import ProfileNavigation from "@/components/profile/ProfileNavigation";
import VolunteerProfileStartBlock from "@/components/profile/VolunteerProfileStartBlock";

export default function ProfilePage() {
  const isOrg = true;

  return (
    <AppLayout>
      <div className="flex gap-8 items-center px-16 py-12">
        <ProfileNavigation isOrg={isOrg} />

        <div>
          <div className="grid grid-cols-3 gap-8 w-full">
            <VolunteerProfileStartBlock
              icon={
                <FaPrayingHands
                  style={{
                    width: 55,
                    height: 65,
                  }}
                />
              }
              title="Де я можу допомогти?"
              patch="/help"
            />

            <VolunteerProfileStartBlock
              icon={
                <GiPiggyBank
                  style={{
                    width: 55,
                    height: 65,
                  }}
                />
              }
              title="Збори"
            />

            <VolunteerProfileStartBlock
              icon={
                <CiCalendar
                  style={{
                    width: 55,
                    height: 65,
                  }}
                />
              }
              title="Заплановані події"
            />
          </div>

          <div className="h-[350px] w-full rounded-xl bg-white mt-20"></div>
        </div>
      </div>
    </AppLayout>
  );
}
