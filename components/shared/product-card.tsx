import React from "react";
import Link from "next/link";

import { Title } from "./";
import { Button } from "../ui";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description?: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({
    id,
    name,
    price,
    imageUrl,
    description,
    className,
}) => {
    return (
        <Link href={`/product/${id}`}>
            <div className="flex flex-col h-full justify-between">
                <div className="bg-primary-foreground py-6 px-[37px] rounded-2xl max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:pb-3">
                    <img src={imageUrl} alt={name} width={292} height={292} />
                </div>

                <Title
                    text={name}
                    size="sm"
                    className="pt-[15px] pb-2 text-[20px] font-bold "
                />

                {description && (
                    <p className="text-[14px] text-[#b1b1b1] pb-5">
                        {description}
                    </p>
                )}

                <div className="flex justify-between items-center">
                    <p className="text-[20px]">
                        <span>от </span>
                        <span className="text-[20px] font-bold">{price} ₼</span>
                    </p>

                    <Button variant={"secondary"} className="text-[16px]">
                        В корзину
                    </Button>
                </div>
            </div>
        </Link>
    );
};
