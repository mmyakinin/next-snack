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
        <div className={cn(className, "flex flex-1")}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                />
            </div>

            <div className="flex flex-col justify-between w-[490px] bg-[#f7f6f5] p-8">
                <div>
                    <Title
                        text={name}
                        size="lg"
                        className="font-extrabold mb-1 pb-2"
                    />

                    {description && <p>{description}</p>}
                </div>

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
                    onClick={() => addProductInCart?.()}
                >
                    Добавить в корзину за {price} ₼
                </Button>
            </div>
        </div>
    );
};
