"use client";

import * as React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { PiWarningCircleFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";

import EmailField from "@/components/EmailField";
import PasswordField from "@/components/PasswordField";
import AppLayout from "@/components/layouts/AppLayout";
import PhoneField from "@/components/PhoneField";
const InputError = dynamic(() => import("@/components/InputError"));

interface IFormInput {
  email: string;
  password: string;
  passwordConfirm: string;
  phone?: string;
}

const emailSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email address")
      .max(255, "Email address must be less than 255 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password must be less than 30 characters"),
    passwordConfirm: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
  });

const phoneSchema = z.object({
  phone: z.string().regex(/^\+380\d{9}$/, "Invalid phone number format"),
});

export default function Register() {
  const [selectedTab, setSelectedTab] =
    React.useState<string>("Електронна пошта");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<IFormInput>({
    resolver: zodResolver(
      selectedTab === "Електронна пошта" ? emailSchema : phoneSchema,
    ),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
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

  const handleEmailClick = () => {
    setSelectedTab("Електронна пошта");

    reset({
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  const handleMobileClick = () => {
    setSelectedTab("Номер телефону");

    reset({
      phone: "",
    });
  };

  React.useEffect(() => {
    setValue("email", getValues("email"));
    setValue("password", getValues("password"));
    setValue("passwordConfirm", getValues("passwordConfirm"));
    setValue("phone", getValues("phone"));
  }, [getValues, selectedTab, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    setServerError(null);

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        redirect: false,
      });

      if (res?.status === 200) {
        reset();
        router.push(`/`);
      } else {
        setServerError(res?.error);
      }
    } catch (error: any) {
      setServerError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="flex items-center gap-6 px-16">
        <div className="flex-none relative w-[40px] h-[40px] sm:w-[646px] sm:h-[922px]">
          <Image
            src={"/AuthPage.jpg"}
            alt={"AuthPage Logo"}
            fill={true}
            priority
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 40px, 646px"
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="w-[415px]">
            <div className="mb-4">
              <h2 className="text-center max-sm:mb-1 text-3xl font-bold leading-tight text-black sm:text-4xl">
                Реєстрація
              </h2>

              <p className="py-8 text-center">
                Реєстрація за допомогою зареєстрованого номера телефону або
                облікового запису в соціальній мережі призведе до входу в
                обліковий запис
              </p>
            </div>

            <div className="flex text-lg font-bold border-gray-300 sm:w-[415px] mb-6">
              <button
                onClick={handleEmailClick}
                className={`flex-1 whitespace-nowrap inline-block p-2 border-b-2 ${
                  selectedTab === "Електронна пошта"
                    ? "text-[#404040] border-[#404040]"
                    : "border-gray-400 text-[#7d7d7d]"
                }`}
              >
                Електронна пошта
              </button>

              <button
                onClick={handleMobileClick}
                className={`flex-1 whitespace-nowrap inline-block p-2 border-b-2 ${
                  selectedTab === "Номер телефону"
                    ? "text-[#404040] border-[#404040]"
                    : "border-gray-400 text-[#7d7d7d]"
                }`}
              >
                Номер телефону
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-6"
            >
              {selectedTab === "Електронна пошта" && (
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
                </>
              )}

              {selectedTab === "Номер телефону" && (
                <PhoneField
                  control={control}
                  name={"phone"}
                  isLoading={isLoading}
                  placeholder={"Введіть номер телефону"}
                  error={errors.phone?.message}
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
                {isLoading ? "Обробка.." : "Зареєструватися "}
              </button>
            </form>

            <div className="flex py-6 gap-6 items-center">
              <p className="border border-gray-300 flex-1"></p>
              <p className="text-center text-base whitespace-nowrap	text-[#929497]">
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
