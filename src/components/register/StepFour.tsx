import * as React from "react";
import SimpleField from "@/components/SimpleInput";

function StepFour({
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
        name={"country"}
        placeholder={"Введіть країну"}
        type={"text"}
        isLoading={isLoading}
        error={error.country?.message}
      />

      <SimpleField
        control={control}
        name={"oblast"}
        placeholder={"Введіть область"}
        type={"text"}
        isLoading={isLoading}
        error={error.oblast?.message}
      />

      <SimpleField
        control={control}
        name={"city"}
        placeholder={"Введіть місто"}
        type={"text"}
        isLoading={isLoading}
        error={error.city?.message}
      />
    </div>
  );
}

export default StepFour;
