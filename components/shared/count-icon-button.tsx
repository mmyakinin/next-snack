import React from "react";

import { Button } from "../ui";
import { CountButtonProps } from "./count-button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconButtonProps {
    disabled?: boolean;
    type?: "plus" | "minus";
    onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
    disabled,
    type,
    onClick,
}) => {
    return (
        <Button
            variant="outline"
            disabled={disabled}
            onClick={onClick}
            type="button"
            className={cn(
                "p-0 border-2 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400 w-[30px] h-[30px] rounded-sm",
            )}
        >
            {type === "plus" ? <Plus size={18} /> : <Minus size={18} />}
        </Button>
    );
};
