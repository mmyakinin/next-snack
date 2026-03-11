"use client";

import React from "react";

import { useFormContext } from "react-hook-form";
import { ClearButton, ErrorText } from "..";
import { Textarea } from "@/components/ui";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    required?: boolean;
}

export const FormTextarea: React.FC<Props> = ({
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
            <div className="relative">
                <Textarea
                    placeholder={placeholder}
                    {...register(name)}
                    {...props}
                />

                {value && (
                    <ClearButton onClick={onClickClear} className="top-4" />
                )}
            </div>

            {errorText && <ErrorText text={errorText} className="pt-1" />}
        </div>
    );
};
