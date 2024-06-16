"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { PiWarningCircleFill } from "react-icons/pi";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const InputError = dynamic(() => import("../components/InputError"));

function PhoneField({
  control,
  name,
  isLoading,
  placeholder,
  error,
  label,
}: {
  control: any;
  name: string;
  isLoading: boolean;
  placeholder: string;
  error: any;
  label?: string;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="">
          <PhoneInput
            country={"ua"}
            disabled={isLoading}
            placeholder={placeholder}
            disableDropdown
            inputStyle={{
              width: "100%",
              backgroundColor: "transparent",
              height: "52px",
              color: "black",
              border: "none",
            }}
            containerStyle={{
              width: "100%",
              border: "2px solid #d1d5db",
              borderRadius: "10px",
            }}
            buttonStyle={{
              border: "none",
              borderRight: "2px solid #d1d5db",
              borderRadius: "10px 0 0 10px",
            }}
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

export default PhoneField;
