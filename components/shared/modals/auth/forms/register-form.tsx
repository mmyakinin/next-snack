import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormInput } from "@/components/shared/";
import { Button } from "@/components/ui";

import { RegisterFormValues, registerFormSchema } from "./schemas";

interface Props {
    className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    return (
        <FormProvider {...form}>
            <form className="overflow-y-auto">
                <div className="flex flex-col gap-4 relative">
                    <div className="flex justify-between items-center">
                        <h3 className="text-[24px] font-bold">
                            Регистрация аккаунта
                        </h3>
                    </div>
                    <div className="w-full">
                        <FormInput name="email" label="E-Mail" required />
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
                            label="Пароль"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <FormInput
                            name="confirmPassword"
                            type="password"
                            label="Подтвердите пароль"
                            required
                        />
                    </div>
                    <Button
                        className="text-base"
                        type="submit"
                        loading={form.formState.isSubmitting}
                    >
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
