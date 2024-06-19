import * as React from "react";
import { Controller } from "react-hook-form";
import { PiWarningCircleFill } from "react-icons/pi";

import InputError from "@/components/InputError";

function InputField({
  control,
  name,
  label,
  type,
  placeholder,
  value,
  isLoading,
  error,
}: {
  control: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  isLoading: boolean;
  error: any;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5">
          <label htmlFor={name} className="text-black text-base">
            {label}
          </label>

          <input
            id={name}
            placeholder={placeholder}
            type={type}
            className="bg-transparent h-[44px] border-2 border-black text-black p-2 w-full rounded-xl"
            disabled={isLoading}
            {...field}
          />

          {error && (
            <div
              className="flex my-2 justify-start text-center gap-1 p-3 text-base text-red-500 font-semibold rounded-lg bg-red-50"
              role="alert"
            >
              <PiWarningCircleFill className="h-5 w-5" />
              <InputError messages={error} />
            </div>
          )}
        </div>
      )}
    />
  );
}

export default InputField;
