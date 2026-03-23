"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    registerFormSchema,
    RegisterFormValues,
} from "./modals/auth/forms/schemas";

import { FormInput } from "@/components/shared/";

import { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";

interface Props {
    user: User;
    className?: string;
}

export const ProfileForm: React.FC<Props> = ({ user, className }) => {
    const [isSignOut, setIsSignOut] = React.useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            fullName: user.fullName,
            email: user.email,
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: RegisterFormValues) => {
        try {
            await updateUserInfo({
                fullName: data.fullName,
                password: data.password,
            });
            toast.success("Данные были успешно обновлены");
        } catch (err) {
            console.error(err);
            toast.error("Ошибка при обновлении данных");
        }
    };

    const onClickSignOut = async () => {
        try {
            setIsSignOut(true);
            await signOut({
                callbackUrl: "/",
            });

            toast.success("Вы вышли из своего аккаунта!!!");
        } catch (err) {
            console.error(err);
            toast.error("Ошибка при вызоде из аккаунта");
            setIsSignOut(false);
        }
    };

    return (
        <FormProvider {...form}>
            <form>
                <div className={cn("", className)}>
                    <div className="mb-4">
                        <h3 className="font-bold text-[36px] max-[400px]:text-[28px]">
                            {`Личные Данные | #${user.id}`}
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 max-[650px]:grid-cols-1">
                        <div className="w-full">
                            <FormInput
                                name="email"
                                label="E-Mail"
                                required
                                readOnly
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                name="fullName"
                                label="Полное имя"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                name="password"
                                type="password"
                                label="Новый пароль"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                name="confirmPassword"
                                type="password"
                                label="Подтвердите новый пароль"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 max-[650px]:flex-col">
                        <Button
                            className="text-base font-bold w-full h-[50px]"
                            type="submit"
                            loading={form.formState.isSubmitting}
                        >
                            Сохранить
                        </Button>
                        <Button
                            className="text-base font-bold w-full h-[50px]"
                            loading={isSignOut}
                            type="button"
                            onClick={onClickSignOut}
                        >
                            Выйти
                        </Button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};
