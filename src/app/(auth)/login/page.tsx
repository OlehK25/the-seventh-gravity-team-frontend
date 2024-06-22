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
import { useUser } from "@/contexts/userContext";
const InputError = dynamic(() => import("@/components/InputError"));

interface IFormInput {
  email: string;
  password: string;
}

const schema = z.object({
  email: z
    .string()
    .email("Неправильна адреса електронної пошти")
    .max(255, "Адреса електронної пошти не повинна перевищувати 255 символів"),
  password: z
    .string()
    .min(8, "Пароль повинен містити не менше 8 символів")
    .max(30, "Пароль не повинен перевищувати 30 символів"),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const { isLoggedIn, userType, login } = useUser();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<
    string | null | undefined
  >(null);
  const [showPassword, setShowPassword] = React.useState({
    password: false,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    login("volunteer");

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
            <div className="max-sm:mb-8 sm:mb-12">
              <h2 className="text-center max-sm:mb-1 text-3xl font-bold leading-tight text-black sm:text-4xl">
                Вхід
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-6"
            >
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

              {serverError && (
                <div
                  className="flex my-2 justify-start text-center gap-1 p-3 text-base text-red-500 font-semibold rounded-lg bg-red-50"
                  role="alert"
                >
                  <PiWarningCircleFill className="h-5 w-5" />
                  <InputError messages={serverError} />
                </div>
              )}

              <Link
                href="/forgot-password"
                className="w-[130px] underline underline-offset-4 hover:no-underline text-black transition-all duration-300 hover:underline"
              >
                Забули пароль?
              </Link>

              <button
                disabled={isLoading}
                className="inline-flex w-full h-[62px] items-center justify-center rounded-2xl font-bold leading-7 text-lg text-black hover:bg-slate-200 border border-black bg-transparent"
              >
                {isLoading ? "Обробка.." : "Увійти"}
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
              Ще не маєте акаунт?{" "}
              <Link
                href={"/register"}
                className="underline underline-offset-4 hover:no-underline font-semibold"
              >
                Зареєструватися
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
