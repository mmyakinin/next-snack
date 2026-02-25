import React from "react";

import { cn } from "@/lib/utils";

import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";
import { CartItemProps } from "@/@types/cart-item.types";

interface Props extends CartItemProps {
    onClickUpdateQuantity?: (type: "plus" | "minus") => void;
    onClickRemove?: () => void;
    className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
    name,
    imageUrl,
    price,
    quantity,
    onClickUpdateQuantity,
    onClickRemove,
    disabled,
    className,
}) => {
    return (
        <li
            className={cn(
                "p-4 flex flex-col gap-4 bg-white relative",
                className,
            )}
        >
            <div className="flex items-start gap-6 pb-3 border-b-[2px] border-solid border-[#a1a1a1]">
                <img src={imageUrl} alt={name} width={75} height={75} />

                <div className="flex flex-col">
                    <h4 className="pb-1 text-[16px] font-bold max-w-[250px]">
                        {name}
                    </h4>
                    <p className="text-[#a1a1a1] text-[14px] ">1 шт, 150 гр</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <p className="font-bold text-[16px]">{price} ₼</p>

                <CountButton value={quantity} onClick={onClickUpdateQuantity} />
            </div>

            <button className="absolute top-4 right-4" onClick={onClickRemove}>
                <Trash2Icon size={20} className="text-gray-400" />
            </button>
        </li>
    );
};
