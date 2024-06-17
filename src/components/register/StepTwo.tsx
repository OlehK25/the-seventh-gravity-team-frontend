import * as React from "react";
import SimpleField from "@/components/SimpleInput";

function StepTwo({
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
        name={"edrpou"}
        placeholder={"Введіть ЄДРПОУ"}
        type={"text"}
        isLoading={isLoading}
        error={error.edrpou?.message}
      />

      <SimpleField
        control={control}
        name={"organizationName"}
        placeholder={"Введіть назву організації"}
        type={"text"}
        isLoading={isLoading}
        error={error.organizationName?.message}
      />

      <SimpleField
        control={control}
        name={"organizationType"}
        placeholder={"Введіть тип організації"}
        type={"text"}
        isLoading={isLoading}
        error={error.organizationType?.message}
      />
    </div>
  );
}

export default StepTwo;
