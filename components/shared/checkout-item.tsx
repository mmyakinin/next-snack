import React from "react";
import { CartItemProps } from "@/@types/cart-item.types";
import { cn } from "@/lib/utils";
import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
    onClickUpdateQuantity?: (type: "plus" | "minus") => void;
    onClickRemove?: () => void;
    className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
    name,
    imageUrl,
    price,
    quantity,
    onClickUpdateQuantity,
    onClickRemove,
    className,
}) => {
    return (
        <div
            className={cn(
                "flex max-[752px]:flex-col justify-between items-center gap-4 py-5 border-b-2 border-gray-200 last:border-none",
                className,
            )}
        >
            <div className="flex max-[752px]:flex-col  gap-4 items-center">
                <img src={imageUrl} alt={name} className="w-[65px] h-[65px] max-[752px]:w-[80px] max-[752px]:h-[80px]" />
                <div className="flex flex-col gap-1 max-w-[350px]">
                    <h4 className="text-[18px] font-bold max-[752px]:text-center">{name}</h4>
                    {/* <p className="text-[#a1a1a1] text-[14px]"></p> */}
                </div>
            </div>
            <p className="text-[18px] font-bold">{price} ₼</p>
            <div className="flex items-center gap-4">
                <CountButton value={quantity} onClick={onClickUpdateQuantity} />

                <button
                    className="group cursor-pointer"
                    onClick={onClickRemove}
                >
                    <Trash2Icon
                        size={20}
                        className="text-gray-400 group-hover:text-gray-500"
                    />
                </button>
            </div>
        </div>
    );
};
