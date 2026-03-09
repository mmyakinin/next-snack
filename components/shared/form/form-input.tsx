import React from "react";

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
    return (
        <div className="w-full">
            <div className="relative">
                <Input
                    className="text-base"
                    {...props}
                    placeholder={placeholder}
                />

                <ClearButton />
            </div>

            {required && (
                <ErrorText
                    text="Это поле обязательно для заполнения!"
                    className="pt-1"
                />
            )}
        </div>
    );
};
