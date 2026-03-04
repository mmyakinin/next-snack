import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    title?: string;
    contentClassName?: string;
    endAdortment?: React.ReactNode;
    className?: string;
}

export const WhiteBlock: React.FC<React.PropsWithChildren<Props>> = ({
    title,
    contentClassName,
    endAdortment,
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "rounded-xl bg-white p-[35px] pb-0 w-[752px] max-w-[752px] max-[752px]:w-full max-[787px]:rounded-xl",
                className,
            )}
        >
            <div className="flex justify-between items-center pb-6 border-b-2 border-gray-200">
                <h4 className="text-[24px] font-bold">{title}</h4>
                {endAdortment}
            </div>

            <div className={contentClassName}>{children}</div>
        </div>
    );
};
