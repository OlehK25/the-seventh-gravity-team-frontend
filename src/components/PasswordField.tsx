"use client";

import * as React from "react";
import { Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";
import dynamic from "next/dynamic";

const InputError = dynamic(() => import("@/components/InputError"));

function PasswordField({
  control,
  name,
  isLoading,
  placeholder,
  showPassword,
  setShowPassword,
  error,
}: {
  control: any;
  name: string;
  isLoading: boolean;
  placeholder: string;
  showPassword: any;
  setShowPassword: any;
  error: any;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="">
          <div className="relative w-full">
            <div
              className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-600"
              onClick={() =>
                setShowPassword((prevState: { [x: string]: any }) => ({
                  ...prevState,
                  [name]: !prevState[name],
                }))
              }
            >
              {showPassword[name] ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </div>

            <input
              id={name}
              placeholder={placeholder}
              type={showPassword[name] ? "text" : "password"}
              className="bg-transparent h-[52px] border-2 border-gray-300 text-black p-2 w-full rounded-lg"
              disabled={isLoading}
              {...field}
            />
          </div>

          {error && (
            <div
              className="flex my-2 justify-start text-center gap-1 p-3 text-base text-red-500 font-normal sm:font-semibold rounded-lg bg-red-50"
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

export default PasswordField;
