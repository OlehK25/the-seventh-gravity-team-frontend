"use client";

import * as React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { PiWarningCircleFill } from "react-icons/pi";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";

import EmailField from "@/components/EmailField";
import PasswordField from "@/components/PasswordField";
import AppLayout from "@/components/layouts/AppLayout";
import PhoneField from "@/components/PhoneField";
import CustomizedSteppers from "@/components/register/RegisterStepper";
import StepTwo from "@/components/register/StepTwo";
import StepThree from "@/components/register/StepThree";
import StepFour from "@/components/register/StepFour";
import { useUser } from "@/contexts/userContext";

const InputError = dynamic(() => import("@/components/InputError"));

const schemaStepOne = z
  .object({
    email: z.string().email("Неправильна адреса електронної пошти").max(255),
    password: z.string().min(8).max(30),
    passwordConfirm: z.string().min(8),
    phone: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Паролі не збігаються",
  });

const schemaStepTwo = z.object({
  edrpou: z.string().min(8).max(10),
  organizationName: z.string().min(1).max(255),
  organizationType: z.string().min(1).max(255),
});

const schemaStepThree = z.object({
  beneficiaries: z.string().min(1).max(255),
  date_of_registration: z.any(),
});

const schemaStepFour = z.object({
  country: z.string().min(1).max(255),
  oblast: z.string().min(1).max(255),
  city: z.string().min(1).max(255),
});

export default function Register() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const [selectedTab, setSelectedTab] = React.useState<string>(
    type
      ? type === "volunteer"
        ? "Я волонтер"
        : "Ми організація"
      : "Я волонтер",
  );
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const schemas = [
    schemaStepOne,
    schemaStepTwo,
    schemaStepThree,
    schemaStepFour,
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: zodResolver(schemas[currentStep]),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      edrpou: "",
      organizationName: "",
      organizationType: "",
      country: "",
      oblast: "",
      city: "",
      beneficiaries: "",
      date_of_registration: "",
    },
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<
    string | null | undefined
  >(null);
  const [showPassword, setShowPassword] = React.useState({
    password: false,
    confirmPassword: false,
  });
  const { userType, login } = useUser();

  const handleVolunteerClick = () => {
    setSelectedTab("Я волонтер");
    reset({
      email: getValues("email"),
      password: getValues("password"),
      passwordConfirm: getValues("passwordConfirm"),
      phone: getValues("phone"),
    });
  };

  const handleOrganizationClick = () => {
    setSelectedTab("Ми організація");
    reset({
      email: getValues("email"),
      password: getValues("password"),
      passwordConfirm: getValues("passwordConfirm"),
      phone: getValues("phone"),
      edrpou: getValues("edrpou"),
      organizationName: getValues("organizationName"),
      organizationType: getValues("organizationType"),
      country: getValues("country"),
      oblast: getValues("oblast"),
      city: getValues("city"),
      beneficiaries: getValues("beneficiaries"),
      date_of_registration: getValues("date_of_registration"),
    });
  };

  React.useEffect(() => {
    setValue("email", getValues("email"));
    setValue("password", getValues("password"));
    setValue("passwordConfirm", getValues("passwordConfirm"));
    setValue("phone", getValues("phone"));
  }, [getValues, selectedTab, setValue]);

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (selectedTab === "Ми організація" && currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    login(type === "volunteer" ? "volunteer" : "organization");

    if (userType === "volunteer") {
      router.push("/profile");
    } else router.push("/profile/personal-details");
    // setIsLoading(true);
    // setServerError(null);
    //
    // try {
    //   const res = await signIn("credentials", {
    //     email: data.email,
    //     password: data.password,
    //     redirect: false,
    //   });
    //
    //   if (res?.status === 200) {
    //     reset();
    //     router.push(`/`);
    //   } else {
    //     setServerError(res?.error);
    //   }
    // } catch (error: any) {
    //   setServerError(error?.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <AppLayout>
      <div className="flex items-center gap-6 px-16">
        <div className="flex-none relative w-[40px] h-[40px] sm:w-[646px] sm:h-[1050px]">
          <Image
            src={"/AuthPage.jpg"}
            alt={"AuthPage Logo"}
            fill={true}
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 40px, 646px"
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {selectedTab === "Ми організація" && (
            <CustomizedSteppers activeStep={currentStep} />
          )}

          <div className="w-[415px]">
            <div className="mb-4">
              <h2 className="text-center max-sm:mb-1 text-3xl font-bold leading-tight text-black sm:text-4xl">
                Реєстрація
              </h2>

              <p className="py-8 text-center">
                {currentStep > 0
                  ? "Заповніть будь ласка форму"
                  : "Реєстрація за допомогою зареєстрованого номера телефону або\n" +
                    "облікового запису в соціальній мережі призведе до входу в\n" +
                    "обліковий запис"}
              </p>
            </div>

            {!type && (
              <div className="flex text-lg font-bold border-gray-300 sm:w-[415px] mb-6">
                <button
                  onClick={handleVolunteerClick}
                  className={`flex-1 whitespace-nowrap inline-block p-2 border-b-2 ${
                    selectedTab === "Я волонтер"
                      ? "text-[#404040] border-[#404040]"
                      : "border-gray-400 text-[#7d7d7d]"
                  }`}
                >
                  Я волонтер
                </button>

                <button
                  onClick={handleOrganizationClick}
                  className={`flex-1 whitespace-nowrap inline-block p-2 border-b-2 ${
                    selectedTab === "Ми організація"
                      ? "text-[#404040] border-[#404040]"
                      : "border-gray-400 text-[#7d7d7d]"
                  }`}
                >
                  Ми організація
                </button>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-6"
            >
              {selectedTab === "Я волонтер" || currentStep === 0 ? (
                <>
                  <EmailField
                    control={control}
                    name={"email"}
                    isLoading={isLoading}
                    error={errors.email?.message}
                  />

                  <PasswordField
                    control={control}
                    name="password"
                    isLoading={isLoading}
                    placeholder={"Введіть пароль"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    error={errors.password?.message}
                  />

                  <PasswordField
                    control={control}
                    name="passwordConfirm"
                    isLoading={isLoading}
                    placeholder={"Підтвердіть пароль"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    error={errors.passwordConfirm?.message}
                  />

                  <PhoneField
                    control={control}
                    name={"phone"}
                    isLoading={isLoading}
                    placeholder={"Введіть номер телефону"}
                    error={errors.phone?.message}
                  />
                </>
              ) : currentStep === 1 ? (
                <StepTwo
                  control={control}
                  isLoading={isLoading}
                  error={errors}
                />
              ) : currentStep === 2 ? (
                <StepThree
                  control={control}
                  isLoading={isLoading}
                  error={errors}
                />
              ) : (
                <StepFour
                  control={control}
                  isLoading={isLoading}
                  error={errors}
                />
              )}

              {serverError && (
                <div
                  className="flex my-2 justify-start text-center gap-1 p-3 text-base text-red-500 font-semibold rounded-lg bg-red-50"
                  role="alert"
                >
                  <PiWarningCircleFill className="h-5 w-5" />
                  <InputError messages={serverError} />
                </div>
              )}

              <button
                disabled={isLoading}
                className="inline-flex w-full h-[62px] items-center justify-center rounded-2xl font-bold leading-7 text-lg text-black hover:bg-slate-200 border border-black bg-transparent"
              >
                {selectedTab === "Я волонтер" || currentStep === 3
                  ? "Зареєструватися"
                  : isLoading
                    ? "Обробка.."
                    : "Далі"}
              </button>
            </form>

            <div className="flex py-6 gap-6 items-center">
              <p className="border border-gray-300 flex-1"></p>
              <p className="text-center text-base whitespace-nowrap text-[#929497]">
                Увійти за допомогою
              </p>
              <p className="border border-gray-300 flex-1"></p>
            </div>

            <div className="flex items-center justify-center gap-8">
              <div className="hover:cursor-pointer flex-none relative w-[40px] h-[40px] sm:w-[44px] sm:h-[44px]">
                <Image
                  src={"/Diya.svg"}
                  alt={"Diya Logo"}
                  fill={true}
                  priority
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 40px, 44px"
                />
              </div>

              <div className="hover:cursor-pointer flex-none relative w-[40px] h-[40px] sm:w-[44px] sm:h-[44px]">
                <Image
                  src={"/BankID.svg"}
                  alt={"BankID Logo"}
                  fill={true}
                  priority
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 640px) 40px, 44px"
                />
              </div>
            </div>

            <p className="text-[#929497] py-12">
              By creating an account, you accept our{" "}
              <span className="text-[#404040] hover:cursor-pointer hover:underline">
                Terms of Service and Privacy Policy.
              </span>
            </p>

            <p className="border border-gray-300 w-full"></p>

            <p className="text-center py-4 text-[#333333]">
              Уже є акаунт?{" "}
              <Link
                href={"/login"}
                className="underline underline-offset-4 hover:no-underline font-semibold"
              >
                Увійти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
