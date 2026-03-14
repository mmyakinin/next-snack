import React from "react";

import { WhiteBlock, CheckoutItem } from "..";
import { CartStateItem } from "@/store/cart";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";

interface Props {
    items: CartStateItem[];
    loading: boolean;
    removeCartItem: (id: number) => Promise<void>;
    onClickCountButton: (
        id: number,
        quantity: number,
        type: "plus" | "minus",
    ) => Promise<void>;
    className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
    items,
    loading,
    removeCartItem,
    onClickCountButton,
    className,
}) => {
    return (
        <WhiteBlock title="1. Корзина" className={className}>
            {items.length === 0 && (
                <div className="py-[35px] flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-full text-center gap-4 pb-3">
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
                    </div>
                    <Link href={"/"}>
                        <Button className="w-full h-12 text-base font-bold cursor-pointer">
                            Вернутся на главную страницу
                        </Button>
                    </Link>
                </div>
            )}

            {items.map((item) => {
                return (
                    <CheckoutItem
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        quantity={item.quantity}
                        onClickUpdateQuantity={(type) =>
                            onClickCountButton(item.id, item.quantity, type)
                        }
                        onClickRemove={() => removeCartItem(item.id)}
                        className={
                            loading ? "opacity-50 pointer-events-none" : ""
                        }
                    />
                );
            })}
        </WhiteBlock>
    );
};
