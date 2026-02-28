"use client";

import React from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "../ui/sheet";
import { CartDrawerItem } from "./";
import { Button } from "../ui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cart";
import Image from "next/image";

interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    className,
}) => {
    const totalAmount = useCartStore((state) => state.totalAmount);
    const items = useCartStore((state) => state.items);
    const fetchCartItems = useCartStore((state) => state.fetchCartItems);
    const updateCartItemQuantity = useCartStore(
        (state) => state.updateCartItemQuantity,
    );
    const removeCartItem = useCartStore((state) => state.removeCartItem);

    React.useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

    const onClickCounButton = (
        id: number,
        quantity: number,
        type: "plus" | "minus",
    ) => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        updateCartItemQuantity(id, newQuantity);
    };

    const onClickRemoveCartItem = (id: number) => {
        removeCartItem(id);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                {totalAmount > 0 && items.length !== 0 && (
                    <>
                        <SheetHeader>
                            <SheetTitle className="text-[22px]">
                                В корзине{" "}
                                <span className="font-bold">
                                    {items.length} товара
                                </span>
                            </SheetTitle>
                        </SheetHeader>

                        <ul className="flex flex-col gap-[10px] overflow-auto">
                            {items.map((item) => {
                                return (
                                    <CartDrawerItem
                                        key={item.id}
                                        id={item.id}
                                        imageUrl={item.imageUrl}
                                        name={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        onClickUpdateQuantity={(type) =>
                                            onClickCounButton(
                                                item.id,
                                                item.quantity,
                                                type,
                                            )
                                        }
                                        onClickRemove={() =>
                                            onClickRemoveCartItem(item.id)
                                        }
                                    />
                                );
                            })}
                        </ul>

                        <SheetFooter className="bg-white p-8">
                            <div className="w-full">
                                <div className="flex mb-4">
                                    <span className="flex flex-1 text-lg text-neutral-500">
                                        Итого
                                        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                                    </span>

                                    <span className="font-bold text-lg">
                                        {totalAmount} ₼
                                    </span>
                                </div>

                                <Link href="/checkout">
                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-base"
                                    >
                                        Оформить заказ
                                        <ArrowRight className="w-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </SheetFooter>
                    </>
                )}

                {totalAmount === 0 && (
                    <div className="flex flex-col justify-center items-center h-full text-center gap-4">
                        <Image
                            src={"/assets/images/empty-box.png"}
                            alt="Пустая Коробка"
                            width={150}
                            height={150}
                        />
                        <div className="text-center flex flex-col justify-center items-center gap-1">
                            <p className="text-[24px] font-semibold">
                                Пока тут пусто
                            </p>
                            <p className="text-[16px] opacity-70 w-[70%]">
                                Добавьте хотя бы одну позицию, чтобы совершить
                                заказ
                            </p>
                        </div>

                        <SheetClose>
                            <Button className="w-56 h-12 text-base">
                                <ArrowLeft /> <span className="p-2">Вернуться назад</span> 
                            </Button>
                        </SheetClose>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};
