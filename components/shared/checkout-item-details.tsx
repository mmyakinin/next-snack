import React from "react";

import { cn } from "@/lib/utils";

interface Props {
    title?: string;
    value?: React.ReactNode;
    beginAdortment: React.ReactNode;
    className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({
    title,
    value,
    beginAdortment,
    className,
}) => {
    return (
        <div className={cn("flex justify-between items-center")}>
            <div className="flex items-center">
                {beginAdortment}
                <p className="text-[18px] pl-[14px]">{title}</p>
            </div>
            <h4 className="text-[18px] font-bold">{value}</h4>
        </div>
    );
};
