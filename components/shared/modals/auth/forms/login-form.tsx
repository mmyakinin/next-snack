import React from "react";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput } from "@/components/shared/";
import { Button } from "@/components/ui";

import { loginFormSchema, LoginFormValues } from "./schemas";
import toast from "react-hot-toast";

interface Props {
    onClose: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const response = await signIn("credentials", {
                ...data,
                redirect: false,
            });

            if (!response?.ok) {
                throw new Error();
            }

            toast.success("Вы успшено вошли в аккаунт");

            onClose();
        } catch (err) {
            console.error("Error [LOGIN]", err);
            toast.error("Не удалось войти в аккаунт");
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 relative">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[24px] font-bold">
                            Вход в аккаунт
                        </h3>

                        <div className="max-[495px]:hidden">
                            <Image
                                src={"/assets/images/phone-icon.png"}
                                alt="Иконка телефона"
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <FormInput name="email" label="E-Mail" required />
                    </div>
                    <div className="w-full">
                        <FormInput
                            name="password"
                            type="password"
                            label="Пароль"
                            required
                        />
                    </div>

                    <Button
                        className="text-base"
                        type="submit"
                        loading={form.formState.isSubmitting}
                    >
                        Войти
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
