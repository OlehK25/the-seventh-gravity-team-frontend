import * as React from "react";

import AppLayout from "@/components/layouts/AppLayout";
import ProfileNavigation from "@/components/profile/ProfileNavigation";
import PersonalDetailsForm from "@/components/profile/personal-details/PersonalDetailsForm";

export default function PersonalDetailsPage() {
  return (
    <AppLayout>
      <div className="flex gap-8 items-center px-16 py-12">
        <ProfileNavigation />

        <PersonalDetailsForm />
      </div>
    </AppLayout>
  );
}
