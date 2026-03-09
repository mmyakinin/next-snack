import React from "react";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const ClearButton: React.FC<Props> = ({ className }) => {
    return (
        <button className={cn("", className)}>
            <X
                size={20}
                className="absolute top-1/2 right-4 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
            />
        </button>
    );
};
