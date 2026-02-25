import React from "react";

import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartDrawer } from "./cart-drawer";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
    return (
        <CartDrawer>
            <Button className={cn("group relative", className)}>
                <b className="text-[16px] font-bold border-r-[2px] border-solid border-[rgba(255,240,240,0.4)] pr-2">
                    Корзина
                </b>
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <b className="text-[16px] font-bold pt-[2px] pl-3">3</b>
                </div>
                <ArrowRight
                    size={20}
                    className="absolute right-4 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                />
            </Button>
        </CartDrawer>
    );
};
