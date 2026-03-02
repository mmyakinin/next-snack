import React from "react";

import { CountIconButton } from "./";
import { cn } from "@/lib/utils";

export interface CountButtonProps {
    value?: number;
    onClick?: (type: "plus" | "minus") => void;
    className?: string;
}

export const CountButton: React.FC<CountButtonProps> = ({
    className,
    onClick,
    value = 1,
}) => {
    return (
        <div
            className={cn(
                "inline-flex items-center justify-between gap-3",
                className,
            )}
        >
            <CountIconButton
                onClick={() => onClick?.("minus")}
                disabled={value === 1}
                type="minus"
            />

            <b className="text-[18px]">{value}</b>

            <CountIconButton onClick={() => onClick?.("plus")} type="plus" />
        </div>
    );
};
