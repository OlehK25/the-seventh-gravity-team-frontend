import * as React from "react";

import PersonalDetailsFormList from "@/components/profile/personal-details/PersonalDetailsFormList";

function PersonalDetailsForm({ isOrg = false }: { isOrg?: boolean }) {
  return (
    <div className="flex flex-col gap-4 p-8 rounded-xl bg-white">
      <h1 className="text-3xl font-semibold">Особисті дані</h1>

      <p>
        Ця інформація використовується для підтвердження вашої особи, які
        забезбечать координацію волонтерів з організаціями. Ваші данні
        зберігаються в безпеці.
      </p>

      <PersonalDetailsFormList isOrg={isOrg} />
    </div>
  );
}

export default PersonalDetailsForm;
