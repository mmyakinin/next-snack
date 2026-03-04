import React from "react";

import { Title } from ".";
import { Button } from "../ui";

import { cn } from "@/lib/utils";

interface Props {
    name: string;
    imageUrl: string;
    description?: string | null;
    price: number;
    loading?: boolean;
    addProductInCart?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
    name,
    imageUrl,
    description,
    price,
    loading,
    addProductInCart,
    className,
}) => {
    return (
        <div
            className={cn(
                className,
                "flex max-[768px]:flex-col overflow-y-auto",
            )}
        >
            <div className="flex flex-1 min-w-0 items-center justify-center p-8">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full max-w-[350px] aspect-square object-contain"
                />
            </div>

            <div className="flex flex-1 min-w-0 flex-col justify-between w-full bg-[#f7f6f5] p-8">
                <div>
                    <h2 className="text-[32px] max-[756]:text-[24px] ys-display font-extrabold mb-3">
                        {name}
                    </h2>

                    {description && <p>{description}</p>}
                </div>

                <Button
                    className="h-[55px] px-10 text-base font-bold rounded-[18px] w-full mt-10"
                    onClick={() => addProductInCart?.()}
                    loading={loading}
                >
                    В корзину за {price} ₼
                </Button>
            </div>
        </div>
    );
};
