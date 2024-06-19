"use client";

import * as React from "react";
import { z } from "zod";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "@/components/profile/InputField";
import PhoneField from "@/components/PhoneField";

interface IFormInput {
  country: string;
  city: string;
  specialization: string;
  phone_number: string;
  date_of_birth: string;
  email: string;
}

interface IFormInputPersonal extends IFormInput {
  name: string;
  surname: string;
}

interface IFormInputOrg extends IFormInput {
  name_of_organization: string;
  code_of_edrpou: string;
}

const schema = {
  country: z.string().min(2, "Країна повинна бути довше 2 символів"),
  city: z.string().min(2, "Місто повинно бути довше 2 символів"),
  specialization: z
    .string()
    .min(2, "Спеціалізація повинна бути довше 2 символів"),
  phone_number: z
    .string()
    .min(10, "Номер телефону повинен бути довше 10 символів"),
  date_of_birth: z
    .string()
    .min(10, "Дата народження повинна бути довше 10 символів"),
  email: z
    .string()
    .email("Неправильна адреса електронної пошти")
    .max(255, "Адреса електронної пошти не повинна перевищувати 255 символів"),
};

const personalSchema = z.object({
  name: z.string().min(2, "Ім'я повинно бути довше 2 символів"),
  surname: z.string().min(2, "Прізвище повинно бути довше 2 символів"),
  ...schema,
});

const orgSchema = z.object({
  name_of_organization: z
    .string()
    .min(2, "Назва організації повинна бути довше 2 символів"),
  code_of_edrpou: z.string().min(8, "Код ЄДРПОУ повинен бути довше 8 символів"),
  ...schema,
});

function PersonalDetailsFormList({ isOrg }: { isOrg: boolean }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputPersonal | IFormInputOrg>({
    resolver: zodResolver(isOrg ? orgSchema : personalSchema),
    defaultValues: {
      name: "Олег",
      surname: "",
      country: "",
      city: "",
      specialization: "",
      phone_number: "",
      date_of_birth: "",
      email: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<
    string | null | undefined
  >(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6"
      >
        <InputField
          name={isOrg ? "name_of_organization" : "name"}
          label={isOrg ? "Назва" : "Ім'я"}
          type={"text"}
          placeholder={isOrg ? "Назва" : "Ім'я"}
          control={control}
          value={"Олег"}
          isLoading={isLoading}
          error={
            isOrg
              ? (errors as FieldErrors<IFormInputOrg>).name_of_organization
              : (errors as FieldErrors<IFormInputPersonal>).name
          }
        />

        <InputField
          name={isOrg ? "code_of_edrpou" : "surname"}
          label={isOrg ? "Код ЄДРПОУ" : "Прізвище"}
          type={"text"}
          placeholder={isOrg ? "Код ЄДРПОУ" : "Прізвище"}
          control={control}
          value={""}
          isLoading={isLoading}
          error={
            isOrg
              ? (errors as FieldErrors<IFormInputOrg>).name_of_organization
              : (errors as FieldErrors<IFormInputPersonal>).name
          }
        />

        <InputField
          name={"country"}
          label={"Країна"}
          type={"text"}
          placeholder={"Країна"}
          control={control}
          value={""}
          isLoading={isLoading}
          error={errors.country}
        />

        <InputField
          name={"city"}
          label={"Місто"}
          type={"text"}
          placeholder={"Місто"}
          control={control}
          value={""}
          isLoading={isLoading}
          error={errors.city}
        />

        <InputField
          name={"specialization"}
          label={"Спеціалізація"}
          type={"text"}
          placeholder={"Спеціалізація"}
          control={control}
          value={""}
          isLoading={isLoading}
          error={errors.specialization}
        />

        <PhoneField
          control={control}
          name={"phone_number"}
          isLoading={isLoading}
          placeholder={"Номер телефону"}
          error={errors.phone_number}
          isProfile={true}
        />

        <InputField
          name={"date_of_birth"}
          label={"Дата народження"}
          type={"text"}
          placeholder={"Дата народження"}
          control={control}
          value={""}
          isLoading={isLoading}
          error={errors.date_of_birth}
        />

        <InputField
          name={"email"}
          label={"Електронна пошта"}
          type={"text"}
          placeholder={"Електронна пошта"}
          control={control}
          value={""}
          isLoading={isLoading}
          error={errors.email}
        />
      </form>

      <div className="text-end">
        <button
          type="submit"
          className="text-end inline-flex mt-10 w-[161px] h-[48px] items-center text-lg justify-center rounded-2xl font-semibold leading-7 text-black hover:bg-slate-200 border border-black bg-transparent"
        >
          Зберегти
        </button>
      </div>
    </div>
  );
}

export default PersonalDetailsFormList;
