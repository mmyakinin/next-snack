import React from "react";

import { CountButton } from "./";
import { CartItemProps } from "@/@types/cart-item.types";
import { Trash2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

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

                <div className="flex flex-col justify-center h-full">
                    <h4 className="pb-1 text-[20px] font-bold max-w-[200px]">
                        {name}
                    </h4>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <p className="font-bold text-[20px]">{price} ₼</p>

                <CountButton value={quantity} onClick={onClickUpdateQuantity} />
            </div>

            <button
                className="group absolute top-4 right-4 cursor-pointer"
                onClick={onClickRemove}
            >
                <Trash2Icon
                    size={20}
                    className="text-gray-400 group-hover:text-gray-500"
                />
            </button>
        </li>
    );
};
