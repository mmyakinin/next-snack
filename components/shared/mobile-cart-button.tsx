"use client";

import React from "react";

import { useCartStore } from "@/store/cart";
import { CartDrawer } from "./cart-drawer";
import { Button } from "../ui";
import { ShoppingBasket } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const MobileCartButton: React.FC<Props> = ({ className }) => {
    const loading = useCartStore((state) => state.loading);
    const items = useCartStore((state) => state.items);

    return (
        <div
            className={cn(
                "fixed bottom-4 right-4 z-10 hidden max-[768px]:block",
                className,
            )}
        >
            <CartDrawer>
                <Button className="w-[60px] h-[60px] bg-white shadow-xl rounded-full relative">
                    <p className="absolute top-0 right-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                        {items.length}
                    </p>
                    <ShoppingBasket size={48} className="text-primary" />
                </Button>
            </CartDrawer>
        </div>
    );
};
