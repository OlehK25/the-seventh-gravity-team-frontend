import * as React from "react";
import SimpleField from "@/components/SimpleInput";

function StepThree({
  control,
  isLoading,
  error,
}: {
  control: any;
  isLoading: boolean;
  error: any;
}) {
  return (
    <div className="flex flex-col gap-6">
      <SimpleField
        control={control}
        name={"beneficiaries"}
        placeholder={"Бенефіціари"}
        type={"text"}
        isLoading={isLoading}
        error={error.beneficiaries?.message}
      />

      <SimpleField
        control={control}
        name={"date_of_registration"}
        placeholder={"Дата реєстрації компанії"}
        type={"text"}
        isLoading={isLoading}
        error={error.date_of_registration?.message}
      />
    </div>
  );
}

export default StepThree;
