import React from "react";

import { CheckoutItemDetails } from "..";
import { Button } from "../../ui";
import { Package, Percent, Truck } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Props {
    totalAmount: number;
    loading?: boolean;
    className?: string;
}

const TAX = 3;
const DELEVERY_TAX = 5;

export const CheckoutSidebar: React.FC<Props> = ({
    totalAmount,
    loading,
    className,
}) => {
    // Prices for Sidebar
    const taxAmount = Number(((totalAmount * TAX) / 100).toFixed(2));
    const deliveryAmount = Number(
        ((totalAmount * DELEVERY_TAX) / 100).toFixed(2),
    );
    const totalPrice = (totalAmount + taxAmount + deliveryAmount).toFixed(2);

    return (
        <div
            className={cn(
                "w-[450px] rounded-4xl bg-white p-[40px] max-[576px]:px-4 sticky top-4 z-10 max-[1300px]:w-screen max-[1300px]:max-w-[752px] max-[752px]:w-screen max-[752px]:rounded-none",
                loading && "opacity-50 pointer-events-none",
                className,
            )}
        >
            <div className="flex flex-col gap-4 pb-5">
                <CheckoutItemDetails
                    beginAdortment={
                        <Package size={24} className="text-gray-400" />
                    }
                    title="Стоимость товаров:"
                    value={
                        loading ? (
                            <Skeleton className="w-15 h-7" />
                        ) : (
                            `${totalAmount}  ₼`
                        )
                    }
                />
                <CheckoutItemDetails
                    beginAdortment={
                        <Percent size={24} className="text-gray-400" />
                    }
                    title="Налоги:"
                    value={
                        loading ? (
                            <Skeleton className="w-15 h-7" />
                        ) : (
                            `${taxAmount} ₼`
                        )
                    }
                />
                <CheckoutItemDetails
                    beginAdortment={
                        <Truck size={24} className="text-gray-400" />
                    }
                    title="Доставка:"
                    value={
                        loading ? (
                            <Skeleton className="w-15 h-[27px]" />
                        ) : (
                            `${deliveryAmount} ₼`
                        )
                    }
                />
            </div>
            <div className="flex justify-between items-center pt-4 pb-5 border-b-[1px] border-solid border-[#a1a1a1]">
                <p className="text-[22px] font-bold">Итого:</p>
                {loading ? (
                    <Skeleton className="w-22 h-9" />
                ) : (
                    <h4 className="text-[24px] font-extrabold ">
                        {totalPrice} ₼
                    </h4>
                )}
            </div>
            <div className="pt-8">
                <Button
                    className="w-full text-base font-bold h-[50px]"
                    type="submit"
                    loading={loading}
                >
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
};
