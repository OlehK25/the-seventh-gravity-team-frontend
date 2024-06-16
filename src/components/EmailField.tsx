"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { PiWarningCircleFill } from "react-icons/pi";
import dynamic from "next/dynamic";

const InputError = dynamic(() => import("../components/InputError"));

function EmailField({
  control,
  name,
  isLoading,
  error,
}: {
  control: any;
  name: string;
  isLoading: boolean;
  error: any;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="">
          <input
            id={name}
            placeholder={"Введіть поштову скриньку"}
            type="email"
            className="bg-transparent h-[52px] border-2 border-gray-300 text-black p-2 w-full rounded-lg"
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

export default EmailField;
