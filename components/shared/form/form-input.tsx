"use client";

import React from "react";

import { useFormContext } from "react-hook-form";
import { ClearButton, ErrorText } from "..";
import { Input } from "@/components/ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
}

export const FormInput: React.FC<Props> = ({
    name,
    label,
    required,
    placeholder,
    ...props
}) => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const onClickClear = () => {
        setValue(name, "", { shouldValidate: true });
    };

    return (
        <div className="w-full">
            {label && (
                <p className="text-base font-medium">
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </p>
            )}
            <div className="relative">
                <Input
                    placeholder={placeholder}
                    {...register(name)}
                    {...props}
                />

                {value && (
                    <ClearButton
                        onClick={onClickClear}
                        className="-translate-y-1/2"
                    />
                )}
            </div>

            {errorText && <ErrorText text={errorText} className="pt-1" />}
        </div>
    );
};
